/** Chunk was on web.js **/
/** chunk id: 937615, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T3: () => f,
  T4: () => u,
  og: () => d,
  qr: () => m,
  xg: () => p
}), require("./415506.js"), require("./704826.js"), require("./35282.js");
var Chunk221513 = require("./221513.js"),
  Chunk706454 = require("./706454.js"),
  Chunk358085 = require("./358085.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let c = Object.freeze(["en-CA", "en-AU", "en-NZ"]);

function u(e, t, n) {
  var a;
  let s = null != n ? n : {},
    l = null != (a = null == n ? true : n.localeOverride) ? a : i.default.locale;
  "en-US" === l && c.includes(i.default.systemLocale) && (s.currencyDisplay = "code"), "en-US" === l && (0, o.isWindows)() && "en-GB" === i.default.systemLocale && (s.currencyDisplay = "code");
  let {
    maximumFractionDigits: u,
    minimumFractionDigits: d
  } = s;
  return 0 === u && null == d && (s.minimumFractionDigits = 0), (0, r.T4)(e, t, l, s)
}

function d(e, t, n) {
  if (t === s.rV.YEAR) return l.intl.formatToPlainString(l.t["rS8FA+"], {
    price: e
  });
  if (t === s.rV.MONTH && 1 === n) return l.intl.formatToPlainString(l.t.AbOLNu, {
    price: e
  });
  if (t === s.rV.MONTH && n > 1) return l.intl.formatToPlainString(l.t["Qc+9ww"], {
    price: e,
    intervalCount: n
  });
  throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n))
}

function f(e, t) {
  return Intl.NumberFormat(e, {
    style: "percent",
    minimumFractionDigits: 0
  }).format(t)
}

function p(e) {
  let t = "interval_count" in e ? e.interval_count : e.intervalCount,
    n = (0, a.aS)(e.id);
  return d(u(n.amount, n.currency), e.interval, t)
}

function _(e) {
  return e.length > 5 ? e.replace(/\.00$/, "") : e
}

function m(e, t, n) {
  return _(u(e, t, n))
}