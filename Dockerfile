# Container image that runs your code
FROM node:latest

# Directory that holds the files of the application container
WORKDIR /app

# Copying package.json to the directory of our application container
COPY package.json /app

# Run `npm install` to install all the dependencies
RUN npm install

# Copy the rest of the files to the directory of the application container
COPY . /app