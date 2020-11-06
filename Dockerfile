FROM node:12.18

#RUN apk add --no-cache bash
RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @angular/cli

USER node

WORKDIR /home/node/app
