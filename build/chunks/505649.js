/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => S
}), n(411104);
var r, i = n(442837),
  o = n(570140),
  a = n(366939),
  s = n(16084),
  l = n(128069),
  c = n(122289),
  u = n(622999),
  d = n(981631),
  f = n(388032);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = !1,
  h = null,
  m = null;

function g() {
  _ = !1, m = null, h = null
}

function E(e) {
  let {
    error: t
  } = e, {
    code: n,
    paymentId: r
  } = t;
  if (n !== l.ZP.ErrorCodes.CONFIRMATION_REQUIRED && n !== l.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return _ = !1, !1;
  _ || (_ = !0, h = r, n === l.ZP.ErrorCodes.AUTHENTICATION_REQUIRED && v(r))
}
async function v(e) {
  if (null == e) return;
  let {
    error: t
  } = await (0, u.oe)(e);
  if (null != t) {
    let e = Error(t);
    (0, c.q2)(e, {
      extra: {
        authenticationError: t
      }
    })
  }
}

function b(e) {
  let {
    error: t
  } = e;
  m = t, _ = !1
}

function y(e) {
  let {
    payment: t
  } = e, n = [d.PyE.COMPLETED, d.PyE.FAILED, d.PyE.CANCELED];
  if (!_ || t.id !== h || !n.includes(t.status)) return !1;
  if (_ = !1, h = null, t.status === d.PyE.FAILED) {
    var r;
    let e = null;
    (null === (r = t.metadata) || void 0 === r ? void 0 : r.billing_error_code) === l.SM.BILLING_INSUFFICIENT_FUNDS && (e = l.SM.BILLING_INSUFFICIENT_FUNDS), m = new l.ZP(f.NW.string(f.t.khEaRE), e)
  } else m = null, o.Z.wait(a.fw), o.Z.wait(s.pB)
}
class O extends(r = i.ZP.Store) {
  get isAwaitingAuthentication() {
    return _
  }
  get error() {
    return m
  }
  get awaitingPaymentId() {
    return h
  }
}
p(O, "displayName", "PaymentAuthenticationStore");
let S = new O(o.Z, {
  BILLING_SUBSCRIPTION_UPDATE_START: g,
  PAYMENT_AUTHENTICATION_CLEAR_ERROR: g,
  PREMIUM_PAYMENT_ERROR_CLEAR: g,
  PREMIUM_PAYMENT_MODAL_CLOSE: g,
  PREMIUM_PAYMENT_MODAL_OPEN: g,
  PREMIUM_PAYMENT_SUBSCRIBE_START: g,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: g,
  PREMIUM_PAYMENT_UPDATE_SUCCESS: g,
  SKU_PURCHASE_MODAL_CLOSE: g,
  SKU_PURCHASE_MODAL_OPEN: g,
  SKU_PURCHASE_START: g,
  SKU_PURCHASE_SUCCESS: g,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: E,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
  PREMIUM_PAYMENT_UPDATE_FAIL: E,
  SKU_PURCHASE_FAIL: E,
  GIFT_CODE_REDEEM_FAILURE: E,
  PAYMENT_AUTHENTICATION_ERROR: b,
  PAYMENT_UPDATE: y,
  BILLING_PAYMENT_FETCH_SUCCESS: y
})