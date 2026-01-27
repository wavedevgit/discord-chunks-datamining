/** Chunk was on web.js **/
/** chunk id: 635833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => g,
  m: () => m
});
var Chunk838259 = require("./838259.js"),
  Chunk162563 = require("./162563.js"),
  Chunk119090 = require("./119090.js"),
  Chunk916784 = require("./916784.js"),
  Chunk47361 = require("./47361.js"),
  Chunk717205 = require("./717205.js"),
  c = new WeakMap,
  u = /auto|scroll/,
  d = /^tb|vertical/,
  f = /msie|trident/i.test(Chunk717205.S.navigator && Chunk717205.S.navigator.userAgent),
  p = function(e) {
    return parseFloat(e || "0")
  },
  _ = function(e, t, n) {
    return true === e && (e = 0), true === t && (t = 0), true === n && (n = false), new i.a((n ? t : e) || 0, (n ? e : t) || 0)
  },
  h = (0, Chunk47361.C)({
    devicePixelContentBoxSize: _(),
    borderBoxSize: _(),
    contentBoxSize: _(),
    contentRect: new Chunk119090.p(0, 0, 0, 0)
  }),
  m = function(e, t) {
    if (true === t && (t = false), c.has(e) && !t) return c.get(e);
    if ((0, o.dK)(e)) return c.set(e, h), h;
    var n = getComputedStyle(e),
      r = (0, o.XJ)(e) && e.ownerSVGElement && e.getBBox(),
      i = !f && "border-box" === n.boxSizing,
      l = d.test(n.writingMode || ""),
      m = !r && u.test(n.overflowY || ""),
      g = !r && u.test(n.overflowX || ""),
      E = r ? 0 : p(n.paddingTop),
      y = r ? 0 : p(n.paddingRight),
      b = r ? 0 : p(n.paddingBottom),
      O = r ? 0 : p(n.paddingLeft),
      v = r ? 0 : p(n.borderTopWidth),
      A = r ? 0 : p(n.borderRightWidth),
      I = r ? 0 : p(n.borderBottomWidth),
      S = r ? 0 : p(n.borderLeftWidth),
      T = O + y,
      C = E + b,
      N = S + A,
      w = v + I,
      R = g ? e.offsetHeight - w - e.clientHeight : 0,
      P = m ? e.offsetWidth - N - e.clientWidth : 0,
      D = i ? T + N : 0,
      L = i ? C + w : 0,
      x = r ? r.width : p(n.width) - D - P,
      M = r ? r.height : p(n.height) - L - R,
      j = x + T + P + N,
      k = M + C + R + w,
      U = (0, s.C)({
        devicePixelContentBoxSize: _(Math.round(x * devicePixelRatio), Math.round(M * devicePixelRatio), l),
        borderBoxSize: _(j, k, l),
        contentBoxSize: _(x, M, l),
        contentRect: new a.p(O, E, x, M)
      });
    return c.set(e, U), U
  },
  g = function(e, t, n) {
    var i = m(e, n),
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