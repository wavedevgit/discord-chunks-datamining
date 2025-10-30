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
      w = (0, a.Z)(N),
      D = (0, o.Z)(w),
      x = t.modifiersData.popperOffsets,
      L = t.rects.reference,
      M = t.rects.popper,
      k = "function" == typeof A ? A(Object.assign({}, t.rects, {
        placement: t.placement
      })) : A,
      j = "number" == typeof k ? {
        mainAxis: k,
        altAxis: k
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, k),
      U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      G = {
        x: 0,
        y: 0
      };
    if (x) {
      if (m) {
        var B, Z = "y" === w ? r.we : r.t$,
          F = "y" === w ? r.I : r.F2,
          V = "y" === w ? "height" : "width",
          H = x[w],
          Y = H + C[Z],
          W = H - C[F],
          K = T ? -M[V] / 2 : 0,
          z = R === r.BL ? L[V] : M[V],
          q = R === r.BL ? -M[V] : -L[V],
          X = t.elements.arrow,
          Q = T && X ? (0, l.Z)(X) : {
            width: 0,
            height: 0
          },
          J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.Z)(),
          $ = J[Z],
          ee = J[F],
          et = (0, s.u)(0, L[V], Q[V]),
          en = P ? L[V] / 2 - K - et - $ - j.mainAxis : z - et - $ - j.mainAxis,
          er = P ? -L[V] / 2 + K + et + ee + j.mainAxis : q + et + ee + j.mainAxis,
          ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
          ea = ei ? "y" === w ? ei.clientTop || 0 : ei.clientLeft || 0 : 0,
          eo = null != (B = null == U ? true : U[w]) ? B : 0,
          es = H + en - eo - ea,
          el = H + er - eo,
          ec = (0, s.u)(T ? (0, _.VV)(Y, es) : Y, H, T ? (0, _.Fp)(W, el) : W);
        x[w] = ec, G[w] = ec - H
      }
      if (E) {
        var eu, ed = "x" === w ? r.we : r.t$,
          ef = "x" === w ? r.I : r.F2,
          e_ = x[D],
          ep = "y" === D ? "height" : "width",
          eh = e_ + C[ed],
          em = e_ - C[ef],
          eg = false !== [r.we, r.t$].indexOf(N),
          eE = null != (eu = null == U ? true : U[D]) ? eu : 0,
          eb = eg ? eh : e_ - L[ep] - M[ep] - eE + j.altAxis,
          ey = eg ? e_ + L[ep] + M[ep] - eE - j.altAxis : em,
          eO = T && eg ? (0, s.q)(eb, e_, ey) : (0, s.u)(T ? eb : eh, e_, T ? ey : em);
        x[D] = eO, G[D] = eO - e_
      }
      t.modifiersData[p] = G
    }
  },
  requiresIfExists: ["offset"]
}