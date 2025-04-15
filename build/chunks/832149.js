/** Chunk was on 20267 **/
r.d(t, {
  Z: () => a
});
var n = r(200651);
r(192379);
var o = r(481060),
  i = r(215023);
let a = e => {
  let {
    product: t,
    analyticsLocations: a,
    overrideTitle: c,
    overrideDescription: l,
    shouldShowPromotionalExperience: u,
    onCloseCallback: f,
    itemConsumed: s,
    purchaseType: p = i.o8.FIAT
  } = e;
  (0, o.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(r.bind(r, 331042));
    return r => (0, n.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n
        })
      }
      return e
    }({
      product: t,
      analyticsLocations: a,
      overrideTitle: c,
      overrideDescription: l,
      shouldShowPromotionalExperience: u,
      itemConsumed: s,
      purchaseType: p
    }, r))
  }, {
    onCloseCallback: f
  })
}