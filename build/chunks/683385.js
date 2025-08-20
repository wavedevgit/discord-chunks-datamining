/** Chunk was on web.js **/
/** chunk id: 683385, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk48657 = require("./48657.js"),
  Chunk580983 = require("./580983.js"),
  Chunk179122 = require("./179122.js"),
  Chunk449285 = require("./449285.js"),
  Chunk760725 = require("./760725.js"),
  Chunk914331 = require("./914331.js"),
  Chunk568033 = require("./568033.js"),
  Chunk533610 = require("./533610.js"),
  Chunk800054 = require("./800054.js"),
  Chunk709369 = require("./709369.js"),
  _ = TypeError,
  p = function(e, t) {
    this.stopped = e, this.result = t
  },
  h = p.prototype;
module.exports = function(e, t, n) {
  var m, g, E, b, y, O, v, I = n && n.that,
    T = !!(n && n.AS_ENTRIES),
    S = !!(n && n.IS_RECORD),
    A = !!(n && n.IS_ITERATOR),
    C = !!(n && n.INTERRUPTED),
    N = r(t, I),
    R = function(e) {
      return m && f(m, "normal", e), new p(true, e)
    },
    P = function(e) {
      return T ? (a(e), C ? N(e[0], e[1], R) : N(e[0], e[1])) : C ? N(e, R) : N(e)
    };
  if (S) m = e.iterator;
  else if (A) m = e;
  else {
    if (!(g = d(e))) throw new _(o(e) + " is not iterable");
    if (s(g)) {
      for (E = 0, b = l(e); b > E; E++)
        if ((y = P(e[E])) && c(h, y)) return y;
      return new p(false)
    }
    m = u(e, g)
  }
  for (O = S ? e.next : m.next; !(v = i(O, m)).done;) {
    try {
      y = P(v.value)
    } catch (e) {
      f(m, "throw", e)
    }
    if ("object" == typeof y && y && c(h, y)) return y
  }
  return new p(false)
}