/** Chunk was on web.js **/
/** chunk id: 618541, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => T
}), require("./415506.js");
var a, Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = null,
  _ = null,
  p = null;

function h(e) {
  let {
    client: t
  } = e;
  f = t
}

function m(e) {
  let {
    paypalClient: t
  } = e;
  _ = t
}

function g(e) {
  let {
    venmoClient: t
  } = e;
  p = t
}

function E(e) {
  let {
    paymentSourceType: t,
    state: n,
    path: i,
    query: a
  } = e;
  if (t !== u.HeQ.PAYPAL || n !== r) return;
  let o = window.popupBridge.onComplete;
  "function" == typeof o && o(null, {
    path: i,
    queryItems: a
  })
}

function b(e) {
  let {
    paymentSourceType: t,
    state: n
  } = e;
  t === u.HeQ.PAYPAL && (r = n)
}

function y() {
  _ = null
}

function O() {
  p = null
}(0, Chunk358085.isDesktop)() && (window.popupBridge = {
  getReturnUrlPrefix: () => {
    if (null == r) throw Error("popupBridgeState is unset");
    return (0, Chunk544891.K0)() + Chunk981631.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(Chunk981631.gg$.BRAINTREE, r)
  },
  open: e => {
    i = e, window.open(e), I.emitChange()
  }
});
class v extends(a = Chunk442837.ZP.Store) {
  getClient() {
    return f
  }
  getPayPalClient() {
    return _
  }
  getVenmoClient() {
    return p
  }
  getLastURL() {
    return i
  }
}
d(v, "displayName", "BraintreeStore");
let I = new v(Chunk570140.Z, {
    BRAINTREE_CREATE_CLIENT_SUCCESS: h,
    BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: m,
    BILLING_POPUP_BRIDGE_CALLBACK: E,
    BILLING_POPUP_BRIDGE_STATE_UPDATE: b,
    BRAINTREE_TEARDOWN_PAYPAL_CLIENT: y,
    BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: g,
    BRAINTREE_TEARDOWN_VENMO_CLIENT: O
  }),
  T = I