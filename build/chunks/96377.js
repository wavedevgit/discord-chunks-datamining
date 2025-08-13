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
      N = (0, u.Z)(t, {
        boundary: b,
        rootBoundary: y,
        padding: v,
        altBoundary: O
      }),
      C = (0, i.Z)(t.placement),
      R = (0, d.Z)(t.placement),
      P = !R,
      w = (0, o.Z)(C),
      D = (0, a.Z)(w),
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
        var B, Z = "y" === w ? r.we : r.t$,
          F = "y" === w ? r.I : r.F2,
          V = "y" === w ? "height" : "width",
          H = L[w],
          Y = H + N[Z],
          W = H - N[F],
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
          eo = ei ? "y" === w ? ei.clientTop || 0 : ei.clientLeft || 0 : 0,
          ea = null != (B = null == U ? true : U[w]) ? B : 0,
          es = H + en - ea - eo,
          el = H + er - ea,
          ec = (0, s.u)(T ? (0, _.VV)(Y, es) : Y, H, T ? (0, _.Fp)(W, el) : W);
        L[w] = ec, G[w] = ec - H
      }
      if (E) {
        var eu, ed = "x" === w ? r.we : r.t$,
          ef = "x" === w ? r.I : r.F2,
          e_ = L[D],
          ep = "y" === D ? "height" : "width",
          eh = e_ + N[ed],
          em = e_ - N[ef],
          eg = false !== [r.we, r.t$].indexOf(C),
          eE = null != (eu = null == U ? true : U[D]) ? eu : 0,
          eb = eg ? eh : e_ - x[ep] - M[ep] - eE + k.altAxis,
          ey = eg ? e_ + x[ep] + M[ep] - eE - k.altAxis : em,
          eO = T && eg ? (0, s.q)(eb, e_, ey) : (0, s.u)(T ? eb : eh, e_, T ? ey : em);
        L[D] = eO, G[D] = eO - e_
      }
      t.modifiersData[p] = G
    }
  },
  requiresIfExists: ["offset"]
}