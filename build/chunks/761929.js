/** Chunk was on web.js **/
/** chunk id: 761929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  R: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js");
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
    orientation: p,
    usePointerEvents: _ = false,
    getClampedValue: h = i.clamp
  } = e, [m, g] = r.useState(false), E = r.useRef(0), y = r.useRef(false), b = r.useRef(null == t ? 0 : t);
  return r.useLayoutEffect(() => {
    if (!m || null == n.current) return;

    function e(e) {
      let t = 1 === s(p) ? e.screenX : e.screenY,
        n = 0 === p || 2 === p,
        r = (t - E.current) * (n ? false : 1);
      return b.current + r
    }

    function t(e) {
      return h(e, null != l ? l : 0, null != o ? o : e)
    }
    let r = (0, i.throttle)(c, f),
      a = i => {
        if (null == n.current) return null;
        let a = e(i),
          o = t(a),
          l = 1 === s(p) ? "width" : "height";
        n.current.style[l] = "".concat(o, "px"), y.current || (y.current = true, null == u || u(o)), r(o, a)
      },
      O = n => {
        g(false);
        let r = e(n),
          i = t(r);
        c(i, r), null == d || d(i), y.current = false
      },
      v = _ ? "pointerup" : "mouseup",
      A = _ ? "pointermove" : "mousemove",
      I = n.current.ownerDocument;
    return I.addEventListener(v, O), I.addEventListener(A, a), () => {
      I.removeEventListener(v, O), I.removeEventListener(A, a), r.cancel()
    }
  }, [m, c, l, o, p, n, f, d, _, h, u]), r.useCallback(e => {
    let t = 1 === s(p);
    null != n.current && (b.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, g(true)
  }, [p, n])
}