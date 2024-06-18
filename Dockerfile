FROM node:20

WORKDIR /app

ENV APP_HOST='http://localhost:8022'

COPY . .

RUN npm install


EXPOSE 3000

CMD [ "npm", "start" ]