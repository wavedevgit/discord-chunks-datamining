/** Chunk was on web.js **/
/** chunk id: 560197, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk633228 = require("./633228.js"),
  Chunk732376 = require("./732376.js"),
  Chunk503199 = require("./503199.js"),
  Chunk273761 = require("./273761.js"),
  Chunk581390 = require("./581390.js"),
  Chunk120394 = require("./120394.js"),
  u = Array,
  d = Math.max,
  f = Math.min;
Chunk557939({
  target: "Array",
  proto: true
}, {
  toSpliced: function(e, t) {
    var n, r, i, p, _ = l(this),
      h = s(_),
      m = o(e, h),
      g = arguments.length,
      E = 0;
    for (0 === g ? n = r = 0 : 1 === g ? (n = 0, r = h - m) : (n = g - 2, r = f(d(c(t), 0), h - m)), p = u(i = a(h + n - r)); E < m; E++) p[E] = _[E];
    for (; E < m + n; E++) p[E] = arguments[E - m + 2];
    for (; E < i; E++) p[E] = _[E + r - n];
    return p
  }
}), Chunk633228("toSpliced")