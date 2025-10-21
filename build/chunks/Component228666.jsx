/** Chunk was on web.js **/
/** chunk id: 228666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk464179 = require("./464179.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk351402 = require("./351402.js"),
  Chunk603421 = require("./603421.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk448106 = require("./448106.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let m = e => {
  let t, {
      billingAddressInfo: n,
      billingError: p,
      onBillingAddressChange: m,
      paymentSourceType: g
    } = e,
    E = null != p && (null == p.code || (0, u.ly)(p) === u.Rg.ADDRESS),
    b = (0, a.e7)([l.default], () => l.default.locale);
  switch (g) {
    case d.HeQ.GIROPAY:
    case d.HeQ.PAYSAFE_CARD:
    case d.HeQ.GCASH:
    case d.HeQ.GRABPAY_MY:
    case d.HeQ.MOMO_WALLET:
    case d.HeQ.KAKAOPAY:
    case d.HeQ.GOPAY_WALLET:
    case d.HeQ.BANCONTACT:
      t = "en-US" === b ? s.ZP.Layouts.MODAL_US_WITH_NAME : s.ZP.Layouts.MODAL_INTL_WITH_NAME;
      break;
    case d.HeQ.VENMO:
    case d.HeQ.CASH_APP:
      t = s.ZP.Layouts.MODAL_US_WITH_NAME;
      break;
    default:
      t = "en-US" === b ? s.ZP.Layouts.MODAL_US : s.ZP.Layouts.MODAL_INTL
  }
  let y = (0, a.e7)([c.Z], () => c.Z.ipCountryCode);
  return 0 === n.country.length && (n.country = null != y ? y : ""), (0, r.jsxs)(i.Fragment, {
    children: [E ? (0, r.jsx)("div", {
      className: _.errorBlock,
      children: (0, r.jsx)(o.M14, {
        type: "critical",
        children: f.intl.string(f.t.vZ8y7l)
      })
    }) : null, (0, r.jsx)(s.ZP, h({
      className: _.__invalid_formItem,
      onBillingAddressChange: m,
      error: p,
      layout: t
    }, n))]
  })
}