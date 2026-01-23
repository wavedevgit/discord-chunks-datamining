/** Chunk was on web.js **/
/** chunk id: 800993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk559751 = require("./559751.js"),
  Chunk726402 = require("./726402.js"),
  Chunk865645 = require("./865645.js"),
  Chunk821085 = require("./821085.js"),
  Chunk264816 = require("./264816.js"),
  Chunk461464 = require("./461464.js"),
  Chunk125685 = require("./125685.js"),
  Chunk658614 = require("./658614.js"),
  Chunk140851 = require("./140851.js"),
  f = function(e, t) {
    return e = "function" == typeof e ? e(Object.assign({}, t.rects, {
      placement: t.placement
    })) : e, (0, c.A)("number" != typeof e ? e : (0, u.A)(e, d.OM))
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
      _ = (0, r.A)(n.placement),
      h = (0, o.A)(_),
      m = [d.kb, d.pG].indexOf(_) >= 0 ? "height" : "width";
    if (u && p) {
      var g = f(c.padding, n),
        E = (0, i.A)(u),
        y = "y" === h ? d.Mn : d.kb,
        b = "y" === h ? d.sQ : d.pG,
        O = n.rects.reference[m] + n.rects.reference[h] - p[h] - n.rects.popper[m],
        v = p[h] - n.rects.reference[h],
        A = (0, s.A)(u),
        I = A ? "y" === h ? A.clientHeight || 0 : A.clientWidth || 0 : 0,
        S = O / 2 - v / 2,
        T = g[y],
        C = I - E[m] - g[b],
        N = I / 2 - E[m] / 2 + S,
        R = (0, l.u)(T, N, C),
        w = h;
      n.modifiersData[a] = (t = {}, t[w] = R, t.centerOffset = R - N, t)
    }
  },
  effect: function(e) {
    var t = e.state,
      n = e.options.element,
      r = true === n ? "[data-popper-arrow]" : n;
    null == r || ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && (0, a.A)(t.elements.popper, r) && (t.elements.arrow = r)
  },
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
}