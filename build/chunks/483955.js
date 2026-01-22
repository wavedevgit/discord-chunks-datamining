/** Chunk was on web.js **/
/** chunk id: 483955, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk439619 = require("./439619.js"),
  i = Chunk439619("%RegExp%"),
  Chunk741623 = require("./741623.js"),
  s = Chunk439619("%parseInt%"),
  Chunk906046 = require("./906046.js"),
  Chunk429013 = require("./429013.js"),
  c = Chunk906046("String.prototype.slice"),
  u = Chunk429013(/^0b[01]+$/i),
  d = Chunk429013(/^0o[0-7]+$/i),
  f = Chunk429013(/^[-+]0x[0-9a-f]+$/i),
  p = Chunk429013(new i("[\x85​￾]", "g")),
  Chunk886309 = require("./886309.js");
module.exports = function e(t) {
  if ("string" != typeof t) throw new a("Assertion failed: `argument` is not a String");
  if (u(t)) return +s(c(t, 2), 2);
  if (d(t)) return +s(c(t, 2), 8);
  if (p(t) || f(t)) return NaN;
  var n = _(t);
  return n !== t ? e(n) : +t
}