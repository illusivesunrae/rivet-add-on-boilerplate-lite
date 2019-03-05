# Rivet add-on boilerplate lite
This boilerplate is meant to be a lightweight introduction to creating add-ons for the [Rivet software design system](https://rivet.iu.edu/). Replace the contents of this README with information about your add-on.

## Getting started
This repo is meant to be cloned and used as a starting point for the Rivet workshop on creating Rivet add-ons.

Setting up the Rivet add-on boilerplate repo is a four-step process:

### 1. Clone this repo
Clone this repo `https://github.com/illusivesunrae/rivet-add-on-boilerplate-lite.git` to the computer on which you'll be developing your add-on.

Do a find-and-replace of the word "add-on-boilerplate-lite" with the name of your add-on. A find-and-replace should be replaced on *file contents*, as well as for the filenames below

```
src/js/rivet-add-on-boilerplate-lite.js
src/sass/rivet-add-on-boilerplate-lite.scss
```

### 2. Include the CSS and JavaScript in your page

```html
<link rel="stylesheet" href="dist/css/rivet-add-on-boilerplate.css">
<script src="dist/js/rivet-add-on-boilerplate.js"></script>
```

### 3. Add the markup to your HTML
We've provided a file called `index.html` where you can add code snippets and test your add-on. Include more than one example HTML snippet if your add-on has multiple variations.

This is also a great place to add documentation, [accessibility notes](https://rivet.iu.edu/components/navigation/dropdown/#accessibility-notes), or [microcopy guidelines](https://rivet.iu.edu/content-guide/), as the `index.html` file will be built to the `docs` folder and can be published with GitHub Pages.

## Working with the source files
To get started working with add-on boilerplate you'll first need to make sure you have [Node.js](https://nodejs.org/en/) and NPM installed your system. Check if you have Node.js and NPM installed on Unix-like systems by running the following in your terminal:

```sh
node -v && npm -v
```

If you don't have Node and NPM installed, [go to the Node.js website](https://nodejs.org/en/) for instructions.

After you have Node installed, do the following:

1. Clone this repo
2. `npm install` to install all dependencies
3. Run `npm run start` to start a development server and watch for changes to `.scss`, `.js`. `.md` files.

All files that are watched by default development task (`npm run start`) are compiled to and served from the `/dist` directory.