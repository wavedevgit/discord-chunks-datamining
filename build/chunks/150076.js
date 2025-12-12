/** Chunk was on web.js **/
/** chunk id: 150076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => f
});
var Chunk707908 = require("./707908.js"),
  Chunk695170 = require("./695170.js"),
  Chunk805817 = require("./805817.js"),
  Chunk812975 = require("./812975.js"),
  Chunk347874 = require("./347874.js"),
  Chunk686942 = require("./686942.js"),
  Chunk829105 = require("./829105.js"),
  Chunk613607 = require("./613607.js"),
  Chunk68808 = require("./68808.js");

function f(e, t) {
  var n = t.dtstart,
    a = t.freq,
    s = t.interval,
    c = t.until,
    f = t.bysetpos,
    p = t.count;
  if (0 === p || 0 === s) return m(e);
  var E = d.o.fromDate(n),
    b = new o.Z(t);
  b.rebuild(E.year, E.month);
  for (var y = g(b, E, t);;) {
    var O = b.getdayset(a)(E.year, E.month, E.day),
      v = O[0],
      S = O[1],
      I = O[2],
      T = h(v, S, I, b, t);
    if ((0, l.Dw)(f))
      for (var C = (0, u.f)(f, y, S, I, b, v), A = 0; A < C.length; A++) {
        var N = C[A];
        if (c && N > c) return m(e);
        if (N >= n) {
          var P = _(N, t);
          if (!e.accept(P) || p && !--p) return m(e)
        }
      } else
        for (var A = S; A < I; A++) {
          var R = v[A];
          if ((0, l.EN)(R))
            for (var w = (0, i.zU)(b.yearordinal + R), D = 0; D < y.length; D++) {
              var x = y[D],
                N = (0, i.$e)(w, x);
              if (c && N > c) return m(e);
              if (N >= n) {
                var P = _(N, t);
                if (!e.accept(P) || p && !--p) return m(e)
              }
            }
        }
    if (0 === t.interval || (E.add(t, T), E.year > i.VQ)) return m(e);
    (0, r.e)(a) || (y = b.gettimeset(a)(E.hour, E.minute, E.second, 0)), b.rebuild(E.year, E.month)
  }
}

function p(e, t, n) {
  var r = n.bymonth,
    i = n.byweekno,
    o = n.byweekday,
    a = n.byeaster,
    s = n.bymonthday,
    c = n.bynmonthday,
    u = n.byyearday;
  return (0, l.Dw)(r) && !(0, l.q9)(r, e.mmask[t]) || (0, l.Dw)(i) && !e.wnomask[t] || (0, l.Dw)(o) && !(0, l.q9)(o, e.wdaymask[t]) || (0, l.Dw)(e.nwdaymask) && !e.nwdaymask[t] || null !== a && !(0, l.q9)(e.eastermask, t) || ((0, l.Dw)(s) || (0, l.Dw)(c)) && !(0, l.q9)(s, e.mdaymask[t]) && !(0, l.q9)(c, e.nmdaymask[t]) || (0, l.Dw)(u) && (t < e.yearlen && !(0, l.q9)(u, t + 1) && !(0, l.q9)(u, -e.yearlen + t) || t >= e.yearlen && !(0, l.q9)(u, t + 1 - e.yearlen) && !(0, l.q9)(u, -e.nextyearlen + t - e.yearlen))
}

function _(e, t) {
  return new c.M(e, t.tzid).rezonedDate()
}

function m(e) {
  return e.getValue()
}

function h(e, t, n, r, i) {
  for (var o = false, a = t; a < n; a++) {
    var s = e[a];
    (o = p(r, s, i)) && (e[s] = null)
  }
  return o
}

function g(e, t, n) {
  var i = n.freq,
    o = n.byhour,
    c = n.byminute,
    u = n.bysecond;
  return (0, r.e)(i) ? (0, s.hl)(n) : i >= a.Ci.HOURLY && (0, l.Dw)(o) && !(0, l.q9)(o, t.hour) || i >= a.Ci.MINUTELY && (0, l.Dw)(c) && !(0, l.q9)(c, t.minute) || i >= a.Ci.SECONDLY && (0, l.Dw)(u) && !(0, l.q9)(u, t.second) ? [] : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond)
}