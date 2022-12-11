# pull official base image
#FROM node:16.3.0-alpine

# set working directory
#WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
#COPY package.json ./
#RUN npm install 
#RUN npm install react-scripts@3.4.1 -g 

# add app
#COPY . ./

# start app
#CMD ["npm", "start"]
#------------------------------

FROM node:16.3.0-alpine AS node
WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm start

################
# Run in NGINX #
################
FROM nginx:alpine
COPY --from=node /app /usr/share/nginx/html

EXPOSE 80

