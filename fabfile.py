from __future__ import unicode_literals

import livereload
import fabric.colors as colors
import fabric.contrib.project as project
import fabric.contrib.files as files
import fabric.api as fabric
import jinja2
import pelican.utils as utils

import datetime
import os
import os.path
import sys

# Local path configuration (can be absolute or relative to fabfile)
fabric.env.deploy_path = 'output'
fabric.env.content_path = 'content'
fabric.env.jinja = jinja2.Environment(
    loader=jinja2.PackageLoader('fabfile', 'templates')
)


DEPLOY_PATH = fabric.env.deploy_path

# Remote server configuration
production = 'root@localhost:22'
dest_path = '/var/www'

def clean():
    if os.path.isdir(DEPLOY_PATH):
        fabric.local('rm -rf {deploy_path}'.format(**fabric.env))
        fabric.local('mkdir {deploy_path}'.format(**fabric.env))

def build():
    fabric.local('pelican -s pelicanconf.py')

def rebuild():
    clean()
    build()

def regenerate():
    fabric.local('pelican -r -s pelicanconf.py')

def serve(*args):
    port = args[0] if len(args) > 0 else 8000
    server = livereload.Server()
    server.watch(fabric.env.content_path, build)
    server.serve(port=port, root=fabric.env.deploy_path)


def reserve():
    build()
    serve()

def preview():
    fabric.local('pelican -s publishconf.py')

def new_post(*args):
    title = args[0] if len(args) > 0 else fabric.prompt('New post title?')
    title = unicode(title, 'utf8')

    date = datetime.date.today().isoformat()
    filename = '.'.join([date, utils.slugify(title), 'md'])
    filename = os.path.join(fabric.env.content_path, filename)
    print(' '.join([colors.green('[create new post]'), filename]))

    (fabric.env.jinja.get_template('new_post.tplt')
     .stream(title=title)
     .dump(filename, 'utf8'))

@fabric.hosts(production)
def publish():
    fabric.local('pelican -s publishconf.py')
    project.rsync_project(
        remote_dir=dest_path,
        exclude=".DS_Store",
        local_dir=DEPLOY_PATH.rstrip('/') + '/',
        delete=True,
        extra_opts='-c',
    )
