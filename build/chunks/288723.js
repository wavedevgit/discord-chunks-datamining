/** Chunk was on web.js **/
/** chunk id: 288723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk244287 = require("./244287.js"),
  Chunk126387 = require("./126387.js"),
  Chunk885952 = require("./885952.js"),
  Chunk510104 = require("./510104.js"),
  Chunk891734 = require("./891734.js"),
  Chunk740078 = require("./740078.js"),
  Chunk632471 = require("./632471.js");

function u(e) {
  if ((0, i.Z)(e) === l.d7) return [];
  var t = (0, r.Z)(e);
  return [(0, a.Z)(e), t, (0, a.Z)(t)]
}
let d = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      a = e.name;
    if (!t.modifiersData[a]._skip) {
      for (var d = n.mainAxis, f = true === d || d, p = n.altAxis, _ = true === p || p, m = n.fallbackPlacements, h = n.padding, g = n.boundary, E = n.rootBoundary, b = n.altBoundary, y = n.flipVariations, O = true === y || y, v = n.allowedAutoPlacements, S = t.options.placement, I = (0, i.Z)(S), T = I === S, C = m || (T || !O ? [(0, r.Z)(S)] : u(S)), A = [S].concat(C).reduce(function(e, n) {
          return e.concat((0, i.Z)(n) === l.d7 ? (0, s.Z)(t, {
            placement: n,
            boundary: g,
            rootBoundary: E,
            padding: h,
            flipVariations: O,
            allowedAutoPlacements: v
          }) : n)
        }, []), N = t.rects.reference, P = t.rects.popper, R = new Map, w = true, D = A[0], x = 0; x < A.length; x++) {
        var L = A[x],
          j = (0, i.Z)(L),
          M = (0, c.Z)(L) === l.BL,
          k = [l.we, l.I].indexOf(j) >= 0,
          U = k ? "width" : "height",
          G = (0, o.Z)(t, {
            placement: L,
            boundary: g,
            rootBoundary: E,
            altBoundary: b,
            padding: h
          }),
          Z = k ? M ? l.F2 : l.t$ : M ? l.I : l.we;
        N[U] > P[U] && (Z = (0, r.Z)(Z));
        var F = (0, r.Z)(Z),
          B = [];
        if (f && B.push(G[j] <= 0), _ && B.push(G[Z] <= 0, G[F] <= 0), B.every(function(e) {
            return e
          })) {
          D = L, w = false;
          break
        }
        R.set(L, B)
      }
      if (w)
        for (var V = O ? 3 : 1, H = function(e) {
            var t = A.find(function(t) {
              var n = R.get(t);
              if (n) return n.slice(0, e).every(function(e) {
                return e
              })
            });
            if (t) return D = t, "break"
          }, Y = V; Y > 0 && "break" !== H(Y); Y--);
      t.placement !== D && (t.modifiersData[a]._skip = true, t.placement = D, t.reset = true)
    }
  },
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}