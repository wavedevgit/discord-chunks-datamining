/** Chunk was on web.js **/
/** chunk id: 567242, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk439619 = require("./439619.js"),
  Chunk906046 = require("./906046.js"),
  Chunk741623 = require("./741623.js"),
  Chunk32561 = require("./32561.js"),
  s = Chunk439619("%Reflect.apply%", true) || Chunk906046("Function.prototype.apply");
module.exports = function(e, t) {
  var n = arguments.length > 2 ? arguments[2] : [];
  if (!o(n)) throw new a("Assertion failed: optional `argumentsList`, if provided, must be a List");
  return s(e, t, n)
}