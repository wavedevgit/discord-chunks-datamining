/** Chunk was on web.js **/
/** chunk id: 610394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eI
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk710845 = require("./710845.js"),
  Chunk594190 = require("./594190.js"),
  Chunk314897 = require("./314897.js"),
  Chunk355863 = require("./355863.js"),
  Chunk145597 = require("./145597.js"),
  Chunk837268 = require("./837268.js"),
  Chunk932404 = require("./932404.js"),
  Chunk381367 = require("./381367.js"),
  Chunk670785 = require("./670785.js"),
  Chunk76623 = require("./76623.js"),
  Chunk322155 = require("./322155.js"),
  Chunk338949 = require("./338949.js"),
  Chunk509140 = require("./509140.js"),
  Chunk575140 = require("./575140.js"),
  Chunk886189 = require("./886189.js"),
  Chunk987650 = require("./987650.js"),
  Chunk757744 = require("./757744.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = new Chunk710845.Z("OverlayV3Store"),
  R = new Set,
  P = new Set,
  w = null,
  D = null,
  x = null,
  L = null,
  M = null,
  j = null,
  k = null,
  U = {},
  G = {},
  B = false,
  Z = (0, Chunk575140.r4)();

function F() {
  Z = (0, Chunk575140.r4)(), ev.emitChange()
}

function V(e, t) {
  try {
    if (null == w || (null != t && (G[e] = t), R.has(e))) return;
    w.trackGame(e), R.add(e), (0, _.PY)(e, "maybeTrackGame", {
      newOverlayMethod: null != t ? f.gl[t] : null
    }), o.Z.updateOverlayState(e, f.mM.WAITING_FOR_POPOUT_OPEN)
  } catch (t) {
    N.error("Error tracking game:", t), (0, _.PV)(e, t, {
      crashType: "renderer"
    })
  }
}

function H(e) {
  let t = G[e],
    n = U[e];
  (0, _.PY)(e, "removeTrackedGame", {
    overlayMethod: null != t ? f.gl[t] : null,
    overlayState: n
  }), R.delete(e), delete U[e], delete G[e], P.delete(e);
  try {
    if (null == w) return;
    w.untrackGame(e), N.verbose("Removing tracked game ".concat(e));
    let t = R.values().next().value;
    j === e && (j = null != t ? t : null)
  } catch (t) {
    N.error("Error removing tracked game:", t), (0, _.PV)(e, t, {
      crashType: "native"
    })
  }
}

function Y() {
  try {
    for (let e of R) null == w || w.untrackGame(module);
    R.clear(), (0, Chunk932404.bs)(null, "clearTrackedGames"), U = {}, G = {}, P.clear(), N.verbose("Cleared all tracked games")
  } catch (e) {
    N.error("Error clearing tracked games:", module), (0, Chunk932404.PV)(Chunk145597.UNSET_PID, module, {
      crashType: "native"
    })
  }
}

function W() {
  if (!Chunk509140.Z.isOverlayEnabled) return void Y();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => l.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...R].filter(t => !e.has(t)))) H(exports);
  for (let e of R) V(module);
  ev.emitChange()
}

function K(e) {
  let t = l.ZP.getGameOrTransformedSubgameForPID(e);
  o.Z.setAssociatedGame(null != j ? j : d.UNSET_PID, e, t)
}

function z() {
  var e;
  null != M && L === M && null != w && (M = null, (0, Chunk932404.PY)(L, "renderer_window_refreshing_finished"), null == (e = w.readyToShow) || module.call(w, L), Chunk13245.Z.updateOverlayState(L, Chunk837268.mM.OVERLAY_RENDERING), N.verbose("Showing overlay v3 for pid ".concat(L)))
}

function q(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null != e) {
    let t = G[e] === f.gl.OutOfProcessLimitedInteraction;
    if (t !== k) {
      k = t;
      try {
        "function" == typeof(null == w ? true : w.setLimitedInteraction) ? (N.info("Setting limited interaction", t), (0, _.bs)(e, "focus_and_interaction_set", {
          isLimitedInteraction: t,
          focusable: !t
        }), w.setLimitedInteraction(t)) : N.info("No setLimitedInteraction function found, skipping")
      } catch (t) {
        N.error("Error setting limited interaction mode:", t), (0, _.PV)(e, t, {
          crashType: "native"
        })
      }
    }
  }
  ev.emitChange(), o.Z.setFocusedPID(0 === e ? null : e, t, n)
}

function X() {
  q(null, null, true), ev.emitChange()
}

function Q(e) {
  P.has(e) && Z.allDone && o.Z.successfullyShown(e)
}

function J(e) {
  P.add(e), Q(e)
}

function $(e) {
  Z = C(S({}, Z), {
    windowHandleSentToNative: e
  }), e && (o.Z.updateOverlayState((0, d.getPID)(), f.mM.WAITING_FOR_REACT_INITIALIZATION), (0, _.bs)((0, d.getPID)(), "window_handle_initialized")), ev.emitChange()
}
async function ee() {
  await (0, Chunk932404.Nk)(), await (0, Chunk886189.H)()
}

function et(e) {
  return null == e || B || (B = true, e.setFocusCallback(ec), e.setFocusLostCallback(eu), e.setSuccessfullyShownCallback(J), e.setOnWindowHandleInitializedCallback($), (0, _.PY)((0, d.getPID)(), "native_module_callbacks_setup"), N.verbose("Native module callbacks setup")), Promise.resolve()
}
async function en(e) {
  e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction ? (null == w && await ee(), V(e.pid, e.overlayMethod)) : H(e.pid), ev.emitChange()
}

function er() {
  F(), k = null
}

function ei(e) {
  let {
    createWindowTriggeringPID: t
  } = e;
  Z = C(S({}, Z), {
    popoutOpened: true
  }), K(t), j = t, (0, d.setPID)(t)
}

function ea(e) {
  let {
    createWindowTriggeringPID: t,
    nativeWindowHandle: n
  } = e;
  o.Z.updateOverlayState(t, f.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE), (null == w ? true : w.setOnWindowHandleInitializedCallback) == null && $(true)
}

function eo(e) {
  let {
    createWindowTriggeringPID: t,
    error: n,
    nativeWindowHandle: r
  } = e;
  o.Z.updateOverlayState(t, f.mM.OVERLAY_CRASHED_DISABLED), Z = C(S({}, Z), {
    errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n
  }), (0, _.bs)(t, "renderer_window_mounting_failed", {
    error: n,
    popoutInitializationStages: Z
  })
}

function es() {
  X(), j = null, (0, Chunk145597.setPID)(null != j ? j : Chunk145597.UNSET_PID), F()
}

function el(e) {
  let {
    refreshingPID: t
  } = e;
  return N.verbose("Refreshing OOP host window for pid ".concat(t)), M = t, j = t, (0, d.setPID)(null != j ? j : d.UNSET_PID), K(t), z(), true
}

function ec(e, t) {
  q(e, null != t ? (0, y.rd)(t) : null), e !== D && N.info("OverlayStore: Focused new PID", e)
}

function eu(e) {
  return X(), true
}

function ed(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (D !== t || x !== n) {
    var r;
    (0, _.bs)(null != (r = null != t ? t : D) ? r : d.UNSET_PID, "overlay_focused", {
      focusedPID: t,
      focusedWindowHandle: x,
      windowHandle: n
    })
  }
  return D = t, x = n, true
}

function ef() {
  var e;
  Z = C(S({}, Z), {
    showInactiveCalled: true
  }), null == w || null == (e = w.onNativePopoutShowInactiveSuccess) || module.call(w)
}

function e_() {
  Z = C(S({}, Z), {
    allDone: true
  }), P.forEach(e => {
    Q(e)
  })
}

function ep(e) {
  let {
    update: t
  } = e;
  Z = S({}, Z, t)
}

function eh(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (L = t, z(), null != n && null != w) {
    var r;
    null == (r = w.setRenderingWindowHandle) || r.call(w, (0, y.rd)(n), t)
  }
}

function em(e) {
  N.verbose("Updating OverlayMethod", e), en(e)
}

function eg(e) {
  U[e.pid] = e.overlayState
}
async function eE() {
  return null != (w = Chunk509140.Z.getNativeModule()) && await et(w), W(), true
}

function eb() {
  return eE(), true
}

function ey() {
  return w = null, true
}
class eO extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk355863.Z, Chunk381367.Z, Chunk670785.Z, Chunk76623.Z, Chunk322155.Z, Chunk338949.Z, Chunk509140.Z, Chunk594190.ZP)
  }
  isOverlayV3EnabledForPID(e) {
    return R.has(e)
  }
  getWidgetByType(e) {
    let t = u.Z.getLayout(I.$S);
    if (null != t) {
      let r = t.widgets.find(t => {
        let n = u.Z.getWidget(t);
        return null != n && n.type === e ? t : null
      });
      if (null != r) {
        var n;
        return null != (n = u.Z.getWidget(r)) ? n : null
      }
    }
    return null
  }
  isPinned(e) {
    let t = this.getWidgetByType(e);
    return null != t && t.pinned
  }
  getFocusedPID() {
    return D
  }
  getFocusedWindowHandle() {
    return x
  }
  isFocused(e) {
    return null != D && e !== d.UNSET_PID && (!!R.has(e) || e === d.DEV_PID) && D === e
  }
  getFocusedRunningGame() {
    var e;
    return null == D ? null : null != (e = Chunk594190.ZP.getGameOrTransformedSubgameForPID(D)) ? module : null
  }
  getPopoutInitializationStages() {
    return Z
  }
  isWindowHandleInitialized() {
    return Z.windowHandleSentToNative
  }
  isReady(e) {
    return !!R.has(e) && U[e] === f.mM.OVERLAY_RENDERING
  }
  getOverlayState(e) {
    var t;
    return null != (t = U[e]) ? t : null
  }
  getIsOverlayPreShown(e) {
    let t = U[e];
    return null != t && y.FX.has(t)
  }
  getOverlayMethod(e) {
    var t;
    return null != (t = G[e]) ? t : null
  }
}
T(eO, "displayName", "Overlay-V3-Store");
let ev = new eO(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    OVERLAY_UPDATE_OVERLAY_METHOD: em,
    OVERLAY_UPDATE_OVERLAY_STATE: eg,
    OVERLAY_FOCUSED: ed,
    OVERLAY_OOP_UI_INITIALIZED: e_,
    OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ef,
    OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: ep,
    OVERLAY_UI_FOCUSED_PID: eh,
    OVERLAY_V3_PRE_CREATE_POPOUT: er,
    OVERLAY_V3_POST_CREATE_POPOUT: ei,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: ea,
    OVERLAY_V3_WINDOW_CREATION_FAILURE: eo,
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eb,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: ey,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: el,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: es
  }),
  eI = ev