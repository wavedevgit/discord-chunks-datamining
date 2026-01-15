/** Chunk was on web.js **/
/** chunk id: 30684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = false,
  l = false,
  c = false;

function u(e) {
  l = true, s = false, c = e.isTargeted
}

function d() {
  l = true, s = false
}

function f() {
  s = true
}

function p() {
  s = false, l = false, c = false
}
class _ extends(r = Chunk442837.ZP.Store) {
  getIsTargeted() {
    return c
  }
  shouldFetchCheckoutRecovery() {
    return !s && !l
  }
}
o(_, "displayName", "CheckoutRecoveryStore");
let h = new _(Chunk570140.Z, {
  CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: u,
  CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: d,
  CHECKOUT_RECOVERY_STATUS_FETCH: f,
  LOGOUT: p
})