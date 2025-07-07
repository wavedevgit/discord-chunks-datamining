/** Chunk was on 64123 **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(255367);
n(73800);
var i = n(481060),
  l = n(215023);
let a = e => {
  let {
    product: t,
    analyticsLocations: a,
    overrideTitle: o,
    overrideDescription: s,
    shouldShowPromotionalExperience: c,
    shouldCheckoutWithOrbs: u,
    onCloseCallback: d,
    itemConsumed: p,
    purchaseType: v = l.o8.FIAT
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 331042));
    return n => (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      product: t,
      analyticsLocations: a,
      overrideTitle: o,
      overrideDescription: s,
      shouldShowPromotionalExperience: c,
      shouldCheckoutWithOrbs: u,
      itemConsumed: p,
      purchaseType: v
    }, n))
  }, {
    onCloseCallback: d
  })
}