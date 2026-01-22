/** Chunk was on web.js **/
/** chunk id: 638769, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk410323 = require("./410323.js"),
  Chunk514575 = require("./514575.js"),
  Chunk250594 = require("./250594.js"),
  Chunk503199 = require("./503199.js"),
  Chunk762503 = require("./762503.js"),
  Chunk304880 = require("./304880.js"),
  Chunk503628 = require("./503628.js"),
  Chunk953937 = require("./953937.js"),
  Chunk691639 = require("./691639.js"),
  Chunk830368 = require("./830368.js"),
  Chunk701160 = require("./701160.js"),
  Chunk123166 = require("./123166.js"),
  Chunk450634 = require("./450634.js"),
  g = [],
  E = Chunk410323(g.sort),
  b = Chunk410323(g.push),
  y = Chunk503628(function() {
    g.sort(true)
  }),
  O = Chunk503628(function() {
    g.sort(null)
  }),
  A = Chunk691639("sort"),
  v = !Chunk503628(function() {
    if (h) return h < 70;
    if (!p || !(p > 3)) {
      if (_) returntrue;
      if (m) return m < 603;
      var e, t, n, r, i = "";
      for (e = 65; e < 76; e++) {
        switch (t = String.fromCharCode(e), e) {
          case 66:
          case 69:
          case 70:
          case 72:
            n = 3;
            break;
          case 68:
          case 71:
            n = 4;
            break;
          default:
            n = 2
        }
        for (r = 0; r < 47; r++) g.push({
          k: t + r,
          v: n
        })
      }
      for (g.sort(function(e, t) {
          return t.v - e.v
        }), r = 0; r < g.length; r++) t = g[r].k.charAt(0), i.charAt(i.length - 1) !== t && (i += t);
      return "DGBEFHACIJK" !== i
    }
  }),
  S = function(e) {
    return function(t, n) {
      return true === n ? false : true === t ? 1 : true !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : false
    }
  };
Chunk557939({
  target: "Array",
  proto: true,
  forced: y || !O || !A || !v
}, {
  sort: function(e) {
    true !== e && a(e);
    var t, n, r = s(this);
    if (v) return true === e ? E(r) : E(r, e);
    var i = [],
      c = o(r);
    for (n = 0; n < c; n++) n in r && b(i, r[n]);
    for (d(i, S(e)), t = o(i), n = 0; n < t;) r[n] = i[n++];
    for (; n < c;) l(r, n++);
    return r
  }
})