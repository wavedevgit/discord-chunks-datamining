/** Chunk was on web.js **/
/** chunk id: 832149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk215023 = require("./215023.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let l = e => {
  let {
    product: t,
    analyticsLocations: a,
    overrideTitle: l,
    overrideDescription: c,
    shouldShowPromotionalExperience: u,
    onCloseCallback: d,
    itemConsumed: f,
    purchaseType: p = o.o8.FIAT,
    overrideGraphic: _,
    rentalDuration: m,
    rentalExpiresAt: h
  } = e;
  (0, i.ZDy)(async () => {
    if (t.skuId === o.Vt.FRACTIONAL_PREMIUM || t.skuId === o.Vt.ORB_PROFILE_BADGE) {
      let {
        default: e
      } = await Promise.all([n.e("30141"), n.e("77198")]).then(n.bind(n, 509428));
      return n => (0, r.jsx)(e, s({
        product: t,
        analyticsLocations: a,
        overrideTitle: l,
        overrideDescription: c,
        itemConsumed: f,
        purchaseType: o.o8.ORB
      }, n))
    }
    let {
      default: e
    } = await Promise.all([n.e("30141"), n.e("87624")]).then(n.bind(n, 331042));
    return n => (0, r.jsx)(e, s({
      product: t,
      analyticsLocations: a,
      overrideTitle: l,
      overrideDescription: c,
      shouldShowPromotionalExperience: u,
      purchaseType: p,
      overrideGraphic: _,
      rentalDuration: m,
      rentalExpiresAt: h
    }, n))
  }, {
    onCloseCallback: d
  })
}