FROM debian

RUN apt-get update
RUN apt-get install -y python-dev python-pip

COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt

WORKDIR /mnt

ENTRYPOINT ["fab"]
CMD ["serve"]
