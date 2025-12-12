/** Chunk was on 93979 **/
/** chunk id: 522182, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  var {
    onClose: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, l, i = function(e, n) {
      if (null == e) return {};
      var t, l, i = {},
        o = Object.keys(e);
      for (l = 0; l < o.length; l++) t = o[l], n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (l = 0; l < o.length; l++) t = o[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
  }(e, ["onClose"]);
  let {
    analyticsLocations: m,
    newestAnalyticsLocation: f
  } = (0, r.ZP)(), p = (0, i.e7)([c.Z], () => c.Z.hasSaveablePendingChanges());
  return (0, l.jsx)(d.pt, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({
    action: "VISIT_SHOP",
    icon: o.EOn,
    tooltipText: u.intl.string(u.t.b2d0N0),
    onClick: () => {
      if (p) return void a.Z.notifyPendingWidgets();
      (0, s.mK)({
        analyticsLocations: m,
        analyticsSource: f
      }), null == n || n()
    }
  }, t))
}