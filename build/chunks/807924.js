/** Chunk was on web.js **/
/** chunk id: 807924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk126387 = require("./126387.js"),
  Chunk493623 = require("./493623.js"),
  Chunk67966 = require("./67966.js"),
  Chunk343713 = require("./343713.js"),
  Chunk205208 = require("./205208.js"),
  Chunk464826 = require("./464826.js"),
  Chunk544338 = require("./544338.js"),
  Chunk581206 = require("./581206.js"),
  Chunk740078 = require("./740078.js"),
  f = function(e, t) {
    return e = "function" == typeof e ? e(Object.assign({}, t.rects, {
      placement: t.placement
    })) : e, (0, c.Z)("number" != typeof e ? e : (0, u.Z)(e, d.mv))
  };
let p = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: function(e) {
    var t, n = e.state,
      a = e.name,
      c = e.options,
      u = n.elements.arrow,
      p = n.modifiersData.popperOffsets,
      _ = (0, r.Z)(n.placement),
      h = (0, s.Z)(_),
      m = [d.t$, d.F2].indexOf(_) >= 0 ? "height" : "width";
    if (u && p) {
      var g = f(c.padding, n),
        E = (0, i.Z)(u),
        b = "y" === h ? d.we : d.t$,
        y = "y" === h ? d.I : d.F2,
        O = n.rects.reference[m] + n.rects.reference[h] - p[h] - n.rects.popper[m],
        v = p[h] - n.rects.reference[h],
        S = (0, o.Z)(u),
        I = S ? "y" === h ? S.clientHeight || 0 : S.clientWidth || 0 : 0,
        T = O / 2 - v / 2,
        C = g[b],
        A = I - E[m] - g[y],
        N = I / 2 - E[m] / 2 + T,
        P = (0, l.u)(C, N, A),
        w = h;
      n.modifiersData[a] = (t = {}, t[w] = P, t.centerOffset = P - N, t)
    }
  },
  effect: function(e) {
    var t = e.state,
      n = e.options.element,
      r = true === n ? "[data-popper-arrow]" : n;
    if (null != r)("string" != typeof r || (r = t.elements.popper.querySelector(r))) && (0, a.Z)(t.elements.popper, r) && (t.elements.arrow = r)
  },
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
}