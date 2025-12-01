/** Chunk was on web.js **/
/** chunk id: 439041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let s = null,
  l = null;

function c(e) {
  let {
    client: t
  } = e;
  s = t
}

function u() {
  s = null
}

function d(e) {
  let {
    component: t
  } = e;
  l = t
}
class f extends(r = Chunk442837.ZP.Store) {
  get client() {
    return s
  }
  get cashAppPayComponent() {
    return l
  }
}
o(f, "displayName", "AdyenStore");
let p = new f(Chunk570140.Z, {
  ADYEN_CREATE_CLIENT_SUCCESS: c,
  ADYEN_TEARDOWN_CLIENT: u,
  ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: d
})