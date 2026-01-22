/** Chunk was on web.js **/
/** chunk id: 405269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fe: () => O,
  K7: () => I,
  Tf: () => C,
  Xm: () => R,
  c_: () => m,
  i$: () => b,
  m_: () => h,
  mk: () => y,
  ro: () => g,
  uN: () => N,
  v0: () => E
}), require("./65821.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk83168 = require("./83168.js"),
  Chunk626584 = require("./626584.js"),
  Chunk773669 = require("./773669.js"),
  Chunk253932 = require("./253932.js"),
  Chunk985018 = require("./985018.jsx");
let u = new Chunk626584.A("DateUtils"),
  d = 6e4,
  f = 864e5,
  p = Object.create(null);

function _(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = e;
  "string" == typeof e || "number" == typeof e || e instanceof Date || (u.error("Invalid date given to startOfDay", {
    d: e
  }), n = new Date);
  let r = new Date(n),
    i = r.getTime();
  return t || (i -= r.getTimezoneOffset() * d), Math.floor(i / f) * f
}

function h(e, t) {
  return Math.floor((_(e, false) - _(t, false)) / f)
}

function m(e, t) {
  return (e.getTime() - t.getTime()) / f
}

function g(e, t) {
  return Math.abs(e - t) <= f && e.getDate() === t.getDate()
}

function E(e, t, n) {
  return Math.abs(e.valueOf() - t.valueOf()) < n
}

function b(e, t) {
  let n = v(e).locale(),
    r = l.PZ.getSetting(),
    i = "".concat(n, ":").concat(t, ":").concat(r),
    s = p[i];
  return null == s && (s = p[i] = (0, a.A)(t)), s(S(e))
}

function y(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] && arguments[1],
    r = i().localeData(),
    a = i()(),
    s = h(S(e), a.toDate());
  if (s < false) return b(e, "L LT");
  if (s < 0) t = "lastDay";
  else if (s < 1) {
    if (n) return b(e, "LT");
    t = "sameDay"
  } else t = s < 2 ? "nextDay" : "sameElse";
  return b(e, r.calendar(t, v(e), a))
}

function O(e) {
  let t = i().localeData(),
    n = i()(),
    r = h(S(e), n.toDate());
  return 0 === r ? b(e, "LT") : false === r ? b(e, t.calendar("lastDay", v(e), n)) : r > false ? b(e, "dddd") : b(e, "L")
}

function A(e) {
  if (e.length >= 200) throw Error("Date string exceeds maximum length");
  return i()(e)
}

function v(e) {
  return i().isMoment(e) ? e : i()(e)
}

function S(e) {
  return i().isMoment(e) ? e.toDate() : e
}

function I(e) {
  let t, n = i().localeData(),
    r = new Date,
    a = h(e, r);
  return "sameElse" == (t = a < false ? "sameElse" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : "sameElse") ? b(e, "LLL") : b(e, n.calendar(t, i()(e), i()(r)))
}
Chunk773669.default.addChangeListener(() => {
  p = Object.create(null)
});
let T = [{
  key: "days",
  millisecondsInUnit: 864e5
}, {
  key: "hours",
  millisecondsInUnit: 36e5
}, {
  key: "minutes",
  millisecondsInUnit: 6e4
}, {
  key: "seconds",
  millisecondsInUnit: 1e3
}];

function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: +!!n
    };
  if (e > t || n && Number(e) + 1200 > Number(t)) return r;
  let i = Number(t) - Number(e);
  return T.forEach(e => {
    let {
      key: t,
      millisecondsInUnit: n
    } = e;
    r[t] = Math.floor(i / n), i -= r[t] * n
  }), r
}

function N(e, t) {
  return e.days > 0 ? c.intl.formatToPlainString(t.days, {
    days: e.days,
    hours: e.hours
  }) : e.hours > 0 ? c.intl.formatToPlainString(t.hours, {
    hours: e.hours,
    minutes: e.minutes
  }) : c.intl.formatToPlainString(t.minutes, {
    minutes: Math.max(1, e.minutes)
  })
}

function R(e) {
  return null == e ? "" : A(e).format("YYYY-MM-DDTHH:mm")
}