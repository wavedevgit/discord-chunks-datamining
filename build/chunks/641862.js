/** Chunk was on web.js **/
/** chunk id: 641862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => g,
  u: () => m
});
var Chunk175730 = require("./175730.js"),
  Chunk878369 = require("./878369.js"),
  Chunk670732 = require("./670732.js"),
  Chunk839826 = require("./839826.js"),
  Chunk721056 = require("./721056.js"),
  Chunk388388 = require("./388388.js"),
  c = new WeakMap,
  u = /auto|scroll/,
  d = /^tb|vertical/,
  f = /msie|trident/i.test(Chunk388388.C.navigator && Chunk388388.C.navigator.userAgent),
  _ = function(e) {
    return parseFloat(e || "0")
  },
  p = function(e, t, n) {
    return true === e && (e = 0), true === t && (t = 0), true === n && (n = false), new i.D((n ? t : e) || 0, (n ? e : t) || 0)
  },
  h = (0, Chunk721056.v)({
    devicePixelContentBoxSize: p(),
    borderBoxSize: p(),
    contentBoxSize: p(),
    contentRect: new Chunk670732.N(0, 0, 0, 0)
  }),
  m = function(e, t) {
    if (true === t && (t = false), c.has(e) && !t) return c.get(e);
    if ((0, o.xj)(e)) return c.set(e, h), h;
    var n = getComputedStyle(e),
      r = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
      i = !f && "border-box" === n.boxSizing,
      l = d.test(n.writingMode || ""),
      m = !r && u.test(n.overflowY || ""),
      g = !r && u.test(n.overflowX || ""),
      E = r ? 0 : _(n.paddingTop),
      b = r ? 0 : _(n.paddingRight),
      y = r ? 0 : _(n.paddingBottom),
      O = r ? 0 : _(n.paddingLeft),
      v = r ? 0 : _(n.borderTopWidth),
      I = r ? 0 : _(n.borderRightWidth),
      T = r ? 0 : _(n.borderBottomWidth),
      S = r ? 0 : _(n.borderLeftWidth),
      A = O + b,
      C = E + y,
      N = S + I,
      R = v + T,
      P = g ? e.offsetHeight - R - e.clientHeight : 0,
      D = m ? e.offsetWidth - N - e.clientWidth : 0,
      w = i ? A + N : 0,
      L = i ? C + R : 0,
      x = r ? r.width : _(n.width) - w - D,
      M = r ? r.height : _(n.height) - L - P,
      k = x + A + D + N,
      j = M + C + P + R,
      U = (0, s.v)({
        devicePixelContentBoxSize: p(Math.round(x * devicePixelRatio), Math.round(M * devicePixelRatio), l),
        borderBoxSize: p(k, j, l),
        contentBoxSize: p(x, M, l),
        contentRect: new a.N(O, E, x, M)
      });
    return c.set(e, U), U
  },
  g = function(e, t, n) {
    var i = m(e, n),
      a = i.borderBoxSize,
      o = i.contentBoxSize,
      s = i.devicePixelContentBoxSize;
    switch (t) {
      case r.z.DEVICE_PIXEL_CONTENT_BOX:
        return s;
      case r.z.BORDER_BOX:
        return a;
      default:
        return o
    }
  }