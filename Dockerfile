FROM node:7-alpine

ADD . /app
WORKDIR /app

CMD ["npm", "start"]

EXPOSE 3001
