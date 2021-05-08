### STAGE 1: Build ###
FROM node:14.16.1 as build

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install

RUN npm install react-scripts -g

COPY . /usr/src/app

RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.19.10-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
