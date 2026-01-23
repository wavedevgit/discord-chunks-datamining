/** Chunk was on web.js **/
/** chunk id: 869014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk626584 = require("./626584.js"),
  Chunk87001 = require("./87001.js"),
  Chunk531685 = require("./531685.js"),
  Chunk365971 = require("./365971.js"),
  Chunk777334 = require("./777334.js"),
  Chunk41984 = require("./41984.js"),
  Chunk589051 = require("./589051.js"),
  Chunk833551 = require("./833551.js"),
  Chunk395011 = require("./395011.js"),
  Chunk392164 = require("./392164.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = new Chunk626584.A("OverlayWindowRAFManager"),
  m = window.requestAnimationFrame.bind(window),
  g = new Set([Chunk41984.Ue.OutOfProcess, Chunk41984.Ue.OutOfProcessLimitedInteraction]),
  E = new Set([Chunk41984.AR.OVERLAY_CRASHED, Chunk41984.AR.OVERLAY_CRASHED_DISABLED]);

function y(e) {
  for (let t of Object.values(d.default.getTrackedGames()))
    if (!(!g.has(t.overlayMethod) || E.has(t.state)) && (!e || t.state === c.AR.OVERLAY_RENDERING)) returntrue;
  returnfalse
}
let b = null,
  O = false,
  v = false,
  A = {},
  I = (e, t) => {
    A[e] = t
  },
  S = e => {
    delete A[e]
  },
  T = () => {
    A = {}
  },
  C = () => Object.entries(A).map(e => {
    let [t, n] = e;
    return {
      timeoutId: Number(t),
      callback: n
    }
  }),
  N = e => {
    try {
      let t = a.A.getWindow(p.f);
      if (null == t || "function" != typeof t.requestAnimationFrame) return b = "OverlayNotAvailable", m(e);
      if (!v) return b = "MainWindowFocused", m(e);
      if (!y(true)) return b = "NoOverlayRendering", m(e);
      let n = null !== f.A.getFocusedRunningGame(),
        r = s.A.isFocused((0, o.Q2)(t));
      if (s.A.isFocused() && h.error("Main window is reported as focused when it should not be!"), n || r) {
        b = n ? "OverlayGameFocused" : "OverlayWindowFocused";
        let r = t.requestAnimationFrame(t => {
          S(r), e(t)
        });
        return I(r, e), r
      }
    } catch (e) {
      h.error("RAF redirect failed, falling back to original. Cause:", e), (0, l.pj)(e, d.default.getOverlayMethod(f.A.getTargetPID()))
    }
    return b = "None", m(e)
  };

function R() {
  return !s.A.isFocused() || !s.A.isVisible()
}

function w() {
  let e = a.A.getWindow(p.f),
    t = null != e && "function" == typeof e.cancelAnimationFrame;
  C().forEach(n => {
    let {
      timeoutId: r,
      callback: i
    } = n;
    t && e.cancelAnimationFrame(r), m(i)
  }), T()
}

function P(e) {
  if (e === v) return;
  let t = !e && v;
  v = e, t && w()
}
class D extends Chunk439372.A {
  _initialize() {
    P(R())
  }
  _terminate() {
    window.requestAnimationFrame = m
  }
  getLastRAFCallbackReason() {
    return b
  }
  handleUpdateOverlayMethod() {
    let {
      enabled: e
    } = (0, u.wG)("OverlayWindowRAFManager");
    if (!(!e || __OVERLAY__)) {
      if (!O && !y(false)) {
        window.requestAnimationFrame = m, b = "NoOverlayRendering", w();
        return
      }
      h.info("Patching window RAF to use overlay window"), window.requestAnimationFrame = N
    }
  }
  handleWindowStateChage() {
    P(R())
  }
  handleOverlayRenderDebugMode(e) {
    let {
      enabled: t,
      mode: n
    } = e;
    n === c.x7.OverlayRafManagerForceEnabled && (O = t, t ? window.requestAnimationFrame = N : v || (window.requestAnimationFrame = m, w()))
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