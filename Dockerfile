FROM node:22.8.0
WORKDIR /app
COPY . /app
RUN npm install
RUN npm build
CMD ["node","dist/server/server.js"]