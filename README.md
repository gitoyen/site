# Gitoyen website

The gitoyen website is build on
[pelican](http://docs.getpelican.com/en/3.6.3/),
this repo contains the source code and content needed to generate the
static website.


## Getting started

Pelican is based on python in order to make the site works you will need
at least python and pip installed.
Once this has been done run the following commands into this repository
folder:

### Virtualenv

If you want to keep things isolated on your machine you will have to
install virtualenv, this step is not mandatory but is recommended.
On debian just type: `apt-get install python-virtualenv`

Create a virtualenv in the root of the repository: `virtualenv ./venv`

Source the virtualenv in order to isolate your current session:
`source venv/bin/activate`, you can disable it later by typing `deactivate`
in the same shell session.


### Install and run

 - `pip install -e .` will install the dependencies needed
by pelican
 - `gitoyen serve` will serve the website in development mode
(i.e: livereload, local port)


## Repository organisation

The website is build on multiple sources:

 - `gitoyen.py` this is the command line helper file, it provides a list
of usefull command for development. This script is installed when running
`pip install -e .`. It is based on [Click](http://click.pocoo.org/5/)
 - `pelicanconf.py` is a python file for the configuration of the pelican
engine. It contains for example the path of the different directories which
will be used to build the website.
 - `filters.py` some jinja2 filters which will add features for generating
the website.
 - `content/` contains the site content in Markdown files, it is separated
in two subdirs: `pages`, `blog` the first subdir contains the pages of the
site, the second contains a list of blog articles.
 - `templates/` some jinja templates for administration, it is used by
`gitoyen.py` file.
 - `theme/` jinja templates and static files for generating the website.
 - `plugins/` pelican plugins, currently there is only one installed to
generate tables of content.
 - `setup.py` contains instructions on how to install the gitoyen cli and
the dependencies for running the dev environment.


## Liste
* https://listes.gitoyen.net/wws/info/latisseuse

## Architecture
* http://pub.sebian.fr/pub/IMG_20150329_152909.jpg
* http://pub.sebian.fr/pub/IMG_20150329_152916.jpg



