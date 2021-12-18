FROM node:14-alpine

WORKDIR /usr/src/cbblog-service

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm run", "dev" ]
