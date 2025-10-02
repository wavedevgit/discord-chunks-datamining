/** Chunk was on 56848 **/
/** chunk id: 5136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk79116 = require("./79116.js"),
  Chunk481060 = require("./481060.js");

function l(e) {
  let {
    container: t,
    edgeDistance: n = 130,
    maxSpeed: l = 1700,
    power: s = 2.2
  } = e, o = (0, r.useRef)(null), c = (0, r.useRef)(0), u = (0, r.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset()
  }), []), {
    isDragging: d,
    clientOffset: f
  } = (0, i.f)(u), g = (0, a.zPA)();
  (0, r.useEffect)(() => (o.current = requestAnimationFrame(function e(r) {
    if (g || null == t) return;
    if (o.current = requestAnimationFrame(e), false === d || null == f) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", c.current = r;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let i = Math.min(32, 0 !== c.current ? r - c.current : 16) / 1e3;
    c.current = r;
    let a = t.getBoundingClientRect(),
      u = f.y,
      h = u - a.top,
      p = a.bottom - u,
      m = 0;
    h >= 0 && h < n ? m = -l * Math.pow(1 - h / n, s) : p >= 0 && p < n && (m = l * Math.pow(1 - p / n, s)), 0 !== m && (t.scrollTop += m * i)
  }), () => {
    null !== o.current && cancelAnimationFrame(o.current), o.current = null, c.current = 0
  }), [t, d, f, n, l, s, g])
}