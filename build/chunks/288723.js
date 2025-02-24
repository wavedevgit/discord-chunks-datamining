/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => d
});
var r = n(244287),
  i = n(126387),
  o = n(885952),
  a = n(510104),
  s = n(891734),
  l = n(740078),
  c = n(632471);

function u(e) {
  if ((0, i.Z)(e) === l.d7) return [];
  var t = (0, r.Z)(e);
  return [(0, o.Z)(e), t, (0, o.Z)(t)]
}
let d = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var d = n.mainAxis, f = void 0 === d || d, p = n.altAxis, _ = void 0 === p || p, h = n.fallbackPlacements, m = n.padding, g = n.boundary, E = n.rootBoundary, v = n.altBoundary, b = n.flipVariations, y = void 0 === b || b, O = n.allowedAutoPlacements, S = t.options.placement, I = (0, i.Z)(S) === S, T = h || (I || !y ? [(0, r.Z)(S)] : u(S)), N = [S].concat(T).reduce(function(e, n) {
          return e.concat((0, i.Z)(n) === l.d7 ? (0, s.Z)(t, {
            placement: n,
            boundary: g,
            rootBoundary: E,
            padding: m,
            flipVariations: y,
            allowedAutoPlacements: O
          }) : n)
        }, []), A = t.rects.reference, C = t.rects.popper, R = new Map, P = !0, D = N[0], w = 0; w < N.length; w++) {
        var L = N[w],
          x = (0, i.Z)(L),
          M = (0, c.Z)(L) === l.BL,
          j = [l.we, l.I].indexOf(x) >= 0,
          k = j ? "width" : "height",
          U = (0, a.Z)(t, {
            placement: L,
            boundary: g,
            rootBoundary: E,
            altBoundary: v,
            padding: m
          }),
          G = j ? M ? l.F2 : l.t$ : M ? l.I : l.we;
        A[k] > C[k] && (G = (0, r.Z)(G));
        var B = (0, r.Z)(G),
          F = [];
        if (f && F.push(U[x] <= 0), _ && F.push(U[G] <= 0, U[B] <= 0), F.every(function(e) {
            return e
          })) {
          D = L, P = !1;
          break
        }
        R.set(L, F)
      }
      if (P)
        for (var V = y ? 3 : 1, Z = function(e) {
            var t = N.find(function(t) {
              var n = R.get(t);
              if (n) return n.slice(0, e).every(function(e) {
                return e
              })
            });
            if (t) return D = t, "break"
          }, H = V; H > 0 && "break" !== Z(H); H--);
      t.placement !== D && (t.modifiersData[o]._skip = !0, t.placement = D, t.reset = !0)
    }
  },
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}