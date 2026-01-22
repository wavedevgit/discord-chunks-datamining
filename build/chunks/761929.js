/** Chunk was on web.js **/
/** chunk id: 761929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  R: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js");
let a = 300;
var s = function(e) {
  return e[e.VERTICAL_TOP = 0] = "VERTICAL_TOP", e[e.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", e[e.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", e[e.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", e
}({});

function o(e) {
  return +(2 === e || 3 === e)
}
let l = e => {
  let {
    initialElementDimension: t,
    resizableDomNodeRef: n,
    maxDimension: s,
    minDimension: l,
    onElementResize: c,
    onElementResizeStart: u,
    onElementResizeEnd: d,
    throttleDuration: f = a,
    orientation: p,
    usePointerEvents: _ = false,
    getClampedValue: h = i.clamp
  } = e, [m, g] = r.useState(false), E = r.useRef(0), b = r.useRef(false), y = r.useRef(null == t ? 0 : t);
  return r.useLayoutEffect(() => {
    if (!m || null == n.current) return;

    function e(e) {
      let t = 1 === o(p) ? e.screenX : e.screenY,
        n = 0 === p || 2 === p,
        r = (t - E.current) * (n ? false : 1);
      return y.current + r
    }

    function t(e) {
      return h(e, null != l ? l : 0, null != s ? s : e)
    }
    let r = (0, i.throttle)(c, f),
      a = i => {
        if (null == n.current) return null;
        let a = e(i),
          s = t(a),
          l = 1 === o(p) ? "width" : "height";
        n.current.style[l] = "".concat(s, "px"), b.current || (b.current = true, null == u || u(s)), r(s, a)
      },
      O = n => {
        g(false);
        let r = e(n),
          i = t(r);
        c(i, r), null == d || d(i), b.current = false
      },
      A = _ ? "pointerup" : "mouseup",
      v = _ ? "pointermove" : "mousemove",
      S = n.current.ownerDocument;
    return S.addEventListener(A, O), S.addEventListener(v, a), () => {
      S.removeEventListener(A, O), S.removeEventListener(v, a), r.cancel()
    }
  }, [m, c, l, s, p, n, f, d, _, h, u]), r.useCallback(e => {
    let t = 1 === o(p);
    null != n.current && (y.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, g(true)
  }, [p, n])
}