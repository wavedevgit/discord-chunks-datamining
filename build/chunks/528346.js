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
    y = true === E ? l.R9 : E,
    b = n.elementContext,
    O = true === b ? l.xf : b,
    v = n.altBoundary,
    A = true !== v && v,
    I = n.padding,
    S = true === I ? 0 : I,
    T = (0, u.A)("number" != typeof S ? S : (0, d.A)(S, l.OM)),
    C = O === l.xf ? l.ir : l.xf,
    N = e.rects.popper,
    w = e.elements[A ? C : O],
    R = (0, r.A)((0, c.vq)(w) ? w : w.contextElement || (0, i.A)(e.elements.popper), g, y, h),
    P = (0, a.A)(e.elements.reference),
    D = (0, o.A)({
      reference: P,
      element: N,
      strategy: "absolute",
      placement: p
    }),
    L = (0, s.A)(Object.assign({}, N, D)),
    x = O === l.xf ? L : P,
    M = {
      top: R.top - x.top + T.top,
      bottom: x.bottom - R.bottom + T.bottom,
      left: R.left - x.left + T.left,
      right: x.right - R.right + T.right
    },
    j = e.modifiersData.offset;
  if (O === l.xf && j) {
    var k = j[p];
    Object.keys(M).forEach(function(e) {
      var t = [l.pG, l.sQ].indexOf(e) >= 0 ? 1 : false,
        n = [l.Mn, l.sQ].indexOf(e) >= 0 ? "y" : "x";
      M[e] += k[n] * t
    })
  }
  return M
}