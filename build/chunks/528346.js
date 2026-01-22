/** Chunk was on web.js **/
/** chunk id: 528346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk420474 = require("./420474.js"),
  Chunk688899 = require("./688899.js"),
  Chunk514467 = require("./514467.js"),
  Chunk638704 = require("./638704.js"),
  Chunk395177 = require("./395177.js"),
  Chunk140851 = require("./140851.js"),
  Chunk444746 = require("./444746.js"),
  Chunk125685 = require("./125685.js"),
  Chunk658614 = require("./658614.js");

function f(e, t) {
  true === t && (t = {});
  var n = t,
    f = n.placement,
    p = true === f ? e.placement : f,
    _ = n.strategy,
    h = true === _ ? e.strategy : _,
    m = n.boundary,
    g = true === m ? l.WY : m,
    E = n.rootBoundary,
    b = true === E ? l.R9 : E,
    y = n.elementContext,
    O = true === y ? l.xf : y,
    A = n.altBoundary,
    v = true !== A && A,
    S = n.padding,
    I = true === S ? 0 : S,
    T = (0, u.A)("number" != typeof I ? I : (0, d.A)(I, l.OM)),
    C = O === l.xf ? l.ir : l.xf,
    N = e.rects.popper,
    R = e.elements[v ? C : O],
    w = (0, r.A)((0, c.vq)(R) ? R : R.contextElement || (0, i.A)(e.elements.popper), g, b, h),
    P = (0, a.A)(e.elements.reference),
    D = (0, s.A)({
      reference: P,
      element: N,
      strategy: "absolute",
      placement: p
    }),
    x = (0, o.A)(Object.assign({}, N, D)),
    L = O === l.xf ? x : P,
    j = {
      top: w.top - L.top + T.top,
      bottom: L.bottom - w.bottom + T.bottom,
      left: w.left - L.left + T.left,
      right: L.right - w.right + T.right
    },
    M = e.modifiersData.offset;
  if (O === l.xf && M) {
    var k = M[p];
    Object.keys(j).forEach(function(e) {
      var t = [l.pG, l.sQ].indexOf(e) >= 0 ? 1 : false,
        n = [l.Mn, l.sQ].indexOf(e) >= 0 ? "y" : "x";
      j[e] += k[n] * t
    })
  }
  return j
}