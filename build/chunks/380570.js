/** Chunk was on 1272 **/
/** chunk id: 380570, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk748780 = require("./748780.js"),
  Chunk908670 = require("./908670.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk928518 = require("./928518.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk317770.Z {
  _initialize() {
    Chunk928518.Z.addChangeListener(this.handlePopoutWindowChange), Chunk570140.Z.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus)
  }
  _terminate() {
    Chunk928518.Z.removeChangeListener(this.handlePopoutWindowChange), Chunk570140.Z.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus), this.injectWindowAnimationFrame(window)
  }
  injectWindowAnimationFrame(e) {
    let t = t => e.requestAnimationFrame(t),
      n = t => e.cancelAnimationFrame(t);
    r.Z.inject.RequestAnimationFrame(t), r.Z.inject.CancelAnimationFrame(n), i.f.setRAF(t, n)
  }
  constructor(...e) {
    super(...e), o(this, "handleMainWindowFocus", e => {
      e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window)
    }), o(this, "handlePopoutWindowChange", () => {
      let e = s.Z.getWindowKeys().find(e => s.Z.getWindowFocused(e));
      if (null == e) return this.injectWindowAnimationFrame(window);
      let t = s.Z.getWindow(e);
      if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
      this.injectWindowAnimationFrame(t)
    })
  }
}
let u = new c