/** Chunk was on web.js **/
/** chunk id: 561448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ho: () => m,
  hR: () => u,
  lS: () => y,
  qH: () => _
}), require("./388685.js");
var Chunk622999 = require("./622999.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

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

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = e => {
    if ("card" === e || "link_card_brand" === e) return i.He.CARD;
    if ("ideal" === e) return i.He.IDEAL;
    let t = v[(0, r.rI)()];
    return e in t ? t[e] : null
  },
  d = new Set([Chunk231338.He.CARD, Chunk231338.He.PAYPAL]),
  f = new Set([Chunk231338.He.IDEAL, Chunk231338.He.GOPAY_WALLET, Chunk231338.He.KAKAOPAY]);

function _(e) {
  if (d.has(e)) returntrue;
  let t = (0, r.rI)();
  return (!p(e) || "live" !== t || null != g(e, t)) && f.has(e)
}

function p(e) {
  return e in h
}
let h = {
    [Chunk231338.He.PAYPAL]: {
      paymentSourceType: Chunk231338.He.PAYPAL,
      liveId: "cpmt_1RbPZnCR4aIufmH2qyrDhNFa",
      testId: "cpmt_1RRMZZCR4aIufmH2ZzcE5aS4",
      subtitleTranslationKey: Chunk388032.t.Djzd7L,
      isRegionalPaymentMethod: false
    },
    [Chunk231338.He.GOPAY_WALLET]: {
      paymentSourceType: Chunk231338.He.GOPAY_WALLET,
      liveId: "cpmt_1Re1C5CR4aIufmH2YKUuWN9N",
      testId: "cpmt_1RdkCFCR4aIufmH2CNjO11CE",
      subtitleTranslationKey: Chunk388032.t["43J8JK"],
      isRegionalPaymentMethod: true,
      isStaffOnly: true
    },
    [Chunk231338.He.KAKAOPAY]: {
      paymentSourceType: Chunk231338.He.KAKAOPAY,
      liveId: null,
      testId: "cpmt_1ReOr3CR4aIufmH29WgZlgkT",
      subtitleTranslationKey: Chunk388032.t.CSVexi,
      isRegionalPaymentMethod: true
    }
  },
  m = c(s({}, {
    [Chunk231338.He.CARD]: "card",
    [Chunk231338.He.IDEAL]: "ideal"
  }), {
    [Chunk231338.He.PAYPAL]: "paypal",
    [Chunk231338.He.GOPAY_WALLET]: "gopay",
    [Chunk231338.He.KAKAOPAY]: "kakaopay"
  }),
  g = (e, t) => {
    let n = h[e];
    return "live" === t ? n.liveId : n.testId
  };

function E(e) {
  return Object.values(h).map(t => ({
    id: g(t.paymentSourceType, e),
    options: {
      type: "static",
      subtitle: a.intl.string(t.subtitleTranslationKey)
    },
    isRegionalPaymentMethod: t.isRegionalPaymentMethod,
    isStaffOnly: t.isStaffOnly,
    paymentSourceType: t.paymentSourceType
  })).filter(e => null != e.id)
}
let b = {
    unknown: E("test"),
    test: E("test"),
    live: E("live")
  },
  y = (e, t) => b[(0, r.rI)()].filter(n => (!n.isStaffOnly || !!t) && (!n.isRegionalPaymentMethod || !!e.includes(n.paymentSourceType)));

function O(e) {
  let t = {};
  for (let n of Object.values(h)) {
    let r = g(n.paymentSourceType, e);
    null != r && (t[r] = n.paymentSourceType)
  }
  return t
}
let v = {
  unknown: O("test"),
  test: O("test"),
  live: O("live")
}