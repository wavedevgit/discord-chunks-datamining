/** Chunk was on web.js **/
/** chunk id: 937615, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T3: () => d,
  T4: () => c,
  og: () => u,
  qr: () => p,
  xg: () => f
}), require("./415506.js"), require("./704826.js"), require("./35282.js");
var Chunk221513 = require("./221513.js"),
  Chunk706454 = require("./706454.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let l = Object.freeze(["en-CA", "en-AU", "en-NZ"]);

function c(e, t, n) {
  var a;
  let o = null != n ? n : {},
    s = null != (a = null == n ? true : n.localeOverride) ? a : i.default.locale;
  "en-US" === s && l.includes(i.default.systemLocale) && (o.currencyDisplay = "code");
  let {
    maximumFractionDigits: c,
    minimumFractionDigits: u
  } = o;
  return 0 === c && null == u && (o.minimumFractionDigits = 0), (0, r.T4)(e, t, s, o)
}

function u(e, t, n) {
  if (t === o.rV.YEAR) return s.intl.formatToPlainString(s.t.rS8FAw, {
    price: e
  });
  if (t === o.rV.MONTH && 1 === n) return s.intl.formatToPlainString(s.t.AbOLNj, {
    price: e
  });
  if (t === o.rV.MONTH && n > 1) return s.intl.formatToPlainString(s.t["Qc+9w8"], {
    price: e,
    intervalCount: n
  });
  throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n))
}

function d(e, t) {
  return Intl.NumberFormat(e, {
    style: "percent",
    minimumFractionDigits: 0
  }).format(t)
}

function f(e) {
  let t = "interval_count" in e ? e.interval_count : e.intervalCount,
    n = (0, a.aS)(e.id);
  return u(c(n.amount, n.currency), e.interval, t)
}

function _(e) {
  return e.length > 5 ? e.replace(/\.00$/, "") : e
}

function p(e, t, n) {
  return _(c(e, t, n))
}