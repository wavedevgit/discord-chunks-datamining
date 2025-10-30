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
  E = [Chunk837268.gl.OutOfProcess, Chunk837268.gl.OutOfProcessLimitedInteraction];

function b() {
  for (let e of Object.values(Chunk371651.default.getTrackedGames()))
    if (E.includes(module.overlayMethod) && module.state === Chunk837268.mM.OVERLAY_RENDERING) returntrue;
  returnfalse
}
let y = null,
  O = false,
  v = false,
  I = {},
  T = (e, t) => {
    I[e] = t
  },
  S = e => {
    delete I[e]
  },
  A = () => {
    I = {}
  },
  C = () => Object.entries(I).map(e => {
    let [t, n] = e;
    return {
      timeoutId: Number(t),
      callback: n
    }
  }),
  N = e => {
    try {
      let t = a.Z.getWindow(p.$J);
      if (null == t || "function" != typeof t.requestAnimationFrame) return y = "OverlayNotAvailable", g(e);
      if (!v) return y = "MainWindowFocused", g(e);
      if (!b()) return y = "NoOverlayRendering", g(e);
      let n = null !== _.Z.getFocusedRunningGame(),
        r = o.Z.isFocused((0, l.ZY)(t));
      if (o.Z.isFocused() && m.error("Main window is reported as focused when it should not be!"), n || r) {
        y = n ? "OverlayGameFocused" : "OverlayWindowFocused";
        let r = t.requestAnimationFrame(t => {
          S(r), e(t)
        });
        return T(r, e), r
      }
    } catch (e) {
      m.error("RAF redirect failed, falling back to original. Cause:", e), (0, c.D1)(e, f.default.getOverlayMethod((0, s.getPID)()))
    }
    return y = "None", g(e)
  };

function R() {
  return !Chunk451478.Z.isFocused() || !Chunk451478.Z.isVisible()
}

function P() {
  let e = Chunk522474.Z.getWindow(Chunk501787.$J),
    t = null != module && "function" == typeof module.cancelAnimationFrame;
  C().forEach(n => {
    let {
      timeoutId: r,
      callback: i
    } = n;
    t && e.cancelAnimationFrame(r), g(i)
  }), A()
}

function w(e) {
  if (e === v) return;
  let t = !e && v;
  v = e, t && P()
}
class D extends Chunk147913.Z {
  _initialize() {
    w(R())
  }
  _terminate() {
    window.requestAnimationFrame = g
  }
  getLastRAFCallbackReason() {
    return y
  }
  handleUpdateOverlayMethod() {
    let {
      enabled: e
    } = (0, Chunk32300.td)("OverlayWindowRAFManager");
    if (!(!module || __OVERLAY__)) {
      if (!O && !b()) {
        window.requestAnimationFrame = g, y = "NoOverlayRendering", P();
        return
      }
      m.info("Patching window RAF to use overlay window"), window.requestAnimationFrame = N
    }
  }
  handleWindowStateChage() {
    w(R())
  }
  handleOverlayRenderDebugMode(e) {
    let {
      enabled: t,
      mode: n
    } = e;
    n === u.GO.OverlayRafManagerForceEnabled && (O = t, t ? window.requestAnimationFrame = N : v || (window.requestAnimationFrame = g, P()))
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
let x = new D