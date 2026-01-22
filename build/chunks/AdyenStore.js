/** Chunk was on web.js **/
/** chunk id: 490581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
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
let o = null,
  l = null;

function c(e) {
  let {
    client: t
  } = e;
  o = t
}

function u() {
  o = null
}

function d(e) {
  let {
    component: t
  } = e;
  l = t
}
class f extends(r = Chunk311907.Ay.Store) {
  get client() {
    return o
  }
  get cashAppPayComponent() {
    return l
  }
}
s(f, "displayName", "AdyenStore");
let p = new f(Chunk73153.h, {
  ADYEN_CREATE_CLIENT_SUCCESS: c,
  ADYEN_TEARDOWN_CLIENT: u,
  ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: d
})