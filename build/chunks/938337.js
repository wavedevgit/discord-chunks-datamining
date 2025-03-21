/** Chunk was on 86282 **/
n.d(l, {
  i: () => c
});
var t = n(200651),
  r = n(192379),
  i = n(512100),
  s = n(906732),
  a = n(626135),
  o = n(981631);

function c(e) {
  var {
    appId: l,
    skuId: n
  } = e, c = function(e, l) {
    if (null == e) return {};
    var n, t, r = function(e, l) {
      if (null == e) return {};
      var n, t, r = {},
        i = Object.keys(e);
      for (t = 0; t < i.length; t++) n = i[t], l.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, l);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (t = 0; t < i.length; t++) n = i[t], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["appId", "skuId"]);
  let {
    analyticsLocations: d
  } = (0, s.ZP)();
  return r.useEffect(() => {
    a.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
      application_id: l,
      sku_id: n,
      location_stack: d
    })
  }, [d, l, n]), (0, t.jsx)(i.u, function(e) {
    for (var l = 1; l < arguments.length; l++) {
      var n = null != arguments[l] ? arguments[l] : {},
        t = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), t.forEach(function(l) {
        var t;
        t = n[l], l in e ? Object.defineProperty(e, l, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = t
      })
    }
    return e
  }({}, c))
}