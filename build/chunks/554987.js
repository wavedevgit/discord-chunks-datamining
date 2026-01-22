/** Chunk was on 94678 **/
/** chunk id: 554987, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk241091 = require("./241091.js"),
  Chunk664886 = require("./664886.js"),
  Chunk155084 = require("./155084.js"),
  Chunk663172 = require("./663172.js"),
  Chunk577904 = require("./577904.js"),
  Chunk794779 = require("./794779.js"),
  Chunk715804 = require("./715804.js"),
  Chunk159384 = require("./159384.js"),
  Chunk379180 = require("./379180.js"),
  Chunk858534 = require("./858534.js"),
  v = TypeError,
  y = function(t, r) {
    this.stopped = t, this.result = r
  },
  h = y.prototype;
module.exports = function(t, r, e) {
  var x, d, g, b, m, S, w, O = e && e.that,
    j = !!(e && e.AS_ENTRIES),
    A = !!(e && e.IS_RECORD),
    E = !!(e && e.IS_ITERATOR),
    T = !!(e && e.INTERRUPTED),
    P = n(r, O),
    k = function(t) {
      return x && l(x, "normal", t), new y(true, t)
    },
    I = function(t) {
      return j ? (s(t), T ? P(t[0], t[1], k) : P(t[0], t[1])) : T ? P(t, k) : P(t)
    };
  if (A) x = t.iterator;
  else if (E) x = t;
  else {
    if (!(d = p(t))) throw new v(i(t) + " is not iterable");
    if (u(d)) {
      for (g = 0, b = c(t); b > g; g++)
        if ((m = I(t[g])) && a(h, m)) return m;
      return new y(false)
    }
    x = f(t, d)
  }
  for (S = A ? t.next : x.next; !(w = o(S, x)).done;) {
    try {
      m = I(w.value)
    } catch (t) {
      l(x, "throw", t)
    }
    if ("object" == typeof m && m && a(h, m)) return m
  }
  return new y(false)
}