/** Chunk was on web.js **/
/** chunk id: 371651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => ek
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk710845 = require("./710845.js"),
  Chunk353926 = require("./353926.js"),
  Chunk594190 = require("./594190.js"),
  Chunk314897 = require("./314897.js"),
  Chunk77498 = require("./77498.js"),
  Chunk358085 = require("./358085.js"),
  Chunk145597 = require("./145597.js"),
  Chunk427860 = require("./427860.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk542750 = require("./542750.js"),
  Chunk829907 = require("./829907.js"),
  Chunk624864 = require("./624864.js"),
  Chunk987650 = require("./987650.js");

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

function N(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let P = new Chunk710845.Z("OverlayRenderStore"),
  w = Chunk837268.R5.UNSET,
  D = false,
  x = false,
  L = false,
  j = (0, Chunk358085.isWindows)() && Chunk358085.isPlatformEmbedded && !__OVERLAY__,
  M = null,
  k = {},
  U = null,
  G = null,
  B = new Set([Chunk593472.Jx.FULLSCREEN, Chunk593472.Jx.BORDERLESS_FULLSCREEN, Chunk593472.Jx.UNKNOWN, Chunk593472.Jx.MINIMIZED]),
  Z = new Set([Chunk593472.Jx.MINIMIZED, Chunk593472.Jx.UNKNOWN]),
  F = false,
  V = [];

function H(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : m.l6.Info;
  m.JC.addModuleBreadcrumb(t, null != n ? n : {}, m.C7.Renderer, e, r)
}

function Y() {
  return D
}

function W() {
  return x
}

function K() {
  return W() || Y()
}

function z(e) {
  var t;
  return null != (t = k[e]) ? t : null
}

function q() {
  return Object.keys(k).map(Number)
}

function X(e, t) {
  var n;
  let r = null == (n = k[e]) ? true : n.state;
  k = C(S({}, k), {
    [e]: S({}, t)
  }), r !== t.state && s.Z.trackOverlayStateChanged(e, r, t.state)
}

function Q(e) {
  delete k[e]
}

function J(e) {
  return e in k
}

function $(e, t, n) {
  let r = z(e);
  if (null == r) return void P.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
  let i = S({}, r);
  i[t] = n, X(e, i)
}

function ee() {
  return {
    startTrackingTimestamp: Date.now()
  }
}

function et(e, t) {
  let n = z(e);
  if (null == n) return;
  let r = n.timer;
  switch (t) {
    case E.zE.SCREEN_TYPE_RESOLUTION:
      r.screenTypeResolutionTimestamp = Date.now();
      break;
    case E.zE.MODULE_TRACKING:
      r.moduleTrackingTimestamp = Date.now();
      break;
    case E.zE.OVERLAY_RENDERING:
      r.overlayRenderingTimestamp = Date.now()
  }
  $(e, "timer", r), eM.emitChange()
}
async function en(e) {
  var t, n, r, i;
  let a = z(e);
  if (null != a) return a;
  let o = d.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == o) return P.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
  let s = (0, d.b6)(o),
    {
      enabledOOP: l,
      enabledLegacy: c
    } = s,
    u = N(s, ["enabledOOP", "enabledLegacy"]),
    f = _.Z.getGameByName(o.name),
    p = null != (t = await (0, O.hj)(e, 0)) ? t : o.fullscreenType;
  P.verbose("Tracking game ".concat(e, " for overlay"));
  let h = C(S({}, u), {
    pid: e,
    oopEnabled: l,
    legacyEnabled: c,
    applicationId: null != (n = null == f ? true : f.id) ? n : null,
    gameName: null != (r = o.name) ? r : null,
    state: E.mM.INITIALIZING,
    timer: ee(),
    fullscreenType: p,
    previousFullscreenType: o.fullscreenType,
    hasChangedRenderMode: false,
    supportsOutOfProcess: null == (i = null == f ? true : f.supportsOutOfProcessOverlay) || i,
    successfullyShown: false
  });
  return X(e, h), eM.emitChange(), h
}

function er(e, t) {
  var n, r;
  switch (w) {
    case E.R5.UNSET:
      break;
    case E.R5.IN_PROCESS_V2:
      return {
        source: E.d0.DEV_OVERRIDE, enabledOOP: false, enabledLegacy: true, overlayMethod: E.gl.Hook
      };
    case E.R5.OUT_OF_PROCESS_V3:
      return {
        source: E.d0.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: E.gl.OutOfProcess
      };
    case E.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
      return {
        source: E.d0.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: E.gl.OutOfProcessLimitedInteraction
      }
  }
  if (!K()) return {
    source: E.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.gl.Disabled
  };
  let i = d.ZP.getGameOrTransformedSubgameForPID(e.pid);
  if (null == i) return {
    source: E.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.gl.Disabled
  };
  let a = (0, d.b6)(i);
  if (!(a.enabledLegacy || a.enabledOOP)) return {
    source: a.source,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.gl.Disabled
  };
  if (!(e.oopEnabled || e.legacyEnabled)) return {
    source: E.d0.USER_OVERRIDE,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.gl.Disabled
  };
  if (!(0, b.NW)("determineOverlayMethod", false)) {
    let e = (0, O.qT)(i),
      t = e.enabledLegacy && Y();
    return C(S({}, e), {
      overlayMethod: t ? e.overlayMethod : E.gl.Disabled
    })
  }
  if (!W() && Y()) {
    let e = (0, O.qT)(i);
    return C(S({}, e), {
      overlayMethod: e.enabledLegacy ? e.overlayMethod : E.gl.Disabled
    })
  }
  if (!(0, h.supportsOutOfProcess)()) return C(S({}, (0, O.qT)(i)), {
    source: E.d0.NO_OUT_OF_PROCESS_SUPPORT
  });
  if (!a.enabledOOP && a.enabledLegacy) return Y() ? C(S({}, (0, O.qT)(i)), {
    source: E.d0.LEGACY_ENABLED
  }) : C(S({}, a), {
    overlayMethod: E.gl.Disabled,
    source: E.d0.LEGACY_ENABLED
  });
  let o = null == (n = _.Z.getGameByName(i.name)) ? true : n.id,
    s = (0, O.qc)(i) || v.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
  switch (t) {
    case l.Jx.MINIMIZED:
    case l.Jx.WINDOWED:
    case l.Jx.MAXIMIZED:
    case l.Jx.BORDERLESS_FULLSCREEN: {
      let e = a.enabledOOP && W(),
        t = a.enabledLegacy && Y(),
        n = s ? E.gl.OutOfProcessLimitedInteraction : E.gl.OutOfProcess;
      return C(S({}, a), {
        overlayMethod: e ? n : t ? (0, O.qT)(i).overlayMethod : E.gl.Disabled
      })
    }
    case l.Jx.FULLSCREEN: {
      let e = (0, O.qT)(i),
        t = e.enabledLegacy && Y();
      return C(S({}, e), {
        overlayMethod: t ? e.overlayMethod : E.gl.Disabled
      })
    }
    case l.Jx.UNKNOWN:
      return {
        source: E.d0.FULL_SCREEN_TYPE, enabledOOP: false, enabledLegacy: false, overlayMethod: E.gl.Disabled
      };
    default:
      return {
        source: E.d0.DEFAULT, enabledOOP: false, enabledLegacy: false, overlayMethod: E.gl.Disabled
      }
  }
}
async function ei(e) {
  if (J(e)) {
    P.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")), await e_(new Set([e]));
    return
  }
  if (!K()) return void P.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
  let t = await en(e);
  if (null == t) return void P.error("Failed to track game ".concat(e));
  H(e, "game_tracking_starting", {
    game_name: t.gameName,
    fullscreen_type: t.fullscreenType
  }), $(e, "state", E.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eM.emitChange(), P.verbose("Determining initial overlay method for pid ".concat(e));
  let n = await es(e);
  P.verbose("Overlay method for pid ".concat(e, ": ").concat((0, O.P_)(n.overlayMethod))), et(e, E.zE.SCREEN_TYPE_RESOLUTION), await el(e, n), ep(O.HD), G = n.overlayMethod, eM.emitChange(), await s.Z.updateTrackedGame(e, t)
}
async function ea(e) {
  var t, n, r;
  if (!J(e)) return void P.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
  P.verbose("Untracking game ".concat(e));
  let i = z(e),
    a = {
      source: null != (t = null == i ? true : i.source) ? t : E.d0.DEFAULT,
      enabledOOP: null != (n = null == i ? true : i.oopEnabled) && n,
      enabledLegacy: null != (r = null == i ? true : i.legacyEnabled) && r,
      overlayMethod: E.gl.Disabled
    };
  await el(e, a), Q(e), eM.emitChange(), await s.Z.updateTrackedGame(e, null)
}
async function eo(e) {
  var t;
  let n = d.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == n) return P.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.Jx.UNKNOWN;
  let r = null != (t = null == n ? true : n.fullscreenType) ? t : l.Jx.UNKNOWN;
  if (B.has(r)) {
    let t = await (0, O.hj)(e, (0, O.O0)("first_fullscreen"));
    P.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t)
  }
  return r
}
async function es(e) {
  let t = await eo(e);
  if (Z.has(t)) {
    let n = await (0, O.hj)(e, (0, O.aW)("initial_status"));
    null != n && (t = n)
  }
  if (t === l.Jx.UNKNOWN) {
    let n = await (0, O.hj)(e, (0, O.aW)("initial_status"));
    null != n && (t = n)
  }
  let n = z(e);
  return null == n ? (P.error("Tried to determine initial overlay method for untracked pid ".concat(e)), {
    source: E.d0.NO_TRACKED_GAME,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.gl.Disabled
  }) : er(n, t)
}
async function el(e, t) {
  var n;
  let r = t.overlayMethod;
  $(e, "state", r === E.gl.Disabled ? E.mM.OVERLAY_DISABLED : E.mM.WAITING_FOR_MODULE_TRACKING), $(e, "overlayMethod", r), $(e, "source", t.source), $(e, "oopEnabled", t.enabledOOP), $(e, "legacyEnabled", t.enabledLegacy), P.verbose("Updating overlay method for pid ".concat(e, ' "').concat(null == (n = z(e)) ? true : n.gameName, '" to ').concat((0, O.P_)(r))), eM.emitChange();
  let i = z(e);
  return null != i && await s.Z.updateTrackedGame(e, i), s.Z.updateOverlayMethod(e, r)
}
async function ec() {
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => d.ZP.getOverlayEnabledForGame(e)).map(e => e.pid)),
    t = new Set(q()),
    n = new Set([...exports].filter(t => !e.has(t)));
  for (let e of require) await ea(module), await (0, Chunk379649._v)(16);
  let r = new Set([...module].filter(e => !t.has(e)));
  for (let e of r) await ei(module), await (0, Chunk379649._v)(16);
  let i = new Set([...exports].filter(t => e.has(t)));
  await e_(Chunk442837), (require.size > 0 || r.size > 0) && P.verbose("Tracked games have changes", {
    trackedPIDsNoLongerValid: require,
    validPIDsNotAlreadyTracked: r,
    pidsAlreadyTracked: Chunk442837
  })
}
async function eu(e) {
  let t = false,
    n = z(e);
  if (null == n) return P.error("Tried to determine overlay method swap for untracked pid ".concat(e)), false;
  if (y.l.has(n.state)) return P.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), false;
  let r = await (0, O.hj)(e, 0);
  if (null == r) return P.error("Failed to get revised fullscreen type for pid ".concat(e)), false;
  n.fullscreenType !== r && P.verbose("Fullscreen type different in swap for pid ".concat(e), {
    oldFullscreenType: n.fullscreenType,
    newFullscreenType: r
  });
  let i = er(n, r);
  if (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy && i.overlayMethod !== E.gl.Disabled || (M === h.UNSET_PID || null === M) && n.state === E.mM.OVERLAY_RENDERING) return t;
  let a = w === E.R5.OUT_OF_PROCESS_V3 || w === E.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
    o = w === E.R5.IN_PROCESS_V2,
    s = (0, O.PD)(n, r, W()),
    l = (0, O.DH)(n, r, W());
  P.verbose("Overlay method different for pid ".concat(e), {
    oldOverlayMethod: n.overlayMethod,
    revisedFullscreenType: r,
    previousFullscreenType: n.previousFullscreenType,
    newOverlayGameStatus: i,
    shouldSwitchToHook: l,
    shouldSwitchToOutOfProcess: s,
    isForcedInProcess: o,
    isForcedOutOfProcess: a,
    legacyEnabled: Y(),
    overlayEnabled: W()
  });
  let c = () => {
    P.verbose("Updating fullscreen type for pid ".concat(e), {
      oldFullscreenType: n.fullscreenType,
      newFullscreenType: r
    }), $(e, "previousFullscreenType", n.fullscreenType), $(e, "fullscreenType", r), eM.emitChange(), t = true
  };
  switch (i.overlayMethod) {
    case E.gl.OutOfProcess:
    case E.gl.OutOfProcessLimitedInteraction:
      (s && !o || a) && (c(), await ef(e, i));
      break;
    case E.gl.Hook:
      (l && !a || o || Y()) && (c(), await ed(e, i));
      break;
    case E.gl.Disabled:
      c(), await ea(e)
  }
  return t
}

function ed(e, t) {
  var n;
  return J(e) ? (null == (n = z(e)) ? true : n.overlayMethod) === E.gl.Hook ? (P.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (P.verbose("Enabling hook for pid ".concat(e)), $(e, "hasChangedRenderMode", true), el(e, t)) : (P.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve())
}

function ef(e, t) {
  var n;
  return J(e) ? (null == (n = z(e)) ? true : n.overlayMethod) === t.overlayMethod ? (P.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (P.verbose("Enabling OOP for pid ".concat(e)), $(e, "hasChangedRenderMode", true), el(e, t)) : (P.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve())
}
async function e_(e) {
  let t = false;
  for (let n of e) t = await eu(n) || t, await (0, a._v)(16);
  t && (P.info("determineFullscreenOverlayMethodSwaps has changes"), eM.emitChange(), H(null, "fullscreen_overlay_method_swap_changes", {
    tracked_game_pids: Array.from(e)
  }))
}

function ep(e) {
  null == U && (__OVERLAY__ && P.error("Running Polling While in Overlay Context!"), U = setTimeout(async () => {
    U = null;
    let e = q();
    e.length > 0 && (ep(O.HD), await e_(new Set(e)))
  }, e))
}
async function eh(e, t) {
  if (!I.iP) return void P.verbose("setOverlayEnabled: not supported");
  P.info("setOverlayEnabled: supported", {
    newLegacyEnabled: e,
    newOopEnabled: t
  });
  let n = e !== D,
    r = t !== x;
  if (D = e, x = t, g.v.update({
      legacyEnabled: D,
      oopEnabled: x
    }), P.info("setOverlayEnabled", {
      newOopEnabled: t,
      newLegacyEnabled: e
    }), x && r && (0, h.setOutOfProcessSupport)(true), D || x) n && P.info("Legacy change"), r && P.info("OOP change"), eO();
  else
    for (let e of q()) await ea(e), await (0, a._v)(16)
}

function em() {
  ec(), L = false, G = null, eD()
}

function eg(e) {
  let {
    legacyEnabled: t,
    oopEnabled: n
  } = e;
  return P.info("handleOverlaySetEnabled", {
    legacyEnabled: t,
    oopEnabled: n
  }), eh(t, n), true
}

function eE(e) {
  if (null != e.pids)
    for (let t of e.pids) ei(t)
}

function eb(e) {
  for (let t of (__OVERLAY__ && P.error("Running handleRunningGamesChange While in Overlay Context!"), e.added)) ei(t.pid);
  for (let t of e.removed) ea(t.pid)
}

function ey(e) {
  if (__OVERLAY__ && P.error("Running handleGameToggleOverlay While in Overlay Context!"), P.verbose("handleGameToggleOverlay", {
      action: e
    }), !K()) {
    if (P.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game) {
      let t = e.game.pid,
        n = z(t);
      if (null != n) return el(t, er(n, n.fullscreenType)), true
    }
    returnfalse
  }
  if (!("pid" in e.game)) return P.verbose("handleGameToggleOverlay: game is not a PersistGame"), ec(), true;
  let t = e.game.pid,
    {
      newLegacyOverlayEnabledValue: n,
      newOverlayV3EnabledValue: r
    } = e;
  if (J(t)) {
    let e = z(t);
    (null == e ? true : e.legacyEnabled) !== n && $(t, "legacyEnabled", n), (null == e ? true : e.oopEnabled) !== r && $(t, "oopEnabled", null != r && r)
  }
  let i = n && Y(),
    a = null != r && r && W();
  return i || a ? (P.verbose("handleGameToggleOverlay: game enabled changed", {
    pid: t,
    legacyEnabled: i,
    overlayV3Enabled: a
  }), J(t) ? eO() : ei(t)) : ea(t), true
}
async function eO() {
  await ev(), await (0, Chunk379649._v)(2e3);
  let e = q(),
    t = new Set([...Chunk594190.ZP.getRunningGames().filter(e => d.ZP.getOverlayEnabledForGame(e)).map(e => e.pid), ...module]);
  for (let n of (P.info("Retracking ".concat(exports.size, " games (").concat(module.length, " already tracked)")), exports)) await ei(require), await (0, Chunk379649._v)(16);
  P.info("Retracked ".concat(module.length, " games"))
}
async function ev() {
  for (let e of q()) await ea(module), await (0, Chunk379649._v)(16)
}

function eI(e) {
  return P.error("Overlay reload for pid", {
    pid: e.pid
  }), eO(), true
}

function eT(e) {
  return P.error("Overlay crashed for pid ".concat(e.pid)), !!J(e.pid) && ($(e.pid, "state", E.mM.OVERLAY_CRASHED), true)
}

function eS(e) {
  return w = e.mode, eO(), true
}

function eA(e) {
  if (null != z(e.pid)) return $(e.pid, "state", e.overlayState), P.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)), e.overlayState === E.mM.WAITING_FOR_POPOUT_OPEN || e.overlayState === E.mM.WAITING_FOR_OVERLAY_OPEN ? et(e.pid, E.zE.MODULE_TRACKING) : e.overlayState === E.mM.OVERLAY_RENDERING && et(e.pid, E.zE.OVERLAY_RENDERING), true
}

function eC() {
  return eO(), true
}

function eN(e) {
  return e.mode === E.GO.TrackFocusPIDs && (F = e.enabled), true
}

function eR() {
  return V = [], true
}

function eP(e) {
  if (M = e.pid, F) {
    var t;
    let n = [performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
    V = [...V, n]
  }
  return !(0, h.isValidGamePID)(e.pid) || ((0, h.setPID)(e.pid), true)
}

function ew(e) {
  s.Z.updateOverlayState(e.pid, E.mM.OVERLAY_RENDERING), J(e.pid) && $(e.pid, "successfullyShown", true), H(e.pid, "overlay_successfully_shown", {
    pid: e.pid
  });
  let t = z(e.pid);
  null != t && s.Z.updateTrackedGame(e.pid, t)
}

function eD() {
  Chunk353926.Z.hasLoadedExperiments && !L && (L = true, eh(Chunk454991.v.legacyEnabled, Chunk454991.v.oopEnabled))
}

function ex() {
  L = false, G = null
}

function eL() {
  L = false, G = null, ev()
}
class ej extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk314897.default, Chunk353926.Z, Chunk624864.Z), this.syncWith([Chunk353926.Z], eD)
  }
  getDevToolsFocusedPidsWithTimestamp() {
    return V
  }
  getHasLoadedExperiments() {
    return L
  }
  getForcedRenderMode() {
    return w
  }
  isAnyOverlayRendering() {
    return this.getOverlayRenderingTrackedGames().length > 0
  }
  getOverlayMethod(e) {
    var t, n;
    return __OVERLAY__ ? E.gl.Hook : null != (n = null == (t = z(e)) ? true : t.overlayMethod) ? n : E.gl.Disabled
  }
  isOverlayOOPEnabledForPid(e) {
    let t = this.getOverlayMethod(e);
    return t === E.gl.OutOfProcess || t === E.gl.OutOfProcessLimitedInteraction
  }
  hasChangedRenderMode(e) {
    var t, n;
    return null != (n = null == (t = z(e)) ? true : t.hasChangedRenderMode) && n
  }
  getTrackedGameByPid(e) {
    return z(e)
  }
  getTrackedGames() {
    return k
  }
  getGameOverlayStatus(e) {
    let t = z(e.pid);
    return null == t ? null : S({
      enabledOOP: t.oopEnabled,
      enabledLegacy: t.legacyEnabled
    }, t)
  }
  getGlobalEnabledStatus() {
    return {
      oopEnabled: W(),
      legacyEnabled: Y()
    }
  }
  getAnyGlobalEnabledOverlay() {
    return W() || Y()
  }
  getPerGameEnabledStatus(e) {
    if (null == e) return {
      oopEnabled: false,
      legacyEnabled: false
    };
    let t = z(e.pid);
    return null == t ? {
      oopEnabled: false,
      legacyEnabled: false
    } : {
      oopEnabled: t.oopEnabled,
      legacyEnabled: t.legacyEnabled
    }
  }
  getRenderMethod(e) {
    var t, n;
    if (null != e) return null != (n = null == (t = z(e)) ? true : t.overlayMethod) ? n : true
  }
  getMostRecentOverlayRenderMethod() {
    return G
  }
  getOverlayRenderingTrackedGames() {
    return Object.values(k).filter(e => e.overlayMethod !== E.gl.Disabled && e.state === E.mM.OVERLAY_RENDERING)
  }
}
T(ej, "displayName", "OverlayRenderStore");
let eM = new ej(Chunk570140.Z, !j ? {} : {
    CONNECTION_OPEN: em,
    LOGIN: ex,
    LOGOUT: eL,
    EXPERIMENT_OVERRIDE_BUCKET: em,
    OVERLAY_SET_ENABLED: eg,
    GAME_LAUNCH_SUCCESS: eE,
    RUNNING_GAMES_CHANGE: eb,
    RUNNING_GAME_TOGGLE_OVERLAY: ey,
    OVERLAY_FORCE_RENDER_MODE: eS,
    OVERLAY_UPDATE_OVERLAY_STATE: eA,
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eC,
    OVERLAY_CRASHED: eT,
    OVERLAY_RELOAD: eI,
    OVERLAY_FOCUSED: eP,
    OVERLAY_SUCCESSFULLY_SHOWN: ew,
    OVERLAY_RENDER_DEBUG_MODE: eN,
    OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eR
  }),
  ek = eM