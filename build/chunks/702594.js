/** Chunk was on web.js **/
/** chunk id: 702594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hl: () => h,
  gj: () => y
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk561448 = require("./561448.js"),
  Chunk409813 = require("./409813.js"),
  Chunk231338 = require("./231338.js");
let s = [Chunk409813.h8.PAYMENT_TYPE],
  l = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.CREDIT_CARD_INFORMATION, Chunk409813.h8.ADDRESS],
  c = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.PAYPAL_INFORMATION, Chunk409813.h8.ADDRESS],
  u = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.VENMO_INFORMATION, Chunk409813.h8.ADDRESS],
  d = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.CASH_APP_INFORMATION, Chunk409813.h8.ADDRESS],
  f = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.PRZELEWY24_INFORMATION, Chunk409813.h8.ADDRESS],
  _ = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.EPS_INFORMATION, Chunk409813.h8.ADDRESS],
  p = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.IDEAL_INFORMATION, Chunk409813.h8.ADDRESS],
  h = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.ADDRESS],
  m = {
    SHARED_ADD_PAYMENT_STEPS: s,
    SHARED_CREDIT_CARD_STEPS: l,
    SHARED_PAYPAL_STEPS: c,
    SHARED_VENMO_STEPS: u,
    SHARED_PRZELEWY24_STEPS: f,
    SHARED_EPS_STEPS: _,
    SHARED_IDEAL_STEPS: p,
    SHARED_CASH_APP_STEPS: d,
    SHARED_TYPE_AND_ADDRESS_STEPS: h
  },
  g = {
    SHARED_ADD_PAYMENT_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT],
    SHARED_CREDIT_CARD_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT, Chunk409813.h8.ADDRESS],
    SHARED_PAYPAL_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT, Chunk409813.h8.PAYPAL_INFORMATION, Chunk409813.h8.ADDRESS],
    SHARED_VENMO_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT, Chunk409813.h8.VENMO_INFORMATION, Chunk409813.h8.ADDRESS],
    SHARED_CASH_APP_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT, Chunk409813.h8.CASH_APP_INFORMATION, Chunk409813.h8.ADDRESS],
    SHARED_PRZELEWY24_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT, Chunk409813.h8.PRZELEWY24_INFORMATION, Chunk409813.h8.ADDRESS],
    SHARED_EPS_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT, Chunk409813.h8.EPS_INFORMATION, Chunk409813.h8.ADDRESS],
    SHARED_IDEAL_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT, Chunk409813.h8.ADDRESS],
    SHARED_TYPE_AND_ADDRESS_STEPS: [Chunk409813.h8.PAYMENT_ELEMENT, Chunk409813.h8.ADDRESS]
  },
  E = e => null == e || e === o.He.UNKNOWN || (0, i.qH)(e),
  b = (e, t) => {
    let {
      prependSteps: n,
      appendSteps: r,
      paymentElementsEnabled: i
    } = t;
    return e.map(e => {
      let {
        sharedStepsKey: t,
        methodType: a
      } = e;
      return {
        steps: [...n, ...i && E(a) ? g[t] : m[t], ...r],
        methodType: a
      }
    })
  },
  y = e => {
    let {
      prependSteps: t,
      appendSteps: n,
      paymentElementsEnabled: i
    } = e, [a, s, l, c, u, d, f, _, p, h] = (0, r.useMemo)(() => b([{
      sharedStepsKey: "SHARED_CREDIT_CARD_STEPS",
      methodType: o.He.CARD
    }, {
      sharedStepsKey: "SHARED_PAYPAL_STEPS",
      methodType: o.He.PAYPAL
    }, {
      sharedStepsKey: "SHARED_IDEAL_STEPS",
      methodType: o.He.IDEAL
    }, {
      sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS",
      methodType: o.He.UNKNOWN
    }, {
      sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS",
      methodType: o.He.PAYMENT_REQUEST
    }, {
      sharedStepsKey: "SHARED_VENMO_STEPS",
      methodType: o.He.VENMO
    }, {
      sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS"
    }, {
      sharedStepsKey: "SHARED_PRZELEWY24_STEPS",
      methodType: o.He.PRZELEWY24
    }, {
      sharedStepsKey: "SHARED_EPS_STEPS",
      methodType: o.He.EPS
    }, {
      sharedStepsKey: "SHARED_CASH_APP_STEPS",
      methodType: o.He.CASH_APP
    }], {
      prependSteps: t,
      appendSteps: n,
      paymentElementsEnabled: i
    }), [t, n, i]), m = (0, r.useMemo)(() => ({
      [o.He.CARD]: a,
      [o.He.PAYPAL]: s,
      [o.He.PAYMENT_REQUEST]: u,
      [o.He.IDEAL]: l,
      [o.He.VENMO]: d,
      [o.He.CASH_APP]: h,
      [o.He.GOPAY_WALLET]: c,
      [o.He.KAKAOPAY]: c,
      [o.He.GCASH]: c,
      [o.He.PAYSAFE_CARD]: c,
      [o.He.GRABPAY_MY]: c,
      [o.He.MOMO_WALLET]: c
    }), [a, s, l, u, c, d, h]);
    return {
      CREDIT_CARD_STEPS: a,
      PAYPAL_STEPS: s,
      IDEAL_STEPS: l,
      DEFAULT_PAYMENT_ELEMENT_STEPS: c,
      PAYMENT_REQUEST_STEPS: u,
      VENMO_STEPS: d,
      ADD_PAYMENT_STEPS: f,
      PRZELEWY24_STEPS: _,
      EPS_STEPS: p,
      CASH_APP_STEPS: h,
      PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m
    }
  }