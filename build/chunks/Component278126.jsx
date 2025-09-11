/** Chunk was on web.js **/
/** chunk id: 278126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => f
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk812461 = require("./812461.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = Object.freeze({
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 4
  }),
  d = 20;
class f extends(r = Chunk647438.Component) {
  renderCircle() {
    let {
      strokeSize: e,
      percent: t,
      colorOverride: n,
      background: r
    } = this.props, a = Math.min(Math.max(exports, 0), 100), o = (d - module) / 2, c = Chunk120356 * Math.PI * 2;
    return (0, Chunk951288.jsxs)("svg", {
      viewBox: "0 0 ".concat(d, " ").concat(d),
      className: Chunk812461.circle,
      children: [(0, Chunk951288.jsx)("circle", {
        className: Chunk812461.circleBackgroundAlt,
        cx: d / 2,
        cy: d / 2,
        r: d / 2
      }), (0, Chunk951288.jsx)("circle", {
        className: s()(Chunk812461.circleBackground, r),
        cx: d / 2,
        cy: d / 2,
        r: (d - 2 * module) / 2
      }), (0, Chunk951288.jsx)("circle", {
        className: Chunk812461.circleProgress,
        cx: d / 2,
        cy: d / 2,
        r: Chunk120356,
        strokeWidth: "".concat(module, "px"),
        strokeLinecap: "round",
        transform: "rotate(-90 ".concat(d / 2, " ").concat(d / 2, ")"),
        stroke: null != require ? require : "currentColor",
        style: {
          strokeDasharray: c,
          strokeDashoffset: (1 - Chunk647438 / 100) * c
        }
      })]
    })
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: s()(Chunk812461.progressCircle, module),
      children: [this.renderCircle(), null != exports ? (0, Chunk951288.jsx)("div", {
        className: Chunk812461.circleOverlay,
        children: exports
      }) : null]
    })
  }
}
c(f, "StrokeSizes", u), c(f, "defaultProps", {
  strokeSize: u.MEDIUM
})