FROM node:20 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm config set registry http://registry.npmjs.org/
RUN npm config set strict-ssl false
RUN npm install react-scripts --save
RUN npm run build
FROM nginx:latest
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build/ /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]