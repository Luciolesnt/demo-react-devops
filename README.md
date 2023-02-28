### This project was initialized with [Create React App](https://github.com/facebook/create-react-app).

### Devops doc used [here](https://www.youtube.com/watch?v=xtllpDEOw4w&ab_channel=VeryAcademy).

## Prerequisites

- [Docker](https://www.docker.com/)

1. Pull the docker image

```bash
docker pull lsanter/demo-react-devops
```

2. Then check if the image is on your Docker Desktop with :

```bash
docker images
```

3. Finally run the app (with a port) :

```bash
docker run -p 8000:8000 lsanter/react-demo-devops:master
```

## Installation

### For dev

Start local project with => docker-compose.

```bash
docker-compose up
```

### Available Scripts :

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
