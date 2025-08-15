/** Chunk was on 86282 **/
/** chunk id: 938337, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  i: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512100 = require("./512100.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  var {
    appId: n,
    skuId: l
  } = e, c = function(e, n) {
    if (null == e) return {};
    var l, t, r = function(e, n) {
      if (null == e) return {};
      var l, t, r = {},
        i = Object.keys(e);
      for (t = 0; t < i.length; t++) l = i[t], n.indexOf(l) >= 0 || (r[l] = e[l]);
      return r
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (t = 0; t < i.length; t++) l = i[t], !(n.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l])
    }
    return r
  }(e, ["appId", "skuId"]);
  let {
    analyticsLocations: d
  } = (0, s.ZP)();
  return r.useEffect(() => {
    a.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
      application_id: n,
      sku_id: l,
      location_stack: d
    })
  }, [d, n, l]), (0, t.jsx)(i.u, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var l = null != arguments[n] ? arguments[n] : {},
        t = Object.keys(l);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
        return Object.getOwnPropertyDescriptor(l, e).enumerable
      }))), t.forEach(function(n) {
        var t;
        t = l[n], n in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = t
      })
    }
    return e
  }({}, c))
}