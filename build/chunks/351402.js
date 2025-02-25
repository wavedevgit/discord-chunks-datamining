/** Chunk was on web.js **/
"use strict";
let r, i, o, a;
n.d(t, {
  Z: () => Y
});
var s, l = n(442837),
  c = n(570140),
  u = n(542974),
  d = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = !1,
  _ = !1,
  h = !1,
  m = !1,
  g = !1,
  E = null,
  v = null,
  b = !1,
  y = !1;

function O() {
  r = void 0, o = void 0, i = void 0, b = !1, a = null, v = null, E = null
}

function S() {
  p = !0
}

function I() {
  p = !1
}

function T() {
  h = !0
}

function N() {
  h = !1
}

function A(e) {
  let {
    error: t
  } = e;
  h = !1, v = t
}

function C() {
  v = null
}

function R() {
  _ = !0
}

function P() {
  _ = !1
}

function D(e) {
  let {
    error: t
  } = e;
  _ = !1, E = t
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
  r = void 0
}

function M() {
  m = !0
}

function j() {
  m = !1
}

function k() {
  g = !0
}

function U() {
  g = !1
}

function G(e) {
  let {
    request: t
  } = e;
  o = t
}

function B(e) {
  let {
    countryCode: t
  } = e;
  i = t
}

function F() {
  i = null, b = !0
}

function V(e) {
  let {
    localizedPricingPromo: t
  } = e;
  a = u.U.createFromServer(t)
}

function Z() {
  a = null, y = !0
}
let H = e => {
  let {
    countryCode: t
  } = e;
  null != t && (i = t)
};
class W extends(s = l.ZP.Store) {
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
    return v
  }
  get ipCountryCodeLoaded() {
    return void 0 !== i
  }
  get ipCountryCode() {
    return i
  }
  get ipCountryCodeRequest() {
    return o
  }
  get ipCountryCodeWithFallback() {
    return null != i ? i : d.OMz
  }
  get ipCountryCodeHasError() {
    return b
  }
  get paymentSourcesFetchRequest() {
    return r
  }
  get localizedPricingPromo() {
    return a
  }
  get localizedPricingPromoHasError() {
    return y
  }
  get isLocalizedPromoEnabled() {
    return null != a
  }
}
f(W, "displayName", "BillingInfoStore");
let Y = new W(c.Z, {
  BILLING_PAYMENT_SOURCE_CREATE_START: S,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: I,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: I,
  STRIPE_TOKEN_FAILURE: I,
  BILLING_PAYMENT_SOURCE_REMOVE_START: T,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: N,
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: A,
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: C,
  BILLING_PAYMENT_SOURCE_UPDATE_START: R,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: P,
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: D,
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: w,
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
  BILLING_SET_IP_COUNTRY_CODE: B,
  BILLING_IP_COUNTRY_CODE_FAILURE: F,
  BILLING_SET_LOCALIZED_PRICING_PROMO: V,
  BILLING_LOCALIZED_PRICING_PROMO_FAILURE: Z,
  LOGOUT: O,
  CONNECTION_OPEN: H
})