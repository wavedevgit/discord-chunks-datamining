/** Chunk was on 34712 **/
/** chunk id: 522182, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  var {
    onClose: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, o, l = function(e, n) {
      if (null == e) return {};
      var t, o, l = {},
        r = Object.keys(e);
      for (o = 0; o < r.length; o++) t = r[o], n.indexOf(t) >= 0 || (l[t] = e[t]);
      return l
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (o = 0; o < r.length; o++) t = r[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
    }
    return l
  }(e, ["onClose"]);
  let {
    analyticsLocations: f,
    newestAnalyticsLocation: p
  } = (0, i.ZP)(), m = (0, l.e7)([s.Z], () => s.Z.hasSaveablePendingChanges());
  return (0, o.jsx)(d.ef, function(e) {
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
    action: "VISIT_SHOP",
    icon: r.EOn,
    tooltipText: u.intl.string(u.t.b2d0Nz),
    themeColor: "secondary",
    onClick: () => {
      if (m) return void a.Z.notifyPendingWidgets();
      (0, c.mK)({
        analyticsLocations: f,
        openInLayer: false,
        analyticsSource: p
      }), null == n || n()
    }
  }, t))
}