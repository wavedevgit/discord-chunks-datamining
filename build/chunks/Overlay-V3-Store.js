/** Chunk was on web.js **/
/** chunk id: 610394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eO
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
  U = null,
  G = {},
  B = {},
  Z = (0, Chunk575140.r4)();

function F() {
  Z = (0, Chunk575140.r4)()
}

function V(e, t) {
  if (null != w && (null != t && (B[e] = t), !R.has(e))) try {
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
  if (!R.has(e)) return;
  let t = B[e],
    n = G[e];
  (0, _.PY)(e, "removeTrackedGame", {
    overlayMethod: null != t ? f.gl[t] : null,
    overlayState: n
  }), R.delete(e), delete G[e], delete B[e], P.delete(e);
  try {
    if (null == w) return;
    w.untrackGame(e), N.verbose("Removing tracked game ".concat(e));
    let t = R.values().next().value;
    k === e && (k = null != t ? t : null)
  } catch (t) {
    N.error("Error removing tracked game:", t), (0, _.PV)(e, t, {
      crashType: "native"
    })
  }
}

function Y() {
  try {
    for (let e of R) null == w || w.untrackGame(module);
    R.clear(), (0, Chunk932404.bs)(null, "clearTrackedGames"), G = {}, B = {}, P.clear(), N.verbose("Cleared all tracked games")
  } catch (e) {
    N.error("Error clearing tracked games:", module), (0, Chunk932404.PV)(Chunk145597.UNSET_PID, module, {
      crashType: "native"
    })
  }
}
async function W() {
  if (!Chunk509140.Z.isOverlayEnabled) return void Y();
  await ee();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => l.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...R].filter(t => !e.has(t)))) H(exports);
  for (let e of R) V(module)
}

function K(e) {
  let t = l.ZP.getGameOrTransformedSubgameForPID(e);
  o.Z.setAssociatedGame(null != k ? k : d.UNSET_PID, e, t)
}

function z() {
  var e;
  null != j && M === j && null != w && (j = null, (0, Chunk932404.PY)(M, "renderer_window_refreshing_finished"), null == (e = w.readyToShow) || module.call(w, M), Chunk13245.Z.updateOverlayState(M, Chunk837268.mM.OVERLAY_RENDERING), N.verbose("Showing overlay v3 for pid ".concat(M)))
}

function q(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null != e) {
    let t = B[e] === f.gl.OutOfProcessLimitedInteraction;
    if (t !== U) {
      U = t;
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
  o.Z.setFocusedPID(0 === e ? null : e, t, n)
}

function X() {
  q(null, null, true)
}

function Q(e) {
  P.has(e) && Z.allDone && o.Z.successfullyShown(e)
}

function J(e) {
  let {
    pid: t
  } = e;
  P.add(t), Q(t)
}

function $(e) {
  let {
    initialized: t
  } = e;
  if (Z = C(S({}, Z), {
      windowHandleSentToNative: t
    }), t) {
    let e = null != L ? L : d.UNSET_PID;
    o.Z.updateOverlayState(e, f.mM.WAITING_FOR_REACT_INITIALIZATION), (0, _.bs)(e, "window_handle_initialized")
  }
}
async function ee() {
  Chunk509140.Z.isModuleLoaded || Chunk509140.Z.isModuleLoading || await (0, Chunk932404.Nk)(), w = await (0, Chunk886189.H)()
}
async function et(e) {
  e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction ? (await ee(), V(e.pid, e.overlayMethod)) : H(e.pid), ey.emitChange()
}

function en() {
  F(), U = null
}

function er(e) {
  let {
    createWindowTriggeringPID: t
  } = e;
  Z = C(S({}, Z), {
    popoutOpened: true
  }), K(t), k = t, L = t, (0, d.setPID)(t)
}

function ei(e) {
  let {
    createWindowTriggeringPID: t,
    nativeWindowHandle: n
  } = e;
  o.Z.updateOverlayState(t, f.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE)
}

function ea(e) {
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

function eo() {
  X(), k = null, L = null, (0, Chunk145597.setPID)(Chunk145597.UNSET_PID), F()
}

function es(e) {
  let {
    refreshingPID: t
  } = e;
  return N.verbose("Refreshing OOP host window for pid ".concat(t)), j = t, k = t, L = t, (0, d.setPID)(t), K(t), z(), true
}

function el(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  q(t, null != n ? (0, y.rd)(n) : null), t !== D && N.info("OverlayStore: Focused new PID", t)
}

function ec() {
  X()
}

function eu(e) {
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

function ed() {
  var e;
  Z = C(S({}, Z), {
    showInactiveCalled: true
  }), null == w || null == (e = w.onNativePopoutShowInactiveSuccess) || module.call(w)
}

function ef() {
  Z = C(S({}, Z), {
    allDone: true
  }), P.forEach(e => {
    Q(e)
  })
}

function e_(e) {
  let {
    update: t
  } = e;
  Z = S({}, Z, t)
}

function ep(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (M = t, z(), null != n && null != w) {
    var r;
    null == (r = w.setRenderingWindowHandle) || r.call(w, (0, y.rd)(n), t)
  }
}

function eh(e) {
  N.verbose("Updating OverlayMethod", e), et(e)
}

function em(e) {
  G[e.pid] = e.overlayState
}

function eg() {
  w = Chunk509140.Z.getNativeModule(), W()
}

function eE() {
  w = null
}
class eb extends(r = Chunk442837.ZP.Store) {
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
  getTargetPID() {
    return null != L ? L : Chunk145597.UNSET_PID
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
    return !!R.has(e) && G[e] === f.mM.OVERLAY_RENDERING
  }
  getOverlayState(e) {
    var t;
    return null != (t = G[e]) ? t : null
  }
  getIsOverlayPreShown(e) {
    let t = G[e];
    return null != t && y.FX.has(t)
  }
  getOverlayMethod(e) {
    var t;
    return null != (t = B[e]) ? t : null
  }
}
T(eb, "displayName", "Overlay-V3-Store");
let ey = new eb(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    OVERLAY_UPDATE_OVERLAY_METHOD: eh,
    OVERLAY_UPDATE_OVERLAY_STATE: em,
    OVERLAY_FOCUSED: eu,
    OVERLAY_OOP_UI_INITIALIZED: ef,
    OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ed,
    OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: e_,
    OVERLAY_UI_FOCUSED_PID: ep,
    OVERLAY_V3_PRE_CREATE_POPOUT: en,
    OVERLAY_V3_POST_CREATE_POPOUT: er,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: ei,
    OVERLAY_V3_WINDOW_CREATION_FAILURE: ea,
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eg,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eE,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: es,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: eo,
    OVERLAY_V3_NATIVE_FOCUS_GAINED: el,
    OVERLAY_V3_NATIVE_FOCUS_LOST: ec,
    OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: J,
    OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: $
  }),
  eO = ey