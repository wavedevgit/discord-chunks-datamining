/** Chunk was on web.js **/
/** chunk id: 123902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  V: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk319060 = require("./319060.js"),
  Chunk765671 = require("./765671.js"),
  Chunk371664 = require("./371664.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk477412 = require("./477412.js");
let p = (0, Chunk240248.xI)(Chunk319060.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var _ = function(e) {
  return e.BLACK = "BLACK", e.GRAY = "GRAY", e
}({});
let h = {
  BLACK: Chunk477412.Ql,
  GRAY: Chunk477412.wm
};

function m(e) {
  return Math.round(e / p) * p
}

function g(e) {
  let {
    notchBackground: t,
    progress: n,
    gradientStart: a = o.A.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: l = o.A.unsafe_rawColors.GREEN_360.css,
    className: d,
    notchClassName: p,
    children: _
  } = e, {
    ref: g,
    width: E
  } = (0, c.Ay)(), y = i.useMemo(() => null != E ? m(E) : 0, [E]), b = i.useMemo(() => {
    let e = Math.abs(m(y * (100 - Math.max(0, Math.min(100, n))) / 100) - y);
    return {
      transform: "translateX(".concat(e, "px)")
    }
  }, [n, y]), O = i.useMemo(() => ({
    width: "".concat(y, "px"),
    background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(a, ", ").concat(l, ")")
  }), [l, a, n, y]);
  return (0, r.jsxs)("div", {
    className: f.iE,
    ref: g,
    children: [(0, r.jsxs)("div", {
      className: s()(f.kL, d),
      style: O,
      children: [(0, r.jsx)("div", {
        className: f.qB,
        style: b
      }), 0 !== y && (0, r.jsx)(u.A, {
        width: y,
        className: s()(f.DR, h[t], p)
      })]
    }), _]
  })
}