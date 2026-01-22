/** Chunk was on web.js **/
/** chunk id: 872181, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk985848 = require("./985848.js"),
  Chunk339626 = require("./339626.js"),
  Chunk676528 = require("./676528.js"),
  Chunk65978 = require("./65978.js"),
  Chunk192819 = require("./192819.js"),
  Chunk627 = require("./627.js"),
  u = Chunk860511.Function,
  d = /MSIE .\./.test(Chunk65978) || "BUN" === Chunk676528 && function() {
    var e = r.Bun.version.split(".");
    return e.length < 3 || "0" === e[0] && (e[1] < 3 || "3" === e[1] && "0" === e[2])
  }();
module.exports = function(e, t) {
  var n = t ? 2 : 1;
  return d ? function(r, s) {
    var o = c(arguments.length, 1) > n,
      d = a(r) ? r : u(r),
      f = o ? l(arguments, n) : [],
      p = o ? function() {
        i(d, this, f)
      } : d;
    return t ? e(p, s) : e(p)
  } : e
}