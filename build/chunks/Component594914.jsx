/** Chunk was on web.js **/
/** chunk id: 594914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => p,
  b: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk159351 = require("./159351.js"),
  Chunk667 = require("./667.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  let {
    isGift: u,
    giftRecipient: f,
    giftingOrigin: p
  } = t, {
    analyticsLocations: h
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, m = false, g = (0, i.Z)();
  (0, a.ZDy)(async () => {
    let {
      default: t
    } = await n.e("45227").then(n.bind(n, 556266));
    return n => (0, r.jsx)(t, _(d({}, n), {
      loadId: g,
      applicationId: e.applicationId,
      skuId: e.id,
      analyticsLocations: null != h ? h : [],
      isGift: u,
      giftRecipient: f,
      giftingOrigin: p,
      onComplete: () => {
        m = true
      }
    }))
  }, {
    onCloseCallback: () => {
      m || l.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: g,
        payment_type: c.Zuq[c.GZQ.ONE_TIME],
        is_gift: u,
        sku_id: e.id,
        application_id: e.applicationId,
        location_stack: h,
        sku_product_line: e.productLine
      }), (0, o.fw)(), (0, s.p)()
    },
    modalKey: "slayers-payment-modal"
  })
}

function h() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([require.e("92275"), require.e("21854")]).then(require.bind(require, 211912));
    return t => (0, r.jsx)(e, d({}, t))
  }, {
    modalKey: "slayer-storefront-announcement-modal"
  })
}