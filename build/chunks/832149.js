/** Chunk was on 64123 **/
"use strict";
r.d(t, {
  Z: () => a
});
var n = r(255367);
r(73800);
var i = r(481060),
  l = r(215023);
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
      overrideTitle: o,
      overrideDescription: s,
      shouldShowPromotionalExperience: c,
      shouldCheckoutWithOrbs: u,
      itemConsumed: p,
      purchaseType: v
    }, r))
  }, {
    onCloseCallback: d
  })
}