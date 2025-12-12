/** Chunk was on 49941 **/
/** chunk id: 5136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk85707 = require("./85707.js"),
  Chunk481060 = require("./481060.js");

function a(e) {
  let {
    containerRef: t,
    itemType: n = "WIDGET",
    edgeDistance: a = 130,
    maxSpeed: o = 1700,
    power: s = 2.2
  } = e, c = (0, r.useRef)(null), u = (0, r.useRef)(0), d = (0, r.useRef)({
    top: 0,
    bottom: 0
  }), f = (0, r.useRef)(null), g = (0, r.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset(),
    item: e.getItem()
  }), []), {
    isDragging: p,
    clientOffset: m,
    item: b
  } = (0, i.f)(g);
  (0, r.useEffect)(() => {
    f.current = m
  }, [m]);
  let h = (0, l.zPA)();
  (0, r.useEffect)(() => {
    let e = t.current;
    if (null == e) return;
    if (!(true === p && (null == b ? true : b.itemType) === n && !h)) {
      null !== c.current && cancelAnimationFrame(c.current), c.current = null, e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto", u.current = 0;
      return
    }
    let r = e.getBoundingClientRect();
    return d.current = {
      top: r.top,
      bottom: r.bottom
    }, e.style.overflowAnchor = "none", e.style.overscrollBehavior = "contain", c.current = requestAnimationFrame(function t(n) {
      c.current = requestAnimationFrame(t);
      let r = f.current;
      if (null == e || null == r) {
        u.current = n;
        return
      }
      let i = Math.min(32, 0 !== u.current ? n - u.current : 16) / 1e3;
      u.current = n;
      let {
        top: l,
        bottom: g
      } = d.current, p = r.y, m = p - l, b = g - p, h = 0;
      if (m >= 0 && m < a ? h = -o * Math.pow(1 - m / a, s) : b >= 0 && b < a && (h = o * Math.pow(1 - b / a, s)), 0 !== h) {
        let t = h * i;
        Math.abs(t) >= 1 && (e.scrollTop += Math.round(t))
      }
    }), () => {
      null !== c.current && cancelAnimationFrame(c.current), c.current = null, u.current = 0, null != e && (e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto")
    }
  }, [t, p, null == b ? true : b.itemType, n, a, o, s, h])
}