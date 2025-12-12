/** Chunk was on web.js **/
/** chunk id: 208653, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk745872 = require("./745872.js"),
  Chunk638934 = require("./638934.js"),
  Chunk429675 = require("./429675.js"),
  a = Chunk745872("%Promise.resolve%", true),
  s = a && Chunk638934(a);
module.exports = function(e, t) {
  if (!s) throw new o("This environment does not support Promises.");
  return s(e, t)
}