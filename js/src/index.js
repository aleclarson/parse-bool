(function() {
  var falsy, inArray, truthy;

  truthy = ["true", "yes", "y", "1"];

  falsy = ["false", "no", "n", "0"];

  inArray = require("in-array");

  module.exports = function(string) {
    if (inArray(truthy, string)) {
      return true;
    }
    if (inArray(falsy, string)) {
      return false;
    }
    return null;
  };

}).call(this);

//# sourceMappingURL=map/index.js.map
