FROM node:16.3.0-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4000

CMD [ "npm", "run", "start" ]