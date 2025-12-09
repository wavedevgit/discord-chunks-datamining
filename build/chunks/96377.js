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
      m = n.mainAxis,
      h = true === m || m,
      g = n.altAxis,
      E = true !== g && g,
      b = n.boundary,
      y = n.rootBoundary,
      O = n.altBoundary,
      v = n.padding,
      S = n.tether,
      I = true === S || S,
      T = n.tetherOffset,
      A = true === T ? 0 : T,
      C = (0, u.Z)(t, {
        boundary: b,
        rootBoundary: y,
        padding: v,
        altBoundary: O
      }),
      N = (0, i.Z)(t.placement),
      P = (0, d.Z)(t.placement),
      R = !P,
      D = (0, a.Z)(N),
      w = (0, o.Z)(D),
      x = t.modifiersData.popperOffsets,
      L = t.rects.reference,
      j = t.rects.popper,
      M = "function" == typeof A ? A(Object.assign({}, t.rects, {
        placement: t.placement
      })) : A,
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
      if (h) {
        var Z, B = "y" === D ? r.we : r.t$,
          F = "y" === D ? r.I : r.F2,
          V = "y" === D ? "height" : "width",
          H = x[D],
          Y = H + C[B],
          W = H - C[F],
          K = I ? -j[V] / 2 : 0,
          z = P === r.BL ? L[V] : j[V],
          q = P === r.BL ? -j[V] : -L[V],
          Q = t.elements.arrow,
          X = I && Q ? (0, l.Z)(Q) : {
            width: 0,
            height: 0
          },
          J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.Z)(),
          $ = J[B],
          ee = J[F],
          et = (0, s.u)(0, L[V], X[V]),
          en = R ? L[V] / 2 - K - et - $ - k.mainAxis : z - et - $ - k.mainAxis,
          er = R ? -L[V] / 2 + K + et + ee + k.mainAxis : q + et + ee + k.mainAxis,
          ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
          ea = ei ? "y" === D ? ei.clientTop || 0 : ei.clientLeft || 0 : 0,
          eo = null != (Z = null == U ? true : U[D]) ? Z : 0,
          es = H + en - eo - ea,
          el = H + er - eo,
          ec = (0, s.u)(I ? (0, p.VV)(Y, es) : Y, H, I ? (0, p.Fp)(W, el) : W);
        x[D] = ec, G[D] = ec - H
      }
      if (E) {
        var eu, ed = "x" === D ? r.we : r.t$,
          ef = "x" === D ? r.I : r.F2,
          ep = x[w],
          e_ = "y" === w ? "height" : "width",
          em = ep + C[ed],
          eh = ep - C[ef],
          eg = false !== [r.we, r.t$].indexOf(N),
          eE = null != (eu = null == U ? true : U[w]) ? eu : 0,
          eb = eg ? em : ep - L[e_] - j[e_] - eE + k.altAxis,
          ey = eg ? ep + L[e_] + j[e_] - eE - k.altAxis : eh,
          eO = I && eg ? (0, s.q)(eb, ep, ey) : (0, s.u)(I ? eb : em, ep, I ? ey : eh);
        x[w] = eO, G[w] = eO - ep
      }
      t.modifiersData[_] = G
    }
  },
  requiresIfExists: ["offset"]
}