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
  m = "DOMException",
  g = Chunk154028("Error"),
  E = Chunk154028(m),
  b = function() {
    Chunk170322(this, y);
    var e = arguments.length,
      t = Chunk759319(module < 1 ? true : arguments[0]),
      n = Chunk759319(module < 2 ? true : arguments[1], "Error"),
      r = new E(exports, require),
      i = new g(exports);
    return Chunk127849.name = m, s(Chunk98405, "stack", Chunk530575(1, Chunk742850(Chunk127849.stack, 1))), Chunk176682(Chunk98405, this, b), Chunk98405
  },
  y = b.prototype = E.prototype,
  O = "stack" in new g(m),
  v = "stack" in new E(1, 2),
  I = E && Chunk507604 && Object.getOwnPropertyDescriptor(Chunk127849, m),
  T = !!I && !(I.writable && I.configurable),
  S = O && !T && !v;
Chunk98405({
  global: true,
  constructor: true,
  forced: Chunk511696 || S
}, {
  DOMException: S ? b : E
});
var A = Chunk154028(m),
  C = A.prototype;
if (C.constructor !== A) {
  for (var N in Chunk511696 || s(C, "constructor", Chunk530575(1, A)), Chunk17204)
    if (Chunk77025(Chunk17204, N)) {
      var R = Chunk17204[N],
        P = R.s;
      Chunk77025(A, P) || s(A, P, Chunk530575(6, R.c))
    }
}