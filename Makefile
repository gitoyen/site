# Gitoyen public web site
# https://gitoyen.net/
#

BASEDIR=$(CURDIR)
OUTPUTDIR=$(BASEDIR)/output
PY=$(shell which python)
GITOYEN_BIN="gitoyen"

SSH_HOST=kilo.gitoyen.net
SSH_TARGET_DIR=/var/www/www.gitoyen.net/

help:
	@echo 'Makefile for Gitoyen public web site                                        '
	@echo '                                                                     '
	@echo 'Usage:                                                               '
	@echo '   make clean          remove the generated files                    '
	@echo '   make new            create a new gitoyen blog post                '
	@echo '   make build          generate gitoyen static site in ./output dir  '
	@echo '   make serve          generate + serve site at http://localhost:8000'
	@echo '   make upload         upload the web site via rsync+ssh             '
	@echo '                                                                     '

deps:
	@hash $(GITOYEN_BIN) > /dev/null 2>&1 || \
		(echo "Please install gitoyen package to continue (make install)"; exit 1)

venv:
	@hash virtualenv> /dev/null 2>&1 || \
		(echo "Please install virtualenv to continue"; exit 1)
	virtualenv -p /usr/bin/python2.7 $(BASEDIR)/.venv

sourcevenv:
	@test -f "$(BASEDIR)/.venv/bin/activate" || \
		(echo "Python virtualenv not found, please run 'make venv'"; exit 1)
	@if [ ${PY} != "$(BASEDIR)/.venv/bin/python" ]; then \
		echo "Virtualenv not activated, please run: source $(BASEDIR)/.venv/bin/activate"; \
	fi

install: venv sourcevenv
	@pip install -e .

build: sourcevenv deps
	gitoyen build

clean: sourcevenv deps
	gitoyen clean

new: sourcevenv deps
	gitoyen new_post

serve: sourcevenv deps
	@sensible-browser http://localhost:8000/
	gitoyen serve

upload: build
	rsync -e ssh -P -rvz --delete $(OUTPUTDIR)/ $(SSH_HOST):$(SSH_TARGET_DIR) --cvs-exclude

.PHONY: help clean new serve upload install build
