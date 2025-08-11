/** Chunk was on web.js **/
/** chunk id: 947673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => u,
  V: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk351402 = require("./351402.js"),
  Chunk51144 = require("./51144.js"),
  Chunk720452 = require("./720452.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
async function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : true,
    n = null != exports ? {
      regional_payment_element_source_types: exports.regionalPaymentMethods
    } : true;
  return (await Chunk544891.tn.post(c({
    url: Chunk981631.ANM.BILLING_STRIPE_SETUP_INTENT_SECRET,
    oldFormErrors: true,
    rejectWithError: true,
    body: require
  }, module))).body.client_secret
}
let d = function() {
  var e;
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : true,
    n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    r = (0, Chunk51144.vP)(),
    s = null != exports ? exports : Chunk544891 ? (0, Chunk720452.Q)({
      ipCountryCode: null != (e = Chunk351402.Z.ipCountryCode) ? module : "ALL",
      location: "create_setup_intent_for_payment_elements"
    }).countryPaymentMethods : [];
  return u(c({
    failImmediatelyWhenRateLimited: true
  }, require), Chunk981631.length > 0 ? {
    regionalPaymentMethods: Chunk981631
  } : true)
}