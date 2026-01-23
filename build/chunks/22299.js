/** Chunk was on web.js **/
/** chunk id: 22299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $l: () => E,
  bf: () => O,
  id: () => g,
  nf: () => y,
  nz: () => _,
  o_: () => b
});
var Chunk233957 = require("./233957.js"),
  Chunk515702 = require("./515702.js"),
  Chunk99478 = require("./99478.js"),
  Chunk376472 = require("./376472.js"),
  Chunk352404 = require("./352404.js"),
  Chunk731692 = require("./731692.js"),
  Chunk944490 = require("./944490.js"),
  Chunk64700 = require("./64700.js");

function d(e) {
  return e && e.__esModule ? e.default : e
}
let f = new(0, Chunk731692.B)(d(Chunk233957.A));

function p() {
  let e = "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e])
  } catch {
    e = "en-US"
  }
  return e
}

function _(e, t, n, r, a) {
  let s = null != e && null != n && e.compare(n) > 0,
    o = null != e && null != t && 0 > e.compare(t),
    u = null != e && (null == r ? true : r(e)) || false,
    d = s || o || u,
    _ = [];
  if (d) {
    let e = p(),
      r = l.B.getGlobalDictionaryForPackage("@react-stately/datepicker") || f,
      d = new(0, c.J)(e, r),
      h = new(0, i.p)(e, g({}, a)),
      m = h.resolvedOptions().timeZone;
    o && null != t && _.push(d.format("rangeUnderflow", {
      minValue: h.format(t.toDate(m))
    })), s && null != n && _.push(d.format("rangeOverflow", {
      maxValue: h.format(n.toDate(m))
    })), u && _.push(d.format("unavailableDate"))
  }
  return {
    isInvalid: d,
    validationErrors: _,
    validationDetails: {
      badInput: u,
      customError: false,
      patternMismatch: false,
      rangeOverflow: s,
      rangeUnderflow: o,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false,
      valid: !d
    }
  }
}
let h = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  },
  m = {
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
    ...t.shouldForceLeadingZeros ? m : h,
    ...e
  };
  let r = t.granularity || "minute",
    i = Object.keys(e),
    a = i.indexOf(null != (n = t.maxGranularity) ? n : "year");
  a < 0 && (a = 0);
  let s = i.indexOf(r);
  if (s < 0 && (s = 2), a > s) throw Error("maxGranularity must be greater than granularity");
  let o = i.slice(a, s + 1).reduce((t, n) => (t[n] = e[n], t), {});
  return null != t.hourCycle && (o.hour12 = 12 === t.hourCycle), o.timeZone = t.timeZone || "UTC", ("hour" === r || "minute" === r || "second" === r) && t.timeZone && !t.hideTimeZone && (o.timeZoneName = "short"), t.showEra && 0 === a && (o.era = "short"), o
}

function E(e) {
  return e && "hour" in e ? e : new(0, a.gX)
}

function y(e, t) {
  return null === e ? null : e ? (0, s.yP)(e, t) : true
}

function b(e, t, n, r) {
  if (e) return y(e, n);
  let i = (0, s.yP)((0, o.tB)(null != r ? r : (0, o.Xj)()).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), n);
  return "year" === t || "month" === t || "day" === t ? (0, s.gw)(i) : r ? i : (0, s.tR)(i)
}

function O(e, t) {
  let n = e && "timeZone" in e ? e.timeZone : true,
    r = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
  let [i, a] = (0, u.useState)([r, n]);
  return e && (i[0] !== r || i[1] !== n) && a([r, n]), t || (t = e ? r : i[0]), [t, e ? n : i[1]]
}