/** Chunk was on 70959 **/
/** chunk id: 787570, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk659694 = require("./659694.js");

function s(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let h = "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
class o {
  setState(t, e) {
    null != e && (t || e === this.currentFrame || this.draw(e), this.currentFrame = e), t && !this.animate && this.resumeAnimation(), this.animate = t, this.scheduleOrCancelTick()
  }
  setVisibility(t) {
    let e = this.visible;
    this.visible = t, this.visible && !e && this.resumeAnimation(), this.scheduleOrCancelTick()
  }
  resumeAnimation() {
    this.currentFrameTime = performance.now()
  }
  clear() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  draw(t) {
    return null != this.animation && (this.clear(), this.animation.drawInto(this.canvasContext, t, this.canvas.width, this.canvas.height), true)
  }
  drop() {
    this.animate = false, this.scheduleOrCancelTick(), a.A.drop(this.key), this.animation = null, this.dropped = true
  }
  scheduleOrCancelTick() {
    this.dropped || (this.hasInitialFrame ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null) : this.requestAnimationFrame(this.onInitialAnimationTick))
  }
  requestAnimationFrame(t) {
    null != t && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(t)), null != t && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = requestAnimationFrame(t)), null == t && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = null)
  }
  constructor({
    canvas: t,
    id: e,
    assetUrl: i,
    assetData: n,
    isVisible: o,
    shouldAnimate: l,
    onInitialDraw: c,
    onError: u
  }) {
    s(this, "canvas", true), s(this, "canvasContext", true), s(this, "animation", null), s(this, "dropped", true), s(this, "currentFrame", true), s(this, "currentFrameTime", true), s(this, "frameDuration", true), s(this, "key", true), s(this, "animate", true), s(this, "visible", true), s(this, "requestAnimationFrameId", true), s(this, "hasInitialFrame", true), s(this, "onInitialDraw", true), s(this, "onError", true), s(this, "onInitialAnimationTick", t => {
      if (this.requestAnimationFrameId = null, (performance.now() - t < 30 || h) && this.draw(0)) {
        var e;
        this.resumeAnimation(), null == (e = this.onInitialDraw) || e.call(this), this.hasInitialFrame = true
      }
      this.scheduleOrCancelTick()
    }), s(this, "onAnimationTick", t => {
      this.requestAnimationFrameId = null;
      let e = performance.now(),
        i = Math.floor(((h ? e : t) - this.currentFrameTime) / this.frameDuration);
      i > 0 && ((e - t < 12 || h) && (this.draw(this.currentFrame), this.currentFrame += i), this.currentFrameTime += i * this.frameDuration), this.scheduleOrCancelTick()
    });
    const m = t.getContext("2d");
    r()(null != m, "couldn't get canvas 2d context."), this.canvas = t, this.canvasContext = m, this.animation = null, this.dropped = false, this.currentFrame = 0, this.currentFrameTime = 0, this.frameDuration = 1e3, this.animate = l, this.visible = o, this.requestAnimationFrameId = null, this.hasInitialFrame = false, this.onInitialDraw = c, this.onError = u, this.key = "".concat(e, ":").concat(t.width, ":").concat(t.height), a.A.create(this.key, t.width, t.height, i, n).then(t => {
      null != t && (this.dropped ? a.A.drop(this.key) : (this.animation = t, this.frameDuration = 1e3 / t.frameRate, this.scheduleOrCancelTick()))
    }).catch(t => {
      null == u || u()
    })
  }
}