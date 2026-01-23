/** Chunk was on web.js **/
/** chunk id: 295405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk202613 = require("./202613.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = {},
  f = null,
  p = false;

function _(e) {
  let {
    paymentSources: t
  } = e;
  for (let e of (d = {}, f = null, t)) d[e.id] = s.Ay.createFromServer(e), e.default && (f = e.id);
  null == f && t.length > 0 && (f = t[0].id), p = true
}

function h(e) {
  let {
    paymentSource: t
  } = e;
  d = u(l({}, d), {
    [t.id]: t
  }), (t.isDefault || 1 === Object.keys(d).length) && (f = t.id)
}

function m(e) {
  let {
    id: t
  } = e;
  if (d = l({}, d), delete d[t], f === t) {
    let e = Object.keys(d);
    f = 0 === e.length ? null : e[0]
  }
}

function g() {
  d = {}, f = null, p = false
}
class E extends(r = Chunk311907.Ay.Store) {
  get paymentSources() {
    return d
  }
  get paymentSourceIds() {
    return Object.keys(d)
  }
  get defaultPaymentSourceId() {
    return f
  }
  get defaultPaymentSource() {
    return null != f ? d[f] : null
  }
  get hasFetchedPaymentSources() {
    return p
  }
  getDefaultBillingCountryCode() {
    let e = this.defaultPaymentSource;
    return null == e ? null : e.paymentMethodCountry
  }
  getPaymentSource(e) {
    return d[e]
  }
}
o(E, "displayName", "PaymentSourceStore");
let y = new E(Chunk73153.h, {
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: h,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: h,
  BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: h,
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: _,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: m,
  LOGOUT: g
})