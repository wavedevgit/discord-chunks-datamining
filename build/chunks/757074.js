/** Chunk was on web.js **/
/** chunk id: 757074, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk517737 = require("./517737.js"),
  Chunk503628 = require("./503628.js"),
  Chunk514575 = require("./514575.js"),
  Chunk953937 = require("./953937.js"),
  Chunk739305 = require("./739305.js"),
  Chunk830368 = require("./830368.js"),
  Chunk701160 = require("./701160.js"),
  Chunk123166 = require("./123166.js"),
  Chunk450634 = require("./450634.js"),
  p = Chunk739305.aTypedArray,
  _ = Chunk739305.exportTypedArrayMethod,
  h = Chunk860511.Uint16Array,
  m = h && Chunk517737(h.prototype.sort),
  g = !!m && !(Chunk503628(function() {
    m(new h(2), null)
  }) && Chunk503628(function() {
    m(new h(2), {})
  })),
  E = !!m && !Chunk503628(function() {
    if (d) return d < 74;
    if (c) return c < 67;
    if (u) returntrue;
    if (f) return f < 602;
    var e, t, n = new h(516),
      r = Array(516);
    for (e = 0; e < 516; e++) t = e % 4, n[e] = 515 - e, r[e] = e - 2 * t + 3;
    for (m(n, function(e, t) {
        return (e / 4 | 0) - (t / 4 | 0)
      }), e = 0; e < 516; e++)
      if (n[e] !== r[e]) returntrue
  }),
  b = function(e) {
    return function(t, n) {
      return true !== e ? +e(t, n) || 0 : n != n ? false : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : false : t > n
    }
  };
_("sort", function(e) {
  return (true !== e && s(e), E) ? m(this, e) : o(p(this), b(e))
}, !E || g)