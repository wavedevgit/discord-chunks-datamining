/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Fs: () => s,
  Y9: () => h,
  uP: () => p
});
var r = n(644387),
  i = n(582661),
  o = n(383466),
  a = n(559972),
  s = new Map,
  l = /auto|scroll/,
  c = /^tb|vertical/,
  u = /msie|trident/i.test(a.C.navigator && a.C.navigator.userAgent),
  d = function(e) {
    return parseFloat(e || "0")
  },
  f = function(e, t, n) {
    return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), Object.freeze({
      inlineSize: (n ? t : e) || 0,
      blockSize: (n ? e : t) || 0
    })
  },
  _ = Object.freeze({
    devicePixelContentBoxSize: f(),
    borderBoxSize: f(),
    contentBoxSize: f(),
    contentRect: new i.N(0, 0, 0, 0)
  }),
  p = function(e) {
    if (s.has(e)) return s.get(e);
    if ((0, o.xj)(e)) return s.set(e, _), _;
    var t = getComputedStyle(e),
      n = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
      r = !u && "border-box" === t.boxSizing,
      a = c.test(t.writingMode || ""),
      p = !n && l.test(t.overflowY || ""),
      h = !n && l.test(t.overflowX || ""),
      g = n ? 0 : d(t.paddingTop),
      m = n ? 0 : d(t.paddingRight),
      E = n ? 0 : d(t.paddingBottom),
      v = n ? 0 : d(t.paddingLeft),
      b = n ? 0 : d(t.borderTopWidth),
      y = n ? 0 : d(t.borderRightWidth),
      O = n ? 0 : d(t.borderBottomWidth),
      S = n ? 0 : d(t.borderLeftWidth),
      I = v + m,
      T = g + E,
      N = S + y,
      A = b + O,
      C = h ? e.offsetHeight - A - e.clientHeight : 0,
      R = p ? e.offsetWidth - N - e.clientWidth : 0,
      P = r ? I + N : 0,
      D = r ? T + A : 0,
      w = n ? n.width : d(t.width) - P - R,
      L = n ? n.height : d(t.height) - D - C,
      x = w + I + R + N,
      M = L + T + C + A,
      j = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(w * devicePixelRatio), Math.round(L * devicePixelRatio), a),
        borderBoxSize: f(x, M, a),
        contentBoxSize: f(w, L, a),
        contentRect: new i.N(v, g, w, L)
      });
    return s.set(e, j), j
  },
  h = function(e, t) {
    var n = p(e),
      i = n.borderBoxSize,
      o = n.contentBoxSize,
      a = n.devicePixelContentBoxSize;
    switch (t) {
      case r.z.DEVICE_PIXEL_CONTENT_BOX:
        return a;
      case r.z.BORDER_BOX:
        return i;
      default:
        return o
    }
  }