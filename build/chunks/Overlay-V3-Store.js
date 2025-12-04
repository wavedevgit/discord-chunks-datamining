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
  Chunk378020 = require("./378020.js"),
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

function A(e) {
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

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = new Chunk710845.Z("OverlayV3Store"),
  R = new Set,
  w = new Set,
  D = null,
  x = null,
  L = null,
  j = null,
  M = null,
  k = null,
  U = null,
  G = null,
  Z = {},
  B = {},
  F = {};

function V(e, t) {
  null == F[e] && (F[e] = new Set), F[e].add(t)
}

function H(e) {
  null != F[e] && (F[e] = new Set)
}
let Y = (0, Chunk575140.r4)();

function W() {
  Y = (0, Chunk575140.r4)()
}

function K(e, t) {
  if (null != D) {
    null != t && (B[e] = t);
    try {
      if (D.trackGame(e), R.has(e)) return;
      R.add(e), (0, _.PY)(e, "maybeTrackGame", {
        newOverlayMethod: null != t ? f.gl[t] : null
      }), o.Z.updateOverlayState(e, f.mM.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame")
    } catch (t) {
      P.error("Error tracking game:", t), (0, _.PV)(e, t, {
        crashType: "renderer"
      })
    }
  }
}

function z(e) {
  if (!R.has(e)) return;
  let t = B[e],
    n = Z[e];
  (0, _.PY)(e, "removeTrackedGame", {
    overlayMethod: null != t ? f.gl[t] : null,
    overlayState: n
  }), R.delete(e), delete Z[e], delete B[e], w.delete(e);
  try {
    if (null == D) return;
    D.untrackGame(e), P.verbose("Removing tracked game ".concat(e));
    let t = R.values().next().value;
    U === e && (U = null != t ? t : null)
  } catch (t) {
    P.error("Error removing tracked game:", t), (0, _.PV)(e, t, {
      crashType: "native"
    })
  }
}

function q() {
  try {
    for (let e of R) null == D || D.untrackGame(module);
    R.clear(), (0, Chunk932404.bs)(null, "clearTrackedGames"), Z = {}, B = {}, w.clear(), P.verbose("Cleared all tracked games")
  } catch (e) {
    P.error("Error clearing tracked games:", module), (0, Chunk932404.PV)(Chunk145597.UNSET_PID, module, {
      crashType: "native"
    })
  }
}
async function Q() {
  if (!Chunk509140.Z.isOverlayEnabled) return void q();
  await ei();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => l.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...R].filter(t => !e.has(t)))) z(exports);
  for (let e of R) K(module)
}

function X(e) {
  let t = l.ZP.getGameOrTransformedSubgameForPID(e);
  o.Z.setAssociatedGame(null != U ? U : d.UNSET_PID, e, t)
}

function J() {
  var e;
  null != k && M === k && null != D && (k = null, (0, Chunk932404.PY)(M, "renderer_window_refreshing_finished"), null == (e = D.readyToShow) || module.call(D, M), Chunk13245.Z.updateOverlayState(M, Chunk837268.mM.OVERLAY_RENDERING, "checkPopoutRefresh"), P.verbose("Showing overlay v3 for pid ".concat(M)))
}

function $(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null != e) {
    let t = B[e] === f.gl.OutOfProcessLimitedInteraction;
    if (t !== G) {
      G = t;
      try {
        "function" == typeof(null == D ? true : D.setLimitedInteraction) ? (P.info("Setting limited interaction", t), (0, _.bs)(e, "focus_and_interaction_set", {
          isLimitedInteraction: t,
          focusable: !t
        }), D.setLimitedInteraction(t)) : P.info("No setLimitedInteraction function found, skipping")
      } catch (t) {
        P.error("Error setting limited interaction mode:", t), (0, _.PV)(e, t, {
          crashType: "native"
        })
      }
    }
  }
  o.Z.setFocusedPID(0 === e ? null : e, t, n)
}

function ee() {
  $(null, null, true)
}

function et(e) {
  if (Y.allDone) {
    if (!w.has(e)) return void o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
    o.Z.successfullyShown(e)
  }
}

function en(e) {
  let {
    pid: t
  } = e;
  w.add(t), et(t)
}

function er(e) {
  let {
    initialized: t
  } = e;
  if (Y = N(A({}, Y), {
      windowHandleSentToNative: t
    }), t) {
    let e = null != j ? j : d.UNSET_PID;
    Y.reactInitializationStarted ? o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized") : o.Z.updateOverlayState(e, f.mM.WAITING_FOR_REACT_INITIALIZATION, "handleOverlayV3WindowHandleInitialized"), (0, _.bs)(e, "window_handle_initialized")
  }
}
async function ei() {
  Chunk509140.Z.isModuleLoaded || Chunk509140.Z.isModuleLoading || await (0, Chunk932404.Nk)(), D = await (0, Chunk886189.H)()
}
async function ea(e) {
  e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction ? (await ei(), K(e.pid, e.overlayMethod)) : z(e.pid), eI.emitChange()
}

function eo() {
  W(), G = null
}

function es(e) {
  let {
    createWindowTriggeringPID: t
  } = e;
  Y = N(A({}, Y), {
    popoutOpened: true
  }), X(t), U = t, j = t, (0, d.setPID)(t)
}

