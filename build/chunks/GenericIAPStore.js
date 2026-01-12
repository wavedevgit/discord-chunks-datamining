/** Chunk was on web.js **/
/** chunk id: 389053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk839880 = require("./839880.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null,
  c = false,
  u = null;

function d(e) {
  let {
    connected: t
  } = e;
  c = t
}

function f() {
  c = false
}

function p() {
  c = false
}

function _(e) {
  let {
    products: t,
    storeFront: n
  } = e;
  l = t, u = n
}

function m(e) {
  let {
    storeFront: t
  } = e;
  u = t
}
class h extends(r = Chunk442837.ZP.Store) {
  isGenericIapConnected() {
    return c
  }
  hasGenericSubscription() {
    return null != l && l.some(e => e.identifier === o.Xz.GENERIC_SUBSCRIPTION)
  }
  getProducts() {
    return l
  }
  getStoreFront() {
    return u
  }
}
s(h, "displayName", "GenericIAPStore");
let g = new h(Chunk570140.Z, {
  IAP_LOAD_GENERIC_PRODUCTS: _,
  GENERIC_IAP_INIT_CONNECTION: d,
  GENERIC_IAP_INIT_CONNECTION_FAILED: f,
  GENERIC_IAP_END_CONNECTION: p,
  GENERIC_IAP_SET_STORE_FRONT: m
})