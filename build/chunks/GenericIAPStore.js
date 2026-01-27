/** Chunk was on web.js **/
/** chunk id: 307006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk160745 = require("./160745.js");

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

function h(e) {
  let {
    storeFront: t
  } = e;
  u = t
}
class m extends(r = Chunk311907.Ay.Store) {
  isGenericIapConnected() {
    return c
  }
  hasGenericSubscription() {
    return null != l && l.some(e => e.identifier === o.Yq.GENERIC_SUBSCRIPTION)
  }
  getProducts() {
    return l
  }
  getStoreFront() {
    return u
  }
}
s(m, "displayName", "GenericIAPStore");
let g = new m(Chunk73153.h, {
  IAP_LOAD_GENERIC_PRODUCTS: _,
  GENERIC_IAP_INIT_CONNECTION: d,
  GENERIC_IAP_INIT_CONNECTION_FAILED: f,
  GENERIC_IAP_END_CONNECTION: p,
  GENERIC_IAP_SET_STORE_FRONT: h
})