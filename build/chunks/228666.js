/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  P: () => m
});
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  s = n(464179);
n(600164);
var l = n(706454),
  c = n(351402),
  u = n(603421),
  d = n(981631),
  f = n(388032),
  p = n(793207);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
    E = null != _ && (null == _.code || (0, u.ly)(_) === u.Rg.ADDRESS),
    v = (0, o.e7)([l.default], () => l.default.locale);
  switch (g) {
    case d.HeQ.GIROPAY:
    case d.HeQ.PAYSAFE_CARD:
    case d.HeQ.GCASH:
    case d.HeQ.GRABPAY_MY:
    case d.HeQ.MOMO_WALLET:
    case d.HeQ.KAKAOPAY:
    case d.HeQ.GOPAY_WALLET:
    case d.HeQ.BANCONTACT:
      t = "en-US" === v ? s.ZP.Layouts.MODAL_US_WITH_NAME : s.ZP.Layouts.MODAL_INTL_WITH_NAME;
      break;
    case d.HeQ.VENMO:
    case d.HeQ.CASH_APP:
      t = s.ZP.Layouts.MODAL_US_WITH_NAME;
      break;
    default:
      t = "en-US" === v ? s.ZP.Layouts.MODAL_US : s.ZP.Layouts.MODAL_INTL
  }
  let b = (0, o.e7)([c.Z], () => c.Z.ipCountryCode);
  return 0 === n.country.length && (n.country = null != b ? b : ""), (0, r.jsxs)(i.Fragment, {
    children: [E ? (0, r.jsx)(a.kzN, {
      className: p.errorBlock,
      children: f.NW.string(f.t.vZ8y7u)
    }) : null, (0, r.jsx)(s.ZP, h({
      className: p.__invalid_formItem,
      onBillingAddressChange: m,
      error: _,
      layout: t
    }, n))]
  })
}