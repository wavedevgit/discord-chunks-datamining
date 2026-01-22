/** Chunk was on 99673 **/
/** chunk id: 380111, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk364298 = require("./364298.js"),
  Chunk852431 = require("./852431.js");

function r(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let a = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"],
  h = class {
    checkBounds() {
      this.x > this.offscreenX ? this.x = -this.size : this.y > this.offscreenY ? this.y = -this.size : this.x < -this.size ? this.x = this.offscreenX : this.y < -this.size && (this.y = this.offscreenY)
    }
    update(t, e) {
      this.checkBounds(), this.y += e * this.positionMultiplier, this.x += t * this.positionMultiplier
    }
    render(t, e) {
      t.beginPath(), t.globalAlpha = e * this.depth / 4, t.arc(this.x, this.y, this.size, 0, n.JM, true), t.fillStyle = this.color, t.fill(), t.globalAlpha = 1
    }
    constructor() {
      r(this, "size", (0, s.R)(2, 3)), r(this, "depth", (0, s.R)(1, 4)), r(this, "positionMultiplier", this.depth / 4), r(this, "color", a[4 - this.depth]), r(this, "offscreenX", 1e3 + this.size), r(this, "offscreenY", 1e3 + this.size), r(this, "x", (0, s.R)(-this.size, this.offscreenX)), r(this, "y", (0, s.R)(-this.size, this.offscreenY))
    }
  }