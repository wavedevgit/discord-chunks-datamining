/** Chunk was on web.js **/
/** chunk id: 959391, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk450233 = require("./450233.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk615405 = require("./615405.js"),
  Chunk493822 = require("./493822.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk182468 = require("./182468.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}
let m = e => {
  let t, {
      billingAddressInfo: n,
      billingError: _,
      onBillingAddressChange: m,
      paymentSourceType: g
    } = e,
    E = null != _ && (null == _.code || (0, u.ou)(_) === u.gj.ADDRESS),
    y = (0, a.bG)([l.default], () => l.default.locale);
  switch (g) {
    case d.hes.GIROPAY:
    case d.hes.PAYSAFE_CARD:
    case d.hes.GCASH:
    case d.hes.GRABPAY_MY:
    case d.hes.MOMO_WALLET:
    case d.hes.KAKAOPAY:
    case d.hes.GOPAY_WALLET:
    case d.hes.BANCONTACT:
      t = "en-US" === y ? o.Ay.Layouts.MODAL_US_WITH_NAME : o.Ay.Layouts.MODAL_INTL_WITH_NAME;
      break;
    case d.hes.VENMO:
    case d.hes.CASH_APP:
      t = o.Ay.Layouts.MODAL_US_WITH_NAME;
      break;
    default:
      t = "en-US" === y ? o.Ay.Layouts.MODAL_US : o.Ay.Layouts.MODAL_INTL
  }
  let b = (0, a.bG)([c.A], () => c.A.ipCountryCode);
  return 0 === n.country.length && (n.country = null != b ? b : ""), (0, r.jsxs)(i.Fragment, {
    children: [E ? (0, r.jsx)("div", {
      className: p.QK,
      children: (0, r.jsx)(s.wx6, {
        type: "critical",
        children: f.intl.string(f.t.vZ8y7l)
      })
    }) : null, (0, r.jsx)(o.Ay, h({
      className: p.__invalid_formItem,
      onBillingAddressChange: m,
      error: _,
      layout: t
    }, n))]
  })
}