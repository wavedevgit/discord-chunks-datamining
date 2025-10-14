/** Chunk was on 56848 **/
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
    clientOffset: e.getClientOffset(),
    itemType: e.getItemType()
  }), []), {
    isDragging: d,
    clientOffset: f,
    itemType: g
  } = (0, i.f)(u), p = (0, l.zPA)();
  (0, r.useEffect)(() => (o.current = requestAnimationFrame(function e(r) {
    if (p || null == t) return;
    if (o.current = requestAnimationFrame(e), false === d || null == f || "WIDGET" !== g) {
      t.style.overflowAnchor = "auto", t.style.overscrollBehavior = "auto", c.current = r;
      return
    }
    t.style.overflowAnchor = "none", t.style.overscrollBehavior = "contain";
    let i = Math.min(32, 0 !== c.current ? r - c.current : 16) / 1e3;
    c.current = r;
    let l = t.getBoundingClientRect(),
      u = f.y,
      m = u - l.top,
      h = l.bottom - u,
      v = 0;
    m >= 0 && m < n ? v = -a * Math.pow(1 - m / n, s) : h >= 0 && h < n && (v = a * Math.pow(1 - h / n, s)), 0 !== v && (t.scrollTop += v * i)
  }), () => {
    null !== o.current && cancelAnimationFrame(o.current), o.current = null, c.current = 0
  }), [t, d, f, g, n, a, s, p])
}