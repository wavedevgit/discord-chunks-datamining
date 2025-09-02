/** Chunk was on 31553 **/
/** chunk id: 522182, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e) {
  var {
    onClose: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, l, r = function(e, n) {
      if (null == e) return {};
      var t, l, r = {},
        i = Object.keys(e);
      for (l = 0; l < i.length; l++) t = i[l], n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (l = 0; l < i.length; l++) t = i[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["onClose"]);
  let {
    analyticsLocations: m,
    newestAnalyticsLocation: p
  } = (0, o.ZP)(), f = (0, r.e7)([c.Z], () => c.Z.hasSaveablePendingChanges());
  return (0, l.jsx)(d.ef, function(e) {
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
    icon: i.EOn,
    tooltipText: u.intl.string(u.t.b2d0Nz),
    themeColor: "secondary",
    onClick: () => {
      if (f) return void a.Z.notifyPendingWidgets();
      (0, s.mK)({
        analyticsLocations: m,
        openInLayer: false,
        analyticsSource: p
      }), null == n || n()
    }
  }, t))
}