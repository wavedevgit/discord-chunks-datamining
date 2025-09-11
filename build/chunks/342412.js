/** Chunk was on 79072 **/
/** chunk id: 342412, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk684827 = require("./684827.js"),
  Chunk898625 = require("./898625.js");

function a(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let h = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"],
  r = class {
    checkBounds() {
      this.x > this.offscreenX ? this.x = -this.size : this.y > this.offscreenY ? this.y = -this.size : this.x < -this.size ? this.x = this.offscreenX : this.y < -this.size && (this.y = this.offscreenY)
    }
    update(t, e) {
      this.checkBounds(), this.y += e * this.positionMultiplier, this.x += t * this.positionMultiplier
    }
    render(t, e) {
      t.beginPath(), t.globalAlpha = e * this.depth / 4, t.arc(this.x, this.y, this.size, 0, n.uo, true), t.fillStyle = this.color, t.fill(), t.globalAlpha = 1
    }
    constructor() {
      a(this, "size", (0, Chunk684827.M)(2, 3)), a(this, "depth", (0, Chunk684827.M)(1, 4)), a(this, "positionMultiplier", this.depth / 4), a(this, "color", h[4 - this.depth]), a(this, "offscreenX", Chunk898625.pg + this.size), a(this, "offscreenY", Chunk898625.pg + this.size), a(this, "x", (0, Chunk684827.M)(-this.size, this.offscreenX)), a(this, "y", (0, Chunk684827.M)(-this.size, this.offscreenY))
    }
  }