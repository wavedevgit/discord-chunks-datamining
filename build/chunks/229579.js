/** Chunk was on web.js **/
/** chunk id: 229579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => h,
  u: () => p
});
var Chunk430901 = require("./430901.js"),
  Chunk96428 = require("./96428.js"),
  Chunk222285 = require("./222285.js"),
  Chunk288930 = require("./288930.js"),
  s = new WeakMap,
  l = /auto|scroll/,
  c = /^tb|vertical/,
  u = /msie|trident/i.test(Chunk288930.C.navigator && Chunk288930.C.navigator.userAgent),
  d = function(e) {
    return parseFloat(e || "0")
  },
  f = function(e, t, n) {
    return true === e && (e = 0), true === t && (t = 0), true === n && (n = false), Object.freeze({
      inlineSize: (n ? t : e) || 0,
      blockSize: (n ? e : t) || 0
    })
  },
  _ = Object.freeze({
    devicePixelContentBoxSize: f(),
    borderBoxSize: f(),
    contentBoxSize: f(),
    contentRect: new Chunk96428.N(0, 0, 0, 0)
  }),
  p = function(e, t) {
    if (true === t && (t = false), s.has(e) && !t) return s.get(e);
    if ((0, a.xj)(e)) return s.set(e, _), _;
    var n = getComputedStyle(e),
      r = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
      o = !u && "border-box" === n.boxSizing,
      p = c.test(n.writingMode || ""),
      h = !r && l.test(n.overflowY || ""),
      m = !r && l.test(n.overflowX || ""),
      g = r ? 0 : d(n.paddingTop),
      E = r ? 0 : d(n.paddingRight),
      b = r ? 0 : d(n.paddingBottom),
      y = r ? 0 : d(n.paddingLeft),
      O = r ? 0 : d(n.borderTopWidth),
      v = r ? 0 : d(n.borderRightWidth),
      I = r ? 0 : d(n.borderBottomWidth),
      T = r ? 0 : d(n.borderLeftWidth),
      S = y + E,
      A = g + b,
      C = T + v,
      N = O + I,
      R = m ? e.offsetHeight - N - e.clientHeight : 0,
      P = h ? e.offsetWidth - C - e.clientWidth : 0,
      w = o ? S + C : 0,
      D = o ? A + N : 0,
      x = r ? r.width : d(n.width) - w - P,
      L = r ? r.height : d(n.height) - D - R,
      M = x + S + P + C,
      j = L + A + R + N,
      k = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(x * devicePixelRatio), Math.round(L * devicePixelRatio), p),
        borderBoxSize: f(M, j, p),
        contentBoxSize: f(x, L, p),
        contentRect: new i.N(y, g, x, L)
      });
    return s.set(e, k), k
  },
  h = function(e, t, n) {
    var i = p(e, n),
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