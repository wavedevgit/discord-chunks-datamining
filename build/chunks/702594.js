/** Chunk was on web.js **/
/** chunk id: 702594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hl: () => m,
  gj: () => y
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk637286 = require("./637286.js"),
  Chunk409813 = require("./409813.js"),
  Chunk231338 = require("./231338.js");
let s = [Chunk409813.h8.PAYMENT_TYPE],
  l = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.CREDIT_CARD_INFORMATION, Chunk409813.h8.ADDRESS],
  c = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.PAYPAL_INFORMATION, Chunk409813.h8.ADDRESS],
  u = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.VENMO_INFORMATION, Chunk409813.h8.ADDRESS],
  d = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.CASH_APP_INFORMATION, Chunk409813.h8.ADDRESS],
  f = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.PRZELEWY24_INFORMATION, Chunk409813.h8.ADDRESS],
  p = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.EPS_INFORMATION, Chunk409813.h8.ADDRESS],
  _ = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.IDEAL_INFORMATION, Chunk409813.h8.ADDRESS],
  m = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.ADDRESS],
  h = {
    SHARED_ADD_PAYMENT_STEPS: s,
    SHARED_CREDIT_CARD_STEPS: l,
    SHARED_PAYPAL_STEPS: c,
    SHARED_VENMO_STEPS: u,
    SHARED_PRZELEWY24_STEPS: f,
    SHARED_EPS_STEPS: p,
    SHARED_IDEAL_STEPS: _,
    SHARED_CASH_APP_STEPS: d,
    SHARED_TYPE_AND_ADDRESS_STEPS: m
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
  E = e => null == e || e === a.He.UNKNOWN || (0, i.qH)(e),
  b = (e, t) => {
    let {
      prependSteps: n,
      appendSteps: r,
      paymentElementsEnabled: i
    } = t;
    return e.map(e => {
      let {
        sharedStepsKey: t,
        methodType: o
      } = e;
      return {
        steps: [...n, ...i && E(o) ? g[t] : h[t], ...r],
        methodType: o
      }
    })
  },
  y = e => {
    let {
      prependSteps: t,
      appendSteps: n,
      paymentElementsEnabled: i
    } = e, [o, s, l, c, u, d, f, p, _, m] = (0, r.useMemo)(() => b([{
      sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS",
      methodType: a.He.UNKNOWN
    }, {
      sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS",
      methodType: a.He.PAYMENT_REQUEST
    }, {
      sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS"
    }, {
      sharedStepsKey: "SHARED_CREDIT_CARD_STEPS",
      methodType: a.He.CARD
    }, {
      sharedStepsKey: "SHARED_PAYPAL_STEPS",
      methodType: a.He.PAYPAL
    }, {
      sharedStepsKey: "SHARED_IDEAL_STEPS",
      methodType: a.He.IDEAL
    }, {
      sharedStepsKey: "SHARED_VENMO_STEPS",
      methodType: a.He.VENMO
    }, {
      sharedStepsKey: "SHARED_PRZELEWY24_STEPS",
      methodType: a.He.PRZELEWY24
    }, {
      sharedStepsKey: "SHARED_EPS_STEPS",
      methodType: a.He.EPS
    }, {
      sharedStepsKey: "SHARED_CASH_APP_STEPS",
      methodType: a.He.CASH_APP
    }], {
      prependSteps: t,
      appendSteps: n,
      paymentElementsEnabled: i
    }), [t, n, i]), h = (0, r.useMemo)(() => ({
      [a.He.CARD]: c,
      [a.He.PAYPAL]: u,
      [a.He.PAYMENT_REQUEST]: s,
      [a.He.VENMO]: f,
      [a.He.CASH_APP]: m,
      [a.He.IDEAL]: d,
      [a.He.PRZELEWY24]: p,
      [a.He.EPS]: _,
      [a.He.GOPAY_WALLET]: o,
      [a.He.KAKAOPAY]: o,
      [a.He.GCASH]: o,
      [a.He.PAYSAFE_CARD]: o,
      [a.He.GRABPAY_MY]: o,
      [a.He.MOMO_WALLET]: o
    }), [o, c, u, f, s, d, m, p, _]);
    return {
      DEFAULT_PAYMENT_ELEMENT_STEPS: o,
      CREDIT_CARD_STEPS: c,
      PAYPAL_STEPS: u,
      IDEAL_STEPS: d,
      PAYMENT_REQUEST_STEPS: s,
      VENMO_STEPS: f,
      ADD_PAYMENT_STEPS: l,
      PRZELEWY24_STEPS: p,
      EPS_STEPS: _,
      CASH_APP_STEPS: m,
      PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: h
    }
  }