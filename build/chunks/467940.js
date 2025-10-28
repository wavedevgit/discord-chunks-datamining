/** Chunk was on 33622 **/
/** chunk id: 467940, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Ai: () => g,
  OJ: () => v,
  iZ: () => b,
  oE: () => y,
  p2: () => D,
  zu: () => p
});
var u, Chunk233213 = require("./233213.js"),
  Chunk45728 = require("./45728.js"),
  Chunk720479 = require("./720479.js"),
  Chunk640475 = require("./640475.js"),
  Chunk533426 = require("./533426.js"),
  Chunk919118 = require("./919118.js"),
  Chunk309098 = require("./309098.js"),
  Chunk647438 = require("./647438.js");
let m = new(0, Chunk919118.J)((u = Chunk233213.Z) && u.__esModule ? u.default : u);

function D(e, a, t, u, n) {
  let i = null != e && null != t && e.compare(t) > 0,
    o = null != e && null != a && 0 > e.compare(a),
    l = null != e && (null == u ? true : u(e)) || false,
    c = i || o || l,
    D = [];
  if (c) {
    let e = function() {
        let e = "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return e
      }(),
      u = s.J.getGlobalDictionaryForPackage("@react-stately/datepicker") || m,
      c = new(0, d.E)(e, u),
      h = new(0, r.C)(e, y({}, n)),
      f = h.resolvedOptions().timeZone;
    o && null != a && D.push(c.format("rangeUnderflow", {
      minValue: h.format(a.toDate(f))
    })), i && null != t && D.push(c.format("rangeOverflow", {
      maxValue: h.format(t.toDate(f))
    })), l && D.push(c.format("unavailableDate"))
  }
  return {
    isInvalid: c,
    validationErrors: D,
    validationDetails: {
      badInput: l,
      customError: false,
      patternMismatch: false,
      rangeOverflow: i,
      rangeUnderflow: o,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false,
      valid: !c
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
  f = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

function y(e, a) {
  var t;
  e = {
    ...a.shouldForceLeadingZeros ? f : h,
    ...e
  };
  let u = a.granularity || "minute",
    n = Object.keys(e),
    r = n.indexOf(null != (t = a.maxGranularity) ? t : "year");
  r < 0 && (r = 0);
  let i = n.indexOf(u);
  if (i < 0 && (i = 2), r > i) throw Error("maxGranularity must be greater than granularity");
  let o = n.slice(r, i + 1).reduce((a, t) => (a[t] = e[t], a), {});
  return null != a.hourCycle && (o.hour12 = 12 === a.hourCycle), o.timeZone = a.timeZone || "UTC", ("hour" === u || "minute" === u || "second" === u) && a.timeZone && !a.hideTimeZone && (o.timeZoneName = "short"), a.showEra && 0 === r && (o.era = "short"), o
}

function p(e) {
  return e && "hour" in e ? e : new(0, i.qp)
}

function g(e, a) {
  return null === e ? null : e ? (0, o.Mw)(e, a) : true
}

function v(e, a, t, u) {
  if (e) return g(e, t);
  let n = (0, o.Mw)((0, l.zO)(null != u ? u : (0, l.iT)()).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), t);
  return "year" === a || "month" === a || "day" === a ? (0, o.WG)(n) : u ? n : (0, o.IO)(n)
}

function b(e, a) {
  let t = e && "timeZone" in e ? e.timeZone : true,
    u = e && "minute" in e ? "minute" : "day";
  if (e && a && !(a in e)) throw Error("Invalid granularity " + a + " for value " + e.toString());
  let [n, r] = (0, c.useState)([u, t]);
  return e && (n[0] !== u || n[1] !== t) && r([u, t]), a || (a = e ? u : n[0]), [a, e ? t : n[1]]
}