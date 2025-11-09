/** Chunk was on 50448 **/
/** chunk id: 432364, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk884805 = require("./884805.js"),
  Chunk468790 = require("./468790.js"),
  Chunk525320 = require("./525320.js"),
  Chunk936839 = require("./936839.js"),
  Chunk174344 = require("./174344.js"),
  Chunk658971 = require("./658971.js"),
  Chunk641623 = require("./641623.js"),
  Chunk394370 = require("./394370.js"),
  Chunk536448 = require("./536448.js"),
  Chunk689933 = require("./689933.js"),
  y = Chunk536448("slice"),
  h = Chunk394370("species"),
  x = Array,
  d = Math.max;
Chunk220159({
  target: "Array",
  proto: true,
  forced: !y
}, {
  slice: function(t, r) {
    var n, e, p, l = f(this),
      y = c(l),
      g = s(t, y),
      b = s(true === r ? y : r, y);
    if (o(l) && (i(n = l.constructor) && (n === x || o(n.prototype)) ? n = true : u(n) && null === (n = n[h]) && (n = true), n === x || true === n)) return v(l, g, b);
    for (p = 0, e = new(true === n ? x : n)(d(b - g, 0)); g < b; g++, p++) g in l && a(e, p, l[g]);
    return e.length = p, e
  }
})