/** Chunk was on web.js **/
/** chunk id: 250015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PP: () => o,
  Px: () => h,
  m5: () => _
});
var Chunk181981 = require("./181981.js"),
  Chunk913132 = require("./913132.js"),
  Chunk685518 = require("./685518.js"),
  Chunk687567 = require("./687567.js"),
  o = new Map,
  l = /auto|scroll/,
  c = /^tb|vertical/,
  u = /msie|trident/i.test(Chunk687567.S.navigator && Chunk687567.S.navigator.userAgent),
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
    contentRect: new Chunk913132.p(0, 0, 0, 0)
  }),
  _ = function(e) {
    if (o.has(e)) return o.get(e);
    if ((0, a.dK)(e)) return o.set(e, p), p;
    var t = getComputedStyle(e),
      n = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
      r = !u && "border-box" === t.boxSizing,
      s = c.test(t.writingMode || ""),
      _ = !n && l.test(t.overflowY || ""),
      h = !n && l.test(t.overflowX || ""),
      m = n ? 0 : d(t.paddingTop),
      g = n ? 0 : d(t.paddingRight),
      E = n ? 0 : d(t.paddingBottom),
      y = n ? 0 : d(t.paddingLeft),
      b = n ? 0 : d(t.borderTopWidth),
      O = n ? 0 : d(t.borderRightWidth),
      v = n ? 0 : d(t.borderBottomWidth),
      A = n ? 0 : d(t.borderLeftWidth),
      I = y + g,
      S = m + E,
      T = A + O,
      C = b + v,
      N = h ? e.offsetHeight - C - e.clientHeight : 0,
      R = _ ? e.offsetWidth - T - e.clientWidth : 0,
      w = r ? I + T : 0,
      P = r ? S + C : 0,
      D = n ? n.width : d(t.width) - w - R,
      x = n ? n.height : d(t.height) - P - N,
      L = D + I + R + T,
      j = x + S + N + C,
      M = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(D * devicePixelRatio), Math.round(x * devicePixelRatio), s),
        borderBoxSize: f(L, j, s),
        contentBoxSize: f(D, x, s),
        contentRect: new i.p(y, m, D, x)
      });
    return o.set(e, M), M
  },
  h = function(e, t) {
    var n = _(e),
      i = n.borderBoxSize,
      a = n.contentBoxSize,
      s = n.devicePixelContentBoxSize;
    switch (t) {
      case r.U.DEVICE_PIXEL_CONTENT_BOX:
        return s;
      case r.U.BORDER_BOX:
        return i;
      default:
        return a
    }
  }