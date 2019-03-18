# Rivet Add-on Boilerplate Lite
The Rivet add-on boilerplate is a lightweight introduction to creating add-ons for the [Rivet design system](https://rivet.iu.edu/). To learn more, visit the [Rivet wiki page about add-ons](https://github.com/indiana-university/rivet-source/wiki/Add-ons) and the [Rivet add-on directory](https://rivet.iu.edu/add-ons/).

## Getting started
Setting up the Rivet add-on boilerplate is a four-step process. These instructions assume you are familiar with Git, GitHub, and Node.

### 1. Set up Node and NPM
To work with the Rivet add-on boilerplate, you'll first need to make sure you have [Node](https://nodejs.org/en/) and [Node Package Manager](https://www.npmjs.com/) (NPM) installed your computer. 

Check if you have Node and NPM installed by running the following in your terminal:

```sh
node -v && npm -v
```

If you don't have both Node and NPM installed, visit the Node website for [instructions on setting up Node on Windows, Mac, or Linux](https://nodejs.org/en/download/).

### 2. Clone this repo
Clone this repo to the computer on which you'll be developing your add-on:

```sh
git clone https://github.com/illusivesunrae/rivet-add-on-boilerplate-lite.git
```

### 3. Start your development server
With Node and NPM installed, use your terminal to navigate to the folder into which you cloned this repo and run the following commands:

```sh
npm install
npm run start
```

This will generate a `dist` folder, a `docs` folder, and open a browser at `localhost:3000` where you can preview your add-on as you develop and document it.

### 4. Rename the boilerplate Sass and JavaScript files
Rename the following Sass and JavaScript files, replacing `rivet-add-on-boilerplate-lite` with the name of your add-on, such as `rivet-progress-bar`:

```
src/sass/rivet-add-on-boilerplate-lite.scss
src/js/rivet-add-on-boilerplate-lite.js
```

You'll also need to update the paths to the CSS and JavaScript files in `src/index.html` to point to your renamed files.

### 5. Build and document your add-on
We've provided a `src/index.html` file where you can test your add-on, write documentation, and provide code examples.

This `index.html` file will be built to the `docs` folder and can be published with GitHub Pages. This folder is also where `localhost:3000` points when you start your development server in step 3.

## Getting help with your add-on
If you need help building your add-on, you can reach out on the [Rivet slack channel](https://iuwebcommunity.slack.com/messages/rivet) or [Rivet mailing list](mailto:rivet-l@list.iu.edu).