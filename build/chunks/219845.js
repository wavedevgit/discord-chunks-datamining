/** Chunk was on web.js **/
/** chunk id: 219845, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fs: () => s,
  Y9: () => h,
  uP: () => p
});
var Chunk644387 = require("./644387.js"),
  Chunk582661 = require("./582661.js"),
  Chunk383466 = require("./383466.js"),
  Chunk559972 = require("./559972.js"),
  s = new Map,
  l = /auto|scroll/,
  c = /^tb|vertical/,
  u = /msie|trident/i.test(Chunk559972.C.navigator && Chunk559972.C.navigator.userAgent),
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
    contentRect: new Chunk582661.N(0, 0, 0, 0)
  }),
  p = function(e) {
    if (s.has(e)) return s.get(e);
    if ((0, a.xj)(e)) return s.set(e, _), _;
    var t = getComputedStyle(e),
      n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
      r = !u && "border-box" === t.boxSizing,
      o = c.test(t.writingMode || ""),
      p = !n && l.test(t.overflowY || ""),
      h = !n && l.test(t.overflowX || ""),
      m = n ? 0 : d(t.paddingTop),
      g = n ? 0 : d(t.paddingRight),
      E = n ? 0 : d(t.paddingBottom),
      b = n ? 0 : d(t.paddingLeft),
      y = n ? 0 : d(t.borderTopWidth),
      O = n ? 0 : d(t.borderRightWidth),
      v = n ? 0 : d(t.borderBottomWidth),
      I = n ? 0 : d(t.borderLeftWidth),
      T = b + g,
      S = m + E,
      A = I + O,
      C = y + v,
      N = h ? e.offsetHeight - C - e.clientHeight : 0,
      R = p ? e.offsetWidth - A - e.clientWidth : 0,
      P = r ? T + A : 0,
      w = r ? S + C : 0,
      D = n ? n.width : d(t.width) - P - R,
      x = n ? n.height : d(t.height) - w - N,
      L = D + T + R + A,
      M = x + S + N + C,
      k = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(D * devicePixelRatio), Math.round(x * devicePixelRatio), o),
        borderBoxSize: f(L, M, o),
        contentBoxSize: f(D, x, o),
        contentRect: new i.N(b, m, D, x)
      });
    return s.set(e, k), k
  },
  h = function(e, t) {
    var n = p(e),
      i = n.borderBoxSize,
      a = n.contentBoxSize,
      o = n.devicePixelContentBoxSize;
    switch (t) {
      case r.z.DEVICE_PIXEL_CONTENT_BOX:
        return o;
      case r.z.BORDER_BOX:
        return i;
      default:
        return a
    }
  }