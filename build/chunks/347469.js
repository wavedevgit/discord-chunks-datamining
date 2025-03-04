/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => l,
  y: () => a
}), n(47120);
var r = n(192379),
  i = n(392711);
let o = 300;
var a = function(e) {
  return e[e.VERTICAL_TOP = 0] = "VERTICAL_TOP", e[e.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", e[e.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", e[e.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", e
}({});

function s(e) {
  return +(2 === e || 3 === e)
}
let l = e => {
  let {
    initialElementDimension: t,
    resizableDomNodeRef: n,
    maxDimension: a,
    minDimension: l,
    onElementResize: c,
    onElementResizeStart: u,
    onElementResizeEnd: d,
    throttleDuration: f = o,
    orientation: _,
    usePointerEvents: p = !1,
    getClampedValue: h = i.clamp
  } = e, [g, m] = r.useState(!1), E = r.useRef(0), v = r.useRef(!1), b = r.useRef(null == t ? 0 : t);
  return r.useLayoutEffect(() => {
    if (!g || null == n.current) return;

    function e(e) {
      let t = 1 === s(_) ? e.screenX : e.screenY,
        n = 0 === _ || 2 === _,
        r = (t - E.current) * (n ? -1 : 1);
      return b.current + r
    }

    function t(e) {
      return h(e, null != l ? l : 0, null != a ? a : e)
    }
    let r = (0, i.throttle)(c, f),
      o = i => {
        if (null == n.current) return null;
        let o = e(i),
          a = t(o),
          l = 1 === s(_) ? "width" : "height";
        n.current.style[l] = "".concat(a, "px"), v.current || (v.current = !0, null == u || u(a)), r(a, o)
      },
      y = n => {
        m(!1);
        let r = e(n),
          i = t(r);
        c(i, r), null == d || d(i), v.current = !1
      },
      O = p ? "pointerup" : "mouseup",
      S = p ? "pointermove" : "mousemove",
      I = n.current.ownerDocument;
    return I.addEventListener(O, y), I.addEventListener(S, o), () => {
      I.removeEventListener(O, y), I.removeEventListener(S, o), r.cancel()
    }
  }, [g, c, l, a, _, n, f, d, p, h, u]), r.useCallback(e => {
    let t = 1 === s(_);
    null != n.current && (b.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, m(!0)
  }, [_, n])
}