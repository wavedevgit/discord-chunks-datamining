/** Chunk was on web.js **/
/** chunk id: 96377, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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
let _ = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      _ = e.name,
      h = n.mainAxis,
      m = true === h || h,
      g = n.altAxis,
      E = true !== g && g,
      b = n.boundary,
      y = n.rootBoundary,
      O = n.altBoundary,
      v = n.padding,
      S = n.tether,
      I = true === S || S,
      T = n.tetherOffset,
      C = true === T ? 0 : T,
      A = (0, u.Z)(t, {
        boundary: b,
        rootBoundary: y,
        padding: v,
        altBoundary: O
      }),
      N = (0, i.Z)(t.placement),
      P = (0, d.Z)(t.placement),
      w = !P,
      R = (0, a.Z)(N),
      D = (0, o.Z)(R),
      x = t.modifiersData.popperOffsets,
      L = t.rects.reference,
      j = t.rects.popper,
      M = "function" == typeof C ? C(Object.assign({}, t.rects, {
        placement: t.placement
      })) : C,
      k = "number" == typeof M ? {
        mainAxis: M,
        altAxis: M
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, M),
      U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      G = {
        x: 0,
        y: 0
      };
    if (x) {
      if (m) {
        var Z, F = "y" === R ? r.we : r.t$,
          B = "y" === R ? r.I : r.F2,
          V = "y" === R ? "height" : "width",
          H = x[R],
          Y = H + A[F],
          W = H - A[B],
          K = I ? -j[V] / 2 : 0,
          z = P === r.BL ? L[V] : j[V],
          q = P === r.BL ? -j[V] : -L[V],
          Q = t.elements.arrow,
          X = I && Q ? (0, l.Z)(Q) : {
            width: 0,
            height: 0
          },
          J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.Z)(),
          $ = J[F],
          ee = J[B],
          et = (0, s.u)(0, L[V], X[V]),
          en = w ? L[V] / 2 - K - et - $ - k.mainAxis : z - et - $ - k.mainAxis,
          er = w ? -L[V] / 2 + K + et + ee + k.mainAxis : q + et + ee + k.mainAxis,
          ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
          ea = ei ? "y" === R ? ei.clientTop || 0 : ei.clientLeft || 0 : 0,
          eo = null != (Z = null == U ? true : U[R]) ? Z : 0,
          es = H + en - eo - ea,
          el = H + er - eo,
          ec = (0, s.u)(I ? (0, p.VV)(Y, es) : Y, H, I ? (0, p.Fp)(W, el) : W);
        x[R] = ec, G[R] = ec - H
      }
      if (E) {
        var eu, ed = "x" === R ? r.we : r.t$,
          ef = "x" === R ? r.I : r.F2,
          ep = x[D],
          e_ = "y" === D ? "height" : "width",
          eh = ep + A[ed],
          em = ep - A[ef],
          eg = false !== [r.we, r.t$].indexOf(N),
          eE = null != (eu = null == U ? true : U[D]) ? eu : 0,
          eb = eg ? eh : ep - L[e_] - j[e_] - eE + k.altAxis,
          ey = eg ? ep + L[e_] + j[e_] - eE - k.altAxis : em,
          eO = I && eg ? (0, s.q)(eb, ep, ey) : (0, s.u)(I ? eb : eh, ep, I ? ey : em);
        x[D] = eO, G[D] = eO - ep
      }
      t.modifiersData[_] = G
    }
  },
  requiresIfExists: ["offset"]
}