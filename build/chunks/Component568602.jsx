/** Chunk was on web.js **/
/** chunk id: 568602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => u
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk775602 = require("./775602.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends(r = Chunk64700.Component) {
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
    null != e && (e.style.transform = "")
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, i.jsx)("div", {
      className: e,
      ref: this.ref,
      children: t
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
        n.style.transform = l.A.useReducedMotion ? "" : "translate3d(".concat(t, "px,").concat(r, "px,0px)")
      }
      this.shouldRenderFrame = !this.shouldRenderFrame, this.animationFrame = requestAnimationFrame(this.animate)
    })
  }
}
c(u, "defaultProps", {
  isShaking: true,
  intensity: 5
})