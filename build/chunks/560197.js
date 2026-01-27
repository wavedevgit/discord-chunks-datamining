/** Chunk was on 92351 **/
/** chunk id: 560197, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk633228 = require("./633228.js"),
  Chunk732376 = require("./732376.js"),
  Chunk503199 = require("./503199.js"),
  Chunk273761 = require("./273761.js"),
  Chunk581390 = require("./581390.js"),
  Chunk120394 = require("./120394.js"),
  l = Array,
  f = Math.max,
  d = Math.min;
Chunk557939({
  target: "Array",
  proto: true
}, {
  toSpliced: function(e, t) {
    var n, r, o, p, h = u(this),
      v = a(h),
      g = c(e, v),
      w = arguments.length,
      y = 0;
    for (0 === w ? n = r = 0 : 1 === w ? (n = 0, r = v - g) : (n = w - 2, r = d(f(s(t), 0), v - g)), p = l(o = i(v + n - r)); y < g; y++) p[y] = h[y];
    for (; y < g + n; y++) p[y] = arguments[y - g + 2];
    for (; y < o; y++) p[y] = h[y + r - n];
    return p
  }
}), Chunk633228("toSpliced")