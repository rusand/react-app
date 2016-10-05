
# Simple JS App Skeleton

Here's an app skeleton that binds together common frameworks du-jour:

* [Babel](https://babeljs.io/)
* [Semantic UI](http://semantic-ui.com/)
* [Webpack](http://webpack.github.io/)
* [ES6](https://babeljs.io/docs/learn-es2015/)
* [React](https://facebook.github.io/react/)
* [React Router](https://github.com/reactjs/react-router)
* [StandardJS](http://standardjs.com/)

_Note: The purpose of this skeleton is to provide a simple UI skeleton that can be supplemented with backend/deployment specific tools (Node, Ethereum, Mobile, etc)._

## Other Features

* Seemless pushState routing using React Router
* Uses Webpack/HTMLWebpackPlugin to generate an index.html that has cache friendly bundle loaders
* All CSS and assets served via Webpack/StyleLoader
* Uses Semantic UI as a rich UI element base
* Bundles are split between vendor and app for better bundling/loading performance
* All files are organized according to modern conventions. Component directory structure allows for expansion of multiple apps / subdomains
* Uses ES6 style React components

## Install Dependencies

Run in the project root folder:

```bash
npm install
npm install -g gulp
npm install semantic-ui # Select defaults
cd semantic; gulp build
```

## Run

The following command serves all HTML/JS/CSS and watches all changes to `src/*.jsx`

```bash
npm start
```

UI is running at [http://localhost:3000/](http://localhost:3000/)

To check [StandardJS](http://standardjs.com/) compliancy run `standard` in the project root.

## Running the API example

The `/items` view shows an example of basic CRUD interaction with the server-side JSON API. In order to run the API:

```bash
node script/api.js
```

The example is using simple React/SemanticUI views and uses a REST JSON API. I'm planning to change this to a GraphQL+Redux example soon.

## Directory Structure

* `package.json` - Configure dependencies
* `webpack.config.js` - Bundling and build configuration
* `dist/*` - Files generated by webpack, incuding index.html. These are the assets that should be HTTP served
* `src/styles` - Home of style sheets
* `src/utils` - Home of specific JS helper utilities like for example `Api.js` for doing API requests
* `src/components` - Home of all React/JS components
* `src/components/common` - Common components that are shared throughout the app
* `src/components/dashboard` - Main domain/app folder. Contains an `App.jsx` and `Router.jsx`.
* `src/main.jsx` - Main entrypoint into application. Multi-app or sub-domain specific apps/logic could be implemented here.
* `scripts/serve.js` - Simple Express server that serves `dist/` static content (compressed). Non-static hits serve `dist/index.html`
* `scripts/api.js` - Simple REST JSON server example for the `/items` view in the skeleton

## Wishlist

* Add Redux async collection example
* GraphQL example
* Webpack code hotswapping
* Incorporate some of [these Webpack heuristics](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.i93zpqhb8)
* Show JWT authentication example
