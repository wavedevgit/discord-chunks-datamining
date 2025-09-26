/** Chunk was on 74477 **/
/** chunk id: 5136, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  r: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk79116 = require("./79116.js"),
  Chunk481060 = require("./481060.js");

function a(e) {
  let {
    container: t,
    edgeDistance: r = 130,
    maxSpeed: a = 1700,
    power: s = 2.2
  } = e, o = (0, n.useRef)(null), c = (0, n.useRef)(0), u = (0, n.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset()
  }), []), {
    isDragging: d,
    clientOffset: f
  } = (0, i.f)(u), g = (0, l.zPA)();
  (0, n.useEffect)(() => (o.current = requestAnimationFrame(function e(n) {
    if (g || null == t) return;
    if (o.current = requestAnimationFrame(e), false === d || null == f) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", c.current = n;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let i = Math.min(32, 0 !== c.current ? n - c.current : 16) / 1e3;
    c.current = n;
    let l = t.getBoundingClientRect(),
      u = f.y,
      h = u - l.top,
      p = l.bottom - u,
      m = 0;
    h >= 0 && h < r ? m = -a * Math.pow(1 - h / r, s) : p >= 0 && p < r && (m = a * Math.pow(1 - p / r, s)), 0 !== m && (t.scrollTop += m * i)
  }), () => {
    null !== o.current && cancelAnimationFrame(o.current), o.current = null, c.current = 0
  }), [t, d, f, r, a, s, g])
}