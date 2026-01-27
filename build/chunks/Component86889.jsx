/** Chunk was on 70104 **/
/** chunk id: 86889, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  D: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk217905 = require("./217905.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function c(t) {
  let {
    appId: e,
    skuId: r
  } = t, c = function(t, e) {
    if (null == t) return {};
    var r, n, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(t); l < r.length; l++) n = r[l], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n]);
      return s
    }
    if (s = function(t, e) {
        if (null == t) return {};
        var r, n, l = {},
          s = Object.getOwnPropertyNames(t);
        for (n = 0; n < s.length; n++) r = s[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
        return l
      }(t, e), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(t); l < r.length; l++) n = r[l], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n]);
    return s
  }(t, ["appId", "skuId"]), {
    analyticsLocations: d
  } = (0, i.Ay)();
  return l.useEffect(() => {
    a.default.track(o.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
      application_id: e,
      sku_id: r,
      location_stack: d
    })
  }, [d, e, r]), (0, n.jsx)(s.F, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({}, c))
}