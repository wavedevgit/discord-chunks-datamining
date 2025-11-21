/** Chunk was on web.js **/
/** chunk id: 610394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eT
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
  D = null,
  w = null,
  L = null,
  x = null,
  M = null,
  k = null,
  j = null,
  U = null,
  G = {},
  B = {},
  Z = {};

function F(e, t) {
  null == Z[e] && (Z[e] = new Set), Z[e].add(t)
}

function V(e) {
  null != Z[e] && (Z[e] = new Set)
}
let H = (0, Chunk575140.r4)();

function Y() {
  H = (0, Chunk575140.r4)()
}

function W(e, t) {
  if (null != D) {
    null != t && (B[e] = t);
    try {
      if (D.trackGame(e), R.has(e)) return;
      R.add(e), (0, _.PY)(e, "maybeTrackGame", {
        newOverlayMethod: null != t ? f.gl[t] : null
      }), o.Z.updateOverlayState(e, f.mM.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame")
    } catch (t) {
      N.error("Error tracking game:", t), (0, _.PV)(e, t, {
        crashType: "renderer"
      })
    }
  }
}

function K(e) {
  if (!R.has(e)) return;
  let t = B[e],
    n = G[e];
  (0, _.PY)(e, "removeTrackedGame", {
    overlayMethod: null != t ? f.gl[t] : null,
    overlayState: n
  }), R.delete(e), delete G[e], delete B[e], P.delete(e);
  try {
    if (null == D) return;
    D.untrackGame(e), N.verbose("Removing tracked game ".concat(e));
    let t = R.values().next().value;
    j === e && (j = null != t ? t : null)
  } catch (t) {
    N.error("Error removing tracked game:", t), (0, _.PV)(e, t, {
      crashType: "native"
    })
  }
}

function z() {
  try {
    for (let e of R) null == D || D.untrackGame(module);
    R.clear(), (0, Chunk932404.bs)(null, "clearTrackedGames"), G = {}, B = {}, P.clear(), N.verbose("Cleared all tracked games")
  } catch (e) {
    N.error("Error clearing tracked games:", module), (0, Chunk932404.PV)(Chunk145597.UNSET_PID, module, {
      crashType: "native"
    })
  }
}
async function q() {
  if (!Chunk509140.Z.isOverlayEnabled) return void z();
  await er();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => l.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...R].filter(t => !e.has(t)))) K(exports);
  for (let e of R) W(module)
}

function X(e) {
  let t = l.ZP.getGameOrTransformedSubgameForPID(e);
  o.Z.setAssociatedGame(null != j ? j : d.UNSET_PID, e, t)
}

function Q() {
  var e;
  null != k && M === k && null != D && (k = null, (0, Chunk932404.PY)(M, "renderer_window_refreshing_finished"), null == (e = D.readyToShow) || module.call(D, M), Chunk13245.Z.updateOverlayState(M, Chunk837268.mM.OVERLAY_RENDERING, "checkPopoutRefresh"), N.verbose("Showing overlay v3 for pid ".concat(M)))
}

function J(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null != e) {
    let t = B[e] === f.gl.OutOfProcessLimitedInteraction;
    if (t !== U) {
      U = t;
      try {
        "function" == typeof(null == D ? true : D.setLimitedInteraction) ? (N.info("Setting limited interaction", t), (0, _.bs)(e, "focus_and_interaction_set", {
          isLimitedInteraction: t,
          focusable: !t
        }), D.setLimitedInteraction(t)) : N.info("No setLimitedInteraction function found, skipping")
      } catch (t) {
        N.error("Error setting limited interaction mode:", t), (0, _.PV)(e, t, {
          crashType: "native"
        })
      }
    }
  }
  o.Z.setFocusedPID(0 === e ? null : e, t, n)
}

function $() {
  J(null, null, true)
}

function ee(e) {
  if (H.allDone) {
    if (!P.has(e)) return void o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
    o.Z.successfullyShown(e)
  }
}

function et(e) {
  let {
    pid: t
  } = e;
  P.add(t), ee(t)
}

function en(e) {
  let {
    initialized: t
  } = e;
  if (H = C(S({}, H), {
      windowHandleSentToNative: t
    }), t) {
    let e = null != x ? x : d.UNSET_PID;
    H.reactInitializationStarted ? o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized") : o.Z.updateOverlayState(e, f.mM.WAITING_FOR_REACT_INITIALIZATION, "handleOverlayV3WindowHandleInitialized"), (0, _.bs)(e, "window_handle_initialized")
  }
}
async function er() {
  Chunk509140.Z.isModuleLoaded || Chunk509140.Z.isModuleLoading || await (0, Chunk932404.Nk)(), D = await (0, Chunk886189.H)()
}
async function ei(e) {
  e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction ? (await er(), W(e.pid, e.overlayMethod)) : K(e.pid), eI.emitChange()
}

function ea() {
  Y(), U = null
}

function eo(e) {
  let {
    createWindowTriggeringPID: t
  } = e;
  H = C(S({}, H), {
    popoutOpened: true
  }), X(t), j = t, x = t, (0, d.setPID)(t)
}

function es(e) {
  let {
    createWindowTriggeringPID: t,
    nativeWindowHandle: n
  } = e;
  o.Z.updateOverlayState(t, f.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess")
}

function el(e) {
  let {
    createWindowTriggeringPID: t,
    error: n,
    nativeWindowHandle: r
  } = e;
  o.Z.updateOverlayState(t, f.mM.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"), H = C(S({}, H), {
    errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n
  }), (0, _.bs)(t, "renderer_window_mounting_failed", {
    error: n,
    popoutInitializationStages: H
  })
}

function ec() {
  $(), null != j && V(j), j = null, x = null, (0, Chunk145597.setPID)(Chunk145597.UNSET_PID), Y()
}

function eu(e) {
  let {
    refreshingPID: t
  } = e;
  return N.verbose("Refreshing OOP host window for pid ".concat(t)), k = t, j = t, x = t, (0, d.setPID)(t), X(t), Q(), true
}

function ed(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  J(t, null != n ? (0, y.rd)(n) : null), t !== w && N.info("OverlayStore: Focused new PID", t)
}

function ef() {
  $()
}

function e_(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (null != n && null != t && F(t, (0, y.rd)(n)), w !== t || L !== n) {
    var r;
    (0, _.bs)(null != (r = null != t ? t : w) ? r : d.UNSET_PID, "overlay_focused", {
      focusedPID: t,
      focusedWindowHandle: L,
      windowHandle: n
    })
  }
  return w = t, L = n, true
}

function ep() {
  var e;
  H = C(S({}, H), {
    showInactiveCalled: true
  }), null == D || null == (e = D.onNativePopoutShowInactiveSuccess) || module.call(D)
}

function eh() {
  H = C(S({}, H), {
    allDone: true
  }), R.forEach(e => {
    ee(e)
  })
}

function em(e) {
  let {
    update: t
  } = e;
  H = S({}, H, t)
}

function eg(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (M = t, Q(), null != n && null != t && F(t, (0, y.rd)(n)), null != n && null != D) {
    var r;
    null == (r = D.setRenderingWindowHandle) || r.call(D, (0, y.rd)(n), t)
  }
}

function eE(e) {
  N.verbose("Updating OverlayMethod", e), ei(e)
}

function eb(e) {
  G[e.pid] = e.overlayState
}

function ey() {
  D = Chunk509140.Z.getNativeModule(), q()
}

function eO() {
  D = null
}
class ev extends(r = Chunk442837.ZP.Store) {
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
    return Chunk987650.y3 && (x === Chunk145597.UNSET_PID || null == x) ? Chunk145597.DEV_PID : null != x ? x : Chunk145597.UNSET_PID
  }
  getFocusedPID() {
    return w
  }
  getFocusedWindowHandle() {
    return L
  }
  getKnownWindowHandlesForPID(e) {
    return null == Z[e] ? null : Z[e]
  }
  isFocused(e) {
    return null != w && e !== d.UNSET_PID && (!!R.has(e) || e === d.DEV_PID) && w === e
  }
  getFocusedRunningGame() {
    var e;
    return null == w ? null : null != (e = Chunk594190.ZP.getGameOrTransformedSubgameForPID(w)) ? module : null
  }
  getPopoutInitializationStages() {
    return H
  }
  isWindowHandleInitialized() {
    return H.windowHandleSentToNative
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
T(ev, "displayName", "Overlay-V3-Store");
let eI = new ev(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {
    OVERLAY_FOCUSED: e_
  } : {
    OVERLAY_UPDATE_OVERLAY_METHOD: eE,
    OVERLAY_UPDATE_OVERLAY_STATE: eb,
    OVERLAY_FOCUSED: e_,
    OVERLAY_OOP_UI_INITIALIZED: eh,
    OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ep,
    OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: em,
    OVERLAY_UI_FOCUSED_PID: eg,
    OVERLAY_V3_PRE_CREATE_POPOUT: ea,
    OVERLAY_V3_POST_CREATE_POPOUT: eo,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: es,
    OVERLAY_V3_WINDOW_CREATION_FAILURE: el,
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: ey,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eO,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: eu,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: ec,
    OVERLAY_V3_NATIVE_FOCUS_GAINED: ed,
    OVERLAY_V3_NATIVE_FOCUS_LOST: ef,
    OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: et,
    OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: en
  }),
  eT = eI