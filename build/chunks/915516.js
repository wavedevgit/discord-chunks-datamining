/** Chunk was on web.js **/
/** chunk id: 915516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fu: () => c,
  GZ: () => l,
  __: () => d,
  rn: () => u
}), require("./65821.js");
var Chunk496431 = require("./496431.js"),
  Chunk773669 = require("./773669.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let o = 1e3;

function l(e, t) {
  switch (e) {
    case a.pe.TIER_0:
      return t.days > 0 ? s.intl.formatToPlainString(s.t.sP5OqC, {
        days: t.days
      }) : t.hours > 0 ? s.intl.formatToPlainString(s.t["7Lhfu7"], {
        hours: t.hours
      }) : s.intl.formatToPlainString(s.t.coDiS0, {
        minutes: Math.max(t.minutes, 1)
      });
    case a.pe.TIER_2:
      return t.days > 0 ? s.intl.formatToPlainString(s.t["4prs5b"], {
        days: t.days
      }) : t.hours > 0 ? s.intl.formatToPlainString(s.t.OD5nIR, {
        hours: t.hours
      }) : s.intl.formatToPlainString(s.t.rvyXjD, {
        minutes: Math.max(t.minutes, 1)
      });
    default:
      throw Error("Unsupported subscription tier: ".concat(e))
  }
}
let c = e => {
  var t;
  let n = e.expires_at,
    i = (0, r.A)(null != n ? Date.parse(n) : 0, o),
    a = null == e || null == (t = e.subscription_trial) ? true : t.sku_id;
  return null == n || null == a ? null : l(a, i)
};

function u(e, t) {
  let n = new Intl.NumberFormat(i.default.locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(t / 100);
  return e.days > 0 ? s.intl.formatToPlainString(s.t["7mw8CZ"], {
    days: e.days,
    discountPercentage: n
  }) : e.hours > 0 ? s.intl.formatToPlainString(s.t["0hYT6o"], {
    hours: e.hours,
    discountPercentage: n
  }) : s.intl.formatToPlainString(s.t["2rh7rw"], {
    minutes: Math.max(e.minutes, 1),
    discountPercentage: n
  })
}
let d = e => {
  let t = e.expires_at,
    n = (0, r.A)(null != t ? Date.parse(t) : 0, o);
  return null == t ? null : u(n, Number(e.discount.amount))
}