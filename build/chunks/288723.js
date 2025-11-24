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
      for (var d = n.mainAxis, f = true === d || d, _ = n.altAxis, p = true === _ || _, h = n.fallbackPlacements, m = n.padding, g = n.boundary, E = n.rootBoundary, b = n.altBoundary, y = n.flipVariations, O = true === y || y, v = n.allowedAutoPlacements, I = t.options.placement, T = (0, i.Z)(I), S = T === I, A = h || (S || !O ? [(0, r.Z)(I)] : u(I)), C = [I].concat(A).reduce(function(e, n) {
          return e.concat((0, i.Z)(n) === l.d7 ? (0, s.Z)(t, {
            placement: n,
            boundary: g,
            rootBoundary: E,
            padding: m,
            flipVariations: O,
            allowedAutoPlacements: v
          }) : n)
        }, []), N = t.rects.reference, R = t.rects.popper, P = new Map, D = true, w = C[0], L = 0; L < C.length; L++) {
        var x = C[L],
          M = (0, i.Z)(x),
          j = (0, c.Z)(x) === l.BL,
          k = [l.we, l.I].indexOf(M) >= 0,
          U = k ? "width" : "height",
          G = (0, o.Z)(t, {
            placement: x,
            boundary: g,
            rootBoundary: E,
            altBoundary: b,
            padding: m
          }),
          B = k ? j ? l.F2 : l.t$ : j ? l.I : l.we;
        N[U] > R[U] && (B = (0, r.Z)(B));
        var Z = (0, r.Z)(B),
          F = [];
        if (f && F.push(G[M] <= 0), p && F.push(G[B] <= 0, G[Z] <= 0), F.every(function(e) {
            return e
          })) {
          w = x, D = false;
          break
        }
        P.set(x, F)
      }
      if (D)
        for (var V = O ? 3 : 1, H = function(e) {
            var t = C.find(function(t) {
              var n = P.get(t);
              if (n) return n.slice(0, e).every(function(e) {
                return e
              })
            });
            if (t) return w = t, "break"
          }, Y = V; Y > 0 && "break" !== H(Y); Y--);
      t.placement !== w && (t.modifiersData[a]._skip = true, t.placement = w, t.reset = true)
    }
  },
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}