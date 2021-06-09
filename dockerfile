FROM node:10.22

WORKDIR /backend
COPY package*.json ./
RUN npm install yarn
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn", "run", "start"]