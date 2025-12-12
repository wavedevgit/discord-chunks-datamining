/** Chunk was on web.js **/
/** chunk id: 163641, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk154028 = require("./154028.js"),
  Chunk77025 = require("./77025.js"),
  Chunk436207 = require("./436207.js"),
  Chunk568033 = require("./568033.js"),
  Chunk769827 = require("./769827.js"),
  Chunk190289 = require("./190289.js"),
  Chunk316096 = require("./316096.js"),
  Chunk176682 = require("./176682.js"),
  Chunk759319 = require("./759319.js"),
  Chunk179351 = require("./179351.js"),
  Chunk903225 = require("./903225.js"),
  Chunk507604 = require("./507604.js"),
  Chunk511696 = require("./511696.js");
module.exports = function(e, t, n, h) {
  var g = "stackTraceLimit",
    E = h ? 2 : 1,
    b = e.split("."),
    y = b[b.length - 1],
    O = r.apply(null, b);
  if (O) {
    var v = O.prototype;
    if (!m && i(v, "cause") && delete v.cause, !n) return O;
    var S = r("Error"),
      I = t(function(e, t) {
        var n = d(h ? t : e, true),
          r = h ? new O(e) : new O;
        return true !== n && o(r, "message", n), p(r, I, r.stack, 2), this && a(v, this) && u(r, this, I), arguments.length > E && f(r, arguments[E]), r
      });
    if (I.prototype = v, "Error" !== y ? s ? s(I, S) : l(I, S, {
        name: true
      }) : _ && g in O && (c(I, O, g), c(I, O, "prepareStackTrace")), l(I, O), !m) try {
      v.name !== y && o(v, "name", y), v.constructor = I
    } catch (e) {}
    return I
  }
}