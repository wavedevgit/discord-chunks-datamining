/** Chunk was on 35511 **/
/** chunk id: 987817, original params: e,t,n (module,exports,require) **/
"use strict";
var r, Chunk308227 = require("./308227.js"),
  Chunk421236 = require("./421236.js"),
  Chunk309270 = require("./309270.js"),
  Chunk45388 = require("./45388.js"),
  Chunk791553 = require("./791553.js"),
  Chunk596479 = require("./596479.js"),
  Chunk978887 = require("./978887.js"),
  d = Chunk308227.Function,
  p = /MSIE .\./.test(Chunk791553) || "BUN" === Chunk45388 && ((r = Chunk308227.Bun.version.split(".")).length < 3 || "0" === r[0] && (r[1] < 3 || "3" === r[1] && "0" === r[2]));
module.exports = function(e, t) {
  var n = t ? 2 : 1;
  return p ? function(r, a) {
    var s = u(arguments.length, 1) > n,
      l = i(r) ? r : d(r),
      p = s ? c(arguments, n) : [],
      h = s ? function() {
        o(l, this, p)
      } : l;
    return t ? e(h, a) : e(h)
  } : e
}