/** Chunk was on web.js **/
/** chunk id: 366939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ld: () => u,
  O5: () => d,
  fG: () => p,
  fw: () => m,
  tq: () => _,
  v4: () => f
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk570140 = require("./570140.js"),
  Chunk323321 = require("./323321.js"),
  Chunk74538 = require("./74538.js"),
  Chunk355467 = require("./355467.js"),
  Chunk981631 = require("./981631.js");
async function u(e) {
  let {
    planId: t,
    currency: n,
    paymentSource: r,
    trialId: i,
    code: o,
    metadata: s,
    referralCode: c,
    loadId: u,
    expectedInvoicePrice: d,
    expectedRenewalPrice: f
  } = e;
  a.Z.dispatch({
    type: "PREMIUM_PAYMENT_SUBSCRIBE_START"
  });
  try {
    let e = await l.XW({
      items: [{
        planId: t,
        quantity: 1
      }],
      paymentSource: r,
      trialId: i,
      code: o,
      currency: n,
      metadata: s,
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
async function d(e, t, n, r, u, d) {
  try {
    let f = (0, s.Af)(e);
    i()(f, "Expected existing premium plan");
    let p = (0, s.XK)(e, f.planId),
      _ = true !== n ? n.toLowerCase() : e.currency;
    (0, o.V)(e, t, d), await l.Mg(e, {
      status: c.O0b.ACTIVE,
      paymentSource: r,
      items: p,
      currency: n
    }, {
      amount: 0,
      currency: _
    }, (0, s.UX)(p, _, null == r ? true : r.id), t, u, d), a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
    })
  } catch (e) {
    throw a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_FAIL",
      error: e
    }), e
  }
}
async function f(e, t, n) {
  try {
    await l.Mg(e, {
      status: c.O0b.ACTIVE
    }, {
      amount: 0,
      currency: e.currency
    }, (0, s.UX)(e.items, e.currency, e.paymentSourceId), t, n)
  } catch (e) {
    throw e
  }
}
async function p(e, t, n, r, i) {
  try {
    await l.fG(e, t, n, r, i), a.Z.dispatch({
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
    await l.tq(e, t, n, r, i, o), a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
    })
  } catch (e) {
    throw a.Z.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_FAIL",
      error: e
    }), e
  }
}

function m() {
  Chunk570140.Z.dispatch({
    type: "PREMIUM_PAYMENT_ERROR_CLEAR"
  })
}