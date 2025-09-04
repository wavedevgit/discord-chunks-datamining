/** Chunk was on web.js **/
/** chunk id: 556809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
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
  E = null,
  b = false,
  y = false,
  O = {},
  v = (e, t) => {
    O[e] = t
  },
  I = e => {
    delete O[e]
  },
  T = () => {
    O = {}
  },
  S = () => Object.entries(O).map(e => {
    let [t, n] = e;
    return {
      timeoutId: Number(t),
      callback: n
    }
  }),
  A = e => {
    try {
      let t = a.Z.getWindow(p.$J);
      if (null == t || "function" != typeof t.requestAnimationFrame) return E = "OverlayNotAvailable", g(e);
      if (!y) return E = "MainWindowFocused", g(e);
      if (!f.default.isAnyOverlayRendering()) return E = "NoOverlayRendering", g(e);
      let n = null !== _.ZP.getFocusedRunningGame(),
        r = o.Z.isFocused((0, l.ZY)(t));
      if (o.Z.isFocused() && m.error("Main window is reported as focused when it should not be!"), n || r) {
        E = n ? "OverlayGameFocused" : "OverlayWindowFocused";
        let r = t.requestAnimationFrame(t => {
          I(r), e(t)
        });
        return v(r, e), r
      }
    } catch (e) {
      m.error("RAF redirect failed, falling back to original", e), (0, c.D1)(e, _.ZP.getOverlayMethod((0, s.getPID)()))
    }
    return E = "None", g(e)
  };

function C() {
  return !Chunk451478.Z.isFocused() || !Chunk451478.Z.isVisible()
}

function N() {
  let e = Chunk522474.Z.getWindow(Chunk501787.$J),
    t = null != module && "function" == typeof module.cancelAnimationFrame;
  S().forEach(n => {
    let {
      timeoutId: r,
      callback: i
    } = n;
    t && e.cancelAnimationFrame(r), g(i)
  }), T()
}

function R(e) {
  if (e === y) return;
  let t = !e && y;
  y = e, t && N()
}
class P extends Chunk147913.Z {
  _initialize() {
    R(C())
  }
  _terminate() {
    window.requestAnimationFrame = g
  }
  getLastRAFCallbackReason() {
    return E
  }
  handleUpdateOverlayMethod(e) {
    let {
      overlayMethod: t
    } = e, {
      enabled: n
    } = (0, d.td)("OverlayWindowRAFManager");
    if (!(!n || __OVERLAY__)) {
      if (!b && (t === u.gl.Disabled || t === u.gl.Hook)) {
        window.requestAnimationFrame = g, N();
        return
      }
      m.info("Patching window RAF to use overlay window"), window.requestAnimationFrame = A
    }
  }
  handleWindowStateChage() {
    R(C())
  }
  handleOverlayRenderDebugMode(e) {
    let {
      enabled: t,
      mode: n
    } = e;
    n === u.GO.OverlayRafManagerForceEnabled && (b = t, t ? window.requestAnimationFrame = A : y || (window.requestAnimationFrame = g, N()))
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
let w = new P