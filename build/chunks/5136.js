/** Chunk was on 30355 **/
/** chunk id: 5136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => i
});
var Chunk647438 = require("./647438.js"),
  Chunk323946 = require("./323946.js");

function i(e) {
  let {
    container: t,
    edgeDistance: n = 130,
    maxSpeed: i = 1700,
    power: a = 2.2
  } = e, s = (0, r.useRef)(null), o = (0, r.useRef)(0), c = (0, r.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset()
  }), []), {
    isDragging: u,
    clientOffset: d
  } = (0, l.f)(c);
  (0, r.useEffect)(() => (s.current = requestAnimationFrame(function e(r) {
    if (null == t) return;
    if (s.current = requestAnimationFrame(e), false === u || null == d) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", o.current = r;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let l = Math.min(32, 0 !== o.current ? r - o.current : 16) / 1e3;
    o.current = r;
    let c = t.getBoundingClientRect(),
      f = d.y,
      m = f - c.top,
      g = c.bottom - f,
      p = 0;
    m >= 0 && m < n ? p = -i * Math.pow(1 - m / n, a) : g >= 0 && g < n && (p = i * Math.pow(1 - g / n, a)), 0 !== p && (t.scrollTop += p * l)
  }), () => {
    null !== s.current && cancelAnimationFrame(s.current), s.current = null, o.current = 0
  }), [t, u, d, n, i, a])
}