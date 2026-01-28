/** Chunk was on 78572 **/
/** chunk id: 123902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  V: () => g
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk319060 = require("./319060.js"),
  Chunk765671 = require("./765671.js"),
  Chunk371664 = require("./371664.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk477412 = require("./477412.js");
let m = (0, Chunk240248.xI)(Chunk319060.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var g = ((r = {}).BLACK = "BLACK", r.GRAY = "GRAY", r);
let y = {
  BLACK: Chunk477412.Ql,
  GRAY: Chunk477412.wm
};

function b(e) {
  return Math.round(e / m) * m
}

function _(e) {
  let {
    notchBackground: t,
    progress: n,
    gradientStart: r = o.A.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: a = o.A.unsafe_rawColors.GREEN_360.css,
    className: c,
    notchClassName: p,
    children: m
  } = e, {
    ref: g,
    width: _
  } = (0, u.Ay)(), h = l.useMemo(() => null != _ ? b(_) : 0, [_]), A = l.useMemo(() => {
    let e = Math.abs(b(h * (100 - Math.max(0, Math.min(100, n))) / 100) - h);
    return {
      transform: "translateX(".concat(e, "px)")
    }
  }, [n, h]), v = l.useMemo(() => ({
    width: "".concat(h, "px"),
    background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(r, ", ").concat(a, ")")
  }), [a, r, n, h]);
  return (0, i.jsxs)("div", {
    className: f.iE,
    ref: g,
    children: [(0, i.jsxs)("div", {
      className: s()(f.kL, c),
      style: v,
      children: [(0, i.jsx)("div", {
        className: f.qB,
        style: A
      }), 0 !== h && (0, i.jsx)(d.A, {
        width: h,
        className: s()(f.DR, y[t], p)
      })]
    }), m]
  })
}