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
    _ = true === f ? e.placement : f,
    p = n.strategy,
    h = true === p ? e.strategy : p,
    m = n.boundary,
    g = true === m ? l.zV : m,
    E = n.rootBoundary,
    b = true === E ? l.Pj : E,
    y = n.elementContext,
    O = true === y ? l.k5 : y,
    v = n.altBoundary,
    I = true !== v && v,
    T = n.padding,
    S = true === T ? 0 : T,
    A = (0, u.Z)("number" != typeof S ? S : (0, d.Z)(S, l.mv)),
    C = O === l.k5 ? l.YP : l.k5,
    N = e.rects.popper,
    R = e.elements[I ? C : O],
    P = (0, r.Z)((0, c.kK)(R) ? R : R.contextElement || (0, i.Z)(e.elements.popper), g, b, h),
    D = (0, a.Z)(e.elements.reference),
    w = (0, o.Z)({
      reference: D,
      element: N,
      strategy: "absolute",
      placement: _
    }),
    L = (0, s.Z)(Object.assign({}, N, w)),
    x = O === l.k5 ? L : D,
    M = {
      top: P.top - x.top + A.top,
      bottom: x.bottom - P.bottom + A.bottom,
      left: P.left - x.left + A.left,
      right: x.right - P.right + A.right
    },
    j = e.modifiersData.offset;
  if (O === l.k5 && j) {
    var k = j[_];
    Object.keys(M).forEach(function(e) {
      var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : false,
        n = [l.we, l.I].indexOf(e) >= 0 ? "y" : "x";
      M[e] += k[n] * t
    })
  }
  return M
}