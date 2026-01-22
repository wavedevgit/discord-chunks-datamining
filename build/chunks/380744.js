/** Chunk was on web.js **/
/** chunk id: 380744, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk635896 = require("./635896.js"),
  Chunk210140 = require("./210140.js"),
  Chunk753891 = require("./753891.js"),
  Chunk812294 = require("./812294.js"),
  Chunk633895 = require("./633895.js"),
  c = Chunk860511.Symbol,
  u = Chunk635896("wks"),
  d = Chunk633895 ? c.for || c : c && c.withoutSetter || Chunk753891;
module.exports = function(e) {
  return a(u, e) || (u[e] = o && a(c, e) ? c[e] : d("Symbol." + e)), u[e]
}