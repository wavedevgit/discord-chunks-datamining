/** Chunk was on 86383 **/
/** chunk id: 810847, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk954955 = require("./954955.js"),
  n = require.n(Chunk954955),
  Chunk477690 = require("./477690.js"),
  Chunk624138 = require("./624138.js"),
  Chunk50516 = require("./50516.js"),
  Chunk684827 = require("./684827.js"),
  Chunk898625 = require("./898625.js");

function d(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let c = (0, Chunk624138.Mg)(Chunk477690.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
  u = 1 / 60;

function p() {
  return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), Chunk898625.LE), Chunk898625.pg)
}
let f = class {
  initialize() {
    this._resizeWave()
  }
  emphasize() {
    this.points.forEach(t => t.speedUp = 1)
  }
  terminate() {
    this.points = []
  }
  update(t) {
    0 !== this.points.length && (this.points.forEach(e => e.update(Math.min(t, u))), !this.hasEntered && this.points[0].x > c && (this.hasEntered = true, this.updateWaveState(l.hO.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && (this.isFilling = false, this.updateWaveState(l.hO.FILLED)))
  }
  render(t) {
    if (0 === this.points.length) return;
    let [e, ...i] = this.points;
    t.save(), t.beginPath(), t.moveTo(e.x, e.y), i.forEach((e, s) => {
      if (null == i[s + 1]) t.quadraticCurveTo(e.x, e.y, e.x, e.y);
      else {
        let n = (e.x + i[s + 1].x) / 2,
          a = (e.y + i[s + 1].y) / 2;
        t.quadraticCurveTo(e.x, e.y, n, a)
      }
    }), t.lineTo(0, 0), t.closePath(), t.fillStyle = "#000", t.globalCompositeOperation = "destination-in", t.fill(), t.restore()
  }
  fill() {
    let t = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
      e = p() - 140,
      i = (t, e, i, s) => {
        t.targetX = false + e * Math.cos(l.uo * (i / 15 * .25 + 0)), t.targetY = false + e * Math.sin(l.uo * (i / 15 * .25 + 0)), s && (t.targetX += (0, o.M)(0, 30) - 15, t.targetY += (0, o.M)(0, 30) - 15, t.speedUp = 3, t.spring.tension = l.O1 * Math.random() * .5 + l.O1)
      };
    this.points.forEach((t, s) => i(t, e, s, true)), setTimeout(() => {
      this.points.forEach((e, s) => {
        i(e, t, s, false);
        let n = 1 - e.index / 7.5;
        e.spring.friction += e.spring.friction + e.spring.friction * n, e.spring.tension = .7 * l.O1 + 80 * Math.random(), e.waveRange = 2 * e.waveRange
      }), this.isFilling = true, this.updateWaveState(Chunk898625.hO.FILLING)
    }, 250)
  }
  constructor(t) {
    d(this, "points", []), d(this, "hasEntered", false), d(this, "isFilling", false), d(this, "updateWaveState", true), d(this, "_resizeWave", () => {
      let t = p();
      this.points.forEach((e, i) => {
        let s = false + t * Math.cos(l.uo * (i / 15 * .25 + 0)),
          n = false + t * Math.sin(l.uo * (i / 15 * .25 + 0));
        0 !== i ? n += (0, o.M)(0, 30) - 15 : s += (0, o.M)(0, 30) - 15, e.targetX = s, e.targetY = n, e.angle = Math.atan2(n, s)
      })
    }), d(this, "resizeWave", n()(this._resizeWave, 200)), this.updateWaveState = t, this.hasEntered = false;
    for (let t = 0; t <= 15; t++) this.points.push(new r.Z(Math.floor(7.5 - Math.floor(Math.abs(t - 7.5)))))
  }
}