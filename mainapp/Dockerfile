FROM node:alpine

# RUN npm install -g create-react-app
# WORKDIR /react-base-v2
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3005
 
CMD [ "npm", "start" ]