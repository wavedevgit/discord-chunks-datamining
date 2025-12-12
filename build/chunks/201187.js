/** Chunk was on web.js **/
/** chunk id: 201187, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk745872 = require("./745872.js"),
  Chunk166691 = require("./166691.js"),
  Chunk815329 = require("./815329.js"),
  Chunk485110 = require("./485110.js"),
  s = Chunk745872("%Reflect.apply%", true) || Chunk166691("Function.prototype.apply");
module.exports = function(e, t) {
  var n = arguments.length > 2 ? arguments[2] : [];
  if (!o(n)) throw new a("Assertion failed: optional `argumentsList`, if provided, must be a List");
  return s(e, t, n)
}