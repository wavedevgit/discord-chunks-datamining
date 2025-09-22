/** Chunk was on 30355 **/
/** chunk id: 5136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk79116 = require("./79116.js"),
  Chunk481060 = require("./481060.js");

function a(e) {
  let {
    container: t,
    edgeDistance: n = 130,
    maxSpeed: a = 1700,
    power: s = 2.2
  } = e, o = (0, r.useRef)(null), c = (0, r.useRef)(0), u = (0, r.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset()
  }), []), {
    isDragging: d,
    clientOffset: f
  } = (0, l.f)(u), m = (0, i.zPA)();
  (0, r.useEffect)(() => (o.current = requestAnimationFrame(function e(r) {
    if (m || null == t) return;
    if (o.current = requestAnimationFrame(e), false === d || null == f) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", c.current = r;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let l = Math.min(32, 0 !== c.current ? r - c.current : 16) / 1e3;
    c.current = r;
    let i = t.getBoundingClientRect(),
      u = f.y,
      g = u - i.top,
      p = i.bottom - u,
      b = 0;
    g >= 0 && g < n ? b = -a * Math.pow(1 - g / n, s) : p >= 0 && p < n && (b = a * Math.pow(1 - p / n, s)), 0 !== b && (t.scrollTop += b * l)
  }), () => {
    null !== o.current && cancelAnimationFrame(o.current), o.current = null, c.current = 0
  }), [t, d, f, n, a, s, m])
}