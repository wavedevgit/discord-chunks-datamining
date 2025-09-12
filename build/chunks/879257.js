/** Chunk was on 50448 **/
/** chunk id: 879257, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk517522 = require("./517522.js"),
  Chunk829575 = require("./829575.js"),
  Chunk839593 = require("./839593.js"),
  Chunk914405 = require("./914405.js"),
  Chunk213805 = require("./213805.js"),
  Chunk394370 = require("./394370.js"),
  f = TypeError,
  a = Chunk394370("toPrimitive");
module.exports = function(t, r) {
  if (!o(t) || i(t)) return t;
  var n, c = u(t, a);
  if (c) {
    if (true === r && (r = "default"), !o(n = e(c, t, r)) || i(n)) return n;
    throw new f("Can't convert object to primitive value")
  }
  return true === r && (r = "number"), s(t, r)
}