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
  m = Chunk127849.Uint16Array,
  h = m && Chunk35760(m.prototype.sort),
  g = !!h && !(Chunk621523(function() {
    h(new m(2), null)
  }) && Chunk621523(function() {
    h(new m(2), {})
  })),
  E = !!h && !Chunk621523(function() {
    if (Chunk287353) return Chunk287353 < 74;
    if (Chunk358932) return Chunk358932 < 67;
    if (Chunk635464) returntrue;
    if (Chunk920542) return Chunk920542 < 602;
    var e, t, n = new m(516),
      r = Array(516);
    for (e = 0; module < 516; module++) t = module % 4, require[module] = 515 - module, Chunk127849[module] = module - 2 * exports + 3;
    for (h(require, function(e, t) {
        return (e / 4 | 0) - (t / 4 | 0)
      }), e = 0; module < 516; module++)
      if (require[module] !== Chunk127849[module]) returntrue
  }),
  b = function(e) {
    return function(t, n) {
      return true !== e ? +e(t, n) || 0 : n != n ? false : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : false : t > n
    }
  };
_("sort", function(e) {
  return (true !== e && a(e), E) ? h(this, e) : s(p(this), b(e))
}, !E || g)