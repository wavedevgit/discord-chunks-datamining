/** Chunk was on web.js **/
/** chunk id: 794347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  _: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk477690 = require("./477690.js"),
  Chunk393238 = require("./393238.js"),
  Chunk162168 = require("./162168.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk806390 = require("./806390.js");
let _ = (0, Chunk624138.Mg)(Chunk477690.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var p = function(e) {
  return e.BLACK = "BLACK", e.GRAY = "GRAY", e
}({});
let h = {
  BLACK: Chunk806390.black,
  GRAY: Chunk806390.gray
};

function m(e) {
  return Math.round(e / _) * _
}

function g(e) {
  let {
    notchBackground: t,
    progress: n,
    gradientStart: a = s.Z.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: l = s.Z.unsafe_rawColors.GREEN_360.css,
    className: d,
    notchClassName: _,
    children: p
  } = e, {
    ref: g,
    width: E
  } = (0, c.ZP)(), b = i.useMemo(() => null != E ? m(E) : 0, [E]), y = i.useMemo(() => {
    let e = Math.abs(m(b * (100 - Math.max(0, Math.min(100, n))) / 100) - b);
    return {
      transform: "translateX(".concat(e, "px)")
    }
  }, [n, b]), O = i.useMemo(() => ({
    width: "".concat(b, "px"),
    background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(a, ", ").concat(l, ")")
  }), [l, a, n, b]);
  return (0, r.jsxs)("div", {
    className: f.wrapper,
    ref: g,
    children: [(0, r.jsxs)("div", {
      className: o()(f.container, d),
      style: O,
      children: [(0, r.jsx)("div", {
        className: f.progress,
        style: y
      }), 0 !== b && (0, r.jsx)(u.Z, {
        width: b,
        className: o()(f.notches, h[t], _)
      })]
    }), p]
  })
}