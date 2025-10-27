/** Chunk was on web.js **/
/** chunk id: 882712, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => c,
  Z: () => g
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk128069 = require("./128069.js"),
  Chunk38618 = require("./38618.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var c = function(e) {
  return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.PENDING = 1] = "PENDING", e[e.SUCCESS = 2] = "SUCCESS", e[e.ERROR = 3] = "ERROR", e
}({});
let u = 0,
  d = null,
  f = null;

function _(e) {
  let {
    error: t
  } = e, n = t instanceof o.ZP ? t : new o.ZP(t);
  s.Z.isConnected() && n.code === o.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1)
}

function p(e) {
  u = 2, d = e.purchaseTokenHash, f = e.expiresAt
}

function h() {
  u = 0, d = null, f = null
}
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk38618.Z)
  }
  get purchaseTokenAuthState() {
    return u
  }
  get purchaseTokenHash() {
    return d
  }
  get expiresAt() {
    return f
  }
}
l(m, "displayName", "PurchaseTokenAuthStore");
let g = new m(Chunk570140.Z, {
  SKU_PURCHASE_FAIL: _,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: _,
  USER_PAYMENT_CLIENT_ADD: p,
  BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: h,
  BILLING_SUBSCRIPTION_UPDATE_START: h,
  PAYMENT_AUTHENTICATION_CLEAR_ERROR: h,
  PREMIUM_PAYMENT_ERROR_CLEAR: h,
  PREMIUM_PAYMENT_MODAL_CLOSE: h,
  PREMIUM_PAYMENT_MODAL_OPEN: h,
  PREMIUM_PAYMENT_SUBSCRIBE_START: h,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: h,
  PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
  SKU_PURCHASE_MODAL_CLOSE: h,
  SKU_PURCHASE_MODAL_OPEN: h,
  SKU_PURCHASE_START: h,
  SKU_PURCHASE_SUCCESS: h
})