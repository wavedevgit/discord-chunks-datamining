/** Chunk was on web.js **/
/** chunk id: 531857, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk56636 = require("./56636.js"),
  Chunk222367 = require("./222367.js"),
  Chunk391898 = require("./391898.js"),
  Chunk760162 = require("./760162.js");

function o(e, t) {
  var n, s, o = (0, i.w$)(e, 1, 1),
    c = (0, i.U_)(e) ? 366 : 365,
    u = (0, i.U_)(e + 1) ? 366 : 365,
    d = (0, i.ZO)(o),
    f = (0, i.VJ)(o),
    p = (0, r.Cl)((0, r.Cl)({
      yearlen: c,
      nextyearlen: u,
      yearordinal: d,
      yearweekday: f
    }, l(e)), {
      wnomask: null
    });
  if ((0, a.Ie)(t.byweekno)) return p;
  p.wnomask = (0, a.ux)(0, c + 7);
  var _ = n = (0, a._D)(7 - f + t.wkst, 7);
  _ >= 4 ? (_ = 0, s = p.yearlen + (0, a._D)(f - t.wkst, 7)) : s = c - _;
  for (var h = Math.floor(Math.floor(s / 7) + (0, a._D)(s, 7) / 4), m = 0; m < t.byweekno.length; m++) {
    var g = t.byweekno[m];
    if (g < 0 && (g += h + 1), g > 0 && g <= h) {
      var E = true;
      g > 1 ? (E = _ + (g - 1) * 7, _ !== n && (E -= 7 - n)) : E = _;
      for (var y = 0; y < 7 && (p.wnomask[E] = 1, E++, p.wdaymask[E] !== t.wkst); y++);
    }
  }
  if ((0, a.mK)(t.byweekno, 1)) {
    var E = _ + 7 * h;
    if (_ !== n && (E -= 7 - n), E < c)
      for (var m = 0; m < 7 && (p.wnomask[E] = 1, E += 1, p.wdaymask[E] !== t.wkst); m++);
  }
  if (_) {
    var b = true;
    if ((0, a.mK)(t.byweekno, false)) b = false;
    else {
      var O = (0, i.VJ)((0, i.w$)(e - 1, 1, 1)),
        v = (0, a._D)(7 - O.valueOf() + t.wkst, 7),
        A = (0, i.U_)(e - 1) ? 366 : 365,
        I = true;
      v >= 4 ? (v = 0, I = A + (0, a._D)(O - t.wkst, 7)) : I = c - _, b = Math.floor(52 + (0, a._D)(I, 7) / 4)
    }
    if ((0, a.mK)(t.byweekno, b))
      for (var E = 0; E < _; E++) p.wnomask[E] = 1
  }
  return p
}

function l(e) {
  var t = (0, i.U_)(e) ? 366 : 365,
    n = (0, i.w$)(e, 1, 1),
    r = (0, i.VJ)(n);
  return 365 === t ? {
    mmask: s.YH,
    mdaymask: s.wU,
    nmdaymask: s.yX,
    wdaymask: s.Qd.slice(r),
    mrange: s.nJ
  } : {
    mmask: s.$x,
    mdaymask: s.Zx,
    nmdaymask: s.vI,
    wdaymask: s.Qd.slice(r),
    mrange: s.AK
  }
}