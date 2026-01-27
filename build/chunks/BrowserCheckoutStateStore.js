/** Chunk was on web.js **/
/** chunk id: 814626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  k: () => s
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
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
class _ extends(r = Chunk311907.Ay.Store) {
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
o(_, "displayName", "BrowserCheckoutStateStore");
let h = new _(Chunk73153.h, {
  USER_PAYMENT_BROWSER_CHECKOUT_STARTED: f,
  USER_PAYMENT_BROWSER_CHECKOUT_DONE: p
})