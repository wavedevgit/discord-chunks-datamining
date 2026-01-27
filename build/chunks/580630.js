/** Chunk was on web.js **/
/** chunk id: 580630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $g: () => y,
  CE: () => b,
  Gp: () => m,
  RS: () => I,
  _J: () => v,
  l9: () => O,
  ze: () => E
}), require("./65821.js"), require("./747238.js"), require("./812715.js");
var Chunk465323 = require("./465323.js"),
  Chunk307006 = require("./307006.js"),
  Chunk773669 = require("./773669.js"),
  Chunk615405 = require("./615405.js"),
  Chunk723702 = require("./723702.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let _ = Object.freeze(["en-CA", "en-AU", "en-NZ"]),
  h = 1.95583;

function m(e, t, n) {
  var i;
  let o = p({}, null != n ? n : {}),
    l = null != (i = null == n ? true : n.localeOverride) ? i : a.default.locale;
  "en-US" === l && _.includes(a.default.systemLocale) && (o.currencyDisplay = "code"), "en-US" === l && (0, s.isWindows)() && "en-GB" === a.default.systemLocale && (o.currencyDisplay = "code");
  let {
    maximumFractionDigits: c,
    minimumFractionDigits: u
  } = o;
  return 0 === c && null == u && (o.minimumFractionDigits = 0), (0, r.$g)(e, t, l, o)
}

function g(e) {
  if (Date.now() >= new Date("2026-08-05T22:00:00Z").getTime()) returnfalse;
  let t = null;
  switch ((0, s.getPlatformName)()) {
    case "android":
      t = n(5255).A.getUserCountry();
      break;
    case "ios":
      var r;
      t = null == (r = i.A.getStoreFront()) ? true : r.country;
      break;
    default:
      t = o.A.ipCountryCode
  }
  return "BG" === t && (null == e ? true : e.toLowerCase()) === u.Yr.EUR
}

function E(e, t) {
  let n = m(e, u.Yr.EUR, t),
    r = m(e * h, u.Yr.BGN, t);
  return "".concat(n, " (").concat(r, ")")
}

function y(e, t, n) {
  return g(t) ? E(e, n) : m(e, t, n)
}

function b(e, t, n) {
  if (t === c.WT.YEAR) return d.intl.formatToPlainString(d.t["rS8FA+"], {
    price: e
  });
  if (t === c.WT.MONTH && 1 === n) return d.intl.formatToPlainString(d.t.AbOLNu, {
    price: e
  });
  if (t === c.WT.MONTH && n > 1) return d.intl.formatToPlainString(d.t["Qc+9ww"], {
    price: e,
    intervalCount: n
  });
  throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n))
}

function O(e, t) {
  return Intl.NumberFormat(e, {
    style: "percent",
    minimumFractionDigits: 0
  }).format(t)
}

function v(e) {
  let t = "interval_count" in e ? e.interval_count : e.intervalCount,
    n = (0, l.y8)(e.id);
  return b(y(n.amount, n.currency), e.interval, t)
}

function A(e) {
  return e.length > 5 ? e.replace(/\.00(?=[\s)]|$)/g, "") : e
}

function I(e, t, n) {
  return A(y(e, t, n))
}