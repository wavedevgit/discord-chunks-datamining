/** Chunk was on web.js **/
/** chunk id: 570086, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk127849 = require("./127849.js"),
  Chunk154028 = require("./154028.js"),
  Chunk530575 = require("./530575.js"),
  s = require("./117895.js").f,
  Chunk77025 = require("./77025.js"),
  Chunk170322 = require("./170322.js"),
  Chunk176682 = require("./176682.js"),
  Chunk759319 = require("./759319.js"),
  Chunk17204 = require("./17204.js"),
  Chunk742850 = require("./742850.js"),
  Chunk507604 = require("./507604.js"),
  Chunk511696 = require("./511696.js"),
  h = "DOMException",
  g = Chunk154028("Error"),
  E = Chunk154028(h),
  b = function() {
    c(this, y);
    var e = arguments.length,
      t = d(e < 1 ? true : arguments[0]),
      n = d(e < 2 ? true : arguments[1], "Error"),
      r = new E(t, n),
      i = new g(t);
    return i.name = h, s(r, "stack", o(1, p(i.stack, 1))), u(r, this, b), r
  },
  y = b.prototype = E.prototype,
  O = "stack" in new g(h),
  v = "stack" in new E(1, 2),
  S = E && Chunk507604 && Object.getOwnPropertyDescriptor(Chunk127849, h),
  I = !!S && !(S.writable && S.configurable),
  T = O && !I && !v;
Chunk98405({
  global: true,
  constructor: true,
  forced: Chunk511696 || T
}, {
  DOMException: T ? b : E
});
var C = Chunk154028(h),
  A = C.prototype;
if (A.constructor !== C) {
  for (var N in Chunk511696 || s(A, "constructor", Chunk530575(1, C)), Chunk17204)
    if (Chunk77025(Chunk17204, N)) {
      var P = Chunk17204[N],
        R = P.s;
      Chunk77025(C, R) || s(C, R, Chunk530575(6, P.c))
    }
}