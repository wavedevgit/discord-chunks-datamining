/** Chunk was on web.js **/
/** chunk id: 550238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => d,
  V: () => u
}), require("./896048.js"), require("./321073.js");
var Chunk607399 = require("./607399.js"),
  Chunk887555 = require("./887555.js"),
  Chunk652215 = require("./652215.js");
let o = [Chunk652215.hes.CARD, Chunk652215.hes.PAYPAL],
  s = new Set(["DE", "BG", "CZ", "DK", "HU", "RO", "SE", "CH", "SI", "IE", "LV", "MT", "FR", "SK", "FI", "GR", "PT", "LU", "LT", "CY", "NO", "NL", "ES", "BE", "AT", "IT"]),
  l = new Map([
    [Chunk652215.hes.SOFORT, new Set([])],
    [Chunk652215.hes.PRZELEWY24, new Set(["ALL", "PL"])],
    [Chunk652215.hes.GIROPAY, new Set(["ALL", "DE"])],
    [Chunk652215.hes.PAYSAFE_CARD, new Set(["ALL", ...s])],
    [Chunk652215.hes.GCASH, new Set(["ALL", "PH"])],
    [Chunk652215.hes.GRABPAY_MY, new Set(["ALL", "MY"])],
    [Chunk652215.hes.MOMO_WALLET, new Set(["ALL", "VN"])],
    [Chunk652215.hes.VENMO, new Set(["ALL", "US"])],
    [Chunk652215.hes.KAKAOPAY, new Set(["ALL", "KR"])],
    [Chunk652215.hes.GOPAY_WALLET, new Set(["ALL", "ID"])],
    [Chunk652215.hes.BANCONTACT, new Set(["ALL", "BE"])],
    [Chunk652215.hes.EPS, new Set(["ALL", "AT"])],
    [Chunk652215.hes.IDEAL, new Set(["ALL", "NL"])],
    [Chunk652215.hes.CASH_APP, new Set(["ALL", "US"])]
  ]),
  c = new Map([
    [Chunk652215.hes.PAYSAFE_CARD, new Set(["DE"])]
  ]),
  u = ["city", "country", "line1"];

function d(e) {
  let {
    ipCountryCode: t,
    location: n
  } = e, {
    enabledPaymentTypes: s,
    forceCountryCode: u,
    validCountryCodes: d
  } = i.Ay.getCurrentConfig({
    location: n
  }, {
    autoTrackExposure: false
  }), f = null != t ? t : "ALL";
  d.length > 0 && null != u && null != t && (f = d.includes(t) ? t : u);
  let p = new Set,
    _ = [];
  return l.forEach((e, t) => {
    s.includes(t) && (e.has(f) ? p.add(t) : _.push(t))
  }), c.forEach((e, t) => {
    e.has(f) && p.add(t)
  }), (r.KY || r.Ct) && (p.delete(a.hes.VENMO), _ = _.filter(e => e !== a.hes.VENMO)), {
    countryPaymentMethods: [...o, ...Array.from(p)],
    remainingPaymentMethods: _
  }
}