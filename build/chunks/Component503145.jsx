/** Chunk was on web.js **/
/** chunk id: 503145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => u
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk607070 = require("./607070.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends(r = Chunk473749.Component) {
  componentDidMount() {
    this.props.isShaking && this.startShaking()
  }
  componentDidUpdate(e) {
    this.props.isShaking !== e.isShaking && this.setShaking(this.props.isShaking)
  }
  setShaking(e) {
    e ? this.startShaking() : this.stopShaking()
  }
  startShaking() {
    this.shouldRenderFrame = true, this.animationFrame = requestAnimationFrame(this.animate)
  }
  stopShaking() {
    null != this.animationFrame && cancelAnimationFrame(this.animationFrame);
    let e = this.ref.current;
    null != module && (module.style.transform = "")
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: module,
      ref: this.ref,
      children: exports
    })
  }
  constructor(...e) {
    super(...e), c(this, "ref", a.createRef()), c(this, "animationFrame", true), c(this, "shouldRenderFrame", true), c(this, "animate", () => {
      let {
        intensity: e,
        isShaking: t
      } = this.props;
      if (!t) return;
      let n = this.ref.current;
      if (this.shouldRenderFrame && null != n) {
        let t = s().random(-e, e, true),
          r = s().random(-e, e, true);
        n.style.transform = l.Z.useReducedMotion ? "" : "translate3d(".concat(t, "px,").concat(r, "px,0px)")
      }
      this.shouldRenderFrame = !this.shouldRenderFrame, this.animationFrame = requestAnimationFrame(this.animate)
    })
  }
}
c(u, "defaultProps", {
  isShaking: true,
  intensity: 5
})