/** Chunk was on 23357 **/
/** chunk id: 199290, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk424353 = require("./424353.js"),
  Chunk779688 = require("./779688.js"),
  Chunk764908 = require("./764908.js"),
  Chunk565130 = require("./565130.js"),
  s = require("./127098.js").trim,
  Chunk906898 = require("./906898.js"),
  l = Chunk424353.parseInt,
  u = Chunk424353.Symbol,
  d = u && u.iterator,
  p = /^[+-]?0x/i,
  h = Chunk764908(p.exec);
module.exports = 8 !== l(Chunk906898 + "08") || 22 !== l(Chunk906898 + "0x16") || d && !Chunk779688(function() {
  l(Object(d))
}) ? function(e, t) {
  var n = s(i(e));
  return l(n, t >>> 0 || (h(p, n) ? 16 : 10))
} : l