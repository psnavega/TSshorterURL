FROM node:14

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY src/ /usr/src/app/src/
RUN yarn install
EXPOSE 4000
CMD [ "yarn", "start" ]
