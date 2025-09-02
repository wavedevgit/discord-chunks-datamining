/** Chunk was on 8188 **/
/** chunk id: 5136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk323946 = require("./323946.js");

function l(e) {
  let {
    container: t,
    edgeDistance: n = 130,
    maxSpeed: l = 1700,
    power: a = 2.2
  } = e, o = (0, r.useRef)(null), c = (0, r.useRef)(0), s = (0, r.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset()
  }), []), {
    isDragging: u,
    clientOffset: d
  } = (0, i.f)(s);
  (0, r.useEffect)(() => (o.current = requestAnimationFrame(function e(r) {
    if (null == t) return;
    if (o.current = requestAnimationFrame(e), false === u || null == d) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", c.current = r;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let i = Math.min(32, 0 !== c.current ? r - c.current : 16) / 1e3;
    c.current = r;
    let s = t.getBoundingClientRect(),
      f = d.y,
      g = f - s.top,
      b = s.bottom - f,
      p = 0;
    g >= 0 && g < n ? p = -l * Math.pow(1 - g / n, a) : b >= 0 && b < n && (p = l * Math.pow(1 - b / n, a)), 0 !== p && (t.scrollTop += p * i)
  }), () => {
    null !== o.current && cancelAnimationFrame(o.current), o.current = null, c.current = 0
  }), [t, u, d, n, l, a])
}