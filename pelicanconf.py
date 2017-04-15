#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

import filters

AUTHOR = u'gitoyen'
SITENAME = u'Gitoyen'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'fr'

# Feed generation is usually not desired when developing
FEED_DOMAIN = 'https://gitoyen.net'
FEED_ALL_ATOM = None
FEED_ALL_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_ATOM = None
CATEGORY_FEED_RSS = 'feeds/%s.rss.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
RSS_FEED_SUMMARY_ONLY = False

# Social
TWITTER_USERNAME = 'gitoyen'


JINJA_FILTERS = {'is_active': filters.is_active}

THEME = './theme'

DEFAULT_PAGINATION = 10

ARTICLE_PATHS = ['blog']
ARTICLE_URL = 'blog/{slug}.html'
ARTICLE_SAVE_AS = 'blog/{slug}.html'

PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'

INDEX_SAVE_AS = 'blog.html'
PLUGIN_PATHS = ['plugins']
PLUGINS = ['pelican-toc']

STATIC_PATHS = ['images', 'extra/favicon.ico', 'upload' ]

TOC = {
    'TOC_HEADERS': '^h[2]',
    'TOC_RUN': 'true'
}

MD_EXTENSIONS = ['attr_list', 'codehilite(css_class=highlight)', 'extra']
# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'}
}
