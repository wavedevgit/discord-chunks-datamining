/** Chunk was on web.js **/
/** chunk id: 305114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk826469 = require("./826469.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null,
  c = null,
  u = [];

function d(e) {
  if (null == e.price || null == e.price.checkout_context || null == e.price.checkout_context.payment_sources || null == e.checkoutSessionId) returnfalse;
  l = e.price.checkout_context, c = e.checkoutSessionId, u = l.payment_sources.map(o.A.createFromCheckoutContext)
}

function f() {
  l = null, c = null, u = []
}
class p extends(r = Chunk311907.Ay.Store) {
  hasCheckoutContextForSession(e) {
    return null != l && c === e
  }
  getPaymentSourceRecords() {
    return u
  }
}
s(p, "displayName", "CheckoutContextStore");
let _ = new p(Chunk73153.h, {
  SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: d,
  SKU_PURCHASE_MODAL_CLOSE: f,
  LOGOUT: f
})