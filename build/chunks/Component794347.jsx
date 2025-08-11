/** Chunk was on 75708 **/
/** chunk id: 794347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x,
  _: () => h
});
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk477690 = require("./477690.js"),
  Chunk393238 = require("./393238.js"),
  Chunk162168 = require("./162168.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk182323 = require("./182323.js");
let g = (0, Chunk624138.Mg)(Chunk477690.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var h = ((i = {}).BLACK = "BLACK", i.GRAY = "GRAY", i);
let f = {
  BLACK: Chunk182323.black,
  GRAY: Chunk182323.gray
};

function b(e) {
  return Math.round(e / g) * g
}

function x(e) {
  let {
    notchBackground: t,
    progress: n,
    gradientStart: i = o.Z.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: a = o.Z.unsafe_rawColors.GREEN_360.css,
    className: c,
    children: m
  } = e, {
    ref: g,
    width: h
  } = (0, d.ZP)(), x = s.useMemo(() => null != h ? b(h) : 0, [h]), _ = s.useMemo(() => {
    let e = Math.abs(b(x * (100 - Math.max(0, Math.min(100, n))) / 100) - x);
    return {
      transform: "translateX(".concat(e, "px)")
    }
  }, [n, x]), j = s.useMemo(() => ({
    width: "".concat(x, "px"),
    background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(i, ", ").concat(a, ")")
  }), [a, i, n, x]);
  return (0, r.jsxs)("div", {
    className: p.wrapper,
    ref: g,
    children: [(0, r.jsxs)("div", {
      className: l()(p.container, c),
      style: j,
      children: [(0, r.jsx)("div", {
        className: p.progress,
        style: _
      }), 0 !== x && (0, r.jsx)(u.Z, {
        width: x,
        className: l()(p.notches, f[t])
      })]
    }), m]
  })
}