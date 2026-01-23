/** Chunk was on web.js **/
/** chunk id: 400606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => a,
  o: () => o
});
var Chunk534278 = require("./534278.js"),
  Chunk408713 = require("./408713.js");

function a(e, t) {
  let n = s(e, t, "left"),
    r = s(e, t, "top"),
    i = t.offsetWidth,
    a = t.offsetHeight,
    o = e.scrollLeft,
    l = e.scrollTop,
    {
      borderTopWidth: c,
      borderLeftWidth: u,
      scrollPaddingTop: d,
      scrollPaddingRight: f,
      scrollPaddingBottom: p,
      scrollPaddingLeft: _
    } = getComputedStyle(e),
    {
      scrollMarginTop: h,
      scrollMarginRight: m,
      scrollMarginBottom: g,
      scrollMarginLeft: E
    } = getComputedStyle(t),
    y = o + parseInt(u, 10),
    b = l + parseInt(c, 10),
    O = y + e.clientWidth,
    v = b + e.clientHeight,
    A = parseInt(d, 10) || 0,
    I = parseInt(p, 10) || 0,
    S = parseInt(f, 10) || 0,
    T = parseInt(_, 10) || 0,
    C = parseInt(h, 10) || 0,
    N = parseInt(g, 10) || 0,
    R = parseInt(m, 10) || 0,
    w = n - (parseInt(E, 10) || 0),
    P = n + i + R,
    D = r - C,
    x = r + a + N,
    L = o + parseInt(u, 10) + T,
    j = O - S,
    M = l + parseInt(c, 10) + A,
    k = v - I;
  (w > L || P < j) && (w <= o + T ? o = w - parseInt(u, 10) - T : P > O - S && (o += P - O + S)), (D > M || x < k) && (D <= b + A ? l = D - parseInt(c, 10) - A : x > v - I && (l += x - v + I)), e.scrollTo({
    left: o,
    top: l
  })
}

function s(e, t, n) {
  let r = "left" === n ? "offsetLeft" : "offsetTop",
    i = 0;
  for (; t.offsetParent && (i += t[r], t.offsetParent !== e);) {
    if (t.offsetParent.contains(e)) {
      i -= e[r];
      break
    }
    t = t.offsetParent
  }
  return i
}

function o(e, t) {
  if (e && document.contains(e)) {
    let c = document.scrollingElement || document.documentElement;
    if ("hidden" === window.getComputedStyle(c).overflow || (0, i.H8)())
      for (let t of (0, r.R)(e)) a(t, e);
    else {
      var n, s, o, l;
      let {
        left: r,
        top: i
      } = e.getBoundingClientRect();
      null == e || null == (n = e.scrollIntoView) || n.call(e, {
        block: "nearest"
      });
      let {
        left: a,
        top: c
      } = e.getBoundingClientRect();
      (Math.abs(r - a) > 1 || Math.abs(i - c) > 1) && (null == t || null == (o = t.containingElement) || null == (s = o.scrollIntoView) || s.call(o, {
        block: "center",
        inline: "center"
      }), null == (l = e.scrollIntoView) || l.call(e, {
        block: "nearest"
      }))
    }
  }
}