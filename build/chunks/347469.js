/** Chunk was on web.js **/
/** chunk id: 347469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l,
  y: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js");
let a = 300;
var o = function(e) {
  return e[e.VERTICAL_TOP = 0] = "VERTICAL_TOP", e[e.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", e[e.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", e[e.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", e
}({});

function s(e) {
  return +(2 === e || 3 === e)
}
let l = e => {
  let {
    initialElementDimension: t,
    resizableDomNodeRef: n,
    maxDimension: o,
    minDimension: l,
    onElementResize: c,
    onElementResizeStart: u,
    onElementResizeEnd: d,
    throttleDuration: f = a,
    orientation: _,
    usePointerEvents: p = false,
    getClampedValue: h = i.clamp
  } = e, [m, g] = r.useState(false), E = r.useRef(0), b = r.useRef(false), y = r.useRef(null == t ? 0 : t);
  return r.useLayoutEffect(() => {
    if (!m || null == n.current) return;

    function e(e) {
      let t = 1 === s(_) ? e.screenX : e.screenY,
        n = 0 === _ || 2 === _,
        r = (t - E.current) * (n ? false : 1);
      return y.current + r
    }

    function t(e) {
      return h(e, null != l ? l : 0, null != o ? o : e)
    }
    let r = (0, i.throttle)(c, f),
      a = i => {
        if (null == n.current) return null;
        let a = e(i),
          o = t(a),
          l = 1 === s(_) ? "width" : "height";
        n.current.style[l] = "".concat(o, "px"), b.current || (b.current = true, null == u || u(o)), r(o, a)
      },
      O = n => {
        g(false);
        let r = e(n),
          i = t(r);
        c(i, r), null == d || d(i), b.current = false
      },
      v = p ? "pointerup" : "mouseup",
      I = p ? "pointermove" : "mousemove",
      T = n.current.ownerDocument;
    return T.addEventListener(v, O), T.addEventListener(I, a), () => {
      T.removeEventListener(v, O), T.removeEventListener(I, a), r.cancel()
    }
  }, [m, c, l, o, _, n, f, d, p, h, u]), r.useCallback(e => {
    let t = 1 === s(_);
    null != n.current && (y.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, g(true)
  }, [_, n])
}