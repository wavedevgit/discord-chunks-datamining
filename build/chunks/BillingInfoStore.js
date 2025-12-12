/** Chunk was on web.js **/
/** chunk id: 351402, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o, a, s;
require.d(exports, {
  Z: () => K
});
var l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = false,
  _ = false,
  m = false,
  h = false,
  g = false,
  E = null,
  b = null,
  y = false,
  O = false;

function v() {
  r = true, o = true, i = true, y = false, a = true, O = false, s = true, b = null, E = null
}

function S() {
  p = true
}

function I() {
  p = false
}

function T() {
  m = true
}

function C() {
  m = false
}

function A(e) {
  let {
    error: t
  } = e;
  m = false, b = t
}

function N() {
  b = null
}

function P() {
  _ = true
}

function R() {
  _ = false
}

function w(e) {
  let {
    error: t
  } = e;
  _ = false, E = t
}

function D() {
  E = null
}

function x(e) {
  let {
    request: t
  } = e;
  r = t
}

function L() {
  r = true
}

function j() {
  h = true
}

function M() {
  h = false
}

function k() {
  g = true
}

function U() {
  g = false
}

function G(e) {
  let {
    request: t
  } = e;
  o = t
}

function Z(e) {
  let {
    countryCode: t
  } = e;
  i = t
}

function F() {
  i = null, y = true
}

function B(e) {
  let {
    request: t
  } = e;
  s = t
}

function V(e) {
  let {
    location: t
  } = e;
  a = t
}

function H() {
  a = null, O = true
}
let Y = e => {
  let {
    countryCode: t
  } = e;
  null != t && (i = t)
};
class W extends(l = Chunk442837.ZP.Store) {
  get isBusy() {
    return p || _ || g || m
  }
  get isUpdatingPaymentSource() {
    return _
  }
  get isRemovingPaymentSource() {
    return m
  }
  get isSyncing() {
    return this.isPaymentSourceFetching || this.isSubscriptionFetching
  }
  get isSubscriptionFetching() {
    return h
  }
  get isPaymentSourceFetching() {
    return null != r
  }
  get editSourceError() {
    return E
  }
  get removeSourceError() {
    return b
  }
  get ipCountryCodeLoaded() {
    return true !== i
  }
  get ipCountryCode() {
    return i
  }
  get ipCountryCodeRequest() {
    return o
  }
  get ipLocationLoaded() {
    return true !== a
  }
  get ipLocation() {
    return a
  }
  get ipLocationRequest() {
    return s
  }
  get ipLocationHasError() {
    return O
  }
  get ipCountryCodeWithFallback() {
    return null != i ? i : Chunk981631.OMz
  }
  get ipCountryCodeHasError() {
    return y
  }
  get paymentSourcesFetchRequest() {
    return r
  }
}
f(W, "displayName", "BillingInfoStore");
let K = new W(Chunk570140.Z, {
  BILLING_PAYMENT_SOURCE_CREATE_START: S,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: I,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: I,
  STRIPE_TOKEN_FAILURE: I,
  BILLING_PAYMENT_SOURCE_REMOVE_START: T,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: C,
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: A,
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: N,
  BILLING_PAYMENT_SOURCE_UPDATE_START: P,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: w,
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: D,
  BILLING_PAYMENT_SOURCES_FETCH_START: x,
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: L,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: L,
  BILLING_SUBSCRIPTION_FETCH_START: j,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: M,
  BILLING_SUBSCRIPTION_FETCH_FAIL: M,
  BILLING_SUBSCRIPTION_UPDATE_START: k,
  BILLING_SUBSCRIPTION_CANCEL_START: k,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: U,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: U,
  BILLING_SUBSCRIPTION_CANCEL_FAIL: U,
  BILLING_SUBSCRIPTION_CANCEL_SUCCESS: U,
  BILLING_IP_COUNTRY_CODE_FETCH_START: G,
  BILLING_SET_IP_COUNTRY_CODE: Z,
  BILLING_IP_COUNTRY_CODE_FAILURE: F,
  BILLING_IP_LOCATION_FETCH_START: B,
  BILLING_SET_IP_LOCATION: V,
  BILLING_IP_LOCATION_FAILURE: H,
  LOGOUT: v,
  CONNECTION_OPEN: Y
})