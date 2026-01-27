/** Chunk was on web.js **/
/** chunk id: 68231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GC: () => h,
  kh: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk648335 = require("./648335.js"),
  Chunk166532 = require("./166532.js"),
  Chunk818348 = require("./818348.js");
let s = [Chunk166532.pn.PAYMENT_TYPE],
  l = [Chunk166532.pn.PAYMENT_TYPE, Chunk166532.pn.CREDIT_CARD_INFORMATION, Chunk166532.pn.ADDRESS],
  c = [Chunk166532.pn.PAYMENT_TYPE, Chunk166532.pn.PAYPAL_INFORMATION, Chunk166532.pn.ADDRESS],
  u = [Chunk166532.pn.PAYMENT_TYPE, Chunk166532.pn.VENMO_INFORMATION, Chunk166532.pn.ADDRESS],
  d = [Chunk166532.pn.PAYMENT_TYPE, Chunk166532.pn.CASH_APP_INFORMATION, Chunk166532.pn.ADDRESS],
  f = [Chunk166532.pn.PAYMENT_TYPE, Chunk166532.pn.PRZELEWY24_INFORMATION, Chunk166532.pn.ADDRESS],
  p = [Chunk166532.pn.PAYMENT_TYPE, Chunk166532.pn.EPS_INFORMATION, Chunk166532.pn.ADDRESS],
  _ = [Chunk166532.pn.PAYMENT_TYPE, Chunk166532.pn.IDEAL_INFORMATION, Chunk166532.pn.ADDRESS],
  h = [Chunk166532.pn.PAYMENT_TYPE, Chunk166532.pn.ADDRESS],
  m = {
    SHARED_ADD_PAYMENT_STEPS: s,
    SHARED_CREDIT_CARD_STEPS: l,
    SHARED_PAYPAL_STEPS: c,
    SHARED_VENMO_STEPS: u,
    SHARED_PRZELEWY24_STEPS: f,
    SHARED_EPS_STEPS: p,
    SHARED_IDEAL_STEPS: _,
    SHARED_CASH_APP_STEPS: d,
    SHARED_TYPE_AND_ADDRESS_STEPS: h
  },
  g = {
    SHARED_ADD_PAYMENT_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT],
    SHARED_CREDIT_CARD_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT, Chunk166532.pn.ADDRESS],
    SHARED_PAYPAL_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT, Chunk166532.pn.PAYPAL_INFORMATION, Chunk166532.pn.ADDRESS],
    SHARED_VENMO_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT, Chunk166532.pn.VENMO_INFORMATION, Chunk166532.pn.ADDRESS],
    SHARED_CASH_APP_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT, Chunk166532.pn.CASH_APP_INFORMATION, Chunk166532.pn.ADDRESS],
    SHARED_PRZELEWY24_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT, Chunk166532.pn.PRZELEWY24_INFORMATION, Chunk166532.pn.ADDRESS],
    SHARED_EPS_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT, Chunk166532.pn.EPS_INFORMATION, Chunk166532.pn.ADDRESS],
    SHARED_IDEAL_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT, Chunk166532.pn.ADDRESS],
    SHARED_TYPE_AND_ADDRESS_STEPS: [Chunk166532.pn.PAYMENT_ELEMENT, Chunk166532.pn.ADDRESS]
  },
  E = e => null == e || e === o.he.UNKNOWN || (0, i.PE)(e),
  y = (e, t) => {
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
  b = e => {
    let {
      prependSteps: t,
      appendSteps: n,
      paymentElementsEnabled: i
    } = e, [a, s, l, c, u, d, f, p, _, h] = (0, r.useMemo)(() => y([{
      sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS",
      methodType: o.he.UNKNOWN
    }, {
      sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS",
      methodType: o.he.PAYMENT_REQUEST
    }, {
      sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS"
    }, {
      sharedStepsKey: "SHARED_CREDIT_CARD_STEPS",
      methodType: o.he.CARD
    }, {
      sharedStepsKey: "SHARED_PAYPAL_STEPS",
      methodType: o.he.PAYPAL
    }, {
      sharedStepsKey: "SHARED_IDEAL_STEPS",
      methodType: o.he.IDEAL
    }, {
      sharedStepsKey: "SHARED_VENMO_STEPS",
      methodType: o.he.VENMO
    }, {
      sharedStepsKey: "SHARED_PRZELEWY24_STEPS",
      methodType: o.he.PRZELEWY24
    }, {
      sharedStepsKey: "SHARED_EPS_STEPS",
      methodType: o.he.EPS
    }, {
      sharedStepsKey: "SHARED_CASH_APP_STEPS",
      methodType: o.he.CASH_APP
    }], {
      prependSteps: t,
      appendSteps: n,
      paymentElementsEnabled: i
    }), [t, n, i]), m = (0, r.useMemo)(() => ({
      [o.he.CARD]: c,
      [o.he.PAYPAL]: u,
      [o.he.PAYMENT_REQUEST]: s,
      [o.he.VENMO]: f,
      [o.he.CASH_APP]: h,
      [o.he.IDEAL]: d,
      [o.he.PRZELEWY24]: p,
      [o.he.EPS]: _,
      [o.he.BANCONTACT]: a,
      [o.he.GOPAY_WALLET]: a,
      [o.he.KAKAOPAY]: a,
      [o.he.GCASH]: a,
      [o.he.PAYSAFE_CARD]: a,
      [o.he.GRABPAY_MY]: a,
      [o.he.MOMO_WALLET]: a
    }), [a, c, u, f, s, d, h, p, _]);
    return {
      DEFAULT_PAYMENT_ELEMENT_STEPS: a,
      CREDIT_CARD_STEPS: c,
      PAYPAL_STEPS: u,
      IDEAL_STEPS: d,
      PAYMENT_REQUEST_STEPS: s,
      VENMO_STEPS: f,
      ADD_PAYMENT_STEPS: l,
      PRZELEWY24_STEPS: p,
      EPS_STEPS: _,
      CASH_APP_STEPS: h,
      PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m
    }
  }