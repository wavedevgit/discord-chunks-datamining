/** Chunk was on 16811 **/
/** chunk id: 522182, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  var {
    onClose: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, r, o = function(e, n) {
      if (null == e) return {};
      var t, r, o = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) t = l[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
  }(e, ["onClose"]);
  let {
    analyticsLocations: s,
    newestAnalyticsLocation: d
  } = (0, l.ZP)();
  return (0, r.jsx)(c.ef, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({
    action: "VISIT_SHOP",
    icon: o.EOn,
    tooltipText: a.intl.string(a.t.b2d0Nz),
    themeColor: "secondary",
    onClick: () => {
      (0, i.mK)({
        analyticsLocations: s,
        openInLayer: false,
        analyticsSource: d
      }), null == n || n()
    }
  }, t))
}