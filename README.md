# React/Webpack Single Page App

This package combines two of my favorite boilerplates: [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate) and [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate). It also has a few additional features that should streamline development of single-page apps.

## Requirements

I still need to do an extensive test, but I'm running this with Node 4.2.1 and NPM 3.3.12 on Mac OS X Yosemite.

## Features

+ Hot reloading React components
+ Hot reloading CSS
+ [CSS modules](http://glenmaddern.com/articles/css-modules)
+ [Sass](http://sass-lang.com/)
+ [Autoprefixer](https://github.com/postcss/autoprefixer) (in production build only)
+ Images can be `require`d inside React components
+ JSON can be `require`d inside React components
+ Linting
+ A production build that places all assets in a single directory

## Workflow

+ To start developing, execute `npm start`. This will start the Node server and enable hot reloading of React components and CSS. Webpack inserts the JavaScript bundle and the CSS into the **index.html** file in the root directory.
+ To build for production, execute `npm run prod`. This will dump all files necessary for production in that same directory. The production JavaScript bundle is minified, and your CSS modules are all combined into a single stylesheet inserted in the page head.

## A few explainers

Images that you will `require` in your React app go in **/assets/images/**. Otherwise, you can place them in **/public/images/**.

After hours of frustration, I gave up on trying to make Autoprefixer work with the webpack-extract-text-plugin. That's why I'm letting Gulp handle it. There is no Autoprefixer in the development Webpack build because I assume you're using a modern browser during development.

## Inspiration

+ [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)
+ [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

## Want to contribute?
Consult TODO.md!

## License

MIT 