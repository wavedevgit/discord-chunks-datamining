/** Chunk was on 12581 **/
/** chunk id: 890056, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk684827 = require("./684827.js"),
  Chunk482682 = require("./482682.js");

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
    this.img = new Image, this.img.onload = () => {
      this.loaded = true
    }, this.img.src = n, this.bind()
  }
  bind() {
    window.addEventListener("mousemove", this.handleMouseMove, false)
  }
  unbind() {
    window.removeEventListener("mousemove", this.handleMouseMove, false)
  }
  terminate() {
    this.img = null, this.loaded = false, this.isFilled = false, this.alpha = 0, this.unbind()
  }
  update(t) {
    this.loaded && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + t) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * t)), this.velX += (0, s.B)(this.targetX, this.x, this.velX, this.spring) * t, this.velY += (0, s.B)(this.targetY, this.y, this.velY, this.spring) * t, this.x += this.velX * t, this.y += this.velY * t)
  }
  render(t) {
    let {
      img: e
    } = this;
    this.loaded && null != e && (t.save(), t.globalCompositeOperation = "source-atop", t.globalAlpha = this.alpha, t.drawImage(e, this.x + 20, this.y + 20), t.restore())
  }
  fill() {
    this.isFilled = true
  }
  constructor() {
    r(this, "img", null), r(this, "loaded", false), r(this, "isFilled", false), r(this, "alpha", 0), r(this, "mx", 0), r(this, "my", 0), r(this, "x", 0), r(this, "y", 0), r(this, "velX", 0), r(this, "velY", 0), r(this, "targetX", 40), r(this, "targetY", 40), r(this, "spring", {
      friction: 60,
      tension: 100
    }), r(this, "handleMouseMove", t => {
      let {
        clientX: e,
        clientY: i
      } = t;
      this.targetX = e / window.innerWidth * 20 + 20, this.targetY = i / window.innerWidth * 20 + 20
    })
  }
}