/** Chunk was on web.js **/
/** chunk id: 572595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => p,
  t: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk4227 = require("./4227.js"),
  Chunk466459 = require("./466459.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = "collectibles shop product details modal",
  f = e => {
    let {
      product: t,
      category: s,
      shouldCheckoutWithOrbs: c,
      analyticsSource: f,
      analyticsLocations: p,
      returnRef: _,
      tab: h,
      rentalDuration: m
    } = e;
    if (t.isCategoryReward) {
      let {
        isPurchased: e
      } = (0, o.o)(a.A, t);
      if (!e) return
    }(0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("77313").then(n.bind(n, 929400));
      return n => (0, r.jsx)(e, u(l({}, n), {
        product: t,
        category: s,
        shouldCheckoutWithOrbs: c,
        analyticsSource: f,
        analyticsLocations: p,
        returnRef: _,
        tab: h,
        rentalDuration: m
      }))
    }, {
      modalKey: d
    })
  },
  p = () => {
    (0, i.OoC)(d)
  }