/** Chunk was on 86383 **/
/** chunk id: 890056, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk684827 = require("./684827.js"),
  Chunk482682 = require("./482682.js");

function a(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let h = class {
  initialize() {
    this.img = new Image, this.img.onload = () => {
      this.loaded = true
    }, this.img.src = Chunk482682, this.bind()
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
    a(this, "img", null), a(this, "loaded", false), a(this, "isFilled", false), a(this, "alpha", 0), a(this, "mx", 0), a(this, "my", 0), a(this, "x", 0), a(this, "y", 0), a(this, "velX", 0), a(this, "velY", 0), a(this, "targetX", 40), a(this, "targetY", 40), a(this, "spring", {
      friction: 60,
      tension: 100
    }), a(this, "handleMouseMove", t => {
      let {
        clientX: e,
        clientY: i
      } = t;
      this.targetX = e / window.innerWidth * 20 + 20, this.targetY = i / window.innerWidth * 20 + 20
    })
  }
}