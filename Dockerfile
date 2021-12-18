FROM node:14-alpine

WORKDIR /usr/src/blog-service

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
