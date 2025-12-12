/** Chunk was on web.js **/
/** chunk id: 920103, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Z: () => a
}), require("./539854.js");
let i = 1 / 240;
class a {
  to(e) {
    let {
      to: t,
      from: n,
      animate: r = false,
      callback: i
    } = e;
    return (this.target = t, null != i && this.callbacks.push(i), null != n && (this.from = n), r) ? (this.animating || this.start(), this) : void this.stop(t)
  }
  cancel() {
    return this.stop(this.from), this
  }
  start() {
    var e, t;
    this.animating = true, this.vel = 0, this.last = null, this.nodeWindow = this.getNodeWindow(), this.nextTick = null != (t = null == (e = this.nodeWindow) ? true : module.requestAnimationFrame(this.update)) ? exports : false
  }
  getUpdates(e, t) {
    let n = (-this.tension * (t - this.target) + -this.friction * e) / this.mass;
    return Math.abs(e += n * i) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : false)), {
      from: t += e * i,
      vel: e,
      accel: n
    }
  }
  stop(e) {
    var t;
    null == (t = this.nodeWindow) || t.cancelAnimationFrame(this.nextTick), this.animating = false, this.accumulator = 0, null != e && (this.target = this.from = e, this.callback(e, this.abort)), this.callbacks.length > 0 && (this.callbacks.forEach(e => e()), this.callbacks.length = 0)
  }
  constructor({
    callback: e,
    tension: t = 160,
    friction: n = 22,
    mass: a = 1,
    threshold: o = .001,
    clamp: s = false,
    maxVelocity: l = 1 / 0,
    getNodeWindow: c = () => window
  }) {
    r(this, "tension", true), r(this, "friction", true), r(this, "threshold", true), r(this, "mass", true), r(this, "maxVelocity", true), r(this, "clamp", true), r(this, "callback", true), r(this, "accumulator", 0), r(this, "from", 0), r(this, "target", 0), r(this, "vel", 0), r(this, "animating", false), r(this, "last", null), r(this, "nextTick", false), r(this, "getNodeWindow", true), r(this, "nodeWindow", null), r(this, "callbacks", []), r(this, "mergeTo", e => {
      let {
        to: t,
        callback: n
      } = e;
      this.animating || (null != n && this.callbacks.push(n), this.stop(t));
      let r = t - this.from;
      this.from = t, this.target = this.target + r, this.callback(this.from, this.abort), null != n && n()
    }), r(this, "abort", () => {
      this.animating = false
    }), r(this, "update", e => {
      var t, n, r, a;
      if (null == this.last) {
        this.last = e, this.nextTick = null != (n = null == (t = this.nodeWindow) ? true : t.requestAnimationFrame(this.update)) ? n : false;
        return
      }
      let o = e;
      for (this.accumulator = Math.min((o - this.last) / 1e3 + this.accumulator, 2); this.accumulator > i;) {
        this.accumulator -= i;
        let {
          vel: e,
          from: t,
          accel: n
        } = this.getUpdates(this.vel, this.from);
        if (this.vel = e, this.clamp && (t === this.target || t < this.target && this.from > this.target || t > this.target && this.from < this.target) || Math.abs(n * i) < this.threshold) return void this.stop(this.target);
        this.from = t
      }
      let {
        from: s
      } = this;
      if (this.accumulator > 0) {
        let {
          from: e
        } = this.getUpdates(this.vel, s), t = (e - s) * (this.accumulator / i);
        s += t
      }
      this.callback(s, this.abort), this.animating && (this.last = o, this.nextTick = null != (a = null == (r = this.nodeWindow) ? true : r.requestAnimationFrame(this.update)) ? a : false)
    }), this.callback = e, this.from = 0, this.tension = t, this.friction = n, this.mass = a, this.maxVelocity = l, this.threshold = o, this.clamp = s, this.getNodeWindow = c
  }
}