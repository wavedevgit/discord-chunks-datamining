/** Chunk was on web.js **/
/** chunk id: 682213, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return "object" == typeof e && null != e && 1 === e.nodeType
}

function i(e, t) {
  return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
}

function a(e, t) {
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
  returnfalse
}

function s(e, t, n, r, i, a, s, o) {
  return a < e && s > t || a > e && s < t ? 0 : a <= e && o <= n || s >= t && o >= n ? a - e - r : s > t && o < n || a < e && o > n ? s - t + i : 0
}
require.d(exports, {
  A: () => o
});
var o = function(e, t) {
  var n = window,
    i = t.scrollMode,
    o = t.block,
    l = t.inline,
    c = t.boundary,
    u = t.skipOverflowHiddenElements,
    d = "function" == typeof c ? c : function(e) {
      return e !== c
    };
  if (!r(e)) throw TypeError("Invalid target");
  for (var f, p, _ = document.scrollingElement || document.documentElement, h = [], m = e; r(m) && d(m);) {
    if ((m = null == (p = (f = m).parentElement) ? f.getRootNode().host || null : p) === _) {
      h.push(m);
      break
    }
    null != m && m === document.body && a(m) && !a(document.documentElement) || null != m && a(m, u) && h.push(m)
  }
  for (var g = n.visualViewport ? n.visualViewport.width : innerWidth, E = n.visualViewport ? n.visualViewport.height : innerHeight, y = window.scrollX || pageXOffset, b = window.scrollY || pageYOffset, O = e.getBoundingClientRect(), v = O.height, A = O.width, I = O.top, S = O.right, T = O.bottom, C = O.left, N = "start" === o || "nearest" === o ? I : "end" === o ? T : I + v / 2, w = "center" === l ? C + A / 2 : "end" === l ? S : C, R = [], P = 0; P < h.length; P++) {
    var D = h[P],
      x = D.getBoundingClientRect(),
      L = x.height,
      j = x.width,
      M = x.top,
      k = x.right,
      U = x.bottom,
      G = x.left;
    if ("if-needed" === i && I >= 0 && C >= 0 && T <= E && S <= g && I >= M && T <= U && C >= G && S <= k) break;
    var V = getComputedStyle(D),
      F = parseInt(V.borderLeftWidth, 10),
      B = parseInt(V.borderTopWidth, 10),
      H = parseInt(V.borderRightWidth, 10),
      Y = parseInt(V.borderBottomWidth, 10),
      W = 0,
      K = 0,
      z = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - F - H : 0,
      q = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - B - Y : 0,
      Z = "offsetWidth" in D ? 0 === D.offsetWidth ? 0 : j / D.offsetWidth : 0,
      X = "offsetHeight" in D ? 0 === D.offsetHeight ? 0 : L / D.offsetHeight : 0;
    if (_ === D) W = "start" === o ? N : "end" === o ? N - E : "nearest" === o ? s(b, b + E, E, B, Y, b + N, b + N + v, v) : N - E / 2, K = "start" === l ? w : "center" === l ? w - g / 2 : "end" === l ? w - g : s(y, y + g, g, F, H, y + w, y + w + A, A), W = Math.max(0, W + b), K = Math.max(0, K + y);
    else {
      W = "start" === o ? N - M - B : "end" === o ? N - U + Y + q : "nearest" === o ? s(M, U, L, B, Y + q, N, N + v, v) : N - (M + L / 2) + q / 2, K = "start" === l ? w - G - F : "center" === l ? w - (G + j / 2) + z / 2 : "end" === l ? w - k + H + z : s(G, k, j, F, H + z, w, w + A, A);
      var Q = D.scrollLeft,
        J = D.scrollTop;
      N += J - (W = Math.max(0, Math.min(J + W / X, D.scrollHeight - L / X + q))), w += Q - (K = Math.max(0, Math.min(Q + K / Z, D.scrollWidth - j / Z + z)))
    }
    R.push({
      el: D,
      top: W,
      left: K
    })
  }
  return R
}