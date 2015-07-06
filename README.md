Minimal Starter Kit
===================

Just another starter kit to help you prototype or build a website rapidly.

## Features

* Modular [Gulp](http://gulpjs.com/) tasks
* Automated [Bower](http://bower.io/) library integration
* [Stylus](https://learnboost.github.io/stylus/) / [Sass](http://sass-lang.com/) and [Jade](http://jade-lang.com/) support
* [Autoprefixer](https://github.com/postcss/autoprefixer/) for CSS
* HTML, CSS, JS and Images optimization
* Cross-device Synchronization with [Browsersync](http://www.browsersync.io/)
* Live Browser Reloading
* Built in HTTP Server

## Setup

```
$ git clone git@github.com:derenkeskin/minimal-starter-kit.git
$ cd minimal-starter-kit
$ npm install
$ gulp
```

## Gulp tasks

* Running `gulp` will build assets, start a development server and a `watch` task.
* Running `gulp prod` will minimize assets and html code, then start a production server.

## Configuration

All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.
