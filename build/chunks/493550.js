/** Chunk was on web.js **/
/** chunk id: 493550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ai: () => b,
  OJ: () => y,
  iZ: () => O,
  oE: () => g,
  p2: () => _,
  zu: () => E
});
var Chunk201767 = require("./201767.js"),
  Chunk45728 = require("./45728.js"),
  Chunk720479 = require("./720479.js"),
  Chunk640475 = require("./640475.js"),
  Chunk533426 = require("./533426.js"),
  Chunk919118 = require("./919118.js"),
  Chunk309098 = require("./309098.js"),
  Chunk473749 = require("./473749.js");

function d(e) {
  return e && e.__esModule ? e.default : e
}
let f = new(0, Chunk919118.J)(d(Chunk201767.Z));

function p() {
  let e = "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([module])
  } catch {
    e = "en-US"
  }
  return module
}

function _(e, t, n, r, o) {
  let a = null != e && null != n && e.compare(n) > 0,
    s = null != e && null != t && 0 > e.compare(t),
    u = null != e && (null == r ? true : r(e)) || false,
    d = a || s || u,
    _ = [];
  if (d) {
    let e = p(),
      r = l.J.getGlobalDictionaryForPackage("@react-stately/datepicker") || f,
      d = new(0, c.E)(e, r),
      m = new(0, i.C)(e, g({}, o)),
      h = m.resolvedOptions().timeZone;
    s && null != t && _.push(d.format("rangeUnderflow", {
      minValue: m.format(t.toDate(h))
    })), a && null != n && _.push(d.format("rangeOverflow", {
      maxValue: m.format(n.toDate(h))
    })), u && _.push(d.format("unavailableDate"))
  }
  return {
    isInvalid: d,
    validationErrors: _,
    validationDetails: {
      badInput: u,
      customError: false,
      patternMismatch: false,
      rangeOverflow: a,
      rangeUnderflow: s,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false,
      valid: !d
    }
  }
}
let m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  },
  h = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

function g(e, t) {
  var n;
  e = {
    ...t.shouldForceLeadingZeros ? h : m,
    ...e
  };
  let r = t.granularity || "minute",
    i = Object.keys(e),
    o = i.indexOf(null != (n = t.maxGranularity) ? n : "year");
  o < 0 && (o = 0);
  let a = i.indexOf(r);
  if (a < 0 && (a = 2), o > a) throw Error("maxGranularity must be greater than granularity");
  let s = i.slice(o, a + 1).reduce((t, n) => (t[n] = e[n], t), {});
  return null != t.hourCycle && (s.hour12 = 12 === t.hourCycle), s.timeZone = t.timeZone || "UTC", ("hour" === r || "minute" === r || "second" === r) && t.timeZone && !t.hideTimeZone && (s.timeZoneName = "short"), t.showEra && 0 === o && (s.era = "short"), s
}

function E(e) {
  return e && "hour" in e ? e : new(0, o.qp)
}

function b(e, t) {
  return null === e ? null : e ? (0, a.Mw)(e, t) : true
}

function y(e, t, n, r) {
  if (e) return b(e, n);
  let i = (0, a.Mw)((0, s.zO)(null != r ? r : (0, s.iT)()).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), n);
  return "year" === t || "month" === t || "day" === t ? (0, a.WG)(i) : r ? i : (0, a.IO)(i)
}

function O(e, t) {
  let n = e && "timeZone" in e ? e.timeZone : true,
    r = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
  let [i, o] = (0, u.useState)([r, n]);
  return e && (i[0] !== r || i[1] !== n) && o([r, n]), t || (t = e ? r : i[0]), [t, e ? n : i[1]]
}