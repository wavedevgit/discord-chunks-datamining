/** Chunk was on web.js **/
/** chunk id: 293700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  C: () => c
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk136857 = require("./136857.js"),
  Chunk142120 = require("./142120.js");

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

function p(e) {
  let {
    error: t
  } = e, n = t instanceof s.Ay ? t : new s.Ay(t);
  o.A.isConnected() && n.code === s.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1)
}

function _(e) {
  u = 2, d = e.purchaseTokenHash, f = e.expiresAt
}

function h() {
  u = 0, d = null, f = null
}
class m extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A)
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
let g = new m(Chunk73153.h, {
  SKU_PURCHASE_FAIL: p,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: p,
  USER_PAYMENT_CLIENT_ADD: _,
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