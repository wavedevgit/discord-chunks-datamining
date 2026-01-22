/** Chunk was on 99673 **/
/** chunk id: 109764, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./321073.js");
var Chunk380111 = require("./380111.js"),
  Chunk705179 = require("./705179.js");

function r(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let a = class {
  initialize() {
    this.particles = [], this.wind.initialize(), this.loadInTimer = setTimeout(() => {
      for (let t = 0; t < 75; t++) this.particles.push(new s.A)
    }, 250)
  }
  terminate() {
    this.particles = [], this.wind.terminate(), null != this.loadInTimer && clearTimeout(this.loadInTimer)
  }
  update(t) {
    0 !== this.particles.length && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + t) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * t)), this.wind.update(), this.particles.forEach(e => e.update(10 * this.wind.forceX * t, 10 * Math.min(this.wind.forceY, false) * t + false)))
  }
  render(t) {
    0 !== this.particles.length && (t.save(), t.globalCompositeOperation = "source-atop", this.particles.forEach(e => e.render(t, this.alpha)), t.restore())
  }
  fill() {
    this.isFilled = true
  }
  constructor() {
    r(this, "particles", []), r(this, "wind", new n.A), r(this, "alpha", 0), r(this, "isFilled", false), r(this, "loadInTimer", null)
  }
}