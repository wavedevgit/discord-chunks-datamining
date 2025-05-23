/** Chunk was on 54433 **/
n.d(t, {
  Z: () => r
});
var i = n(255367);
n(73800);
var l = n(481060),
  s = n(215023);
let r = e => {
  let {
    product: t,
    analyticsLocations: r,
    overrideTitle: a,
    overrideDescription: C,
    shouldShowPromotionalExperience: o,
    shouldCheckoutWithOrbs: d,
    onCloseCallback: c,
    itemConsumed: u,
    purchaseType: p = s.o8.FIAT
  } = e;
  (0, l.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 331042));
    return n => (0, i.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = i
        })
      }
      return e
    }({
      product: t,
      analyticsLocations: r,
      overrideTitle: a,
      overrideDescription: C,
      shouldShowPromotionalExperience: o,
      shouldCheckoutWithOrbs: d,
      itemConsumed: u,
      purchaseType: p
    }, n))
  }, {
    onCloseCallback: c
  })
}