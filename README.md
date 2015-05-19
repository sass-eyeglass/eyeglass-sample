# Sample Eyeglass Module
Get your eyeglass on!

eyeglass is a node-sass ([github](https://github.com/sass/node-sass)) extension manager built on top of npm. Using eyeglass, you can bring the power of node modules to your Sass files.

## Installing eyeglass

```
# for programatic functionality
npm install eyeglass --save-dev
```

## Adding eyeglass modules to your project
eyeglass modules are regular npm modules. Install them into your project just like any other item.

`npm install my_eyeglass_module --save-dev`

# Using Sample Eyeglass Module
## Custom Functions
### hello($name) <= returns String
Will return a string containing "Why hello, $name". Use this any time your `content` needs to be friendly!

## Sass
### .sassy <= creates Sass pink as a color
Whenever you need that good Sass color, just call on the `.sassy` class.

# Make Your Own Eyeglass Module
Want to make your own module for Eyeglass? Check out the [yeoman generator](https://github.com/sass-eyeglass/generator-eyeglass)