function el(e) {
  let {
    createWindowTriggeringPID: t,
    nativeWindowHandle: n
  } = e;
  o.Z.updateOverlayState(t, f.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess")
}

function ec(e) {
  let {
    createWindowTriggeringPID: t,
    error: n,
    nativeWindowHandle: r
  } = e;
  o.Z.updateOverlayState(t, f.mM.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"), Y = N(A({}, Y), {
    errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n
  }), (0, _.bs)(t, "renderer_window_mounting_failed", {
    error: n,
    popoutInitializationStages: Y
  })
}

function eu() {
  ee(), null != U && H(U), U = null, j = null, (0, Chunk145597.setPID)(Chunk145597.UNSET_PID), W()
}

function ed(e) {
  let {
    refreshingPID: t
  } = e;
  return P.verbose("Refreshing OOP host window for pid ".concat(t)), k = t, U = t, j = t, (0, d.setPID)(t), X(t), J(), true
}

function ef(e) {
  let {
    pid: t,
    windowHandle: n,
    windowClass: r
  } = e;
  if (null != r && p.$.has(r)) return void ee();
  $(t, null != n ? (0, O.rd)(n) : null), t !== x && P.info("OverlayStore: Focused new PID", t)
}

function ep() {
  ee()
}

function e_(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (null != n && null != t && V(t, (0, O.rd)(n)), x !== t || L !== n) {
    var r;
    (0, _.bs)(null != (r = null != t ? t : x) ? r : d.UNSET_PID, "overlay_focused", {
      focusedPID: t,
      focusedWindowHandle: L,
      windowHandle: n
    })
  }
  return x = t, L = n, true
}

function em() {
  var e;
  Y = N(A({}, Y), {
    showInactiveCalled: true
  }), null == D || null == (e = D.onNativePopoutShowInactiveSuccess) || module.call(D)
}

function eh() {
  Y = N(A({}, Y), {
    allDone: true
  }), R.forEach(e => {
    et(e)
  })
}

function eg(e) {
  let {
    update: t
  } = e;
  Y = A({}, Y, t)
}

function eE(e) {
  var t, n;
  let {
    pid: r,
    windowHandle: i
  } = e;
  M = r, J(), null != i && null != r && V(r, (0, O.rd)(i)), null != D && (null != i || (null == (t = D.version) ? true : t.call(D)) > 0) && (null == (n = D.setRenderingWindowHandle) || n.call(D, (0, O.rd)(null != i ? i : "0"), r))
}

function eb(e) {
  P.verbose("Updating OverlayMethod", e), ea(e)
}

function ey(e) {
  Z[e.pid] = e.overlayState
}

function eO() {
  D = Chunk509140.Z.getNativeModule(), Q()
}

function ev() {
  D = null
}
class eS extends(r = Chunk442837.ZP.Store) {
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
    return Chunk987650.y3 && (j === Chunk145597.UNSET_PID || null == j) ? Chunk145597.DEV_PID : null != j ? j : Chunk145597.UNSET_PID
  }
  getFocusedPID() {
    return x
  }
  getFocusedWindowHandle() {
    return L
  }
  getKnownWindowHandlesForPID(e) {
    return null == F[e] ? null : F[e]
  }
  isFocused(e) {
    return null != x && e !== d.UNSET_PID && (!!R.has(e) || e === d.DEV_PID) && x === e
  }
  getFocusedRunningGame() {
    var e;
    return null == x ? null : null != (e = Chunk594190.ZP.getGameOrTransformedSubgameForPID(x)) ? module : null
  }
  getPopoutInitializationStages() {
    return Y
  }
  isWindowHandleInitialized() {
    return Y.windowHandleSentToNative
  }
  isReady(e) {
    return !!R.has(e) && Z[e] === f.mM.OVERLAY_RENDERING
  }
  getOverlayState(e) {
    var t;
    return null != (t = Z[e]) ? t : null
  }
  getIsOverlayPreShown(e) {
    let t = Z[e];
    return null != t && O.FX.has(t)
  }
  getOverlayMethod(e) {
    var t;
    return null != (t = B[e]) ? t : null
  }
}
T(eS, "displayName", "Overlay-V3-Store");
let eI = new eS(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {
    OVERLAY_FOCUSED: e_
  } : {
    OVERLAY_UPDATE_OVERLAY_METHOD: eb,
    OVERLAY_UPDATE_OVERLAY_STATE: ey,
    OVERLAY_FOCUSED: e_,
    OVERLAY_OOP_UI_INITIALIZED: eh,
    OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: em,
    OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: eg,
    OVERLAY_UI_FOCUSED_PID: eE,
    OVERLAY_V3_PRE_CREATE_POPOUT: eo,
    OVERLAY_V3_POST_CREATE_POPOUT: es,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: el,
    OVERLAY_V3_WINDOW_CREATION_FAILURE: ec,
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eO,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: ev,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: ed,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: eu,
    OVERLAY_V3_NATIVE_FOCUS_GAINED: ef,
    OVERLAY_V3_NATIVE_FOCUS_LOST: ep,
    OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: en,
    OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: er
  }),
  eT = eI