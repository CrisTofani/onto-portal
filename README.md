# onto-portal

DAF - Ontologies and Vocabularies demo portal

## Getting Started

onto-portal is the demo of ontologies and vocabularies portal

> **Note**: You can use **yarn** or **npm** as you prefer, however yarn is recommended

## Install Dependencies

* If you use yarn, run:

```sh
yarn
```

* If you use npm, run:

```sh
npm install
```

> **Note**: This step will take a while due the installation of project dependecies

### External Dependecies

This application depends on `katalod`'s API, this means that you need to run `katalod` at `localhost` before launch this application.

## Development

### Run Development Server

* If you use yarn, run:

```sh
yarn start
```

* If you use npm, run:

```sh
npm start
```

> **Note**: In this step the **webpack-dev-server** will bundle the sources (while performing other operations like transpiling with **babel**) and will open automatically the browser at `localhost:8080` which is the default address of **webpack-dev-server**

## Production

### Build

* If you use yarn, run:

```sh
yarn build
```

* If you use npm, run:

```sh
npm build
```

> **Note**: During the build **webpack** will bundle all the sources in `dist` folder at the root of this project, so the application will be stored at `./dist`

### Serve

* If you use yarn, run:

```sh
yarn serve
```

* If you use npm, run:

```sh
npm run serve
```

> **Note**: At this point you have to serve the application. In this example we will use `serve` to accomplish that but if you feel confort with other tools feel free to use one of them, just remember that this application is stored in `./dist` folder and it's entrypoint is located at `./dist/app.bundle.js`

## Docker

We provide the Dockerfile to build a local docker image. This will deploy the application in production mode, simply run:

```sh
docker build -t onto-portal:0.0.1 .
```

> **Note**: If you want to edit the Dockerfile you can, but always build and run in `production` mode because the current `development` mode in a `headless environment` does not work