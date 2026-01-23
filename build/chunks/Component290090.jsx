/** Chunk was on 64228 **/
/** chunk id: 290090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk958805 = require("./958805.js"),
  Chunk61881 = require("./61881.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    onClose: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, l, i, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var n, l, i = {},
          r = Object.getOwnPropertyNames(e);
        for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
    return r
  }(e, ["onClose"]), {
    analyticsLocations: p,
    newestAnalyticsLocation: m
  } = (0, s.Ay)(), f = (0, i.bG)([c.A], () => c.A.hasUnsavedChanges());
  return (0, l.jsx)(d.q3, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({
    action: "VISIT_SHOP",
    icon: r.U1X,
    tooltipText: u.intl.string(u.t.b2d0N0),
    onClick: () => {
      f ? a.A.notifyUnsavedWidgets() : ((0, o.Cz)({
        analyticsLocations: p,
        analyticsSource: m
      }), null == t || t())
    }
  }, n))
}