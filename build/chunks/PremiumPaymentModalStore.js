/** Chunk was on web.js **/
/** chunk id: 419212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null,
  c = null,
  u = null;

function d(e) {
  let {
    error: t
  } = e;
  l = t
}

function f() {
  h()
}

function p(e) {
  let {
    message: t
  } = e;
  l = new s.Ey(t)
}

function _(e) {
  let {
    message: t
  } = e;
  l = new s.Ey(t)
}

function h() {
  l = null
}

function m(e) {
  c = e.giftCode, u = e.skuId
}

function g(e) {
  let {
    giftCode: t
  } = e;
  if (0 !== t.uses || t.sku_id !== u) returnfalse;
  c = t.code
}

function E(e) {
  l = e.error
}

function b(e) {
  e.isGift && (u = e.skuId)
}
class y extends(r = Chunk311907.Ay.Store) {
  get paymentError() {
    return l
  }
  getGiftCode(e) {
    return e === u ? c : null
  }
}
o(y, "displayName", "PremiumPaymentModalStore");
let O = new y(Chunk73153.h, {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
  PREMIUM_PAYMENT_UPDATE_FAIL: d,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: f,
  PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
  PREMIUM_PAYMENT_ERROR_CLEAR: h,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: p,
  BRAINTREE_TOKENIZE_VENMO_FAIL: _,
  SKU_PURCHASE_SUCCESS: m,
  SKU_PURCHASE_FAIL: E,
  SKU_PURCHASE_AWAIT_CONFIRMATION: b,
  GIFT_CODE_CREATE: g
})