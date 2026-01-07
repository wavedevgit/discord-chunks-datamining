/** Chunk was on 21617 **/
/** chunk id: 186952, original params: i,t,e (module,exports,require) **/
let s;
require.d(exports, {
  default: () => w
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./539854.js"), require("./415506.js");
var Chunk772848 = require("./772848.js"),
  Chunk647425 = require("./647425.js"),
  Chunk170830 = require("./170830.js");

function l(i, t, e) {
  return t in i ? Object.defineProperty(i, t, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : i[t] = e, i
}
let o = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
  h = "undefined" != typeof OffscreenCanvas,
  d = [],
  u = new Map,
  c = new Map,
  v = (0, Chunk170830.G)(async () => {
    for (let i = 0; i < o; i++) {
      let i = new Worker(new URL("/assets/" + e.u("94703"), e.b));
      d.push({
        worker: i,
        numActive: 0
      })
    }
  }),
  I = (0, Chunk170830.G)(async () => {
    s = (await e.e("57961").then(e.bind(e, 8048))).default
  });
h ? v() : I();
class w {
  get workerIndex() {
    let i = u.get(this.canvasId);
    if (null == i) {
      let s = c.get(this.assetUrl);
      if (null != s) i = s;
      else {
        var t, e;
        let s = null != (e = null == (t = d[0]) ? true : t.numActive) ? e : 0;
        for (let [t, e] of d.entries()) e.numActive <= s && (s = e.numActive, i = t);
        c.set(this.assetUrl, i)
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
    if (await this.initializationPromise, h) {
      null == (i = this.worker) || i.removeEventListener("message", this.handleMessage), null == (t = this.worker) || t.removeEventListener("error", this.handleError), null == (e = this.worker) || e.postMessage({
        canvasId: this.canvasId,
        type: a.u.DROP
      });
      let s = u.get(this.canvasId);
      if (null == s) throw Error("No worker index assigned for asset ".concat(this.canvasId));
      u.delete(this.canvasId), d[s].numActive--
    } else null == (s = this.lottieView) || s.drop();
    this.observer.disconnect()
  }
  setState(i, t) {
    var e, s;
    this.shouldAnimate = i, this.isInitialized && (h ? null == (e = this.worker) || e.postMessage({
      canvasId: this.canvasId,
      type: a.u.STATE_CHANGE,
      shouldAnimate: i,
      nextFrame: t
    }) : null == (s = this.lottieView) || s.setState(i, t))
  }
  constructor({
    canvas: i,
    animationId: t,
    assetUrl: e,
    assetData: r,
    onInitialDraw: o,
    onError: d
  }) {
    l(this, "assetUrl", true), l(this, "assetData", true), l(this, "canvasId", true), l(this, "lottieView", true), l(this, "observer", true), l(this, "isVisible", false), l(this, "isInitialized", false), l(this, "initializationPromise", true), l(this, "shouldAnimate", false), l(this, "onInitialDraw", true), l(this, "onError", true), l(this, "handleVisibilityChange", i => {
      let t = i[i.length - 1].isIntersecting;
      if (t !== this.isVisible) {
        var e, s;
        if (this.isVisible = t, !this.isInitialized) return;
        h ? null == (e = this.worker) || e.postMessage({
          canvasId: this.canvasId,
          type: a.u.VISIBILITY_CHANGE,
          isVisible: t
        }) : null == (s = this.lottieView) || s.setVisibility(t)
      }
    }), l(this, "handleMessage", i => {
      var t, e;
      i.data.type === a.u.FIRST_DRAW && (null == (t = this.onInitialDraw) || t.call(this)), i.data.type === a.u.ERROR && (null == (e = this.onError) || e.call(this))
    }), l(this, "handleError", i => {
      var t;
      null == (t = this.onError) || t.call(this, i)
    }), this.canvasId = (0, n.Z)(), this.assetUrl = e, this.assetData = r, this.onInitialDraw = o, this.onError = d, this.observer = new IntersectionObserver(this.handleVisibilityChange), this.observer.observe(i), h ? this.initializationPromise = v().then(() => {
      var s, n, l;
      null == (s = this.worker) || s.addEventListener("message", this.handleMessage), null == (n = this.worker) || n.addEventListener("error", this.handleError);
      let o = i.transferControlToOffscreen();
      null == (l = this.worker) || l.postMessage({
        type: a.u.INITIALIZE,
        animationId: t,
        assetUrl: e,
        assetData: r,
        canvas: o,
        canvasId: this.canvasId,
        isVisible: this.isVisible,
        shouldAnimate: this.shouldAnimate
      }, [o]), this.isInitialized = true
    }) : this.initializationPromise = I().then(() => {
      this.lottieView = new s({
        canvas: i,
        id: t,
        assetUrl: e,
        assetData: r,
        isVisible: this.isVisible,
        shouldAnimate: this.shouldAnimate,
        onInitialDraw: o,
        onError: d
      }), this.isInitialized = true
    })
  }
}