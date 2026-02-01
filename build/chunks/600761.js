/** Chunk was on 60118 **/
/** chunk id: 600761, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk688807 = require("./688807.js"),
  Chunk397927 = require("./397927.js");

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
  }), f = (0, r.useRef)(null), p = (0, r.useCallback)(e => ({
    isDragging: e.isDragging(),
    clientOffset: e.getClientOffset(),
    item: e.getItem()
  }), []), {
    isDragging: g,
    clientOffset: m,
    item: b
  } = (0, l.V)(p);
  (0, r.useEffect)(() => {
    f.current = m
  }, [m]);
  let y = (0, i.VUy)();
  (0, r.useEffect)(() => {
    let e = t.current;
    if (null == e) return;
    if (!(true === g && (null == b ? true : b.itemType) === n && !y)) {
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
      let l = Math.min(32, 0 !== u.current ? n - u.current : 16) / 1e3;
      u.current = n;
      let {
        top: i,
        bottom: p
      } = d.current, g = r.y, m = g - i, b = p - g, y = 0;
      if (m >= 0 && m < a ? y = -o * Math.pow(1 - m / a, s) : b >= 0 && b < a && (y = o * Math.pow(1 - b / a, s)), 0 !== y) {
        let t = y * l;
        Math.abs(t) >= 1 && (e.scrollTop += Math.round(t))
      }
    }), () => {
      null !== c.current && cancelAnimationFrame(c.current), c.current = null, u.current = 0, null != e && (e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto")
    }
  }, [t, g, null == b ? true : b.itemType, n, a, o, s, y])
}