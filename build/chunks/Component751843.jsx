/** Chunk was on 7891 **/
/** chunk id: 751843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var i, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk112589 = require("./112589.js"),
  u = ((i = u || {})[i.UP = 0] = "UP", i[i.DOWN = 1] = "DOWN", i);

function d(e) {
  var {
    direction: t,
    className: n,
    themeable: i
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["direction", "className", "themeable"]);
  return (0, r.jsx)(s.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({
    className: a()(n, c.arrow, {
      [c.up]: 0 === t
    }),
    iconComponent: o.CJ0,
    themeable: i
  }, l))
}
d.Directions = u;
let p = d