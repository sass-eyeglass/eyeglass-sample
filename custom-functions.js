"use strict";

module.exports = {
  "hello($name)": function(name, done) {
    done(sass.types.String('"Why hello, ' + name + '"'));
  }
};
