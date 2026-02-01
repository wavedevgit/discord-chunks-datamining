/** Chunk was on web.js **/
/** chunk id: 615405, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s;
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
  y = null,
  b = false,
  O = false;

function v() {
  r = true, a = true, i = true, b = false, o = true, O = false, s = true, y = null, E = null
}

function A() {
  p = true
}

function I() {
  p = false
}

function S() {
  h = true
}

function T() {
  h = false
}

function C(e) {
  let {
    error: t
  } = e;
  h = false, y = t
}

function N() {
  y = null
}

function w() {
  _ = true
}

function R() {
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

function L(e) {
  let {
    request: t
  } = e;
  r = t
}

function x() {
  r = true
}

function M() {
  m = true
}

function j() {
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
  i = null, b = true
}

function B(e) {
  let {
    request: t
  } = e;
  s = t
}

function H(e) {
  let {
    location: t
  } = e;
  o = t
}

function Y() {
  o = null, O = true
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
    return y
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
    return true !== o
  }
  get ipLocation() {
    return o
  }
  get ipLocationRequest() {
    return s
  }
  get ipLocationHasError() {
    return O
  }
  get ipCountryCodeWithFallback() {
    return null != i ? i : d.Wzo
  }
  get ipCountryCodeHasError() {
    return b
  }
  get paymentSourcesFetchRequest() {
    return r
  }
}
f(K, "displayName", "BillingInfoStore");
let z = new K(Chunk73153.h, {
  BILLING_PAYMENT_SOURCE_CREATE_START: A,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: I,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: I,
  STRIPE_TOKEN_FAILURE: I,
  BILLING_PAYMENT_SOURCE_REMOVE_START: S,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: T,
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: C,
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: N,
  BILLING_PAYMENT_SOURCE_UPDATE_START: w,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: P,
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: D,
  BILLING_PAYMENT_SOURCES_FETCH_START: L,
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: x,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: x,
  BILLING_SUBSCRIPTION_FETCH_START: M,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: j,
  BILLING_SUBSCRIPTION_FETCH_FAIL: j,
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
  LOGOUT: v,
  CONNECTION_OPEN: W
})