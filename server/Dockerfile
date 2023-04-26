FROM node:20-alpine3.16

WORKDIR /app

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5500

CMD ["yarn", "dev"]