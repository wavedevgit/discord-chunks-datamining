/** Chunk was on web.js **/
/** chunk id: 400606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => a,
  o: () => s
});
var Chunk534278 = require("./534278.js"),
  Chunk408713 = require("./408713.js");

function a(e, t) {
  let n = o(e, t, "left"),
    r = o(e, t, "top"),
    i = t.offsetWidth,
    a = t.offsetHeight,
    s = e.scrollLeft,
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
    y = s + parseInt(u, 10),
    b = l + parseInt(c, 10),
    O = y + e.clientWidth,
    v = b + e.clientHeight,
    A = parseInt(d, 10) || 0,
    I = parseInt(p, 10) || 0,
    S = parseInt(f, 10) || 0,
    T = parseInt(_, 10) || 0,
    C = parseInt(h, 10) || 0,
    N = parseInt(g, 10) || 0,
    w = parseInt(m, 10) || 0,
    R = n - (parseInt(E, 10) || 0),
    P = n + i + w,
    D = r - C,
    L = r + a + N,
    x = s + parseInt(u, 10) + T,
    M = O - S,
    j = l + parseInt(c, 10) + A,
    k = v - I;
  (R > x || P < M) && (R <= s + T ? s = R - parseInt(u, 10) - T : P > O - S && (s += P - O + S)), (D > j || L < k) && (D <= b + A ? l = D - parseInt(c, 10) - A : L > v - I && (l += L - v + I)), e.scrollTo({
    left: s,
    top: l
  })
}

function o(e, t, n) {
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

function s(e, t) {
  if (e && document.contains(e)) {
    let c = document.scrollingElement || document.documentElement;
    if ("hidden" === window.getComputedStyle(c).overflow || (0, i.H8)())
      for (let t of (0, r.R)(e)) a(t, e);
    else {
      var n, o, s, l;
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
      (Math.abs(r - a) > 1 || Math.abs(i - c) > 1) && (null == t || null == (s = t.containingElement) || null == (o = s.scrollIntoView) || o.call(s, {
        block: "center",
        inline: "center"
      }), null == (l = e.scrollIntoView) || l.call(e, {
        block: "nearest"
      }))
    }
  }
}