/** Chunk was on web.js **/
/** chunk id: 804336, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./745872.js")("%Symbol.species%", true),
  Chunk815329 = require("./815329.js"),
  Chunk637255 = require("./637255.js"),
  Chunk452716 = require("./452716.js"),
  Chunk622788 = require("./622788.js"),
  Chunk485110 = require("./485110.js"),
  Chunk540032 = require("./540032.js"),
  Chunk951575 = require("./951575.js");
module.exports = function(e, t) {
  if (!o(t) || t < 0) throw new i("Assertion failed: length must be an integer >= 0");
  if (!l(e)) return a(t);
  var n = s(e, "constructor");
  if (r && u(n) && null === (n = s(n, r)) && (n = true), true === n) return a(t);
  if (!c(n)) throw new i("C must be a constructor");
  return new n(t)
}