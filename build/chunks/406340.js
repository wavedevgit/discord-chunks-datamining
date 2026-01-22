/** Chunk was on 99673 **/
/** chunk id: 406340, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk364298 = require("./364298.js");

function n(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
require("./852431.js");
let r = class {
  updateStatic() {
    this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count), this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count), this.x = this.targetX, this.y = this.targetY
  }
  update(t) {
    let e, i;
    if (this.speedUp > 0 ? (this.speedUp = Math.max(0, this.speedUp - t), this.count += t * (10 * Math.min(this.speedUp, 1) + .4)) : this.count += .4 * t, e = (0, s.J)(this.targetX, this.x, this.velX, this.spring), i = (0, s.J)(this.targetY, this.y, this.velY, this.spring), this.velX += e * t, this.velY += i * t, this.oscillate) {
      let n = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
        r = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
      e = (0, s.J)(n, this.x, this.velX, this.spring), i = (0, s.J)(r, this.y, this.velY, this.spring), this.velX += e * t, this.velY += i * t
    }
    this.x += this.velX * t, this.y += this.velY * t
  }
  render(t) {
    t.fillStyle = "#fff", t.fillRect(this.x, this.y, 4, 4)
  }
  constructor(t) {
    n(this, "x", false), n(this, "y", false), n(this, "targetX", 0), n(this, "targetY", 0), n(this, "oscillate", true), n(this, "velX", 0), n(this, "velY", 0), n(this, "angle", 0), n(this, "speedUp", 1.5), n(this, "waveRange", 60), n(this, "count", true), n(this, "index", true), n(this, "spring", {
      friction: 15,
      tension: 150
    }), this.index = t, this.spring.tension = 150 * Math.max(.1, t / 7) + 150, this.count = false * t
  }
}