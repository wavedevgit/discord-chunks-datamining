/** Chunk was on 50448 **/
/** chunk id: 795462, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk324474 = require("./324474.js"),
  Chunk517522 = require("./517522.js"),
  Chunk921413 = require("./921413.js"),
  Chunk684022 = require("./684022.js"),
  Chunk65976 = require("./65976.js"),
  Chunk174344 = require("./174344.js"),
  Chunk658538 = require("./658538.js"),
  Chunk318341 = require("./318341.js"),
  Chunk242958 = require("./242958.js"),
  Chunk272763 = require("./272763.js"),
  v = TypeError,
  y = function(t, r) {
    this.stopped = t, this.result = r
  },
  h = y.prototype;
module.exports = function(t, r, n) {
  var x, d, g, b, m, S, w, O = n && n.that,
    j = !!(n && n.AS_ENTRIES),
    A = !!(n && n.IS_RECORD),
    E = !!(n && n.IS_ITERATOR),
    T = !!(n && n.INTERRUPTED),
    P = e(r, O),
    k = function(t) {
      return x && l(x, "normal", t), new y(true, t)
    },
    I = function(t) {
      return j ? (i(t), T ? P(t[0], t[1], k) : P(t[0], t[1])) : T ? P(t, k) : P(t)
    };
  if (A) x = t.iterator;
  else if (E) x = t;
  else {
    if (!(d = p(t))) throw new v(u(t) + " is not iterable");
    if (s(d)) {
      for (g = 0, b = c(t); b > g; g++)
        if ((m = I(t[g])) && f(h, m)) return m;
      return new y(false)
    }
    x = a(t, d)
  }
  for (S = A ? t.next : x.next; !(w = o(S, x)).done;) {
    try {
      m = I(w.value)
    } catch (t) {
      l(x, "throw", t)
    }
    if ("object" == typeof m && m && f(h, m)) return m
  }
  return new y(false)
}