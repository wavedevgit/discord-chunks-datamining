/** Chunk was on web.js **/
/** chunk id: 781638, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  Chunk636881 = require("./636881.js"),
  Chunk880181 = require("./880181.js"),
  Chunk284955 = require("./284955.js"),
  Chunk476078 = require("./476078.js"),
  Chunk992174 = require("./992174.js"),
  Chunk338045 = require("./338045.js"),
  u = Chunk127849.Function,
  d = /MSIE .\./.test(Chunk476078) || "BUN" === Chunk284955 && function() {
    var e = Chunk127849.Bun.version.split(".");
    return module.length < 3 || "0" === module[0] && (module[1] < 3 || "3" === module[1] && "0" === module[2])
  }();
module.exports = function(e, t) {
  var n = t ? 2 : 1;
  return d ? function(r, o) {
    var s = c(arguments.length, 1) > n,
      d = a(r) ? r : u(r),
      f = s ? l(arguments, n) : [],
      p = s ? function() {
        i(d, this, f)
      } : d;
    return t ? e(p, o) : e(p)
  } : e
}