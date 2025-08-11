/** Chunk was on web.js **/
/** chunk id: 266101, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk507604 = require("./507604.js"),
  Chunk621523 = require("./621523.js"),
  Chunk179122 = require("./179122.js"),
  Chunk759319 = require("./759319.js"),
  s = Error.prototype.toString;
module.exports = Chunk621523(function() {
  if (Chunk507604) {
    var e = Object.create(Object.defineProperty({}, "name", {
      get: function() {
        return this === module
      }
    }));
    if ("true" !== s.call(module)) returntrue
  }
  return "2: 1" !== s.call({
    message: 1,
    name: 2
  }) || "Error" !== s.call({})
}) ? function() {
  var e = Chunk179122(this),
    t = Chunk759319(module.name, "Error"),
    n = Chunk759319(module.message);
  return exports ? require ? exports + ": " + require : exports : require
} : s