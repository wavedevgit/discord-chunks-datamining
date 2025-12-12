/** Chunk was on web.js **/
/** chunk id: 912788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js");

function s(e, t, n) {
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
  m()
}

function p(e) {
  let {
    message: t
  } = e;
  l = new a.HF(t)
}

function _(e) {
  let {
    message: t
  } = e;
  l = new a.HF(t)
}

function m() {
  l = null
}

function h(e) {
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
class y extends(r = Chunk442837.ZP.Store) {
  get paymentError() {
    return l
  }
  getGiftCode(e) {
    return e === u ? c : null
  }
}
s(y, "displayName", "PremiumPaymentModalStore");
let O = new y(Chunk570140.Z, {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
  PREMIUM_PAYMENT_UPDATE_FAIL: d,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: f,
  PREMIUM_PAYMENT_UPDATE_SUCCESS: m,
  PREMIUM_PAYMENT_ERROR_CLEAR: m,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: p,
  BRAINTREE_TOKENIZE_VENMO_FAIL: _,
  SKU_PURCHASE_SUCCESS: h,
  SKU_PURCHASE_FAIL: E,
  SKU_PURCHASE_AWAIT_CONFIRMATION: b,
  GIFT_CODE_CREATE: g
})