/** Chunk was on web.js **/
/** chunk id: 61750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk758836 = require("./758836.js");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}
let l = e => {
  let {
    product: t,
    analyticsLocations: o,
    overrideTitle: l,
    overrideDescription: c,
    shouldShowPromotionalExperience: u,
    onCloseCallback: d,
    itemConsumed: f,
    purchaseType: p = a.gs.FIAT,
    overrideGraphic: _,
    rentalDuration: h,
    rentalExpiresAt: m
  } = e;
  (0, i.mMO)(async () => {
    if (t.skuId === a.Dp.FRACTIONAL_PREMIUM || t.skuId === a.Dp.ORB_PROFILE_BADGE) {
      let {
        default: e
      } = await n.e("95481").then(n.bind(n, 328064));
      return n => (0, r.jsx)(e, s({
        product: t,
        analyticsLocations: o,
        overrideTitle: l,
        overrideDescription: c,
        itemConsumed: f,
        purchaseType: a.gs.ORB
      }, n))
    }
    let {
      default: e
    } = await n.e("92643").then(n.bind(n, 393870));
    return n => (0, r.jsx)(e, s({
      product: t,
      analyticsLocations: o,
      overrideTitle: l,
      overrideDescription: c,
      shouldShowPromotionalExperience: u,
      purchaseType: p,
      overrideGraphic: _,
      rentalDuration: h,
      rentalExpiresAt: m
    }, n))
  }, {
    onCloseCallback: d
  })
}