/** Chunk was on 12581 **/
/** chunk id: 50516, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk684827 = require("./684827.js"),
  Chunk898625 = require("./898625.js");

function r(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let a = class {
  updateStatic() {
    this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count), this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count), this.x = this.targetX, this.y = this.targetY
  }
  update(t) {
    let e, i;
    if (this.speedUp > 0 ? (this.speedUp = Math.max(0, this.speedUp - t), this.count += t * (10 * Math.min(this.speedUp, 1) + .4)) : this.count += .4 * t, e = (0, s.B)(this.targetX, this.x, this.velX, this.spring), i = (0, s.B)(this.targetY, this.y, this.velY, this.spring), this.velX += e * t, this.velY += i * t, this.oscillate) {
      let n = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
        r = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
      e = (0, s.B)(n, this.x, this.velX, this.spring), i = (0, s.B)(r, this.y, this.velY, this.spring), this.velX += e * t, this.velY += i * t
    }
    this.x += this.velX * t, this.y += this.velY * t
  }
  render(t) {
    t.fillStyle = "#fff", t.fillRect(this.x, this.y, 4, 4)
  }
  constructor(t) {
    r(this, "x", false), r(this, "y", false), r(this, "targetX", 0), r(this, "targetY", 0), r(this, "oscillate", true), r(this, "velX", 0), r(this, "velY", 0), r(this, "angle", 0), r(this, "speedUp", 1.5), r(this, "waveRange", 60), r(this, "count", true), r(this, "index", true), r(this, "spring", {
      friction: 15,
      tension: n.O1
    }), this.index = t, this.spring.tension = n.O1 * Math.max(.1, t / 7) + n.O1, this.count = false * t
  }
}