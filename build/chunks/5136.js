/** Chunk was on 30355 **/
/** chunk id: 5136, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  r: () => i
});
var Chunk647438 = require("./647438.js"),
  Chunk323946 = require("./323946.js");

function i(e) {
  let {
    container: t,
    edgeDistance: r = 130,
    maxSpeed: i = 1700,
    power: a = 2.2
  } = e, s = (0, n.useRef)(null), o = (0, n.useRef)(0), c = (0, n.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset()
  }), []), {
    isDragging: u,
    clientOffset: d
  } = (0, l.f)(c);
  (0, n.useEffect)(() => (s.current = requestAnimationFrame(function e(n) {
    if (null == t) return;
    if (s.current = requestAnimationFrame(e), false === u || null == d) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", o.current = n;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let l = Math.min(32, 0 !== o.current ? n - o.current : 16) / 1e3;
    o.current = n;
    let c = t.getBoundingClientRect(),
      f = d.y,
      g = f - c.top,
      m = c.bottom - f,
      p = 0;
    g >= 0 && g < r ? p = -i * Math.pow(1 - g / r, a) : m >= 0 && m < r && (p = i * Math.pow(1 - m / r, a)), 0 !== p && (t.scrollTop += p * l)
  }), () => {
    null !== s.current && cancelAnimationFrame(s.current), s.current = null, o.current = 0
  }), [t, u, d, r, i, a])
}