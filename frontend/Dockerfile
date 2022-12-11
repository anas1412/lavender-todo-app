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
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
#ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]

