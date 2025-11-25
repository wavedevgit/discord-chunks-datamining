/** Chunk was on web.js **/
/** chunk id: 351402, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s;
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
let _ = false,
  p = false,
  h = false,
  m = false,
  g = false,
  E = null,
  b = null,
  y = false,
  O = false;

function v() {
  r = true, a = true, i = true, y = false, o = true, O = false, s = true, b = null, E = null
}

function I() {
  _ = true
}

function T() {
  _ = false
}

function S() {
  h = true
}

function A() {
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
  p = true
}

function P() {
  p = false
}

function D(e) {
  let {
    error: t
  } = e;
  p = false, E = t
}

function w() {
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

function k() {
  m = false
}

function j() {
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

function B(e) {
  let {
    countryCode: t
  } = e;
  i = t
}

function Z() {
  i = null, y = true
}

function F(e) {
  let {
    request: t
  } = e;
  s = t
}

function V(e) {
  let {
    location: t
  } = e;
  o = t
}

function H() {
  o = null, O = true
}
let W = e => {
  let {
    countryCode: t
  } = e;
  null != t && (i = t)
};
class Y extends(l = Chunk442837.ZP.Store) {
  get isBusy() {
    return _ || p || g || h
  }
  get isUpdatingPaymentSource() {
    return p
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
    return null != i ? i : Chunk981631.OMz
  }
  get ipCountryCodeHasError() {
    return y
  }
  get paymentSourcesFetchRequest() {
    return r
  }
}
f(Y, "displayName", "BillingInfoStore");
let K = new Y(Chunk570140.Z, {
  BILLING_PAYMENT_SOURCE_CREATE_START: I,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: T,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: T,
  STRIPE_TOKEN_FAILURE: T,
  BILLING_PAYMENT_SOURCE_REMOVE_START: S,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: A,
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: C,
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: N,
  BILLING_PAYMENT_SOURCE_UPDATE_START: R,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: P,
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: D,
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: w,
  BILLING_PAYMENT_SOURCES_FETCH_START: L,
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: x,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: x,
  BILLING_SUBSCRIPTION_FETCH_START: M,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: k,
  BILLING_SUBSCRIPTION_FETCH_FAIL: k,
  BILLING_SUBSCRIPTION_UPDATE_START: j,
  BILLING_SUBSCRIPTION_CANCEL_START: j,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: U,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: U,
  BILLING_SUBSCRIPTION_CANCEL_FAIL: U,
  BILLING_SUBSCRIPTION_CANCEL_SUCCESS: U,
  BILLING_IP_COUNTRY_CODE_FETCH_START: G,
  BILLING_SET_IP_COUNTRY_CODE: B,
  BILLING_IP_COUNTRY_CODE_FAILURE: Z,
  BILLING_IP_LOCATION_FETCH_START: F,
  BILLING_SET_IP_LOCATION: V,
  BILLING_IP_LOCATION_FAILURE: H,
  LOGOUT: v,
  CONNECTION_OPEN: W
})