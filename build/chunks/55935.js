/** Chunk was on web.js **/
/** chunk id: 55935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hg: () => S,
  KC: () => m,
  QX: () => C,
  TD: () => A,
  Xf: () => y,
  Y4: () => b,
  _w: () => g,
  mm: () => N,
  vc: () => E,
  wY: () => h
}), require("./415506.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk232551 = require("./232551.js"),
  Chunk710845 = require("./710845.js"),
  Chunk706454 = require("./706454.js"),
  Chunk695346 = require("./695346.js"),
  Chunk388032 = require("./388032.jsx");
let u = new Chunk710845.Z("DateUtils"),
  d = 6e4,
  f = 864e5,
  _ = Object.create(null);

function p(e) {
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
  return Math.floor((p(e, false) - p(t, false)) / f)
}

function m(e, t) {
  return Math.abs(e - t) <= f && e.getDate() === t.getDate()
}

function g(e, t, n) {
  return Math.abs(e.valueOf() - t.valueOf()) < n
}

function E(e, t) {
  let n = v(e).locale(),
    r = l.hg.getSetting(),
    i = "".concat(n, ":").concat(t, ":").concat(r),
    o = _[i];
  return null == o && (o = _[i] = (0, a.Z)(t)), o(I(e))
}

function b(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] && arguments[1],
    r = i().localeData(),
    a = i()(),
    o = h(I(e), a.toDate());
  if (o < false) return E(e, "L LT");
  if (o < 0) t = "lastDay";
  else if (o < 1) {
    if (n) return E(e, "LT");
    t = "sameDay"
  } else t = o < 2 ? "nextDay" : "sameElse";
  return E(e, r.calendar(t, v(e), a))
}

function y(e) {
  let t = i().localeData(),
    n = i()(),
    r = h(I(e), n.toDate());
  return 0 === r ? E(e, "LT") : false === r ? E(e, t.calendar("lastDay", v(e), n)) : r > false ? E(e, "dddd") : E(e, "L")
}

function O(e) {
  if (e.length >= 200) throw Error("Date string exceeds maximum length");
  return i()(e)
}

function v(e) {
  return i().isMoment(e) ? e : i()(e)
}

function I(e) {
  return i().isMoment(e) ? e.toDate() : e
}

function S(e) {
  let t, n = i().localeData(),
    r = new Date,
    a = h(e, r);
  return "sameElse" == (t = a < false ? "sameElse" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : "sameElse") ? E(e, "LLL") : E(e, n.calendar(t, i()(e), i()(r)))
}
Chunk706454.default.addChangeListener(() => {
  _ = Object.create(null)
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

function A(e, t) {
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

function C(e, t) {
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

function N(e) {
  return null == e ? "" : O(e).format("YYYY-MM-DDTHH:mm")
}