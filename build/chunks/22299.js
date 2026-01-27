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
  let o = null != e && null != n && e.compare(n) > 0,
    s = null != e && null != t && 0 > e.compare(t),
    u = null != e && (null == r ? true : r(e)) || false,
    d = o || s || u,
    _ = [];
  if (d) {
    let e = p(),
      r = l.B.getGlobalDictionaryForPackage("@react-stately/datepicker") || f,
      d = new(0, c.J)(e, r),
      h = new(0, i.p)(e, g({}, a)),
      m = h.resolvedOptions().timeZone;
    s && null != t && _.push(d.format("rangeUnderflow", {
      minValue: h.format(t.toDate(m))
    })), o && null != n && _.push(d.format("rangeOverflow", {
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
      rangeOverflow: o,
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
  let o = i.indexOf(r);
  if (o < 0 && (o = 2), a > o) throw Error("maxGranularity must be greater than granularity");
  let s = i.slice(a, o + 1).reduce((t, n) => (t[n] = e[n], t), {});
  return null != t.hourCycle && (s.hour12 = 12 === t.hourCycle), s.timeZone = t.timeZone || "UTC", ("hour" === r || "minute" === r || "second" === r) && t.timeZone && !t.hideTimeZone && (s.timeZoneName = "short"), t.showEra && 0 === a && (s.era = "short"), s
}

function E(e) {
  return e && "hour" in e ? e : new(0, a.gX)
}

function y(e, t) {
  return null === e ? null : e ? (0, o.yP)(e, t) : true
}

function b(e, t, n, r) {
  if (e) return y(e, n);
  let i = (0, o.yP)((0, s.tB)(null != r ? r : (0, s.Xj)()).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), n);
  return "year" === t || "month" === t || "day" === t ? (0, o.gw)(i) : r ? i : (0, o.tR)(i)
}

function O(e, t) {
  let n = e && "timeZone" in e ? e.timeZone : true,
    r = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
  let [i, a] = (0, u.useState)([r, n]);
  return e && (i[0] !== r || i[1] !== n) && a([r, n]), t || (t = e ? r : i[0]), [t, e ? n : i[1]]
}