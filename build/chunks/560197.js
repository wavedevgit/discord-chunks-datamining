/** Chunk was on 94700 **/
/** chunk id: 560197, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk633228 = require("./633228.js"),
  Chunk732376 = require("./732376.js"),
  Chunk503199 = require("./503199.js"),
  Chunk273761 = require("./273761.js"),
  Chunk581390 = require("./581390.js"),
  Chunk120394 = require("./120394.js"),
  h = Array,
  l = Math.max,
  d = Math.min;
Chunk557939({
  target: "Array",
  proto: true
}, {
  toSpliced: function(t, e) {
    var r, n, s, _, p = c(this),
      f = o(p),
      g = a(t, f),
      v = arguments.length,
      m = 0;
    for (0 === v ? r = n = 0 : 1 === v ? (r = 0, n = f - g) : (r = v - 2, n = d(l(u(e), 0), f - g)), _ = h(s = i(f + r - n)); m < g; m++) _[m] = p[m];
    for (; m < g + r; m++) _[m] = arguments[m - g + 2];
    for (; m < s; m++) _[m] = p[m + n - r];
    return _
  }
}), Chunk633228("toSpliced")