FROM node:9.2
LABEL maintainer="Gary Ascuy <gary.ascuy@gmail.com>"
COPY package*.json ./


ENV NODE_ENV=production
ADD . /opt/node/APITest
WORKDIR /opt/node/APITest
COPY package.json /opt/node/APITest

RUN npm install
EXPOSE 3666
CMD nodejs build/server.js