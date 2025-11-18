/** Chunk was on web.js **/
/** chunk id: 96377, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk740078 = require("./740078.js"),
  Chunk126387 = require("./126387.js"),
  Chunk205208 = require("./205208.js"),
  Chunk792278 = require("./792278.js"),
  Chunk464826 = require("./464826.js"),
  Chunk493623 = require("./493623.js"),
  Chunk343713 = require("./343713.js"),
  Chunk510104 = require("./510104.js"),
  Chunk632471 = require("./632471.js"),
  Chunk607033 = require("./607033.js"),
  Chunk894417 = require("./894417.js");
let p = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      p = e.name,
      h = n.mainAxis,
      m = true === h || h,
      g = n.altAxis,
      E = true !== g && g,
      b = n.boundary,
      y = n.rootBoundary,
      O = n.altBoundary,
      v = n.padding,
      I = n.tether,
      T = true === I || I,
      S = n.tetherOffset,
      A = true === S ? 0 : S,
      C = (0, u.Z)(t, {
        boundary: b,
        rootBoundary: y,
        padding: v,
        altBoundary: O
      }),
      N = (0, i.Z)(t.placement),
      R = (0, d.Z)(t.placement),
      P = !R,
      D = (0, a.Z)(N),
      w = (0, o.Z)(D),
      L = t.modifiersData.popperOffsets,
      x = t.rects.reference,
      M = t.rects.popper,
      j = "function" == typeof A ? A(Object.assign({}, t.rects, {
        placement: t.placement
      })) : A,
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
      if (m) {
        var B, Z = "y" === D ? r.we : r.t$,
          F = "y" === D ? r.I : r.F2,
          V = "y" === D ? "height" : "width",
          H = L[D],
          Y = H + C[Z],
          W = H - C[F],
          K = T ? -M[V] / 2 : 0,
          z = R === r.BL ? x[V] : M[V],
          q = R === r.BL ? -M[V] : -x[V],
          X = t.elements.arrow,
          Q = T && X ? (0, l.Z)(X) : {
            width: 0,
            height: 0
          },
          J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.Z)(),
          $ = J[Z],
          ee = J[F],
          et = (0, s.u)(0, x[V], Q[V]),
          en = P ? x[V] / 2 - K - et - $ - k.mainAxis : z - et - $ - k.mainAxis,
          er = P ? -x[V] / 2 + K + et + ee + k.mainAxis : q + et + ee + k.mainAxis,
          ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
          ea = ei ? "y" === D ? ei.clientTop || 0 : ei.clientLeft || 0 : 0,
          eo = null != (B = null == U ? true : U[D]) ? B : 0,
          es = H + en - eo - ea,
          el = H + er - eo,
          ec = (0, s.u)(T ? (0, _.VV)(Y, es) : Y, H, T ? (0, _.Fp)(W, el) : W);
        L[D] = ec, G[D] = ec - H
      }
      if (E) {
        var eu, ed = "x" === D ? r.we : r.t$,
          ef = "x" === D ? r.I : r.F2,
          e_ = L[w],
          ep = "y" === w ? "height" : "width",
          eh = e_ + C[ed],
          em = e_ - C[ef],
          eg = false !== [r.we, r.t$].indexOf(N),
          eE = null != (eu = null == U ? true : U[w]) ? eu : 0,
          eb = eg ? eh : e_ - x[ep] - M[ep] - eE + k.altAxis,
          ey = eg ? e_ + x[ep] + M[ep] - eE - k.altAxis : em,
          eO = T && eg ? (0, s.q)(eb, e_, ey) : (0, s.u)(T ? eb : eh, e_, T ? ey : em);
        L[w] = eO, G[w] = eO - e_
      }
      t.modifiersData[p] = G
    }
  },
  requiresIfExists: ["offset"]
}