/** Chunk was on 40198 **/
/** chunk id: 123902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  V: () => f
});
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk319060 = require("./319060.js"),
  Chunk765671 = require("./765671.js"),
  Chunk371664 = require("./371664.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk477412 = require("./477412.js");
let m = (0, Chunk240248.xI)(Chunk319060.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var f = ((i = {}).BLACK = "BLACK", i.GRAY = "GRAY", i);
let g = {
  BLACK: Chunk477412.Ql,
  GRAY: Chunk477412.wm
};

function v(e) {
  return Math.round(e / m) * m
}

function b(e) {
  let {
    notchBackground: t,
    progress: n,
    gradientStart: i = c.A.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: s = c.A.unsafe_rawColors.GREEN_360.css,
    className: a,
    notchClassName: d,
    children: m
  } = e, {
    ref: f,
    width: b
  } = (0, u.Ay)(), O = o.useMemo(() => null != b ? v(b) : 0, [b]), y = o.useMemo(() => {
    let e = Math.abs(v(O * (100 - Math.max(0, Math.min(100, n))) / 100) - O);
    return {
      transform: "translateX(".concat(e, "px)")
    }
  }, [n, O]), j = o.useMemo(() => ({
    width: "".concat(O, "px"),
    background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(i, ", ").concat(s, ")")
  }), [s, i, n, O]);
  return (0, r.jsxs)("div", {
    className: h.iE,
    ref: f,
    children: [(0, r.jsxs)("div", {
      className: l()(h.kL, a),
      style: j,
      children: [(0, r.jsx)("div", {
        className: h.qB,
        style: y
      }), 0 !== O && (0, r.jsx)(p.A, {
        width: O,
        className: l()(h.DR, g[t], d)
      })]
    }), m]
  })
}