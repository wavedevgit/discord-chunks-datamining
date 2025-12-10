/** Chunk was on web.js **/
/** chunk id: 510104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk685516 = require("./685516.js"),
  Chunk285363 = require("./285363.js"),
  Chunk175922 = require("./175922.js"),
  Chunk406434 = require("./406434.js"),
  Chunk6138 = require("./6138.js"),
  Chunk740078 = require("./740078.js"),
  Chunk882159 = require("./882159.js"),
  Chunk544338 = require("./544338.js"),
  Chunk581206 = require("./581206.js");

function f(e, t) {
  true === t && (t = {});
  var n = t,
    f = n.placement,
    p = true === f ? e.placement : f,
    _ = n.strategy,
    m = true === _ ? e.strategy : _,
    h = n.boundary,
    g = true === h ? l.zV : h,
    E = n.rootBoundary,
    b = true === E ? l.Pj : E,
    y = n.elementContext,
    O = true === y ? l.k5 : y,
    v = n.altBoundary,
    S = true !== v && v,
    I = n.padding,
    T = true === I ? 0 : I,
    C = (0, u.Z)("number" != typeof T ? T : (0, d.Z)(T, l.mv)),
    A = O === l.k5 ? l.YP : l.k5,
    N = e.rects.popper,
    P = e.elements[S ? A : O],
    R = (0, r.Z)((0, c.kK)(P) ? P : P.contextElement || (0, i.Z)(e.elements.popper), g, b, m),
    D = (0, a.Z)(e.elements.reference),
    w = (0, o.Z)({
      reference: D,
      element: N,
      strategy: "absolute",
      placement: p
    }),
    x = (0, s.Z)(Object.assign({}, N, w)),
    L = O === l.k5 ? x : D,
    j = {
      top: R.top - L.top + C.top,
      bottom: L.bottom - R.bottom + C.bottom,
      left: R.left - L.left + C.left,
      right: L.right - R.right + C.right
    },
    M = e.modifiersData.offset;
  if (O === l.k5 && M) {
    var k = M[p];
    Object.keys(j).forEach(function(e) {
      var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : false,
        n = [l.we, l.I].indexOf(e) >= 0 ? "y" : "x";
      j[e] += k[n] * t
    })
  }
  return j
}