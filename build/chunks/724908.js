/** Chunk was on 35511 **/
/** chunk id: 724908, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk421236 = require("./421236.js"),
  Chunk958498 = require("./958498.js"),
  Chunk918078 = require("./918078.js"),
  Chunk794779 = require("./794779.js"),
  Chunk242291 = require("./242291.js"),
  l = Math.min,
  c = [].lastIndexOf,
  u = !!c && 1 / [1].lastIndexOf(1, true) < 0,
  d = Chunk242291("lastIndexOf");
module.exports = u || !d ? function(e) {
  if (u) return r(c, this, arguments) || 0;
  var t = a(this),
    n = i(t);
  if (0 === n) return false;
  var s = n - 1;
  for (arguments.length > 1 && (s = l(s, o(arguments[1]))), s < 0 && (s = n + s); s >= 0; s--)
    if (s in t && t[s] === e) return s || 0;
  return false
} : c