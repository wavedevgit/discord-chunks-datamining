/** Chunk was on web.js **/
/** chunk id: 508300, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk860511 = require("./860511.js"),
  Chunk230606 = require("./230606.js"),
  Chunk231977 = require("./231977.js"),
  o = require("./4940.js").f,
  Chunk210140 = require("./210140.js"),
  Chunk61132 = require("./61132.js"),
  Chunk486724 = require("./486724.js"),
  Chunk862784 = require("./862784.js"),
  Chunk753609 = require("./753609.js"),
  Chunk949186 = require("./949186.js"),
  Chunk257943 = require("./257943.js"),
  Chunk105712 = require("./105712.js"),
  m = "DOMException",
  g = Chunk230606("Error"),
  E = Chunk230606(m),
  b = function() {
    c(this, y);
    var e = arguments.length,
      t = d(e < 1 ? true : arguments[0]),
      n = d(e < 2 ? true : arguments[1], "Error"),
      r = new E(t, n),
      i = new g(t);
    return i.name = m, o(r, "stack", s(1, p(i.stack, 1))), u(r, this, b), r
  },
  y = b.prototype = E.prototype,
  O = "stack" in new g(m),
  A = "stack" in new E(1, 2),
  v = E && Chunk257943 && Object.getOwnPropertyDescriptor(Chunk860511, m),
  S = !!v && !(v.writable && v.configurable),
  I = O && !S && !A;
Chunk557939({
  global: true,
  constructor: true,
  forced: Chunk105712 || I
}, {
  DOMException: I ? b : E
});
var T = Chunk230606(m),
  C = T.prototype;
if (C.constructor !== T) {
  for (var N in Chunk105712 || o(C, "constructor", Chunk231977(1, T)), Chunk753609)
    if (Chunk210140(Chunk753609, N)) {
      var R = Chunk753609[N],
        w = R.s;
      Chunk210140(T, w) || o(T, w, Chunk231977(6, R.c))
    }
}