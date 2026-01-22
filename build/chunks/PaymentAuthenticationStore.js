/** Chunk was on web.js **/
/** chunk id: 153084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./65821.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk158032 = require("./158032.js"),
  Chunk830382 = require("./830382.js"),
  Chunk136857 = require("./136857.js"),
  Chunk739508 = require("./739508.js"),
  Chunk71532 = require("./71532.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = false,
  h = null,
  m = null;

function g() {
  _ = false, m = null, h = null
}

function E(e) {
  let {
    error: t
  } = e, {
    code: n,
    paymentId: r
  } = t;
  if (n !== l.Ay.ErrorCodes.CONFIRMATION_REQUIRED && n !== l.Ay.ErrorCodes.AUTHENTICATION_REQUIRED) return _ = false, false;
  _ || (_ = true, h = r, n === l.Ay.ErrorCodes.AUTHENTICATION_REQUIRED && b(r))
}
async function b(e) {
  if (null == e) return;
  let {
    error: t
  } = await (0, u.ap)(e);
  if (null != t) {
    let e = Error(t);
    (0, c.pM)(e, {
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
  m = t, _ = false
}

function O(e) {
  let {
    payment: t
  } = e, n = [d.__0.COMPLETED, d.__0.FAILED, d.__0.CANCELED];
  if (!_ || t.id !== h || !n.includes(t.status)) returnfalse;
  if (_ = false, h = null, t.status === d.__0.FAILED) {
    var r;
    let e = null;
    (null == (r = t.metadata) ? true : r.billing_error_code) === l.tG.BILLING_INSUFFICIENT_FUNDS && (e = l.tG.BILLING_INSUFFICIENT_FUNDS), m = new l.Ay(f.intl.string(f.t.khEaRI), e)
  } else m = null, a.h.wait(s.ET), a.h.wait(o.T3)
}
class A extends(r = Chunk311907.Ay.Store) {
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
p(A, "displayName", "PaymentAuthenticationStore");
let v = new A(Chunk73153.h, {
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