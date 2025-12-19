/** Chunk was on 27278 **/
/** chunk id: 961048, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  var {
    onClick: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, a, o = function(e, n) {
      if (null == e) return {};
      var t, a, o = {},
        c = Object.keys(e);
      for (a = 0; a < c.length; a++) t = c[a], n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (a = 0; a < c.length; a++) t = c[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
  }(e, ["onClick"]);
  let {
    parentAnalyticsLocation: d
  } = (0, c.ZP)();
  return (0, a.jsx)(i.Z, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        a = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), a.forEach(function(n) {
        var a;
        a = t[n], n in e ? Object.defineProperty(e, n, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = a
      })
    }
    return e
  }({
    label: l.intl.string(l.t["UKOtz+"]),
    iconComponent: o.xhG,
    tooltipPosition: "bottom",
    onClick: e => {
      (0, r.v)(d, r.d.MORE), n(e)
    }
  }, t))
}