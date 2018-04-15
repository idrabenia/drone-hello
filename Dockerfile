FROM node:8

RUN mkdir -p /usr/local/app
COPY . /usr/local/app

WORKDIR /usr/local/app
RUN npm i

CMD node index.js
