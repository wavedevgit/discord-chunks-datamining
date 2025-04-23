/** Chunk was on 43498 **/
n.d(t, {
  Z: () => o
});
var i = n(200651);
n(192379);
var r = n(481060),
  l = n(215023);
let o = e => {
  let {
    product: t,
    analyticsLocations: o,
    overrideTitle: s,
    overrideDescription: a,
    shouldShowPromotionalExperience: c,
    onCloseCallback: u,
    itemConsumed: d,
    purchaseType: h = l.o8.FIAT
  } = e;
  (0, r.ZDy)(async () => {
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
      analyticsLocations: o,
      overrideTitle: s,
      overrideDescription: a,
      shouldShowPromotionalExperience: c,
      itemConsumed: d,
      purchaseType: h
    }, n))
  }, {
    onCloseCallback: u
  })
}