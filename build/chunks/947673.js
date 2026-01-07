/** Chunk was on web.js **/
/** chunk id: 947673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => u,
  z: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk351402 = require("./351402.js"),
  Chunk720452 = require("./720452.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}
async function c() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return (await r.tn.post(l({
    url: o.ANM.BILLING_STRIPE_SETUP_INTENT_SECRET,
    oldFormErrors: true,
    rejectWithError: true
  }, e))).body
}
let u = async function() {
  var e;
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : true,
    n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    s = null != t ? t : (0, a.Q)({
      ipCountryCode: null != (e = i.Z.ipCountryCode) ? e : "ALL",
      location: "create_setup_intent_for_payment_elements"
    }).countryPaymentMethods,
    c = s.length > 0 ? {
      regional_payment_source_types: s
    } : {};
  return (await r.tn.post(l({
    url: o.ANM.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS,
    oldFormErrors: true,
    rejectWithError: true,
    body: c,
    failImmediatelyWhenRateLimited: true
  }, n))).body
}