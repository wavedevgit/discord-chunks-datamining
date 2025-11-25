/** Chunk was on web.js **/
/** chunk id: 610394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eS
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

function S(e, t, n) {
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
      S(e, t, n[t])
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
let R = new Chunk710845.Z("OverlayV3Store"),
  P = new Set,
  D = new Set,
  w = null,
  L = null,
  x = null,
  M = null,
  k = null,
  j = null,
  U = null,
  G = null,
  B = {},
  Z = {},
  F = {};

function V(e, t) {
  null == F[e] && (F[e] = new Set), F[e].add(t)
}

function H(e) {
  null != F[e] && (F[e] = new Set)
}
let W = (0, Chunk575140.r4)();

function Y() {
  W = (0, Chunk575140.r4)()
}

function K(e, t) {
  if (null != w) {
    null != t && (Z[e] = t);
    try {
      if (w.trackGame(e), P.has(e)) return;
      P.add(e), (0, p.PY)(e, "maybeTrackGame", {
        newOverlayMethod: null != t ? f.gl[t] : null
      }), o.Z.updateOverlayState(e, f.mM.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame")
    } catch (t) {
      R.error("Error tracking game:", t), (0, p.PV)(e, t, {
        crashType: "renderer"
      })
    }
  }
}

function z(e) {
  if (!P.has(e)) return;
  let t = Z[e],
    n = B[e];
  (0, p.PY)(e, "removeTrackedGame", {
    overlayMethod: null != t ? f.gl[t] : null,
    overlayState: n
  }), P.delete(e), delete B[e], delete Z[e], D.delete(e);
  try {
    if (null == w) return;
    w.untrackGame(e), R.verbose("Removing tracked game ".concat(e));
    let t = P.values().next().value;
    U === e && (U = null != t ? t : null)
  } catch (t) {
    R.error("Error removing tracked game:", t), (0, p.PV)(e, t, {
      crashType: "native"
    })
  }
}

function q() {
  try {
    for (let e of P) null == w || w.untrackGame(module);
    P.clear(), (0, Chunk932404.bs)(null, "clearTrackedGames"), B = {}, Z = {}, D.clear(), R.verbose("Cleared all tracked games")
  } catch (e) {
    R.error("Error clearing tracked games:", module), (0, Chunk932404.PV)(Chunk145597.UNSET_PID, module, {
      crashType: "native"
    })
  }
}
async function X() {
  if (!Chunk509140.Z.isOverlayEnabled) return void q();
  await ei();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => l.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...P].filter(t => !e.has(t)))) z(exports);
  for (let e of P) K(module)
}

function Q(e) {
  let t = l.ZP.getGameOrTransformedSubgameForPID(e);
  o.Z.setAssociatedGame(null != U ? U : d.UNSET_PID, e, t)
}

function J() {
  var e;
  null != j && k === j && null != w && (j = null, (0, Chunk932404.PY)(k, "renderer_window_refreshing_finished"), null == (e = w.readyToShow) || module.call(w, k), Chunk13245.Z.updateOverlayState(k, Chunk837268.mM.OVERLAY_RENDERING, "checkPopoutRefresh"), R.verbose("Showing overlay v3 for pid ".concat(k)))
}

function $(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null != e) {
    let t = Z[e] === f.gl.OutOfProcessLimitedInteraction;
    if (t !== G) {
      G = t;
      try {
        "function" == typeof(null == w ? true : w.setLimitedInteraction) ? (R.info("Setting limited interaction", t), (0, p.bs)(e, "focus_and_interaction_set", {
          isLimitedInteraction: t,
          focusable: !t
        }), w.setLimitedInteraction(t)) : R.info("No setLimitedInteraction function found, skipping")
      } catch (t) {
        R.error("Error setting limited interaction mode:", t), (0, p.PV)(e, t, {
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
  if (W.allDone) {
    if (!D.has(e)) return void o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
    o.Z.successfullyShown(e)
  }
}

function en(e) {
  let {
    pid: t
  } = e;
  D.add(t), et(t)
}

function er(e) {
  let {
    initialized: t
  } = e;
  if (W = N(A({}, W), {
      windowHandleSentToNative: t
    }), t) {
    let e = null != M ? M : d.UNSET_PID;
    W.reactInitializationStarted ? o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized") : o.Z.updateOverlayState(e, f.mM.WAITING_FOR_REACT_INITIALIZATION, "handleOverlayV3WindowHandleInitialized"), (0, p.bs)(e, "window_handle_initialized")
  }
}
async function ei() {
  Chunk509140.Z.isModuleLoaded || Chunk509140.Z.isModuleLoading || await (0, Chunk932404.Nk)(), w = await (0, Chunk886189.H)()
}
async function ea(e) {
  e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction ? (await ei(), K(e.pid, e.overlayMethod)) : z(e.pid), eT.emitChange()
}

function eo() {
  Y(), G = null
}

function es(e) {
  let {
    createWindowTriggeringPID: t
  } = e;
  W = N(A({}, W), {
    popoutOpened: true
  }), Q(t), U = t, M = t, (0, d.setPID)(t)
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
  o.Z.updateOverlayState(t, f.mM.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"), W = N(A({}, W), {
    errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n
  }), (0, p.bs)(t, "renderer_window_mounting_failed", {
    error: n,
    popoutInitializationStages: W
  })
}

function eu() {
  ee(), null != U && H(U), U = null, M = null, (0, Chunk145597.setPID)(Chunk145597.UNSET_PID), Y()
}

function ed(e) {
  let {
    refreshingPID: t
  } = e;
  return R.verbose("Refreshing OOP host window for pid ".concat(t)), j = t, U = t, M = t, (0, d.setPID)(t), Q(t), J(), true
}

function ef(e) {
  let {
    pid: t,
    windowHandle: n,
    windowClass: r
  } = e;
  if (null != r && _.$.has(r)) return void ee();
  $(t, null != n ? (0, O.rd)(n) : null), t !== L && R.info("OverlayStore: Focused new PID", t)
}

function e_() {
  ee()
}

function ep(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (null != n && null != t && V(t, (0, O.rd)(n)), L !== t || x !== n) {
    var r;
    (0, p.bs)(null != (r = null != t ? t : L) ? r : d.UNSET_PID, "overlay_focused", {
      focusedPID: t,
      focusedWindowHandle: x,
      windowHandle: n
    })
  }
  return L = t, x = n, true
}

function eh() {
  var e;
  W = N(A({}, W), {
    showInactiveCalled: true
  }), null == w || null == (e = w.onNativePopoutShowInactiveSuccess) || module.call(w)
}

function em() {
  W = N(A({}, W), {
    allDone: true
  }), P.forEach(e => {
    et(e)
  })
}

function eg(e) {
  let {
    update: t
  } = e;
  W = A({}, W, t)
}

function eE(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (k = t, J(), null != n && null != t && V(t, (0, O.rd)(n)), null != n && null != w) {
    var r;
    null == (r = w.setRenderingWindowHandle) || r.call(w, (0, O.rd)(n), t)
  }
}

function eb(e) {
  R.verbose("Updating OverlayMethod", e), ea(e)
}

function ey(e) {
  B[e.pid] = e.overlayState
}

function eO() {
  w = Chunk509140.Z.getNativeModule(), X()
}

function ev() {
  w = null
}
class eI extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk355863.Z, Chunk381367.Z, Chunk670785.Z, Chunk76623.Z, Chunk322155.Z, Chunk338949.Z, Chunk509140.Z, Chunk594190.ZP)
  }
  isOverlayV3EnabledForPID(e) {
    return P.has(e)
  }
  getWidgetByType(e) {
    let t = u.Z.getLayout(T.$S);
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
    return Chunk987650.y3 && (M === Chunk145597.UNSET_PID || null == M) ? Chunk145597.DEV_PID : null != M ? M : Chunk145597.UNSET_PID
  }
  getFocusedPID() {
    return L
  }
  getFocusedWindowHandle() {
    return x
  }
  getKnownWindowHandlesForPID(e) {
    return null == F[e] ? null : F[e]
  }
  isFocused(e) {
    return null != L && e !== d.UNSET_PID && (!!P.has(e) || e === d.DEV_PID) && L === e
  }
  getFocusedRunningGame() {
    var e;
    return null == L ? null : null != (e = Chunk594190.ZP.getGameOrTransformedSubgameForPID(L)) ? module : null
  }
  getPopoutInitializationStages() {
    return W
  }
  isWindowHandleInitialized() {
    return W.windowHandleSentToNative
  }
  isReady(e) {
    return !!P.has(e) && B[e] === f.mM.OVERLAY_RENDERING
  }
  getOverlayState(e) {
    var t;
    return null != (t = B[e]) ? t : null
  }
  getIsOverlayPreShown(e) {
    let t = B[e];
    return null != t && O.FX.has(t)
  }
  getOverlayMethod(e) {
    var t;
    return null != (t = Z[e]) ? t : null
  }
}
S(eI, "displayName", "Overlay-V3-Store");
let eT = new eI(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {
    OVERLAY_FOCUSED: ep
  } : {
    OVERLAY_UPDATE_OVERLAY_METHOD: eb,
    OVERLAY_UPDATE_OVERLAY_STATE: ey,
    OVERLAY_FOCUSED: ep,
    OVERLAY_OOP_UI_INITIALIZED: em,
    OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: eh,
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
    OVERLAY_V3_NATIVE_FOCUS_LOST: e_,
    OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: en,
    OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: er
  }),
  eS = eT