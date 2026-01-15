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
  p = TypeError,
  _ = function(e, t) {
    this.stopped = e, this.result = t
  },
  h = _.prototype;
module.exports = function(e, t, n) {
  var m, g, E, b, y, O, v, S = n && n.that,
    I = !!(n && n.AS_ENTRIES),
    T = !!(n && n.IS_RECORD),
    C = !!(n && n.IS_ITERATOR),
    A = !!(n && n.INTERRUPTED),
    N = r(t, S),
    P = function(e) {
      return m && f(m, "normal", e), new _(true, e)
    },
    w = function(e) {
      return I ? (a(e), A ? N(e[0], e[1], P) : N(e[0], e[1])) : A ? N(e, P) : N(e)
    };
  if (T) m = e.iterator;
  else if (C) m = e;
  else {
    if (!(g = d(e))) throw new p(o(e) + " is not iterable");
    if (s(g)) {
      for (E = 0, b = l(e); b > E; E++)
        if ((y = w(e[E])) && c(h, y)) return y;
      return new _(false)
    }
    m = u(e, g)
  }
  for (O = T ? e.next : m.next; !(v = i(O, m)).done;) {
    try {
      y = w(v.value)
    } catch (e) {
      f(m, "throw", e)
    }
    if ("object" == typeof y && y && c(h, y)) return y
  }
  return new _(false)
}