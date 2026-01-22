/** Chunk was on 94678 **/
/** chunk id: 591791, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk453669 = require("./453669.js"),
  Chunk712192 = require("./712192.js"),
  Chunk407057 = require("./407057.js"),
  Chunk798325 = require("./798325.js"),
  Chunk794779 = require("./794779.js"),
  Chunk958498 = require("./958498.js"),
  Chunk287731 = require("./287731.js"),
  Chunk61748 = require("./61748.js"),
  Chunk787692 = require("./787692.js"),
  Chunk596479 = require("./596479.js"),
  y = Chunk787692("slice"),
  h = Chunk61748("species"),
  x = Array,
  d = Math.max;
Chunk834647({
  target: "Array",
  proto: true,
  forced: !y
}, {
  slice: function(t, r) {
    var e, n, p, l = a(this),
      y = c(l),
      g = u(t, y),
      b = u(true === r ? y : r, y);
    if (o(l) && (s(e = l.constructor) && (e === x || o(e.prototype)) ? e = true : i(e) && null === (e = e[h]) && (e = true), e === x || true === e)) return v(l, g, b);
    for (p = 0, n = new(true === e ? x : e)(d(b - g, 0)); g < b; g++, p++) g in l && f(n, p, l[g]);
    return n.length = p, n
  }
})