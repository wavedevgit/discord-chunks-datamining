/** Chunk was on web.js **/
/** chunk id: 229579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => m,
  u: () => _
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
  p = Object.freeze({
    devicePixelContentBoxSize: f(),
    borderBoxSize: f(),
    contentBoxSize: f(),
    contentRect: new Chunk96428.N(0, 0, 0, 0)
  }),
  _ = function(e, t) {
    if (true === t && (t = false), s.has(e) && !t) return s.get(e);
    if ((0, a.xj)(e)) return s.set(e, p), p;
    var n = getComputedStyle(e),
      r = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
      o = !u && "border-box" === n.boxSizing,
      _ = c.test(n.writingMode || ""),
      m = !r && l.test(n.overflowY || ""),
      h = !r && l.test(n.overflowX || ""),
      g = r ? 0 : d(n.paddingTop),
      E = r ? 0 : d(n.paddingRight),
      b = r ? 0 : d(n.paddingBottom),
      y = r ? 0 : d(n.paddingLeft),
      O = r ? 0 : d(n.borderTopWidth),
      v = r ? 0 : d(n.borderRightWidth),
      S = r ? 0 : d(n.borderBottomWidth),
      I = r ? 0 : d(n.borderLeftWidth),
      T = y + E,
      C = g + b,
      A = I + v,
      N = O + S,
      P = h ? e.offsetHeight - N - e.clientHeight : 0,
      R = m ? e.offsetWidth - A - e.clientWidth : 0,
      D = o ? T + A : 0,
      w = o ? C + N : 0,
      x = r ? r.width : d(n.width) - D - R,
      L = r ? r.height : d(n.height) - w - P,
      j = x + T + R + A,
      M = L + C + P + N,
      k = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(x * devicePixelRatio), Math.round(L * devicePixelRatio), _),
        borderBoxSize: f(j, M, _),
        contentBoxSize: f(x, L, _),
        contentRect: new i.N(y, g, x, L)
      });
    return s.set(e, k), k
  },
  m = function(e, t, n) {
    var i = _(e, n),
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