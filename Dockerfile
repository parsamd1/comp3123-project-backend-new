# Use a base Node.js image
FROM node:latest

# Create and set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files from the current directory to the container's working directory
COPY . .

# Expose the port your app runs on (change the port if your app uses a different port)
EXPOSE 8089

# Define the command to run your app
CMD ["npm", "start"]
