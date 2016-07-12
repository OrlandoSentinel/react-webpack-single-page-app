# React single-page app, Sentinel style
A fork of Andrew Gibson's [project](https://github.com/AndrewGibson27/react-webpack-single-page-app) that adds OS-specific stuff for React development

## Base technology
+ Node.js >= 4.2.0
+ [Webpack](https://webpack.github.io/)
+ [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
+ [Babel](https://babeljs.io/)

## Stuff added for Orlando Sentinel
+ SVG sprites
+ Standard OS header
+ [Modernizr](https://modernizr.com/)

### How to use Modernizr
1. Navigate to **/node_modules/modernizr** on the command line
2. Execute `npm install`
3. Open **/node_modules/modernizr/config-all.json** in a text editor
4. Edit the file to include only the tests you want
5. Execute `./bin/modernizr -c lib/config-all.json`
6. Navigate back to this project's root on the command line
7. Execute `npm run modernizr`

## Workflow
+ Development: `npm run dev`
+ Production: `npm run prod`

## Explainers
Images that you will `require` in your React app go in **/assets/images/**. Otherwise, you can place them in **/public/images/**.

## License
MIT