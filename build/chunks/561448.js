/** Chunk was on web.js **/
/** chunk id: 561448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ho: () => u,
  Hx: () => g,
  hR: () => b,
  lS: () => E,
  qH: () => y
}), require("./388685.js");
var Chunk409813 = require("./409813.js"),
  Chunk622999 = require("./622999.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");
let s = new Set([Chunk231338.He.CARD, Chunk231338.He.PAYMENT_REQUEST, Chunk231338.He.PAYPAL]),
  l = new Set([Chunk231338.He.IDEAL, Chunk231338.He.GOPAY_WALLET, Chunk231338.He.KAKAOPAY, Chunk231338.He.VENMO, Chunk231338.He.CASH_APP, Chunk231338.He.GCASH, Chunk231338.He.PAYSAFE_CARD, Chunk231338.He.GRABPAY_MY, Chunk231338.He.MOMO_WALLET]),
  c = {
    [Chunk231338.He.PAYPAL]: {
      paymentSourceType: Chunk231338.He.PAYPAL,
      liveId: "cpmt_1RbPZnCR4aIufmH2qyrDhNFa",
      testId: "cpmt_1RRMZZCR4aIufmH2ZzcE5aS4",
      subtitleTranslationKey: Chunk388032.t.Djzd7L,
      isRegionalPaymentMethod: false,
      toStep: Chunk409813.h8.PAYPAL_INFORMATION
    },
    [Chunk231338.He.VENMO]: {
      paymentSourceType: Chunk231338.He.VENMO,
      liveId: "cpmt_1SNGR1CR4aIufmH2OyvrvPHn",
      testId: "cpmt_1SN3ZeCR4aIufmH2Ak0G4dGD",
      subtitleTranslationKey: Chunk388032.t["4KoTLM"],
      isRegionalPaymentMethod: true,
      toStep: Chunk409813.h8.VENMO_INFORMATION
    },
    [Chunk231338.He.CASH_APP]: {
      paymentSourceType: Chunk231338.He.CASH_APP,
      liveId: "cpmt_1SNGSMCR4aIufmH2x3oZxmWO",
      testId: "cpmt_1SNF4fCR4aIufmH2LJUAvNQh",
      subtitleTranslationKey: Chunk388032.t["9ALP8w"],
      isRegionalPaymentMethod: true,
      toStep: Chunk409813.h8.CASH_APP_INFORMATION
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
      liveId: "cpmt_1SNzmCCR4aIufmH2C8zATYJI",
      testId: "cpmt_1ReOr3CR4aIufmH29WgZlgkT",
      subtitleTranslationKey: Chunk388032.t.CSVexi,
      isRegionalPaymentMethod: true
    },
    [Chunk231338.He.GCASH]: {
      paymentSourceType: Chunk231338.He.GCASH,
      liveId: "cpmt_1SNzmeCR4aIufmH2v4MZH92s",
      testId: "cpmt_1SNz6wCR4aIufmH2TaWNlg1v",
      subtitleTranslationKey: Chunk388032.t.PjehcF,
      isRegionalPaymentMethod: true
    },
    [Chunk231338.He.PAYSAFE_CARD]: {
      paymentSourceType: Chunk231338.He.PAYSAFE_CARD,
      liveId: "cpmt_1SNzmsCR4aIufmH2qIXwMUK4",
      testId: "cpmt_1SNzBTCR4aIufmH2OtCsCtAs",
      subtitleTranslationKey: Chunk388032.t.boznHN,
      isRegionalPaymentMethod: true
    },
    [Chunk231338.He.GRABPAY_MY]: {
      paymentSourceType: Chunk231338.He.GRABPAY_MY,
      liveId: "cpmt_1SNznNCR4aIufmH2WmA6DMWd",
      testId: "cpmt_1SNzhoCR4aIufmH2jDETkgfZ",
      subtitleTranslationKey: Chunk388032.t.T5davE,
      isRegionalPaymentMethod: true
    },
    [Chunk231338.He.MOMO_WALLET]: {
      paymentSourceType: Chunk231338.He.MOMO_WALLET,
      liveId: "cpmt_1SNznaCR4aIufmH2wong8Fun",
      testId: "cpmt_1SNzGhCR4aIufmH21EMOA2P3",
      subtitleTranslationKey: Chunk388032.t.J0A1Vk,
      isRegionalPaymentMethod: true
    }
  },
  u = {
    [Chunk231338.He.CARD]: "card",
    [Chunk231338.He.IDEAL]: "ideal",
    [Chunk231338.He.PAYPAL]: "paypal",
    [Chunk231338.He.VENMO]: "venmo",
    [Chunk231338.He.CASH_APP]: "cashapp",
    [Chunk231338.He.GOPAY_WALLET]: "gopay",
    [Chunk231338.He.KAKAOPAY]: "kakaopay",
    [Chunk231338.He.GCASH]: "gcash",
    [Chunk231338.He.PAYSAFE_CARD]: "paysafecard",
    [Chunk231338.He.GRABPAY_MY]: "grabpay",
    [Chunk231338.He.MOMO_WALLET]: "momo"
  },
  d = (e, t) => {
    let n = c[e];
    return "live" === t ? n.liveId : n.testId
  };

function f(e) {
  let t = {};
  for (let n of Object.values(c)) {
    let r = d(n.paymentSourceType, e);
    null != r && (t[r] = n.paymentSourceType)
  }
  return t
}
let _ = {
  unknown: f("test"),
  test: f("test"),
  live: f("live")
};

function p(e) {
  return Object.values(c).map(t => ({
    id: d(t.paymentSourceType, e),
    options: {
      type: "static",
      subtitle: o.intl.string(t.subtitleTranslationKey)
    },
    isRegionalPaymentMethod: t.isRegionalPaymentMethod,
    isStaffOnly: t.isStaffOnly,
    paymentSourceType: t.paymentSourceType
  })).filter(e => null != e.id)
}
let h = {
  unknown: p("test"),
  test: p("test"),
  live: p("live")
};

function m(e) {
  return e in c
}

function g(e) {
  if (m(e)) {
    var t;
    return null != (t = c[e].toStep) ? t : null
  }
  return null
}
let E = (e, t) => h[(0, i.rI)()].filter(n => (!n.isStaffOnly || !!t) && (!n.isRegionalPaymentMethod || !!e.includes(n.paymentSourceType))).map(e => {
    let {
      id: t,
      options: n
    } = e;
    return {
      id: t,
      options: n
    }
  }),
  b = e => {
    if ("card" === e || "link_card_brand" === e) return a.He.CARD;
    if ("ideal" === e) return a.He.IDEAL;
    if ("google_pay" === e || "apple_pay" === e) return a.He.PAYMENT_REQUEST;
    let t = _[(0, i.rI)()];
    return e in t ? t[e] : null
  };

function y(e) {
  if (s.has(e)) returntrue;
  let t = (0, i.rI)();
  return (!m(e) || "live" !== t || null != d(e, t)) && l.has(e)
}