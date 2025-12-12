/** Chunk was on web.js **/
/** chunk id: 505649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./415506.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk366939 = require("./366939.js"),
  Chunk16084 = require("./16084.js"),
  Chunk128069 = require("./128069.js"),
  Chunk122289 = require("./122289.js"),
  Chunk622999 = require("./622999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = false,
  m = null,
  h = null;

function g() {
  _ = false, h = null, m = null
}

function E(e) {
  let {
    error: t
  } = e, {
    code: n,
    paymentId: r
  } = t;
  if (n !== l.ZP.ErrorCodes.CONFIRMATION_REQUIRED && n !== l.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return _ = false, false;
  _ || (_ = true, m = r, n === l.ZP.ErrorCodes.AUTHENTICATION_REQUIRED && b(r))
}
async function b(e) {
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

function y(e) {
  let {
    error: t
  } = e;
  h = t, _ = false
}

function O(e) {
  let {
    payment: t
  } = e, n = [d.PyE.COMPLETED, d.PyE.FAILED, d.PyE.CANCELED];
  if (!_ || t.id !== m || !n.includes(t.status)) returnfalse;
  if (_ = false, m = null, t.status === d.PyE.FAILED) {
    var r;
    let e = null;
    (null == (r = t.metadata) ? true : r.billing_error_code) === l.SM.BILLING_INSUFFICIENT_FUNDS && (e = l.SM.BILLING_INSUFFICIENT_FUNDS), h = new l.ZP(f.intl.string(f.t.khEaRI), e)
  } else h = null, a.Z.wait(o.fw), a.Z.wait(s.pB)
}
class v extends(r = Chunk442837.ZP.Store) {
  get isAwaitingAuthentication() {
    return _
  }
  get error() {
    return h
  }
  get awaitingPaymentId() {
    return m
  }
}
p(v, "displayName", "PaymentAuthenticationStore");
let S = new v(Chunk570140.Z, {
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
  PAYMENT_AUTHENTICATION_ERROR: y,
  PAYMENT_UPDATE: O,
  BILLING_PAYMENT_FETCH_SUCCESS: O
})