/** Chunk was on web.js **/
/** chunk id: 641862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => g,
  u: () => h
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
  p = function(e) {
    return parseFloat(e || "0")
  },
  _ = function(e, t, n) {
    return true === e && (e = 0), true === t && (t = 0), true === n && (n = false), new i.D((n ? t : e) || 0, (n ? e : t) || 0)
  },
  m = (0, Chunk721056.v)({
    devicePixelContentBoxSize: _(),
    borderBoxSize: _(),
    contentBoxSize: _(),
    contentRect: new Chunk670732.N(0, 0, 0, 0)
  }),
  h = function(e, t) {
    if (true === t && (t = false), c.has(e) && !t) return c.get(e);
    if ((0, o.xj)(e)) return c.set(e, m), m;
    var n = getComputedStyle(e),
      r = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
      i = !f && "border-box" === n.boxSizing,
      l = d.test(n.writingMode || ""),
      h = !r && u.test(n.overflowY || ""),
      g = !r && u.test(n.overflowX || ""),
      E = r ? 0 : p(n.paddingTop),
      b = r ? 0 : p(n.paddingRight),
      y = r ? 0 : p(n.paddingBottom),
      O = r ? 0 : p(n.paddingLeft),
      v = r ? 0 : p(n.borderTopWidth),
      S = r ? 0 : p(n.borderRightWidth),
      I = r ? 0 : p(n.borderBottomWidth),
      T = r ? 0 : p(n.borderLeftWidth),
      A = O + b,
      C = E + y,
      N = T + S,
      P = v + I,
      R = g ? e.offsetHeight - P - e.clientHeight : 0,
      w = h ? e.offsetWidth - N - e.clientWidth : 0,
      D = i ? A + N : 0,
      x = i ? C + P : 0,
      L = r ? r.width : p(n.width) - D - w,
      j = r ? r.height : p(n.height) - x - R,
      M = L + A + w + N,
      k = j + C + R + P,
      U = (0, s.v)({
        devicePixelContentBoxSize: _(Math.round(L * devicePixelRatio), Math.round(j * devicePixelRatio), l),
        borderBoxSize: _(M, k, l),
        contentBoxSize: _(L, j, l),
        contentRect: new a.N(O, E, L, j)
      });
    return c.set(e, U), U
  },
  g = function(e, t, n) {
    var i = h(e, n),
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