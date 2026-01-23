/** Chunk was on web.js **/
/** chunk id: 43902, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk230606 = require("./230606.js"),
  Chunk210140 = require("./210140.js"),
  Chunk706938 = require("./706938.js"),
  Chunk524152 = require("./524152.js"),
  Chunk458680 = require("./458680.js"),
  Chunk517771 = require("./517771.js"),
  Chunk878765 = require("./878765.js"),
  Chunk486724 = require("./486724.js"),
  Chunk862784 = require("./862784.js"),
  Chunk573467 = require("./573467.js"),
  Chunk770652 = require("./770652.js"),
  Chunk257943 = require("./257943.js"),
  Chunk105712 = require("./105712.js");
module.exports = function(e, t, n, m) {
  var g = "stackTraceLimit",
    E = m ? 2 : 1,
    y = e.split("."),
    b = y[y.length - 1],
    O = r.apply(null, y);
  if (O) {
    var v = O.prototype;
    if (!h && i(v, "cause") && delete v.cause, !n) return O;
    var A = r("Error"),
      I = t(function(e, t) {
        var n = d(m ? t : e, true),
          r = m ? new O(e) : new O;
        return true !== n && a(r, "message", n), p(r, I, r.stack, 2), this && s(v, this) && u(r, this, I), arguments.length > E && f(r, arguments[E]), r
      });
    if (I.prototype = v, "Error" !== b ? o ? o(I, A) : l(I, A, {
        name: true
      }) : _ && g in O && (c(I, O, g), c(I, O, "prepareStackTrace")), l(I, O), !h) try {
      v.name !== b && a(v, "name", b), v.constructor = I
    } catch (e) {}
    return I
  }
}