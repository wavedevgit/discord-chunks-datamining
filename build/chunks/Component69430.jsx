/** Chunk was on web.js **/
/** chunk id: 69430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => f
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk80743 = require("./80743.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = Object.freeze({
    XSMALL: .8,
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 4
  }),
  d = 20;
class f extends(r = Chunk473749.Component) {
  renderCircle() {
    let {
      strokeSize: e,
      percent: t,
      colorOverride: n,
      background: r,
      ringColorOverrideClassName: a
    } = this.props, o = Math.min(Math.max(exports, 0), 100), c = (d - module) / 2, u = c * Math.PI * 2;
    return (0, Chunk54381.jsxs)("svg", {
      viewBox: "0 0 ".concat(d, " ").concat(d),
      className: Chunk80743.circle,
      children: [(0, Chunk54381.jsx)("circle", {
        className: true !== Chunk473749 ? Chunk473749 : Chunk80743.circleBackgroundAlt,
        cx: d / 2,
        cy: d / 2,
        r: d / 2
      }), (0, Chunk54381.jsx)("circle", {
        className: s()(Chunk80743.circleBackground, r),
        cx: d / 2,
        cy: d / 2,
        r: (d - 2 * module) / 2
      }), (0, Chunk54381.jsx)("circle", {
        className: Chunk80743.circleProgress,
        cx: d / 2,
        cy: d / 2,
        r: c,
        strokeWidth: "".concat(module, "px"),
        strokeLinecap: "round",
        transform: "rotate(-90 ".concat(d / 2, " ").concat(d / 2, ")"),
        stroke: null != require ? require : "currentColor",
        style: {
          strokeDasharray: u,
          strokeDashoffset: (1 - Chunk120356 / 100) * u
        }
      })]
    })
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: s()(Chunk80743.progressCircle, module),
      children: [this.renderCircle(), null != exports ? (0, Chunk54381.jsx)("div", {
        className: s()(Chunk80743.circleOverlay, this.props.overlayClassName),
        children: exports
      }) : null]
    })
  }
}
c(f, "StrokeSizes", u), c(f, "defaultProps", {
  strokeSize: u.MEDIUM
})