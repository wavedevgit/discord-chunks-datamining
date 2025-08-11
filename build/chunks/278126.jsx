/** Chunk was on web.js **/
/** chunk id: 278126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => f
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk584209 = require("./584209.js");

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
class f extends(r = Chunk73800.Component) {
  renderCircle() {
    let {
      strokeSize: e,
      percent: t,
      colorOverride: n,
      background: r
    } = this.props, o = Math.min(Math.max(exports, 0), 100), a = (d - module) / 2, c = Chunk120356 * Math.PI * 2;
    return <svg viewBox={"0 0 ".concat(d, " ").concat(d)} className={Chunk584209.circle}>{<circle className={Chunk584209.circleBackgroundAlt} cx={d / 2} cy={d / 2} r={d / 2} />}{<circle className={s()(Chunk584209.circleBackground, r)} cx={d / 2} cy={d / 2} r={(d - 2 * module) / 2} />}{<circle className={Chunk584209.circleProgress} cx={d / 2} cy={d / 2} r={Chunk120356} strokeWidth={"".concat(module, "px")} strokeLinecap={"round"} transform={"rotate(-90 ".concat(d / 2, " ").concat(d / 2, ")")} stroke={null != require ? require : "currentColor"} style={{
          strokeDasharray: c,
          strokeDashoffset: (1 - Chunk73800 / 100) * c
        }} />}</svg>
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return <div className={s()(Chunk584209.progressCircle, module)}>{this.renderCircle()}{null != exports ? <div className={Chunk584209.circleOverlay}>{exports}</div> : null}</div>
  }
}
c(f, "StrokeSizes", u), c(f, "defaultProps", {
  strokeSize: u.MEDIUM
})