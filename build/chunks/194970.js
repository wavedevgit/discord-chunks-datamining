/** Chunk was on 21738 **/
/** chunk id: 194970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk615300 = require("./615300.js"),
  Chunk365659 = require("./365659.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk869146 = require("./869146.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk272355.A {
  _initialize() {
    s.A.addChangeListener(this.handlePopoutWindowChange), l.h.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus)
  }
  _terminate() {
    s.A.removeChangeListener(this.handlePopoutWindowChange), l.h.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus), this.injectWindowAnimationFrame(window)
  }
  injectWindowAnimationFrame(e) {
    let t = t => e.requestAnimationFrame(t),
      n = t => e.cancelAnimationFrame(t);
    r.A.inject.RequestAnimationFrame(t), r.A.inject.CancelAnimationFrame(n), i.W.setRAF(t, n)
  }
  constructor(...e) {
    super(...e), o(this, "handleMainWindowFocus", e => {
      e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window)
    }), o(this, "handlePopoutWindowChange", () => {
      let e = s.A.getWindowKeys().find(e => s.A.getWindowFocused(e));
      if (null == e) return this.injectWindowAnimationFrame(window);
      let t = s.A.getWindow(e);
      if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
      this.injectWindowAnimationFrame(t)
    })
  }
}
let u = new c