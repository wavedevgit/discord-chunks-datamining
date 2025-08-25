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
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk477690 = require("./477690.js"),
  Chunk393238 = require("./393238.js"),
  Chunk162168 = require("./162168.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk776421 = require("./776421.js");
let _ = (0, Chunk624138.Mg)(Chunk477690.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var p = function(e) {
  return e.BLACK = "BLACK", e.GRAY = "GRAY", e
}({});
let h = {
  BLACK: Chunk776421.black,
  GRAY: Chunk776421.gray
};

function m(e) {
  return Math.round(e / _) * _
}

function g(e) {
  let {
    notchBackground: t,
    progress: n,
    gradientStart: o = s.Z.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: l = s.Z.unsafe_rawColors.GREEN_360.css,
    className: d,
    children: _
  } = e, {
    ref: p,
    width: g
  } = (0, c.ZP)(), E = i.useMemo(() => null != g ? m(g) : 0, [g]), b = i.useMemo(() => {
    let e = Math.abs(m(E * (100 - Math.max(0, Math.min(100, n))) / 100) - E);
    return {
      transform: "translateX(".concat(e, "px)")
    }
  }, [n, E]), y = i.useMemo(() => ({
    width: "".concat(E, "px"),
    background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(o, ", ").concat(l, ")")
  }), [l, o, n, E]);
  return (0, r.jsxs)("div", {
    className: f.wrapper,
    ref: p,
    children: [(0, r.jsxs)("div", {
      className: a()(f.container, d),
      style: y,
      children: [(0, r.jsx)("div", {
        className: f.progress,
        style: b
      }), 0 !== E && (0, r.jsx)(u.Z, {
        width: E,
        className: a()(f.notches, h[t])
      })]
    }), _]
  })
}