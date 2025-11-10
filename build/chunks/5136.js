/** Chunk was on 15582 **/
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
    power: o = 2.2
  } = e, c = (0, r.useRef)(null), s = (0, r.useRef)(0), u = (0, r.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset(),
    itemType: e.getItemType()
  }), []), {
    isDragging: d,
    clientOffset: f,
    itemType: g
  } = (0, i.f)(u), p = (0, a.zPA)();
  (0, r.useEffect)(() => (c.current = requestAnimationFrame(function e(r) {
    if (p || null == t) return;
    if (c.current = requestAnimationFrame(e), false === d || null == f || "WIDGET" !== g) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", s.current = r;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let i = Math.min(32, 0 !== s.current ? r - s.current : 16) / 1e3;
    s.current = r;
    let a = t.getBoundingClientRect(),
      u = f.y,
      m = u - a.top,
      b = a.bottom - u,
      h = 0;
    m >= 0 && m < n ? h = -l * Math.pow(1 - m / n, o) : b >= 0 && b < n && (h = l * Math.pow(1 - b / n, o)), 0 !== h && (t.scrollTop += h * i)
  }), () => {
    null !== c.current && cancelAnimationFrame(c.current), c.current = null, s.current = 0
  }), [t, d, f, g, n, l, o, p])
}