/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(740078),
  i = n(126387),
  o = n(205208),
  a = n(792278),
  s = n(464826),
  l = n(493623),
  c = n(343713),
  u = n(510104),
  d = n(632471),
  f = n(607033),
  _ = n(894417);
let p = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      p = e.name,
      h = n.mainAxis,
      g = void 0 === h || h,
      m = n.altAxis,
      E = void 0 !== m && m,
      v = n.boundary,
      b = n.rootBoundary,
      y = n.altBoundary,
      O = n.padding,
      S = n.tether,
      I = void 0 === S || S,
      T = n.tetherOffset,
      N = void 0 === T ? 0 : T,
      A = (0, u.Z)(t, {
        boundary: v,
        rootBoundary: b,
        padding: O,
        altBoundary: y
      }),
      C = (0, i.Z)(t.placement),
      R = (0, d.Z)(t.placement),
      P = !R,
      D = (0, o.Z)(C),
      w = (0, a.Z)(D),
      L = t.modifiersData.popperOffsets,
      x = t.rects.reference,
      M = t.rects.popper,
      j = "function" == typeof N ? N(Object.assign({}, t.rects, {
        placement: t.placement
      })) : N,
      k = "number" == typeof j ? {
        mainAxis: j,
        altAxis: j
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, j),
      U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      G = {
        x: 0,
        y: 0
      };
    if (L) {
      if (g) {
        var B, F = "y" === D ? r.we : r.t$,
          V = "y" === D ? r.I : r.F2,
          Z = "y" === D ? "height" : "width",
          H = L[D],
          W = H + A[F],
          Y = H - A[V],
          K = I ? -M[Z] / 2 : 0,
          z = R === r.BL ? x[Z] : M[Z],
          q = R === r.BL ? -M[Z] : -x[Z],
          Q = t.elements.arrow,
          X = I && Q ? (0, l.Z)(Q) : {
            width: 0,
            height: 0
          },
          J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.Z)(),
          $ = J[F],
          ee = J[V],
          et = (0, s.u)(0, x[Z], X[Z]),
          en = P ? x[Z] / 2 - K - et - $ - k.mainAxis : z - et - $ - k.mainAxis,
          er = P ? -x[Z] / 2 + K + et + ee + k.mainAxis : q + et + ee + k.mainAxis,
          ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
          eo = ei ? "y" === D ? ei.clientTop || 0 : ei.clientLeft || 0 : 0,
          ea = null != (B = null == U ? void 0 : U[D]) ? B : 0,
          es = H + en - ea - eo,
          el = H + er - ea,
          ec = (0, s.u)(I ? (0, _.VV)(W, es) : W, H, I ? (0, _.Fp)(Y, el) : Y);
        L[D] = ec, G[D] = ec - H
      }
      if (E) {
        var eu, ed = "x" === D ? r.we : r.t$,
          ef = "x" === D ? r.I : r.F2,
          e_ = L[w],
          ep = "y" === w ? "height" : "width",
          eh = e_ + A[ed],
          eg = e_ - A[ef],
          em = -1 !== [r.we, r.t$].indexOf(C),
          eE = null != (eu = null == U ? void 0 : U[w]) ? eu : 0,
          ev = em ? eh : e_ - x[ep] - M[ep] - eE + k.altAxis,
          eb = em ? e_ + x[ep] + M[ep] - eE - k.altAxis : eg,
          ey = I && em ? (0, s.q)(ev, e_, eb) : (0, s.u)(I ? ev : eh, e_, I ? eb : eg);
        L[w] = ey, G[w] = ey - e_
      }
      t.modifiersData[p] = G
    }
  },
  requiresIfExists: ["offset"]
}