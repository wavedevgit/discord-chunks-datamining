/** Chunk was on web.js **/
/** chunk id: 297130, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => f
});
var Chunk114922 = require("./114922.js"),
  Chunk222367 = require("./222367.js"),
  Chunk904514 = require("./904514.js"),
  Chunk90727 = require("./90727.js"),
  Chunk787920 = require("./787920.js"),
  Chunk391898 = require("./391898.js"),
  Chunk551253 = require("./551253.js"),
  Chunk720520 = require("./720520.js"),
  Chunk327854 = require("./327854.js");

function f(e, t) {
  var n = t.dtstart,
    s = t.freq,
    o = t.interval,
    c = t.until,
    f = t.bysetpos,
    p = t.count;
  if (0 === p || 0 === o) return h(e);
  var E = d.c.fromDate(n),
    y = new a.A(t);
  y.rebuild(E.year, E.month);
  for (var b = g(y, E, t);;) {
    var O = y.getdayset(s)(E.year, E.month, E.day),
      v = O[0],
      A = O[1],
      I = O[2],
      S = m(v, A, I, y, t);
    if ((0, l.z2)(f))
      for (var T = (0, u.B)(f, b, A, I, y, v), C = 0; C < T.length; C++) {
        var N = T[C];
        if (c && N > c) return h(e);
        if (N >= n) {
          var R = _(N, t);
          if (!e.accept(R) || p && !--p) return h(e)
        }
      } else
        for (var C = A; C < I; C++) {
          var w = v[C];
          if ((0, l.Wo)(w))
            for (var P = (0, i.Y_)(y.yearordinal + w), D = 0; D < b.length; D++) {
              var x = b[D],
                N = (0, i.kg)(P, x);
              if (c && N > c) return h(e);
              if (N >= n) {
                var R = _(N, t);
                if (!e.accept(R) || p && !--p) return h(e)
              }
            }
        }
    if (0 === t.interval || (E.add(t, S), E.year > i.KE)) return h(e);
    (0, r.d)(s) || (b = y.gettimeset(s)(E.hour, E.minute, E.second, 0)), y.rebuild(E.year, E.month)
  }
}

function p(e, t, n) {
  var r = n.bymonth,
    i = n.byweekno,
    a = n.byweekday,
    s = n.byeaster,
    o = n.bymonthday,
    c = n.bynmonthday,
    u = n.byyearday;
  return (0, l.z2)(r) && !(0, l.mK)(r, e.mmask[t]) || (0, l.z2)(i) && !e.wnomask[t] || (0, l.z2)(a) && !(0, l.mK)(a, e.wdaymask[t]) || (0, l.z2)(e.nwdaymask) && !e.nwdaymask[t] || null !== s && !(0, l.mK)(e.eastermask, t) || ((0, l.z2)(o) || (0, l.z2)(c)) && !(0, l.mK)(o, e.mdaymask[t]) && !(0, l.mK)(c, e.nmdaymask[t]) || (0, l.z2)(u) && (t < e.yearlen && !(0, l.mK)(u, t + 1) && !(0, l.mK)(u, -e.yearlen + t) || t >= e.yearlen && !(0, l.mK)(u, t + 1 - e.yearlen) && !(0, l.mK)(u, -e.nextyearlen + t - e.yearlen))
}

function _(e, t) {
  return new c.x(e, t.tzid).rezonedDate()
}

function h(e) {
  return e.getValue()
}

function m(e, t, n, r, i) {
  for (var a = false, s = t; s < n; s++) {
    var o = e[s];
    (a = p(r, o, i)) && (e[o] = null)
  }
  return a
}

function g(e, t, n) {
  var i = n.freq,
    a = n.byhour,
    c = n.byminute,
    u = n.bysecond;
  return (0, r.d)(i) ? (0, o.eN)(n) : i >= s.p3.HOURLY && (0, l.z2)(a) && !(0, l.mK)(a, t.hour) || i >= s.p3.MINUTELY && (0, l.z2)(c) && !(0, l.mK)(c, t.minute) || i >= s.p3.SECONDLY && (0, l.z2)(u) && !(0, l.mK)(u, t.second) ? [] : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond)
}