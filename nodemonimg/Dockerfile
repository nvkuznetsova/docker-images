FROM node:alpine

RUN apk add --update nano curl
ADD s.mjs /app/s.mjs
RUN npm install --global nodemon
RUN echo '{"execMap": {"mjs": "node --experimental-modules"}}' > '/app/nodemon.json'
WORKDIR /app

EXPOSE 3333

CMD nodemon s.mjs
