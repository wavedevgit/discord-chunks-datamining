/** Chunk was on 9330 **/
/** chunk id: 140521, original params: i,t,e (module,exports,require) **/
let s;
require.d(exports, {
  default: () => w
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./321073.js"), require("./65821.js");
var Chunk835245 = require("./835245.js"),
  Chunk872379 = require("./872379.js"),
  Chunk795521 = require("./795521.js");

function l(i, t, e) {
  return t in i ? Object.defineProperty(i, t, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : i[t] = e, i
}
let h = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
  o = "u" > typeof OffscreenCanvas,
  d = [],
  u = new Map,
  v = new Map,
  c = (0, Chunk795521.u)(async () => {
    for (let i = 0; i < h; i++) {
      let i = new Worker(new URL("/assets/" + e.u("35343"), e.b));
      d.push({
        worker: i,
        numActive: 0
      })
    }
  }),
  I = (0, Chunk795521.u)(async () => {
    s = (await e.e("70959").then(e.bind(e, 787570))).default
  });
o ? c() : I();
class w {
  get workerIndex() {
    let i = u.get(this.canvasId);
    if (null == i) {
      let s = v.get(this.assetUrl);
      if (null != s) i = s;
      else {
        var t, e;
        let s = null != (t = null == (e = d[0]) ? true : e.numActive) ? t : 0;
        for (let [t, e] of d.entries()) e.numActive <= s && (s = e.numActive, i = t);
        v.set(this.assetUrl, i)
      }
      u.set(this.canvasId, i), d[i].numActive++
    }
    return i
  }
  get worker() {
    let i = this.workerIndex;
    if (null == d[i]) throw Error("No worker in pool at index ".concat(i));
    return d[i].worker
  }
  async drop() {
    var i, t, e, s;
    if (await this.initializationPromise, o) {
      null == (i = this.worker) || i.removeEventListener("message", this.handleMessage), null == (t = this.worker) || t.removeEventListener("error", this.handleError), null == (e = this.worker) || e.postMessage({
        canvasId: this.canvasId,
        type: a.l.DROP
      });
      let s = u.get(this.canvasId);
      if (null == s) throw Error("No worker index assigned for asset ".concat(this.canvasId));
      u.delete(this.canvasId), d[s].numActive--
    } else null == (s = this.lottieView) || s.drop();
    this.observer.disconnect()
  }
  setState(i, t) {
    var e, s;
    this.shouldAnimate = i, this.isInitialized && (o ? null == (e = this.worker) || e.postMessage({
      canvasId: this.canvasId,
      type: a.l.STATE_CHANGE,
      shouldAnimate: i,
      nextFrame: t
    }) : null == (s = this.lottieView) || s.setState(i, t))
  }
  constructor({
    canvas: i,
    animationId: t,
    assetUrl: e,
    assetData: r,
    onInitialDraw: h,
    onError: d
  }) {
    l(this, "assetUrl", true), l(this, "assetData", true), l(this, "canvasId", true), l(this, "lottieView", true), l(this, "observer", true), l(this, "isVisible", false), l(this, "isInitialized", false), l(this, "initializationPromise", true), l(this, "shouldAnimate", false), l(this, "onInitialDraw", true), l(this, "onError", true), l(this, "handleVisibilityChange", i => {
      let t = i[i.length - 1].isIntersecting;
      if (t !== this.isVisible) {
        var e, s;
        if (this.isVisible = t, !this.isInitialized) return;
        o ? null == (e = this.worker) || e.postMessage({
          canvasId: this.canvasId,
          type: a.l.VISIBILITY_CHANGE,
          isVisible: t
        }) : null == (s = this.lottieView) || s.setVisibility(t)
      }
    }), l(this, "handleMessage", i => {
      var t, e;
      i.data.type === a.l.FIRST_DRAW && (null == (t = this.onInitialDraw) || t.call(this)), i.data.type === a.l.ERROR && (null == (e = this.onError) || e.call(this))
    }), l(this, "handleError", i => {
      var t;
      null == (t = this.onError) || t.call(this, i)
    }), this.canvasId = (0, n.A)(), this.assetUrl = e, this.assetData = r, this.onInitialDraw = h, this.onError = d, this.observer = new IntersectionObserver(this.handleVisibilityChange), this.observer.observe(i), o ? this.initializationPromise = c().then(() => {
      var s, n, l;
      null == (s = this.worker) || s.addEventListener("message", this.handleMessage), null == (n = this.worker) || n.addEventListener("error", this.handleError);
      let h = i.transferControlToOffscreen();
      null == (l = this.worker) || l.postMessage({
        type: a.l.INITIALIZE,
        animationId: t,
        assetUrl: e,
        assetData: r,
        canvas: h,
        canvasId: this.canvasId,
        isVisible: this.isVisible,
        shouldAnimate: this.shouldAnimate
      }, [h]), this.isInitialized = true
    }) : this.initializationPromise = I().then(() => {
      this.lottieView = new s({
        canvas: i,
        id: t,
        assetUrl: e,
        assetData: r,
        isVisible: this.isVisible,
        shouldAnimate: this.shouldAnimate,
        onInitialDraw: h,
        onError: d
      }), this.isInitialized = true
    })
  }
}