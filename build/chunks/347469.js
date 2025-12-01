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
    orientation: p,
    usePointerEvents: _ = false,
    getClampedValue: m = i.clamp
  } = e, [h, g] = r.useState(false), E = r.useRef(0), b = r.useRef(false), y = r.useRef(null == t ? 0 : t);
  return r.useLayoutEffect(() => {
    if (!h || null == n.current) return;

    function e(e) {
      let t = 1 === s(p) ? e.screenX : e.screenY,
        n = 0 === p || 2 === p,
        r = (t - E.current) * (n ? false : 1);
      return y.current + r
    }

    function t(e) {
      return m(e, null != l ? l : 0, null != o ? o : e)
    }
    let r = (0, i.throttle)(c, f),
      a = i => {
        if (null == n.current) return null;
        let a = e(i),
          o = t(a),
          l = 1 === s(p) ? "width" : "height";
        n.current.style[l] = "".concat(o, "px"), b.current || (b.current = true, null == u || u(o)), r(o, a)
      },
      O = n => {
        g(false);
        let r = e(n),
          i = t(r);
        c(i, r), null == d || d(i), b.current = false
      },
      v = _ ? "pointerup" : "mouseup",
      S = _ ? "pointermove" : "mousemove",
      I = n.current.ownerDocument;
    return I.addEventListener(v, O), I.addEventListener(S, a), () => {
      I.removeEventListener(v, O), I.removeEventListener(S, a), r.cancel()
    }
  }, [h, c, l, o, p, n, f, d, _, m, u]), r.useCallback(e => {
    let t = 1 === s(p);
    null != n.current && (y.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, g(true)
  }, [p, n])
}