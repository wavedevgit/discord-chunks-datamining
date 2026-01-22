/** Chunk was on web.js **/
/** chunk id: 869968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = false,
  l = false,
  c = false;

function u(e) {
  l = true, o = false, c = e.isTargeted
}

function d() {
  l = true, o = false
}

function f() {
  o = true
}

function p() {
  o = false, l = false, c = false
}
class _ extends(r = Chunk311907.Ay.Store) {
  getIsTargeted() {
    return c
  }
  shouldFetchCheckoutRecovery() {
    return !o && !l
  }
}
s(_, "displayName", "CheckoutRecoveryStore");
let h = new _(Chunk73153.h, {
  CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: u,
  CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: d,
  CHECKOUT_RECOVERY_STATUS_FETCH: f,
  LOGOUT: p
})