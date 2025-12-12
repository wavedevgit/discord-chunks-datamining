/** Chunk was on web.js **/
/** chunk id: 362755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => s,
  Z: () => m
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = function(e) {
  return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.PENDING = 1] = "PENDING", e[e.DONE = 2] = "DONE", e
}({});
let l = 0,
  c = null,
  u = null,
  d = null;

function f(e) {
  l = 1, c = e.loadId
}

function p(e) {
  var t, n;
  c === e.loadId && (u = null != (t = e.skuId) ? t : null, d = null != (n = e.skuSubscriptionPlanId) ? n : null, l = 2)
}
class _ extends(r = Chunk442837.ZP.Store) {
  get browserCheckoutState() {
    return l
  }
  get loadId() {
    return c
  }
  get skuId() {
    return u
  }
  get planId() {
    return d
  }
}
a(_, "displayName", "BrowserCheckoutStateStore");
let m = new _(Chunk570140.Z, {
  USER_PAYMENT_BROWSER_CHECKOUT_STARTED: f,
  USER_PAYMENT_BROWSER_CHECKOUT_DONE: p
})