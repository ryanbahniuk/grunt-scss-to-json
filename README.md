[![Build Status](https://travis-ci.org/ryanbahniuk/grunt-scss-to-json.svg?branch=master)](https://travis-ci.org/ryanbahniuk/grunt-scss-to-json)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

# grunt-scss-to-json

> A grunt plugin that uses scss-to-json and writes the JSON to the file system.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-scss-to-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-scss-to-json');
```

## Input and Output

This package requires a SCSS variables file that is isolated by itself with no other SCSS code. If you are working in a front-end framework or library it is likely that your SCSS code is already set up in this manner. For example, this package will work well with a variables.scss file that looks something like this:

```scss
// Font Sizes
$font-size: 14px;
$font-size-large: $font-size * 1.1;

// Colors
$text-color: #666;
$text-color-light: lighten($text-color, 15%);
$border-color: #123 !global; // use for all borders
```

When run on that code above, grunt-scss-to-json will output the below JSON to file:

```js
{
  '$font-size': '14px',
  '$font-size-large': '15.4px',
  '$text-color': '#666',
  '$text-color-light': '#8c8c8c',
  '$border-color': '#123'
}
```

## Using this Package

In your project's Gruntfile, add a section named `scss_to_json` to the data object passed into `grunt.initConfig()`. Each target takes a `src` string, `dest` string, and an optional `options` object. The options object is detailed in the [scss-to-json README](https://www.npmjs.com/package/scss-to-json "scss-to-json").

```js
grunt.initConfig({
  scss_to_json: {
    your_target: {
      src: 'file source as a string',
      dest: 'output destination as a string',
      options: {
        // ...
      }
    }
  },
});
```

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it. Continuous Integration is handled by [Travis](https://travis-ci.org/ryanbahniuk/grunt-scss-to-json "Travis").

## License

MIT © Ryan Bahniuk

[ci]:      https://travis-ci.org/ryanbahniuk/grunt-scss-to-json
[npm]:     https://www.npmjs.com/package/grunt-scss-to-json
