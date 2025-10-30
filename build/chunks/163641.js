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
module.exports = function(e, t, n, m) {
  var g = "stackTraceLimit",
    E = m ? 2 : 1,
    b = e.split("."),
    y = b[b.length - 1],
    O = r.apply(null, b);
  if (O) {
    var v = O.prototype;
    if (!h && i(v, "cause") && delete v.cause, !n) return O;
    var I = r("Error"),
      S = t(function(e, t) {
        var n = d(m ? t : e, true),
          r = m ? new O(e) : new O;
        return true !== n && a(r, "message", n), _(r, S, r.stack, 2), this && o(v, this) && u(r, this, S), arguments.length > E && f(r, arguments[E]), r
      });
    if (S.prototype = v, "Error" !== y ? s ? s(S, I) : l(S, I, {
        name: true
      }) : p && g in O && (c(S, O, g), c(S, O, "prepareStackTrace")), l(S, O), !h) try {
      v.name !== y && a(v, "name", y), v.constructor = S
    } catch (e) {}
    return S
  }
}