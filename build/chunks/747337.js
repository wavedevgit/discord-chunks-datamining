/** Chunk was on web.js **/
"use strict";
n.d(t, {
  h: () => s
});
var r = n(146150),
  i = n(695170),
  o = n(686942),
  a = n(603259);

function s(e, t) {
  var n, a, s = (0, i.t2)(e, 1, 1),
    c = (0, i.Eg)(e) ? 366 : 365,
    u = (0, i.Eg)(e + 1) ? 366 : 365,
    d = (0, i.fv)(s),
    f = (0, i.FO)(s),
    _ = (0, r.pi)((0, r.pi)({
      yearlen: c,
      nextyearlen: u,
      yearordinal: d,
      yearweekday: f
    }, l(e)), {
      wnomask: null
    });
  if ((0, o.cS)(t.byweekno)) return _;
  _.wnomask = (0, o.rx)(0, c + 7);
  var p = n = (0, o.Vy)(7 - f + t.wkst, 7);
  p >= 4 ? (p = 0, a = _.yearlen + (0, o.Vy)(f - t.wkst, 7)) : a = c - p;
  for (var h = Math.floor(Math.floor(a / 7) + (0, o.Vy)(a, 7) / 4), g = 0; g < t.byweekno.length; g++) {
    var m = t.byweekno[g];
    if (m < 0 && (m += h + 1), m > 0 && m <= h) {
      var E = void 0;
      m > 1 ? (E = p + (m - 1) * 7, p !== n && (E -= 7 - n)) : E = p;
      for (var v = 0; v < 7 && (_.wnomask[E] = 1, E++, _.wdaymask[E] !== t.wkst); v++);
    }
  }
  if ((0, o.q9)(t.byweekno, 1)) {
    var E = p + 7 * h;
    if (p !== n && (E -= 7 - n), E < c)
      for (var g = 0; g < 7 && (_.wnomask[E] = 1, E += 1, _.wdaymask[E] !== t.wkst); g++);
  }
  if (p) {
    var b = void 0;
    if ((0, o.q9)(t.byweekno, -1)) b = -1;
    else {
      var y = (0, i.FO)((0, i.t2)(e - 1, 1, 1)),
        O = (0, o.Vy)(7 - y.valueOf() + t.wkst, 7),
        S = (0, i.Eg)(e - 1) ? 366 : 365,
        I = void 0;
      O >= 4 ? (O = 0, I = S + (0, o.Vy)(y - t.wkst, 7)) : I = c - p, b = Math.floor(52 + (0, o.Vy)(I, 7) / 4)
    }
    if ((0, o.q9)(t.byweekno, b))
      for (var E = 0; E < p; E++) _.wnomask[E] = 1
  }
  return _
}

function l(e) {
  var t = (0, i.Eg)(e) ? 366 : 365,
    n = (0, i.t2)(e, 1, 1),
    r = (0, i.FO)(n);
  return 365 === t ? {
    mmask: a.RL,
    mdaymask: a.qm,
    nmdaymask: a.nB,
    wdaymask: a.fV.slice(r),
    mrange: a.sr
  } : {
    mmask: a.h3,
    mdaymask: a.fY,
    nmdaymask: a.RP,
    wdaymask: a.fV.slice(r),
    mrange: a.Pi
  }
}