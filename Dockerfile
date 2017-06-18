FROM node:7-alpine

ADD `pwd`:/app
WORKDIR /app

CMD ["npm", "start"]

EXPOSE 3000
