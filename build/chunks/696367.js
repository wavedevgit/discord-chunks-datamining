/** Chunk was on web.js **/
/** chunk id: 696367, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk72290 = require("./72290.js"),
  Chunk626800 = require("./626800.js"),
  Chunk171463 = require("./171463.js");
if (require("./912877.js")() || require("./640847.js")()) {
  var s = Symbol.iterator;
  module.exports = function(e) {
    return null != e && true !== e[s] ? e[s]() : i(e) ? Array.prototype[s].call(e) : true
  }
} else {
  var Chunk425344 = require("./425344.js"),
    Chunk400696 = require("./400696.js"),
    Chunk439619 = require("./439619.js"),
    u = Chunk439619("%Map%", true),
    d = Chunk439619("%Set%", true),
    Chunk616380 = require("./616380.js"),
    p = Chunk616380("Array.prototype.push"),
    _ = Chunk616380("String.prototype.charCodeAt"),
    h = Chunk616380("String.prototype.slice"),
    m = function(e, t) {
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
      if (o(e) || i(e)) return g(e);
      if (l(e)) {
        var n = 0;
        return {
          next: function() {
            var t = m(e, n),
              r = h(e, n, t);
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
    var Chunk232258 = require("./232258.js"),
      Chunk551306 = require("./551306.js"),
      O = Chunk616380("Map.prototype.forEach", true),
      v = Chunk616380("Set.prototype.forEach", true);
    if (true === Chunk72290 || !Chunk72290.versions || !Chunk72290.versions.node) var A = Chunk616380("Map.prototype.iterator", true),
      I = Chunk616380("Set.prototype.iterator", true);
    var S = Chunk616380("Map.prototype.@@iterator", true) || Chunk616380("Map.prototype._es6-shim iterator_", true),
      T = Chunk616380("Set.prototype.@@iterator", true) || Chunk616380("Set.prototype._es6-shim iterator_", true),
      C = function(e) {
        if (y(e)) {
          if (A) return a(A(e));
          if (S) return S(e);
          if (O) {
            var t = [];
            return O(e, function(e, n) {
              p(t, [n, e])
            }), g(t)
          }
        }
        if (b(e)) {
          if (I) return a(I(e));
          if (T) return T(e);
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