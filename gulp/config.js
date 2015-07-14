var src   = 'src';
var build = 'build';

module.exports = {
  clean: {
    src: [build]
  },
  watch: {
    stylus:       src + '/stylus/*.styl',
    sass:         src + '/scss/**/*.{sass,scss}',
    jade:         src + '/**/*.jade',
    javascript:   src + '/js/**/*.js',
    coffeescript: src + '/coffee/**/*.coffee',
    images:       src + '/img/**/*'
  },
  browsersync: {
    // http://www.browsersync.io/docs/options/#option-host
    dev: {
      server: {
        baseDir: [build, '.']
      },
      port: 8080
    },
    prod: {
      server: {
        baseDir: [build]
      },
      port: 8080
    }
  },
  images: {
    src:  src   + '/img/**/*',
    dest: build + '/img',
    // https://github.com/sindresorhus/gulp-imagemin#imageminoptions
    options: {
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }
  },
  jade: {
    src:  src + "/*.jade",
    dest: build,
    // https://github.com/phated/gulp-jade#options
    options: {
      pretty: true
    }
  },
  css: {
    preprocessor: "stylus", // stylus or sass
    stylus: {
      src:  src   + "/stylus/*.styl",
      dest: build + "/css"
    },
    sass: {
     src:  src   + '/scss/style.{sass,scss}',
     dest: build + '/css',
     // https://github.com/sindresorhus/gulp-ruby-sass#sass-options
     options: {
       compass: false,
       noCache: true,
     }
    },
    autoprefixer: {
      // https://github.com/sindresorhus/gulp-autoprefixer#autoprefixeroptions
      browsers: [
        'last 2 versions',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
      ],
      cascade: true
    }
  },
  js: {
    preprocessor: "javascript", // javascript or coffeescript
    javascript: {
      src:  src   + '/js/**/*.js',
      dest: build + '/js'
    },
    coffeescript: {
      src:  src   + '/coffee/**/*.coffee',
      dest: build + '/js'
    }
  },
  inject: {
    layoutSrc:  src   + '/_layouts/*.jade',
    layoutDest: src   + '/_layouts',
    styles:     build + '/css/*.css',
    scripts:    build + '/js/*.js'
  }
};
