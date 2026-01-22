/** Chunk was on web.js **/
/** chunk id: 2871, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk221015 = require("./221015.js"),
  Chunk446474 = require("./446474.js"),
  Chunk101968 = require("./101968.js"),
  Chunk406208 = require("./406208.js"),
  Chunk151860 = require("./151860.js"),
  Chunk503199 = require("./503199.js"),
  Chunk524152 = require("./524152.js"),
  Chunk327036 = require("./327036.js"),
  Chunk331336 = require("./331336.js"),
  Chunk350714 = require("./350714.js"),
  p = TypeError,
  _ = function(e, t) {
    this.stopped = e, this.result = t
  },
  h = _.prototype;
module.exports = function(e, t, n) {
  var m, g, E, b, y, O, A, v = n && n.that,
    S = !!(n && n.AS_ENTRIES),
    I = !!(n && n.IS_RECORD),
    T = !!(n && n.IS_ITERATOR),
    C = !!(n && n.INTERRUPTED),
    N = r(t, v),
    R = function(e) {
      return m && f(m, "normal", e), new _(true, e)
    },
    w = function(e) {
      return S ? (a(e), C ? N(e[0], e[1], R) : N(e[0], e[1])) : C ? N(e, R) : N(e)
    };
  if (I) m = e.iterator;
  else if (T) m = e;
  else {
    if (!(g = d(e))) throw new p(s(e) + " is not iterable");
    if (o(g)) {
      for (E = 0, b = l(e); b > E; E++)
        if ((y = w(e[E])) && c(h, y)) return y;
      return new _(false)
    }
    m = u(e, g)
  }
  for (O = I ? e.next : m.next; !(A = i(O, m)).done;) {
    try {
      y = w(A.value)
    } catch (e) {
      f(m, "throw", e)
    }
    if ("object" == typeof y && y && c(h, y)) return y
  }
  return new _(false)
}