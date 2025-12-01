/** Chunk was on web.js **/
/** chunk id: 578805, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk444675 = require("./444675.js"),
  Chunk670575 = require("./670575.js"),
  Chunk165593 = require("./165593.js");
if (require("./738146.js")() || require("./247131.js")()) {
  var o = Symbol.iterator;
  module.exports = function(e) {
    return null != e && true !== e[o] ? e[o]() : i(e) ? Array.prototype[o].call(e) : true
  }
} else {
  var Chunk189612 = require("./189612.js"),
    Chunk934660 = require("./934660.js"),
    Chunk745872 = require("./745872.js"),
    u = Chunk745872("%Map%", true),
    d = Chunk745872("%Set%", true),
    Chunk887937 = require("./887937.js"),
    p = Chunk887937("Array.prototype.push"),
    _ = Chunk887937("String.prototype.charCodeAt"),
    m = Chunk887937("String.prototype.slice"),
    h = function(e, t) {
      if (t + 1 >= e.length) return t + 1;
      var n = _(e, t);
      if (n < 55296 || n > 56319) return t + 1;
      var r = _(e, t + 1);
      return r < 56320 || r > 57343 ? t + 1 : t + 2
    },
    g = function(e) {
      var t = 0;
      return {
        next: function() {
          var n, r = t >= e.length;
          return r || (n = e[t], t += 1), {
            done: r,
            value: n
          }
        }
      }
    },
    E = function(e, t) {
      if (s(e) || i(e)) return g(e);
      if (l(e)) {
        var n = 0;
        return {
          next: function() {
            var t = h(e, n),
              r = m(e, n, t);
            return n = t, {
              done: t > e.length,
              value: r
            }
          }
        }
      }
      if (t && true !== e["_es6-shim iterator_"]) return e["_es6-shim iterator_"]()
    };
  if (u || d) {
    var Chunk913306 = require("./913306.js"),
      Chunk282702 = require("./282702.js"),
      O = Chunk887937("Map.prototype.forEach", true),
      v = Chunk887937("Set.prototype.forEach", true);
    if (true === Chunk444675 || !Chunk444675.versions || !Chunk444675.versions.node) var S = Chunk887937("Map.prototype.iterator", true),
      I = Chunk887937("Set.prototype.iterator", true);
    var T = Chunk887937("Map.prototype.@@iterator", true) || Chunk887937("Map.prototype._es6-shim iterator_", true),
      A = Chunk887937("Set.prototype.@@iterator", true) || Chunk887937("Set.prototype._es6-shim iterator_", true),
      C = function(e) {
        if (b(e)) {
          if (S) return a(S(e));
          if (T) return T(e);
          if (O) {
            var t = [];
            return O(e, function(e, n) {
              p(t, [n, e])
            }), g(t)
          }
        }
        if (y(e)) {
          if (I) return a(I(e));
          if (A) return A(e);
          if (v) {
            var n = [];
            return v(e, function(e) {
              p(n, e)
            }), g(n)
          }
        }
      };
    module.exports = function(e) {
      return C(e) || E(e)
    }
  } else module.exports = function(e) {
    if (null != e) return E(e, true)
  }
}