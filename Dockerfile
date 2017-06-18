FROM node:7-alpine

ADD . /app
WORKDIR /app
RUN ["npm", "install", "--production"]

CMD ["npm", "start"]

EXPOSE 3000
