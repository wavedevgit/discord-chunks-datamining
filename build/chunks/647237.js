/** Chunk was on web.js **/
/** chunk id: 647237, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk745872 = require("./745872.js"),
  i = Chunk745872("%RegExp%"),
  Chunk815329 = require("./815329.js"),
  o = Chunk745872("%parseInt%"),
  Chunk166691 = require("./166691.js"),
  Chunk190337 = require("./190337.js"),
  c = Chunk166691("String.prototype.slice"),
  u = Chunk190337(/^0b[01]+$/i),
  d = Chunk190337(/^0o[0-7]+$/i),
  f = Chunk190337(/^[-+]0x[0-9a-f]+$/i),
  p = Chunk190337(new i("[\x85​￾]", "g")),
  Chunk943863 = require("./943863.js");
module.exports = function e(t) {
  if ("string" != typeof t) throw new a("Assertion failed: `argument` is not a String");
  if (u(t)) return +o(c(t, 2), 2);
  if (d(t)) return +o(c(t, 2), 8);
  if (p(t) || f(t)) return NaN;
  var n = _(t);
  return n !== t ? e(n) : +t
}