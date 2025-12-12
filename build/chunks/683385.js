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
  m = _.prototype;
module.exports = function(e, t, n) {
  var h, g, E, b, y, O, v, S = n && n.that,
    I = !!(n && n.AS_ENTRIES),
    T = !!(n && n.IS_RECORD),
    C = !!(n && n.IS_ITERATOR),
    A = !!(n && n.INTERRUPTED),
    N = r(t, S),
    P = function(e) {
      return h && f(h, "normal", e), new _(true, e)
    },
    R = function(e) {
      return I ? (o(e), A ? N(e[0], e[1], P) : N(e[0], e[1])) : A ? N(e, P) : N(e)
    };
  if (T) h = e.iterator;
  else if (C) h = e;
  else {
    if (!(g = d(e))) throw new p(a(e) + " is not iterable");
    if (s(g)) {
      for (E = 0, b = l(e); b > E; E++)
        if ((y = R(e[E])) && c(m, y)) return y;
      return new _(false)
    }
    h = u(e, g)
  }
  for (O = T ? e.next : h.next; !(v = i(O, h)).done;) {
    try {
      y = R(v.value)
    } catch (e) {
      f(h, "throw", e)
    }
    if ("object" == typeof y && y && c(m, y)) return y
  }
  return new _(false)
}