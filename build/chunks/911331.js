/** Chunk was on web.js **/
"use strict";

function r(e) {
  return "object" == typeof e && null != e && 1 === e.nodeType
}

function i(e, t) {
  return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
}

function o(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return i(n.overflowY, t) || i(n.overflowX, t) || function(e) {
      var t = function(e) {
        if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
        try {
          return e.ownerDocument.defaultView.frameElement
        } catch (e) {
          return null
        }
      }(e);
      return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
    }(e)
  }
  return !1
}

function a(e, t, n, r, i, o, a, s) {
  return o < e && a > t || o > e && a < t ? 0 : o <= e && s <= n || a >= t && s >= n ? o - e - r : a > t && s < n || o < e && s > n ? a - t + i : 0
}
n.d(t, {
  Z: () => s
});
var s = function(e, t) {
  var n = window,
    i = t.scrollMode,
    s = t.block,
    l = t.inline,
    c = t.boundary,
    u = t.skipOverflowHiddenElements,
    d = "function" == typeof c ? c : function(e) {
      return e !== c
    };
  if (!r(e)) throw TypeError("Invalid target");
  for (var f, _, p = document.scrollingElement || document.documentElement, h = [], g = e; r(g) && d(g);) {
    if ((g = null == (_ = (f = g).parentElement) ? f.getRootNode().host || null : _) === p) {
      h.push(g);
      break
    }
    null != g && g === document.body && o(g) && !o(document.documentElement) || null != g && o(g, u) && h.push(g)
  }
  for (var m = n.visualViewport ? n.visualViewport.width : innerWidth, E = n.visualViewport ? n.visualViewport.height : innerHeight, v = window.scrollX || pageXOffset, b = window.scrollY || pageYOffset, y = e.getBoundingClientRect(), O = y.height, S = y.width, I = y.top, T = y.right, N = y.bottom, A = y.left, C = "start" === s || "nearest" === s ? I : "end" === s ? N : I + O / 2, R = "center" === l ? A + S / 2 : "end" === l ? T : A, P = [], D = 0; D < h.length; D++) {
    var w = h[D],
      L = w.getBoundingClientRect(),
      x = L.height,
      M = L.width,
      k = L.top,
      j = L.right,
      U = L.bottom,
      G = L.left;
    if ("if-needed" === i && I >= 0 && A >= 0 && N <= E && T <= m && I >= k && N <= U && A >= G && T <= j) break;
    var B = getComputedStyle(w),
      V = parseInt(B.borderLeftWidth, 10),
      F = parseInt(B.borderTopWidth, 10),
      Z = parseInt(B.borderRightWidth, 10),
      H = parseInt(B.borderBottomWidth, 10),
      W = 0,
      Y = 0,
      K = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - V - Z : 0,
      z = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - F - H : 0,
      q = "offsetWidth" in w ? 0 === w.offsetWidth ? 0 : M / w.offsetWidth : 0,
      Q = "offsetHeight" in w ? 0 === w.offsetHeight ? 0 : x / w.offsetHeight : 0;
    if (p === w) W = "start" === s ? C : "end" === s ? C - E : "nearest" === s ? a(b, b + E, E, F, H, b + C, b + C + O, O) : C - E / 2, Y = "start" === l ? R : "center" === l ? R - m / 2 : "end" === l ? R - m : a(v, v + m, m, V, Z, v + R, v + R + S, S), W = Math.max(0, W + b), Y = Math.max(0, Y + v);
    else {
      W = "start" === s ? C - k - F : "end" === s ? C - U + H + z : "nearest" === s ? a(k, U, x, F, H + z, C, C + O, O) : C - (k + x / 2) + z / 2, Y = "start" === l ? R - G - V : "center" === l ? R - (G + M / 2) + K / 2 : "end" === l ? R - j + Z + K : a(G, j, M, V, Z + K, R, R + S, S);
      var X = w.scrollLeft,
        J = w.scrollTop;
      C += J - (W = Math.max(0, Math.min(J + W / Q, w.scrollHeight - x / Q + z))), R += X - (Y = Math.max(0, Math.min(X + Y / q, w.scrollWidth - M / q + K)))
    }
    P.push({
      el: w,
      top: W,
      left: Y
    })
  }
  return P
}