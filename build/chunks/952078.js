/** Chunk was on 35511 **/
/** chunk id: 952078, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk308227 = require("./308227.js"),
  Chunk486816 = require("./486816.js"),
  Chunk675879 = require("./675879.js"),
  Chunk57284 = require("./57284.js"),
  s = require("./918189.js").trim,
  Chunk564399 = require("./564399.js"),
  c = Chunk308227.parseInt,
  u = Chunk308227.Symbol,
  d = u && u.iterator,
  p = /^[+-]?0x/i,
  h = Chunk675879(p.exec);
module.exports = 8 !== c(Chunk564399 + "08") || 22 !== c(Chunk564399 + "0x16") || d && !Chunk486816(function() {
  c(Object(d))
}) ? function(e, t) {
  var n = s(i(e));
  return c(n, t >>> 0 || (h(p, n) ? 16 : 10))
} : c