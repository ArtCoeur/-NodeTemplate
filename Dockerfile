FROM ubuntu:latest

MAINTAINER Tim Rodger

# Install binary dependencies
RUN apt-get update -qq && \
    apt-get -y install \
    nodejs \
    npm

EXPOSE 80

CMD ["/home/app/run.sh"]

# Move service code files into place
COPY src/ /home/app/

RUN sudo ln -s "$(which nodejs)" /usr/bin/node

# Install dependencies
WORKDIR /home/app

# Install service dependencies
RUN npm install
