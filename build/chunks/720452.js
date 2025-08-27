/** Chunk was on web.js **/
/** chunk id: 720452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk987032 = require("./987032.js"),
  Chunk981631 = require("./981631.js");
let a = [Chunk981631.HeQ.CARD, Chunk981631.HeQ.PAYPAL],
  o = new Set(["DE", "BG", "CZ", "DK", "HU", "RO", "SE", "CH", "SI", "IE", "LV", "MT", "FR", "SK", "FI", "GR", "PT", "LU", "LT", "CY", "NO", "NL", "ES", "BE", "AT", "IT"]),
  s = new Map([
    [Chunk981631.HeQ.SOFORT, new Set([])],
    [Chunk981631.HeQ.PRZELEWY24, new Set(["ALL", "PL"])],
    [Chunk981631.HeQ.GIROPAY, new Set(["ALL", "DE"])],
    [Chunk981631.HeQ.PAYSAFE_CARD, new Set(["ALL", ...o])],
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
  l = new Map([
    [Chunk981631.HeQ.PAYSAFE_CARD, new Set(["DE"])]
  ]);

function c(e) {
  let {
    ipCountryCode: t,
    location: n
  } = e, {
    enabledPaymentTypes: i,
    forceCountryCode: o,
    validCountryCodes: c
  } = r.ZP.getCurrentConfig({
    location: n
  }, {
    autoTrackExposure: false
  }), u = null != t ? t : "ALL";
  c.length > 0 && null != o && null != t && (u = c.includes(t) ? t : o);
  let d = new Set,
    f = [];
  return s.forEach((e, t) => {
    i.includes(t) && (e.has(u) ? d.add(t) : f.push(t))
  }), l.forEach((e, t) => {
    e.has(u) && d.add(t)
  }), {
    countryPaymentMethods: [...a, ...Array.from(d)],
    remainingPaymentMethods: f
  }
}