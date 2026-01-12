/** Chunk was on web.js **/
/** chunk id: 937615, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HR: () => E,
  T3: () => O,
  T4: () => b,
  og: () => y,
  qr: () => I,
  xg: () => v,
  yH: () => h
}), require("./415506.js"), require("./704826.js"), require("./35282.js");
var Chunk221513 = require("./221513.js"),
  Chunk389053 = require("./389053.js"),
  Chunk706454 = require("./706454.js"),
  Chunk351402 = require("./351402.js"),
  Chunk358085 = require("./358085.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

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
  m = 1.95583;

function h(e, t, n) {
  var i;
  let o = p({}, null != n ? n : {}),
    l = null != (i = null == n ? true : n.localeOverride) ? i : a.default.locale;
  "en-US" === l && _.includes(a.default.systemLocale) && (o.currencyDisplay = "code"), "en-US" === l && (0, s.isWindows)() && "en-GB" === a.default.systemLocale && (o.currencyDisplay = "code");
  let {
    maximumFractionDigits: c,
    minimumFractionDigits: u
  } = o;
  return 0 === c && null == u && (o.minimumFractionDigits = 0), (0, r.T4)(e, t, l, o)
}

function g(e) {
  if (Date.now() >= new Date("2026-08-05T22:00:00Z").getTime()) returnfalse;
  let t = null;
  switch ((0, s.getPlatformName)()) {
    case "android":
      t = n(332983).Z.getUserCountry();
      break;
    case "ios":
      var r;
      t = null == (r = i.Z.getStoreFront()) ? true : r.country;
      break;
    default:
      t = o.Z.ipCountryCode
  }
  return "BG" === t && (null == e ? true : e.toLowerCase()) === u.pK.EUR
}

function E(e, t) {
  let n = h(e, u.pK.EUR, t),
    r = h(e * m, u.pK.BGN, t);
  return "".concat(n, " (").concat(r, ")")
}

function b(e, t, n) {
  return g(t) ? E(e, n) : h(e, t, n)
}

function y(e, t, n) {
  if (t === c.rV.YEAR) return d.intl.formatToPlainString(d.t["rS8FA+"], {
    price: e
  });
  if (t === c.rV.MONTH && 1 === n) return d.intl.formatToPlainString(d.t.AbOLNu, {
    price: e
  });
  if (t === c.rV.MONTH && n > 1) return d.intl.formatToPlainString(d.t["Qc+9ww"], {
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
    n = (0, l.aS)(e.id);
  return y(b(n.amount, n.currency), e.interval, t)
}

function S(e) {
  return e.length > 5 ? e.replace(/\.00(?=[\s)]|$)/g, "") : e
}

function I(e, t, n) {
  return S(b(e, t, n))
}