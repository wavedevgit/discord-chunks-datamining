/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Y: () => h,
  u: () => _
});
var r = n(430901),
  i = n(96428),
  o = n(222285),
  a = n(288930),
  s = new WeakMap,
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
  p = Object.freeze({
    devicePixelContentBoxSize: f(),
    borderBoxSize: f(),
    contentBoxSize: f(),
    contentRect: new i.N(0, 0, 0, 0)
  }),
  _ = function(e, t) {
    if (void 0 === t && (t = !1), s.has(e) && !t) return s.get(e);
    if ((0, o.xj)(e)) return s.set(e, p), p;
    var n = getComputedStyle(e),
      r = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
      a = !u && "border-box" === n.boxSizing,
      _ = c.test(n.writingMode || ""),
      h = !r && l.test(n.overflowY || ""),
      m = !r && l.test(n.overflowX || ""),
      g = r ? 0 : d(n.paddingTop),
      E = r ? 0 : d(n.paddingRight),
      v = r ? 0 : d(n.paddingBottom),
      b = r ? 0 : d(n.paddingLeft),
      y = r ? 0 : d(n.borderTopWidth),
      O = r ? 0 : d(n.borderRightWidth),
      S = r ? 0 : d(n.borderBottomWidth),
      I = r ? 0 : d(n.borderLeftWidth),
      T = b + E,
      N = g + v,
      A = I + O,
      C = y + S,
      R = m ? e.offsetHeight - C - e.clientHeight : 0,
      P = h ? e.offsetWidth - A - e.clientWidth : 0,
      w = a ? T + A : 0,
      D = a ? N + C : 0,
      x = r ? r.width : d(n.width) - w - P,
      L = r ? r.height : d(n.height) - D - R,
      M = x + T + P + A,
      k = L + N + R + C,
      j = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(x * devicePixelRatio), Math.round(L * devicePixelRatio), _),
        borderBoxSize: f(M, k, _),
        contentBoxSize: f(x, L, _),
        contentRect: new i.N(b, g, x, L)
      });
    return s.set(e, j), j
  },
  h = function(e, t, n) {
    var i = _(e, n),
      o = i.borderBoxSize,
      a = i.contentBoxSize,
      s = i.devicePixelContentBoxSize;
    switch (t) {
      case r.z.DEVICE_PIXEL_CONTENT_BOX:
        return s;
      case r.z.BORDER_BOX:
        return o;
      default:
        return a
    }
  }