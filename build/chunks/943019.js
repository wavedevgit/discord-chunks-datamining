/** Chunk was on web.js **/
/** chunk id: 943019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => h,
  m: () => _
});
var Chunk254033 = require("./254033.js"),
  Chunk996976 = require("./996976.js"),
  Chunk63514 = require("./63514.js"),
  Chunk353563 = require("./353563.js"),
  s = new WeakMap,
  l = /auto|scroll/,
  c = /^tb|vertical/,
  u = /msie|trident/i.test(Chunk353563.S.navigator && Chunk353563.S.navigator.userAgent),
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
    contentRect: new Chunk996976.p(0, 0, 0, 0)
  }),
  _ = function(e, t) {
    if (true === t && (t = false), s.has(e) && !t) return s.get(e);
    if ((0, a.dK)(e)) return s.set(e, p), p;
    var n = getComputedStyle(e),
      r = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
      o = !u && "border-box" === n.boxSizing,
      _ = c.test(n.writingMode || ""),
      h = !r && l.test(n.overflowY || ""),
      m = !r && l.test(n.overflowX || ""),
      g = r ? 0 : d(n.paddingTop),
      E = r ? 0 : d(n.paddingRight),
      y = r ? 0 : d(n.paddingBottom),
      b = r ? 0 : d(n.paddingLeft),
      O = r ? 0 : d(n.borderTopWidth),
      v = r ? 0 : d(n.borderRightWidth),
      A = r ? 0 : d(n.borderBottomWidth),
      I = r ? 0 : d(n.borderLeftWidth),
      S = b + E,
      T = g + y,
      C = I + v,
      N = O + A,
      w = m ? e.offsetHeight - N - e.clientHeight : 0,
      R = h ? e.offsetWidth - C - e.clientWidth : 0,
      P = o ? S + C : 0,
      D = o ? T + N : 0,
      L = r ? r.width : d(n.width) - P - R,
      x = r ? r.height : d(n.height) - D - w,
      M = L + S + R + C,
      j = x + T + w + N,
      k = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(L * devicePixelRatio), Math.round(x * devicePixelRatio), _),
        borderBoxSize: f(M, j, _),
        contentBoxSize: f(L, x, _),
        contentRect: new i.p(b, g, L, x)
      });
    return s.set(e, k), k
  },
  h = function(e, t, n) {
    var i = _(e, n),
      a = i.borderBoxSize,
      o = i.contentBoxSize,
      s = i.devicePixelContentBoxSize;
    switch (t) {
      case r.U.DEVICE_PIXEL_CONTENT_BOX:
        return s;
      case r.U.BORDER_BOX:
        return a;
      default:
        return o
    }
  }