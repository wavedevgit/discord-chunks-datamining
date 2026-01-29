/** Chunk was on 73734 **/
/** chunk id: 915516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fu: () => E,
  GZ: () => u,
  __: () => _,
  rn: () => d
}), require("./65821.js");
var Chunk496431 = require("./496431.js"),
  Chunk773669 = require("./773669.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t, n, r) {
  switch (e) {
    case o.pe.TIER_0:
      return t.days > 0 ? c.intl.formatToPlainString(c.t.sP5OqC, {
        days: t.days
      }) : t.hours > 0 ? c.intl.formatToPlainString(c.t["7Lhfu7"], {
        hours: t.hours
      }) : c.intl.formatToPlainString(c.t.coDiS0, {
        minutes: Math.max(t.minutes, 1)
      });
    case o.pe.TIER_2:
      return t.days > 0 ? c.intl.formatToPlainString(c.t.GPqVWT, {
        days: t.days,
        trialPeriod: n,
        termsUrl: r
      }) : t.hours > 0 ? c.intl.formatToPlainString(c.t.WFMtg1, {
        hours: t.hours,
        trialPeriod: n,
        termsUrl: r
      }) : c.intl.formatToPlainString(c.t.SxXB42, {
        minutes: Math.max(t.minutes, 1),
        trialPeriod: n,
        termsUrl: r
      });
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}
let E = e => {
  var t, n, i;
  let c = e.expires_at,
    E = (0, r.A)(null != c ? Date.parse(c) : 0, 1e3),
    d = null == e || null == (t = e.subscription_trial) ? true : t.sku_id;
  return null == c || null == d ? null : u(d, E, (0, a.re)({
    intervalType: null == (n = e.subscription_trial) ? true : n.interval,
    intervalCount: null == (i = e.subscription_trial) ? true : i.interval_count
  }), l.A.getArticleURL(e.trial_id === o.yo ? s.MVz.NITRO_TRIAL_FOR_ALL : s.MVz.PREMIUM_TRIAL))
};

function d(e, t) {
  let n = new Intl.NumberFormat(i.default.locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(t / 100);
  return e.days > 0 ? c.intl.formatToPlainString(c.t["7mw8CZ"], {
    days: e.days,
    discountPercentage: n
  }) : e.hours > 0 ? c.intl.formatToPlainString(c.t["0hYT6o"], {
    hours: e.hours,
    discountPercentage: n
  }) : c.intl.formatToPlainString(c.t["2rh7rw"], {
    minutes: Math.max(e.minutes, 1),
    discountPercentage: n
  })
}
let _ = e => {
  let t = e.expires_at,
    n = (0, r.A)(null != t ? Date.parse(t) : 0, 1e3);
  return null == t ? null : d(n, Number(e.discount.amount))
}