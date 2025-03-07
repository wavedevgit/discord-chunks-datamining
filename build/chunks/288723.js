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
      for (var d = n.mainAxis, f = void 0 === d || d, _ = n.altAxis, p = void 0 === _ || _, h = n.fallbackPlacements, m = n.padding, g = n.boundary, E = n.rootBoundary, v = n.altBoundary, b = n.flipVariations, y = void 0 === b || b, O = n.allowedAutoPlacements, I = t.options.placement, S = (0, i.Z)(I) === I, T = h || (S || !y ? [(0, r.Z)(I)] : u(I)), N = [I].concat(T).reduce(function(e, n) {
          return e.concat((0, i.Z)(n) === l.d7 ? (0, s.Z)(t, {
            placement: n,
            boundary: g,
            rootBoundary: E,
            padding: m,
            flipVariations: y,
            allowedAutoPlacements: O
          }) : n)
        }, []), A = t.rects.reference, C = t.rects.popper, R = new Map, P = !0, w = N[0], D = 0; D < N.length; D++) {
        var L = N[D],
          x = (0, i.Z)(L),
          M = (0, c.Z)(L) === l.BL,
          k = [l.we, l.I].indexOf(x) >= 0,
          j = k ? "width" : "height",
          U = (0, a.Z)(t, {
            placement: L,
            boundary: g,
            rootBoundary: E,
            altBoundary: v,
            padding: m
          }),
          G = k ? M ? l.F2 : l.t$ : M ? l.I : l.we;
        A[j] > C[j] && (G = (0, r.Z)(G));
        var B = (0, r.Z)(G),
          V = [];
        if (f && V.push(U[x] <= 0), p && V.push(U[G] <= 0, U[B] <= 0), V.every(function(e) {
            return e
          })) {
          w = L, P = !1;
          break
        }
        R.set(L, V)
      }
      if (P)
        for (var F = y ? 3 : 1, Z = function(e) {
            var t = N.find(function(t) {
              var n = R.get(t);
              if (n) return n.slice(0, e).every(function(e) {
                return e
              })
            });
            if (t) return w = t, "break"
          }, H = F; H > 0 && "break" !== Z(H); H--);
      t.placement !== w && (t.modifiersData[o]._skip = !0, t.placement = w, t.reset = !0)
    }
  },
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}