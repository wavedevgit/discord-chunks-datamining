/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(685516),
  i = n(285363),
  o = n(175922),
  a = n(406434),
  s = n(6138),
  l = n(740078),
  c = n(882159),
  u = n(544338),
  d = n(581206);

function f(e, t) {
  void 0 === t && (t = {});
  var n = t,
    f = n.placement,
    _ = void 0 === f ? e.placement : f,
    p = n.strategy,
    h = void 0 === p ? e.strategy : p,
    m = n.boundary,
    g = void 0 === m ? l.zV : m,
    E = n.rootBoundary,
    v = void 0 === E ? l.Pj : E,
    b = n.elementContext,
    y = void 0 === b ? l.k5 : b,
    O = n.altBoundary,
    I = void 0 !== O && O,
    S = n.padding,
    T = void 0 === S ? 0 : S,
    N = (0, u.Z)("number" != typeof T ? T : (0, d.Z)(T, l.mv)),
    A = y === l.k5 ? l.YP : l.k5,
    C = e.rects.popper,
    R = e.elements[I ? A : y],
    P = (0, r.Z)((0, c.kK)(R) ? R : R.contextElement || (0, i.Z)(e.elements.popper), g, v, h),
    w = (0, o.Z)(e.elements.reference),
    D = (0, a.Z)({
      reference: w,
      element: C,
      strategy: "absolute",
      placement: _
    }),
    L = (0, s.Z)(Object.assign({}, C, D)),
    x = y === l.k5 ? L : w,
    M = {
      top: P.top - x.top + N.top,
      bottom: x.bottom - P.bottom + N.bottom,
      left: P.left - x.left + N.left,
      right: x.right - P.right + N.right
    },
    k = e.modifiersData.offset;
  if (y === l.k5 && k) {
    var j = k[_];
    Object.keys(M).forEach(function(e) {
      var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
        n = [l.we, l.I].indexOf(e) >= 0 ? "y" : "x";
      M[e] += j[n] * t
    })
  }
  return M
}