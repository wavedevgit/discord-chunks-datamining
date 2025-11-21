/** Chunk was on web.js **/
/** chunk id: 237031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => _,
  v: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk1870 = require("./1870.js"),
  Chunk724994 = require("./724994.js"),
  Chunk215023 = require("./215023.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = "collectibles shop product details modal",
  _ = e => {
    let {
      product: t,
      category: l,
      shouldCheckoutWithOrbs: u,
      analyticsSource: _,
      analyticsLocations: p,
      returnRef: h,
      tab: m,
      rentalDuration: g
    } = e;
    if (s.y8.some(e => {
        let {
          rewardSkuId: n
        } = e;
        return n === t.skuId
      })) {
      let {
        isPurchased: e
      } = (0, o.U)(a.Z, t);
      if (!e) return
    }(0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("78825"), n.e("6377")]).then(n.bind(n, 702370));
      return n => (0, r.jsx)(e, d(c({}, n), {
        product: t,
        category: l,
        shouldCheckoutWithOrbs: u,
        analyticsSource: _,
        analyticsLocations: p,
        returnRef: h,
        tab: m,
        rentalDuration: g
      }))
    }, {
      modalKey: f
    })
  },
  p = () => {
    (0, Chunk481060.Mr3)(f)
  }