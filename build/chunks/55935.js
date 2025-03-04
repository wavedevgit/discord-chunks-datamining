/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Hg: () => S,
  KC: () => g,
  QX: () => N,
  TD: () => T,
  Xf: () => b,
  Y4: () => v,
  _w: () => m,
  vc: () => E,
  wY: () => h
});
var r = n(913527),
  i = n.n(r),
  o = n(232551),
  a = n(710845),
  s = n(706454),
  l = n(695346),
  c = n(388032);
let u = new a.Z("DateUtils"),
  d = 6e4,
  f = 864e5,
  _ = Object.create(null);

function p(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e;
  "string" == typeof e || "number" == typeof e || e instanceof Date || (u.error("Invalid date given to startOfDay", {
    d: e
  }), n = new Date);
  let r = new Date(n),
    i = r.getTime();
  return t || (i -= r.getTimezoneOffset() * d), Math.floor(i / f) * f
}

function h(e, t) {
  return Math.floor((p(e, !1) - p(t, !1)) / f)
}

function g(e, t) {
  return Math.abs(+e - +t) <= f && e.getDate() === t.getDate()
}

function m(e, t, n) {
  return Math.abs(e.valueOf() - t.valueOf()) < n
}

function E(e, t) {
  let n = y(e).locale(),
    r = l.hg.getSetting(),
    i = "".concat(n, ":").concat(t, ":").concat(r),
    a = _[i];
  return null == a && (a = _[i] = (0, o.Z)(t)), a(O(e))
}

function v(e) {
  let t;
  let n = i().localeData(),
    r = i()(),
    o = h(O(e), r.toDate());
  return o < -1 ? E(e, "L LT") : (t = o < 0 ? "lastDay" : o < 1 ? "sameDay" : o < 2 ? "nextDay" : "sameElse", E(e, n.calendar(t, y(e), r)))
}

function b(e) {
  let t = i().localeData(),
    n = i()(),
    r = h(O(e), n.toDate());
  return 0 === r ? E(e, "LT") : -1 === r ? E(e, t.calendar("lastDay", y(e), n)) : r > -7 ? E(e, "dddd") : E(e, "L")
}

function y(e) {
  return i().isMoment(e) ? e : i()(e)
}

function O(e) {
  return i().isMoment(e) ? e.toDate() : e
}

function S(e) {
  let t;
  let n = i().localeData(),
    r = new Date,
    o = h(e, r);
  return "sameElse" == (t = o < -1 ? "sameElse" : o < 0 ? "lastDay" : o < 1 ? "sameDay" : o < 2 ? "nextDay" : "sameElse") ? E(e, "LLL") : E(e, n.calendar(t, i()(e), i()(r)))
}
s.default.addChangeListener(() => {
  _ = Object.create(null)
});
let I = [{
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

function T(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: +!!n
    };
  if (e > t || n && Number(e) + 1200 > Number(t)) return r;
  let i = Number(t) - Number(e);
  return I.forEach(e => {
    let {
      key: t,
      millisecondsInUnit: n
    } = e;
    r[t] = Math.floor(i / n), i -= r[t] * n
  }), r
}

function N(e, t) {
  return e.days > 0 ? c.NW.formatToPlainString(t.days, {
    days: e.days,
    hours: e.hours
  }) : e.hours > 0 ? c.NW.formatToPlainString(t.hours, {
    hours: e.hours,
    minutes: e.minutes
  }) : c.NW.formatToPlainString(t.minutes, {
    minutes: Math.max(1, e.minutes)
  })
}