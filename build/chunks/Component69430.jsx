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
  Chunk218446 = require("./218446.js");

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
    } = this.props, o = Math.min(Math.max(t, 0), 100), c = (d - e) / 2, u = c * Math.PI * 2;
    return (0, i.jsxs)("svg", {
      viewBox: "0 0 ".concat(d, " ").concat(d),
      className: l.circle,
      children: [(0, i.jsx)("circle", {
        className: true !== a ? a : l.circleBackgroundAlt,
        cx: d / 2,
        cy: d / 2,
        r: d / 2
      }), (0, i.jsx)("circle", {
        className: s()(l.circleBackground, r),
        cx: d / 2,
        cy: d / 2,
        r: (d - 2 * e) / 2
      }), (0, i.jsx)("circle", {
        className: l.circleProgress,
        cx: d / 2,
        cy: d / 2,
        r: c,
        strokeWidth: "".concat(e, "px"),
        strokeLinecap: "round",
        transform: "rotate(-90 ".concat(d / 2, " ").concat(d / 2, ")"),
        stroke: null != n ? n : "currentColor",
        style: {
          strokeDasharray: u,
          strokeDashoffset: (1 - o / 100) * u
        }
      })]
    })
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, i.jsxs)("div", {
      className: s()(l.progressCircle, e),
      children: [this.renderCircle(), null != t ? (0, i.jsx)("div", {
        className: s()(l.circleOverlay, this.props.overlayClassName),
        children: t
      }) : null]
    })
  }
}
c(f, "StrokeSizes", u), c(f, "defaultProps", {
  strokeSize: u.MEDIUM
})