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
    b = e.split("."),
    y = b[b.length - 1],
    O = r.apply(null, b);
  if (O) {
    var A = O.prototype;
    if (!h && i(A, "cause") && delete A.cause, !n) return O;
    var v = r("Error"),
      S = t(function(e, t) {
        var n = d(m ? t : e, true),
          r = m ? new O(e) : new O;
        return true !== n && a(r, "message", n), p(r, S, r.stack, 2), this && s(A, this) && u(r, this, S), arguments.length > E && f(r, arguments[E]), r
      });
    if (S.prototype = A, "Error" !== y ? o ? o(S, v) : l(S, v, {
        name: true
      }) : _ && g in O && (c(S, O, g), c(S, O, "prepareStackTrace")), l(S, O), !h) try {
      A.name !== y && a(A, "name", y), A.constructor = S
    } catch (e) {}
    return S
  }
}