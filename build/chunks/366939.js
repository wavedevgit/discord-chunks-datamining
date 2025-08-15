/** Chunk was on web.js **/
/** chunk id: 366939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ld: () => c,
  O5: () => u,
  fG: () => f,
  fw: () => p,
  tq: () => _,
  v4: () => d
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk570140 = require("./570140.js"),
  Chunk74538 = require("./74538.js"),
  Chunk355467 = require("./355467.js"),
  Chunk981631 = require("./981631.js");
async function c(e) {
  let {
    planId: t,
    currency: n,
    paymentSource: r,
    trialId: i,
    code: o,
    metadata: l,
    referralCode: c,
    loadId: u,
    expectedInvoicePrice: d,
    expectedRenewalPrice: f
  } = e;
  a.Z.dispatch({
    type: "PREMIUM_PAYMENT_SUBSCRIBE_START"
  });
  try {
    let e = await s.XW({
      items: [{
        planId: t,
        quantity: 1
      }],
      paymentSource: r,
      trialId: i,
      code: o,
      currency: n,
      metadata: l,
      referralCode: c,
      loadId: u,
      expectedInvoicePrice: d,
      expectedRenewalPrice: f
    });
    return null != e.subscription && a.Z.dispatch({
      type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
      subscription: e.subscription
    }), e
  } catch (e) {
    throw a.Z.dispatch({
      type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
      error: e
    }), e
  }
}
async function u(e, t, n, r, c, u) {
  try {
    let d = (0, o.Af)(e);
    i()(d, "Expected existing premium plan");
    let f = (0, o.XK)(e, d.planId),
      _ = true !== n ? n.toLowerCase() : e.currency;
    await s.Mg(e, {
      status: l.O0b.ACTIVE,
      paymentSource: r,
      items: f,
      currency: n
    }, {
      amount: 0,
      currency: _
    }, (0, o.UX)(f, _, null == r ? true : r.id), t, c, u), a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
    })
  } catch (e) {
    throw a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_FAIL",
      error: e
    }), e
  }
}
async function d(e, t, n) {
  try {
    await s.Mg(e, {
      status: l.O0b.ACTIVE
    }, {
      amount: 0,
      currency: e.currency
    }, (0, o.UX)(e.items, e.currency, e.paymentSourceId), t, n)
  } catch (e) {
    throw e
  }
}
async function f(e, t, n, r, i) {
  try {
    await s.fG(e, t, n, r, i), a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
    })
  } catch (e) {
    throw a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_FAIL",
      error: e
    }), e
  }
}
async function _(e, t, n, r, i, o) {
  try {
    await s.tq(e, t, n, r, i, o), a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
    })
  } catch (e) {
    throw a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_FAIL",
      error: e
    }), e
  }
}

function p() {
  Chunk570140.Z.dispatch({
    type: "PREMIUM_PAYMENT_ERROR_CLEAR"
  })
}