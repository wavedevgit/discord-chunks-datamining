/** Chunk was on web.js **/
/** chunk id: 629680, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  Chunk35760 = require("./35760.js"),
  Chunk621523 = require("./621523.js"),
  Chunk896471 = require("./896471.js"),
  Chunk992914 = require("./992914.js"),
  Chunk840475 = require("./840475.js"),
  Chunk358932 = require("./358932.js"),
  Chunk635464 = require("./635464.js"),
  Chunk287353 = require("./287353.js"),
  Chunk920542 = require("./920542.js"),
  p = Chunk840475.aTypedArray,
  _ = Chunk840475.exportTypedArrayMethod,
  h = Chunk127849.Uint16Array,
  m = h && Chunk35760(h.prototype.sort),
  g = !!m && !(Chunk621523(function() {
    m(new h(2), null)
  }) && Chunk621523(function() {
    m(new h(2), {})
  })),
  E = !!m && !Chunk621523(function() {
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
  return (true !== e && o(e), E) ? m(this, e) : s(p(this), b(e))
}, !E || g)