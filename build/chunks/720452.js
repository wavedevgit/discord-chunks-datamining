/** Chunk was on web.js **/
/** chunk id: 720452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk873546 = require("./873546.js"),
  Chunk987032 = require("./987032.js"),
  Chunk981631 = require("./981631.js");
let o = [Chunk981631.HeQ.CARD, Chunk981631.HeQ.PAYPAL],
  s = new Set(["DE", "BG", "CZ", "DK", "HU", "RO", "SE", "CH", "SI", "IE", "LV", "MT", "FR", "SK", "FI", "GR", "PT", "LU", "LT", "CY", "NO", "NL", "ES", "BE", "AT", "IT"]),
  l = new Map([
    [Chunk981631.HeQ.SOFORT, new Set([])],
    [Chunk981631.HeQ.PRZELEWY24, new Set(["ALL", "PL"])],
    [Chunk981631.HeQ.GIROPAY, new Set(["ALL", "DE"])],
    [Chunk981631.HeQ.PAYSAFE_CARD, new Set(["ALL", ...s])],
    [Chunk981631.HeQ.GCASH, new Set(["ALL", "PH"])],
    [Chunk981631.HeQ.GRABPAY_MY, new Set(["ALL", "MY"])],
    [Chunk981631.HeQ.MOMO_WALLET, new Set(["ALL", "VN"])],
    [Chunk981631.HeQ.VENMO, new Set(["ALL", "US"])],
    [Chunk981631.HeQ.KAKAOPAY, new Set(["ALL", "KR"])],
    [Chunk981631.HeQ.GOPAY_WALLET, new Set(["ALL", "ID"])],
    [Chunk981631.HeQ.BANCONTACT, new Set(["ALL", "BE"])],
    [Chunk981631.HeQ.EPS, new Set(["ALL", "AT"])],
    [Chunk981631.HeQ.IDEAL, new Set(["ALL", "NL"])],
    [Chunk981631.HeQ.CASH_APP, new Set(["ALL", "US"])]
  ]),
  c = new Map([
    [Chunk981631.HeQ.PAYSAFE_CARD, new Set(["DE"])]
  ]);

function u(e) {
  let {
    ipCountryCode: t,
    location: n
  } = e, {
    enabledPaymentTypes: s,
    forceCountryCode: u,
    validCountryCodes: d
  } = i.ZP.getCurrentConfig({
    location: n
  }, {
    autoTrackExposure: false
  }), f = null != t ? t : "ALL";
  d.length > 0 && null != u && null != t && (f = d.includes(t) ? t : u);
  let _ = new Set,
    p = [];
  return l.forEach((e, t) => {
    s.includes(t) && (e.has(f) ? _.add(t) : p.push(t))
  }), c.forEach((e, t) => {
    e.has(f) && _.add(t)
  }), (r.bO || r.eL) && (_.delete(a.HeQ.VENMO), p = p.filter(e => e !== a.HeQ.VENMO)), {
    countryPaymentMethods: [...o, ...Array.from(_)],
    remainingPaymentMethods: p
  }
}