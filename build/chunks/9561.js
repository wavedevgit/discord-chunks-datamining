/** Chunk was on web.js **/
/** chunk id: 9561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk709943 = require("./709943.js"),
  Chunk559751 = require("./559751.js"),
  Chunk482786 = require("./482786.js"),
  Chunk528346 = require("./528346.js"),
  Chunk683834 = require("./683834.js"),
  Chunk140851 = require("./140851.js"),
  Chunk499702 = require("./499702.js");

function u(e) {
  if ((0, i.A)(e) === l.qZ) return [];
  var t = (0, r.A)(e);
  return [(0, a.A)(e), t, (0, a.A)(t)]
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
      for (var d = n.mainAxis, f = true === d || d, p = n.altAxis, _ = true === p || p, h = n.fallbackPlacements, m = n.padding, g = n.boundary, E = n.rootBoundary, y = n.altBoundary, b = n.flipVariations, O = true === b || b, v = n.allowedAutoPlacements, A = t.options.placement, I = (0, i.A)(A), S = I === A, T = h || (S || !O ? [(0, r.A)(A)] : u(A)), C = [A].concat(T).reduce(function(e, n) {
          return e.concat((0, i.A)(n) === l.qZ ? (0, s.A)(t, {
            placement: n,
            boundary: g,
            rootBoundary: E,
            padding: m,
            flipVariations: O,
            allowedAutoPlacements: v
          }) : n)
        }, []), N = t.rects.reference, w = t.rects.popper, R = new Map, P = true, D = C[0], L = 0; L < C.length; L++) {
        var x = C[L],
          M = (0, i.A)(x),
          j = (0, c.A)(x) === l.ni,
          k = [l.Mn, l.sQ].indexOf(M) >= 0,
          U = k ? "width" : "height",
          G = (0, o.A)(t, {
            placement: x,
            boundary: g,
            rootBoundary: E,
            altBoundary: y,
            padding: m
          }),
          F = k ? j ? l.pG : l.kb : j ? l.sQ : l.Mn;
        N[U] > w[U] && (F = (0, r.A)(F));
        var V = (0, r.A)(F),
          B = [];
        if (f && B.push(G[M] <= 0), _ && B.push(G[F] <= 0, G[V] <= 0), B.every(function(e) {
            return e
          })) {
          D = x, P = false;
          break
        }
        R.set(x, B)
      }
      if (P)
        for (var H = O ? 3 : 1, Y = function(e) {
            var t = C.find(function(t) {
              var n = R.get(t);
              if (n) return n.slice(0, e).every(function(e) {
                return e
              })
            });
            if (t) return D = t, "break"
          }, W = H; W > 0 && "break" !== Y(W); W--);
      t.placement !== D && (t.modifiersData[a]._skip = true, t.placement = D, t.reset = true)
    }
  },
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}