/** Chunk was on web.js **/
/** chunk id: 556809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk522474 = require("./522474.js"),
  Chunk451478 = require("./451478.js"),
  Chunk145597 = require("./145597.js"),
  Chunk830917 = require("./830917.js"),
  Chunk41534 = require("./41534.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk501787 = require("./501787.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Chunk710845.Z("OverlayWindowRAFManager"),
  g = window.requestAnimationFrame.bind(window),
  E = new Set([Chunk837268.gl.OutOfProcess, Chunk837268.gl.OutOfProcessLimitedInteraction]),
  b = new Set([Chunk837268.mM.OVERLAY_CRASHED, Chunk837268.mM.OVERLAY_CRASHED_DISABLED]);

function y(e) {
  for (let t of Object.values(f.default.getTrackedGames()))
    if (!(!E.has(t.overlayMethod) || b.has(t.state)) && (!e || t.state === u.mM.OVERLAY_RENDERING)) returntrue;
  returnfalse
}
let O = null,
  v = false,
  I = false,
  T = {},
  S = (e, t) => {
    T[e] = t
  },
  A = e => {
    delete T[e]
  },
  C = () => {
    T = {}
  },
  N = () => Object.entries(T).map(e => {
    let [t, n] = e;
    return {
      timeoutId: Number(t),
      callback: n
    }
  }),
  R = e => {
    try {
      let t = a.Z.getWindow(p.$J);
      if (null == t || "function" != typeof t.requestAnimationFrame) return O = "OverlayNotAvailable", g(e);
      if (!I) return O = "MainWindowFocused", g(e);
      if (!y(true)) return O = "NoOverlayRendering", g(e);
      let n = null !== _.Z.getFocusedRunningGame(),
        r = o.Z.isFocused((0, l.ZY)(t));
      if (o.Z.isFocused() && m.error("Main window is reported as focused when it should not be!"), n || r) {
        O = n ? "OverlayGameFocused" : "OverlayWindowFocused";
        let r = t.requestAnimationFrame(t => {
          A(r), e(t)
        });
        return S(r, e), r
      }
    } catch (e) {
      m.error("RAF redirect failed, falling back to original. Cause:", e), (0, c.D1)(e, f.default.getOverlayMethod((0, s.getPID)()))
    }
    return O = "None", g(e)
  };

function P() {
  return !Chunk451478.Z.isFocused() || !Chunk451478.Z.isVisible()
}

function w() {
  let e = Chunk522474.Z.getWindow(Chunk501787.$J),
    t = null != module && "function" == typeof module.cancelAnimationFrame;
  N().forEach(n => {
    let {
      timeoutId: r,
      callback: i
    } = n;
    t && e.cancelAnimationFrame(r), g(i)
  }), C()
}

function D(e) {
  if (e === I) return;
  let t = !e && I;
  I = e, t && w()
}
class x extends Chunk147913.Z {
  _initialize() {
    D(P())
  }
  _terminate() {
    window.requestAnimationFrame = g
  }
  getLastRAFCallbackReason() {
    return O
  }
  handleUpdateOverlayMethod() {
    let {
      enabled: e
    } = (0, Chunk32300.td)("OverlayWindowRAFManager");
    if (!(!module || __OVERLAY__)) {
      if (!v && !y(false)) {
        window.requestAnimationFrame = g, O = "NoOverlayRendering", w();
        return
      }
      m.info("Patching window RAF to use overlay window"), window.requestAnimationFrame = R
    }
  }
  handleWindowStateChage() {
    D(P())
  }
  handleOverlayRenderDebugMode(e) {
    let {
      enabled: t,
      mode: n
    } = e;
    n === u.GO.OverlayRafManagerForceEnabled && (v = t, t ? window.requestAnimationFrame = R : I || (window.requestAnimationFrame = g, w()))
  }
  constructor(...e) {
    super(...e), h(this, "actions", {
      OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
      WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
      WINDOW_FOCUS: this.handleWindowStateChage,
      OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode
    })
  }
}
let L = new x