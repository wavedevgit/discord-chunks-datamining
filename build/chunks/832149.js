/** Chunk was on 76282 **/
n.d(t, {
  Z: () => o
});
var r = n(200651);
n(192379);
var i = n(481060);
let o = e => {
  let {
    product: t,
    analyticsLocations: o,
    overrideTitle: l,
    overrideDescription: a,
    shouldShowPromotionalExperience: s,
    onCloseCallback: c
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
      analyticsLocations: o,
      overrideTitle: l,
      overrideDescription: a,
      shouldShowPromotionalExperience: s
    }, n))
  }, {
    onCloseCallback: c
  })
}