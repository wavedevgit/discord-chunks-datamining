/** Chunk was on web.js **/
/** chunk id: 615405, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, s, o;
require.d(exports, {
  A: () => z
});
var l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

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
  h = false,
  m = false,
  g = false,
  E = null,
  b = null,
  y = false,
  O = false;

function A() {
  r = true, a = true, i = true, y = false, s = true, O = false, o = true, b = null, E = null
}

function v() {
  p = true
}

function S() {
  p = false
}

function I() {
  h = true
}

function T() {
  h = false
}

function C(e) {
  let {
    error: t
  } = e;
  h = false, b = t
}

function N() {
  b = null
}

function R() {
  _ = true
}

function w() {
  _ = false
}

function P(e) {
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
  m = true
}

function M() {
  m = false
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
  a = t
}

function V(e) {
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
  o = t
}

function H(e) {
  let {
    location: t
  } = e;
  s = t
}

function Y() {
  s = null, O = true
}
let W = e => {
  let {
    countryCode: t
  } = e;
  null != t && (i = t)
};
class K extends(l = Chunk311907.Ay.Store) {
  get isBusy() {
    return p || _ || g || h
  }
  get isUpdatingPaymentSource() {
    return _
  }
  get isRemovingPaymentSource() {
    return h
  }
  get isSyncing() {
    return this.isPaymentSourceFetching || this.isSubscriptionFetching
  }
  get isSubscriptionFetching() {
    return m
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
    return a
  }
  get ipLocationLoaded() {
    return true !== s
  }
  get ipLocation() {
    return s
  }
  get ipLocationRequest() {
    return o
  }
  get ipLocationHasError() {
    return O
  }
  get ipCountryCodeWithFallback() {
    return null != i ? i : d.Wzo
  }
  get ipCountryCodeHasError() {
    return y
  }
  get paymentSourcesFetchRequest() {
    return r
  }
}
f(K, "displayName", "BillingInfoStore");
let z = new K(Chunk73153.h, {
  BILLING_PAYMENT_SOURCE_CREATE_START: v,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: S,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: S,
  STRIPE_TOKEN_FAILURE: S,
  BILLING_PAYMENT_SOURCE_REMOVE_START: I,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: T,
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: C,
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: N,
  BILLING_PAYMENT_SOURCE_UPDATE_START: R,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: w,
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: P,
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
  BILLING_SET_IP_COUNTRY_CODE: V,
  BILLING_IP_COUNTRY_CODE_FAILURE: F,
  BILLING_IP_LOCATION_FETCH_START: B,
  BILLING_SET_IP_LOCATION: H,
  BILLING_IP_LOCATION_FAILURE: Y,
  LOGOUT: A,
  CONNECTION_OPEN: W
})