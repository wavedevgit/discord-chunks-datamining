/** Chunk was on web.js **/
/** chunk id: 796598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dg: () => o,
  b$: () => s,
  yA: () => u
});
var Chunk156872 = require("./156872.js"),
  Chunk636014 = require("./636014.js"),
  a = 1;

function o(e) {
  var t = e.nodeType === a ? e : e.parentElement;
  if (!t) return null;
  var n = t.getBoundingClientRect(),
    r = n.top;
  return {
    x: n.left,
    y: r
  }
}

function s(e) {
  return {
    x: e.clientX,
    y: e.clientY
  }
}

function l(e) {
  var t;
  return "IMG" === e.nodeName && ((0, r.g)() || !(null != (t = document.documentElement) && t.contains(e)))
}

function c(e, t, n, i) {
  var a = e ? t.width : n,
    o = e ? t.height : i;
  return (0, r.n)() && e && (o /= window.devicePixelRatio, a /= window.devicePixelRatio), {
    dragPreviewWidth: a,
    dragPreviewHeight: o
  }
}

function u(e, t, n, a, s) {
  var u = l(t),
    d = o(u ? e : t),
    f = {
      x: n.x - d.x,
      y: n.y - d.y
    },
    p = e.offsetWidth,
    _ = e.offsetHeight,
    h = a.anchorX,
    m = a.anchorY,
    g = c(u, t, p, _),
    E = g.dragPreviewWidth,
    y = g.dragPreviewHeight,
    b = function() {
      var e = new i.f([0, .5, 1], [f.y, f.y / _ * y, f.y + y - _]).interpolate(m);
      return (0, r.n)() && u && (e += (window.devicePixelRatio - 1) * y), e
    },
    O = function() {
      return new i.f([0, .5, 1], [f.x, f.x / p * E, f.x + E - p]).interpolate(h)
    },
    v = s.offsetX,
    A = s.offsetY,
    I = 0 === A || A;
  return {
    x: 0 === v || v ? v : O(),
    y: I ? A : b()
  }
}