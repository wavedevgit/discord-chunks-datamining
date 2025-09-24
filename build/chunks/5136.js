/** Chunk was on 49902 **/
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
    power: o = 2.2
  } = e, s = (0, r.useRef)(null), c = (0, r.useRef)(0), u = (0, r.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset()
  }), []), {
    isDragging: d,
    clientOffset: f
  } = (0, i.f)(u), g = (0, l.zPA)();
  (0, r.useEffect)(() => (s.current = requestAnimationFrame(function e(r) {
    if (g || null == t) return;
    if (s.current = requestAnimationFrame(e), false === d || null == f) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", c.current = r;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let i = Math.min(32, 0 !== c.current ? r - c.current : 16) / 1e3;
    c.current = r;
    let l = t.getBoundingClientRect(),
      u = f.y,
      h = u - l.top,
      p = l.bottom - u,
      m = 0;
    h >= 0 && h < n ? m = -a * Math.pow(1 - h / n, o) : p >= 0 && p < n && (m = a * Math.pow(1 - p / n, o)), 0 !== m && (t.scrollTop += m * i)
  }), () => {
    null !== s.current && cancelAnimationFrame(s.current), s.current = null, c.current = 0
  }), [t, d, f, n, a, o, g])
}