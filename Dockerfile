

# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# ARG REACT_APP_API_URL

# ENV REACT_APP_API_URL=$REACT_APP_API_URL

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install 

# # Copy application files
# COPY . .
# EXPOSE 8080

# # Build the application
# RUN npm run build

# # Set the command to run the application
# CMD ["npm", "start"]


# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Set the environment variable
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port Vite runs on (typically 3000 for development)
EXPOSE 3000

# Build the application
RUN npm run build

# Use a lightweight web server to serve the built files (e.g., serve)
RUN npm install -g serve

# Set the command to run the application
CMD ["serve", "-s", "dist"]


# latest dockerfile
# Step 1: Build the React app
# FROM node:20 as vite-build

# WORKDIR /app

# # Copy package.json and package-lock.json (or yarn.lock) files
# COPY package*.json yarn.lock ./


# # Install dependencies
# RUN yarn

# # Copy the rest of your app's source code
# COPY . .

# # Build your app
# RUN yarn build

# # Step 2: Serve the app using Nginx
# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/conf.d/configfile.template

# COPY --from=vite-build /app/dist /usr/share/nginx/html

# # Expose port 8080 to the Docker host, so we can access it 
# # from the outside. This is a placeholder; Cloud Run will provide the PORT environment variable at runtime.
# ENV PORT 8080
# ENV HOST 0.0.0.0
# EXPOSE 8080
# CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"