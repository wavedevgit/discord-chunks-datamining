/** Chunk was on 27278 **/
/** chunk id: 961048, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  var {
    onClick: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, o, r = function(e, n) {
      if (null == e) return {};
      var t, o, r = {},
        a = Object.keys(e);
      for (o = 0; o < a.length; o++) t = a[o], n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (o = 0; o < a.length; o++) t = a[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["onClick"]);
  let {
    parentAnalyticsLocation: _
  } = (0, a.ZP)();
  return (0, o.jsx)(c.Z, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        o = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), o.forEach(function(n) {
        var o;
        o = t[n], n in e ? Object.defineProperty(e, n, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = o
      })
    }
    return e
  }({
    label: l.intl.string(l.t["UKOtz+"]),
    iconComponent: r.xhG,
    tooltipPosition: "bottom",
    onClick: e => {
      (0, i.v)(_, i.d.MORE), n(e)
    }
  }, t))
}