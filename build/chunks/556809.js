/** Chunk was on web.js **/
/** chunk id: 556809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk522474 = require("./522474.js"),
  Chunk451478 = require("./451478.js"),
  Chunk830917 = require("./830917.js"),
  Chunk338388 = require("./338388.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk501787 = require("./501787.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Chunk710845.Z("OverlayWindowRAFManager"),
  h = window.requestAnimationFrame.bind(window),
  g = new Set([Chunk837268.gl.OutOfProcess, Chunk837268.gl.OutOfProcessLimitedInteraction]),
  E = new Set([Chunk837268.mM.OVERLAY_CRASHED, Chunk837268.mM.OVERLAY_CRASHED_DISABLED]);

function b(e) {
  for (let t of Object.values(d.default.getTrackedGames()))
    if (!(!g.has(t.overlayMethod) || E.has(t.state)) && (!e || t.state === c.mM.OVERLAY_RENDERING)) returntrue;
  returnfalse
}
let y = null,
  O = false,
  v = false,
  S = {},
  I = (e, t) => {
    S[e] = t
  },
  T = e => {
    delete S[e]
  },
  C = () => {
    S = {}
  },
  A = () => Object.entries(S).map(e => {
    let [t, n] = e;
    return {
      timeoutId: Number(t),
      callback: n
    }
  }),
  N = e => {
    try {
      let t = a.Z.getWindow(p.$J);
      if (null == t || "function" != typeof t.requestAnimationFrame) return y = "OverlayNotAvailable", h(e);
      if (!v) return y = "MainWindowFocused", h(e);
      if (!b(true)) return y = "NoOverlayRendering", h(e);
      let n = null !== f.Z.getFocusedRunningGame(),
        r = o.Z.isFocused((0, s.ZY)(t));
      if (o.Z.isFocused() && m.error("Main window is reported as focused when it should not be!"), n || r) {
        y = n ? "OverlayGameFocused" : "OverlayWindowFocused";
        let r = t.requestAnimationFrame(t => {
          T(r), e(t)
        });
        return I(r, e), r
      }
    } catch (e) {
      m.error("RAF redirect failed, falling back to original. Cause:", e), (0, l.D1)(e, d.default.getOverlayMethod(f.Z.getTargetPID()))
    }
    return y = "None", h(e)
  };

function P() {
  return !Chunk451478.Z.isFocused() || !Chunk451478.Z.isVisible()
}

function R() {
  let e = Chunk522474.Z.getWindow(Chunk501787.$J),
    t = null != module && "function" == typeof module.cancelAnimationFrame;
  A().forEach(n => {
    let {
      timeoutId: r,
      callback: i
    } = n;
    t && e.cancelAnimationFrame(r), h(i)
  }), C()
}

function w(e) {
  if (e === v) return;
  let t = !e && v;
  v = e, t && R()
}
class D extends Chunk147913.Z {
  _initialize() {
    w(P())
  }
  _terminate() {
    window.requestAnimationFrame = h
  }
  getLastRAFCallbackReason() {
    return y
  }
  handleUpdateOverlayMethod() {
    let {
      enabled: e
    } = (0, Chunk32300.td)("OverlayWindowRAFManager");
    if (!(!module || __OVERLAY__)) {
      if (!O && !b(false)) {
        window.requestAnimationFrame = h, y = "NoOverlayRendering", R();
        return
      }
      m.info("Patching window RAF to use overlay window"), window.requestAnimationFrame = N
    }
  }
  handleWindowStateChage() {
    w(P())
  }
  handleOverlayRenderDebugMode(e) {
    let {
      enabled: t,
      mode: n
    } = e;
    n === c.GO.OverlayRafManagerForceEnabled && (O = t, t ? window.requestAnimationFrame = N : v || (window.requestAnimationFrame = h, R()))
  }
  constructor(...e) {
    super(...e), _(this, "actions", {
      OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
      WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
      WINDOW_FOCUS: this.handleWindowStateChage,
      OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode
    })
  }
}
let x = new D