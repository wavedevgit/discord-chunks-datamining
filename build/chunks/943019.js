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
  o = new WeakMap,
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
    if (true === t && (t = false), o.has(e) && !t) return o.get(e);
    if ((0, a.dK)(e)) return o.set(e, p), p;
    var n = getComputedStyle(e),
      r = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
      s = !u && "border-box" === n.boxSizing,
      _ = c.test(n.writingMode || ""),
      h = !r && l.test(n.overflowY || ""),
      m = !r && l.test(n.overflowX || ""),
      g = r ? 0 : d(n.paddingTop),
      E = r ? 0 : d(n.paddingRight),
      b = r ? 0 : d(n.paddingBottom),
      y = r ? 0 : d(n.paddingLeft),
      O = r ? 0 : d(n.borderTopWidth),
      A = r ? 0 : d(n.borderRightWidth),
      v = r ? 0 : d(n.borderBottomWidth),
      S = r ? 0 : d(n.borderLeftWidth),
      I = y + E,
      T = g + b,
      C = S + A,
      N = O + v,
      R = m ? e.offsetHeight - N - e.clientHeight : 0,
      w = h ? e.offsetWidth - C - e.clientWidth : 0,
      P = s ? I + C : 0,
      D = s ? T + N : 0,
      x = r ? r.width : d(n.width) - P - w,
      L = r ? r.height : d(n.height) - D - R,
      j = x + I + w + C,
      M = L + T + R + N,
      k = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(x * devicePixelRatio), Math.round(L * devicePixelRatio), _),
        borderBoxSize: f(j, M, _),
        contentBoxSize: f(x, L, _),
        contentRect: new i.p(y, g, x, L)
      });
    return o.set(e, k), k
  },
  h = function(e, t, n) {
    var i = _(e, n),
      a = i.borderBoxSize,
      s = i.contentBoxSize,
      o = i.devicePixelContentBoxSize;
    switch (t) {
      case r.U.DEVICE_PIXEL_CONTENT_BOX:
        return o;
      case r.U.BORDER_BOX:
        return a;
      default:
        return s
    }
  }