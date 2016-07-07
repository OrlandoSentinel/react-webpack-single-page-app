# React/Webpack Single Page App
This package combines some elements of these two boilerplates ([react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate) and [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)) and offers additional features to streamline development.

## Requirements
Node.js 4.2.0 or higher.

## Features
+ Hot reloading React components
+ Hot reloading CSS
+ [CSS modules](http://glenmaddern.com/articles/css-modules)
+ [Sass](http://sass-lang.com/)
+ [Autoprefixer](https://github.com/postcss/autoprefixer)
+ Images, JSON and fonts can be `require`d inside React components
+ [webfontloader](https://github.com/typekit/webfontloader) improves page performance
+ Linting
+ Includes a few utility functions, including debounce
+ Includes a few utility Sass mixins, including one for media queries

## Workflow
+ To start developing, execute `npm start`. This will start the Node server and enable hot reloading of React components and CSS. Webpack inserts the JavaScript bundle and the CSS into **public/index.html**.
+ To build for production, execute `npm run prod`. This will dump all files necessary for production in that same directory. The production JavaScript bundle is minified, and your CSS modules are all combined into a single stylesheet inserted in the page head.

## Explainers
Images that you will `require` in your React app go in **/assets/images/**. Otherwise, you can place them in **/public/images/**.

## Want to contribute?
Consult TODO.md!

## License
MIT