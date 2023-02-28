FROM node:15.13-alpine
WORKDIR /demo-react-devops-docker
## Path to the node modules inside the root folder /demo-react-devops-docker on the server
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
## Necessary to avoid error at build because NPM is not able to resolve react-scripts when running inside Docker
RUN npm uninstall react-scripts
RUN npm install -D react-scripts
RUN npm run build
CMD ["npm", "start"]