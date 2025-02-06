# Dockerfile для фронтенда
FROM node:18-alpine

WORKDIR /app

COPY public /app/public

RUN npm install -g http-server

EXPOSE 3000

CMD ["http-server", "public", "-p", "3000"]
