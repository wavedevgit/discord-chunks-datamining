/** Chunk was on web.js **/
/** chunk id: 757431, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./439619.js")("%Symbol.species%", true),
  Chunk741623 = require("./741623.js"),
  Chunk358073 = require("./358073.js"),
  Chunk579405 = require("./579405.js"),
  Chunk605468 = require("./605468.js"),
  Chunk32561 = require("./32561.js"),
  Chunk450460 = require("./450460.js"),
  Chunk227106 = require("./227106.js");
module.exports = function(e, t) {
  if (!a(t) || t < 0) throw new i("Assertion failed: length must be an integer >= 0");
  if (!l(e)) return s(t);
  var n = o(e, "constructor");
  if (r && u(n) && null === (n = o(n, r)) && (n = true), true === n) return s(t);
  if (!c(n)) throw new i("C must be a constructor");
  return new n(t)
}