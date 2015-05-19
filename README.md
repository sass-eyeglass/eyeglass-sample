# sample-eyeglass
Get your eyeglass on!

**sample-eyeglass** is an eyeglass ([github](https://github.com/sass-eyeglass/eyeglass)) module that shows off the custom function and module import features in eyeglass. It's built on the greatness of node-sass ([github](https://github.com/sass/node-sass)).

## Get This Module

1. `npm install eyeglass --save-dev` **install eyeglass** (if you haven't already)
2. `npm install eyeglass-sample --save-dev` **install this**
3. **wrap** `sassOptions` **with** `new Eyeglass()` **and off you go!**

```js
var Eyeglass = require("eyeglass");
var sass = require("node-sass")
var sassOptions = { /*...*/ } ; // options for node-sass
var eyeglass = new Eyeglass(sassOptions);

sass.render(eyeglass.sassOptions(), function(error, result) {
  // ...
});
```

# Using eyeglass-sample
## Custom Functions
### hello($name) <= returns String
Will return a string containing "Why hello, $name". Use this any time your `content` needs to be friendly!

## Sass
### .sassy <= creates Sass pink as a color
Whenever you need that good Sass color, just call on the `.sassy` class.

# Make Your Own Eyeglass Module
Want to make your own module for Eyeglass? Check out the [yeoman generator](https://github.com/sass-eyeglass/generator-eyeglass)
