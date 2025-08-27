/** Chunk was on web.js **/
/** chunk id: 371651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => ej
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
  Chunk145597 = require("./145597.js"),
  Chunk427860 = require("./427860.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk542750 = require("./542750.js"),
  Chunk829907 = require("./829907.js"),
  Chunk624864 = require("./624864.js"),
  Chunk987650 = require("./987650.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let R = new Chunk710845.Z("OverlayRenderStore"),
  P = Chunk837268.R5.UNSET,
  w = false,
  D = false,
  x = false,
  L = null,
  j = {},
  M = null,
  k = null,
  U = new Set([Chunk593472.Jx.FULLSCREEN, Chunk593472.Jx.BORDERLESS_FULLSCREEN, Chunk593472.Jx.UNKNOWN, Chunk593472.Jx.MINIMIZED]),
  G = new Set([Chunk593472.Jx.MINIMIZED, Chunk593472.Jx.UNKNOWN]),
  B = false,
  Z = [];

function F(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : h.l6.Info;
  h.JC.addModuleBreadcrumb(t, null != n ? n : {}, h.C7.Renderer, e, r)
}

function V() {
  return w
}

function H() {
  return D
}

function Y() {
  return H() || V()
}

function W(e) {
  var t;
  return null != (t = j[e]) ? t : null
}

function K() {
  return Object.keys(j).map(Number)
}

function z(e, t) {
  j = A(T({}, j), {
    [e]: T({}, t)
  })
}

function q(e) {
  delete j[e]
}

function X(e) {
  return null != j[e]
}

function Q(e, t, n) {
  let r = W(e);
  if (null == r) return void R.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
  r[t] = n, z(e, r)
}

function J() {
  return {
    startTrackingTimestamp: Date.now()
  }
}

function $(e, t) {
  let n = W(e);
  if (null == n) return;
  let r = n.timer;
  switch (t) {
    case g.zE.SCREEN_TYPE_RESOLUTION:
      r.screenTypeResolutionTimestamp = Date.now();
      break;
    case g.zE.MODULE_TRACKING:
      r.moduleTrackingTimestamp = Date.now();
      break;
    case g.zE.OVERLAY_RENDERING:
      r.overlayRenderingTimestamp = Date.now()
  }
  Q(e, "timer", r), eL.emitChange()
}
async function ee(e) {
  var t, n, r, i;
  let a = W(e);
  if (null != a) return a;
  let o = d.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == o) return R.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
  let s = (0, d.b6)(o),
    {
      enabledOOP: l,
      enabledLegacy: c
    } = s,
    u = C(s, ["enabledOOP", "enabledLegacy"]),
    f = _.Z.getGameByName(o.name),
    p = null != (t = await (0, y.hj)(e, 0)) ? t : o.fullscreenType;
  R.verbose("Tracking game ".concat(e, " for overlay"));
  let h = A(T({}, u), {
    pid: e,
    oopEnabled: l,
    legacyEnabled: c,
    applicationId: null != (n = null == f ? true : f.id) ? n : null,
    gameName: null != (r = o.name) ? r : null,
    state: g.mM.INITIALIZING,
    timer: J(),
    fullscreenType: p,
    previousFullscreenType: o.fullscreenType,
    hasChangedRenderMode: false,
    supportsOutOfProcess: null == (i = null == f ? true : f.supportsOutOfProcessOverlay) || i,
    successfullyShown: false
  });
  return z(e, h), eL.emitChange(), h
}

function et(e, t) {
  var n, r;
  switch (P) {
    case g.R5.UNSET:
      break;
    case g.R5.IN_PROCESS_V2:
      return {
        source: g.d0.DEV_OVERRIDE, enabledOOP: false, enabledLegacy: true, overlayMethod: g.gl.Hook
      };
    case g.R5.OUT_OF_PROCESS_V3:
      return {
        source: g.d0.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: g.gl.OutOfProcess
      };
    case g.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
      return {
        source: g.d0.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: g.gl.OutOfProcessLimitedInteraction
      }
  }
  if (!Y()) return {
    source: g.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: g.gl.Disabled
  };
  let i = d.ZP.getGameOrTransformedSubgameForPID(e.pid);
  if (null == i) return {
    source: g.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: g.gl.Disabled
  };
  let a = (0, d.b6)(i);
  if (!(a.enabledLegacy || a.enabledOOP)) return {
    source: a.source,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: g.gl.Disabled
  };
  if (!(e.oopEnabled || e.legacyEnabled)) return {
    source: g.d0.USER_OVERRIDE,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: g.gl.Disabled
  };
  if (!(0, E.NW)("determineOverlayMethod", false)) {
    let e = (0, y.qT)(i),
      t = e.enabledLegacy && V();
    return A(T({}, e), {
      overlayMethod: t ? e.overlayMethod : g.gl.Disabled
    })
  }
  if (!H() && V()) {
    let e = (0, y.qT)(i);
    return A(T({}, e), {
      overlayMethod: e.enabledLegacy ? e.overlayMethod : g.gl.Disabled
    })
  }
  if (!(0, p.supportsOutOfProcess)()) return A(T({}, (0, y.qT)(i)), {
    source: g.d0.NO_OUT_OF_PROCESS_SUPPORT
  });
  if (!a.enabledOOP && a.enabledLegacy) return V() ? A(T({}, (0, y.qT)(i)), {
    source: g.d0.LEGACY_ENABLED
  }) : A(T({}, a), {
    overlayMethod: g.gl.Disabled,
    source: g.d0.LEGACY_ENABLED
  });
  let o = null == (n = _.Z.getGameByName(i.name)) ? true : n.id,
    s = (0, y.qc)(i) || O.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
  switch (t) {
    case l.Jx.MINIMIZED:
    case l.Jx.WINDOWED:
    case l.Jx.MAXIMIZED:
    case l.Jx.BORDERLESS_FULLSCREEN: {
      let e = a.enabledOOP && H(),
        t = a.enabledLegacy && V(),
        n = s ? g.gl.OutOfProcessLimitedInteraction : g.gl.OutOfProcess;
      return A(T({}, a), {
        overlayMethod: e ? n : t ? (0, y.qT)(i).overlayMethod : g.gl.Disabled
      })
    }
    case l.Jx.FULLSCREEN: {
      let e = (0, y.qT)(i),
        t = e.enabledLegacy && V();
      return A(T({}, e), {
        overlayMethod: t ? e.overlayMethod : g.gl.Disabled
      })
    }
    case l.Jx.UNKNOWN:
      return {
        source: g.d0.FULL_SCREEN_TYPE, enabledOOP: false, enabledLegacy: false, overlayMethod: g.gl.Disabled
      };
    default:
      return {
        source: g.d0.DEFAULT, enabledOOP: false, enabledLegacy: false, overlayMethod: g.gl.Disabled
      }
  }
}
async function en(e) {
  if (X(e)) {
    R.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")), await ed(new Set([e]));
    return
  }
  if (!Y()) return void R.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
  let t = await ee(e);
  if (null == t) return void R.error("Failed to track game ".concat(e));
  F(e, "game_tracking_starting", {
    game_name: t.gameName,
    fullscreen_type: t.fullscreenType
  }), Q(e, "state", g.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eL.emitChange(), R.verbose("Determining initial overlay method for pid ".concat(e));
  let n = await ea(e);
  R.verbose("Overlay method for pid ".concat(e, ": ").concat((0, y.P_)(n.overlayMethod))), $(e, g.zE.SCREEN_TYPE_RESOLUTION), await eo(e, n), ef(y.HD), k = n.overlayMethod, eL.emitChange(), await s.Z.updateTrackedGame(e, t)
}
async function er(e) {
  var t, n, r;
  if (!X(e)) return void R.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
  R.verbose("Untracking game ".concat(e));
  let i = W(e),
    a = {
      source: null != (t = null == i ? true : i.source) ? t : g.d0.DEFAULT,
      enabledOOP: null != (n = null == i ? true : i.oopEnabled) && n,
      enabledLegacy: null != (r = null == i ? true : i.legacyEnabled) && r,
      overlayMethod: g.gl.Disabled
    };
  await eo(e, a), q(e), eL.emitChange(), await s.Z.updateTrackedGame(e, null)
}
async function ei(e) {
  var t;
  let n = d.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == n) return R.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.Jx.UNKNOWN;
  let r = null != (t = null == n ? true : n.fullscreenType) ? t : l.Jx.UNKNOWN;
  if (U.has(r)) {
    let t = await (0, y.hj)(e, (0, y.O0)("first_fullscreen"));
    R.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t)
  }
  return r
}
async function ea(e) {
  let t = await ei(e);
  if (G.has(t)) {
    let n = await (0, y.hj)(e, (0, y.aW)("initial_status"));
    null != n && (t = n)
  }
  if (t === l.Jx.UNKNOWN) {
    let n = await (0, y.hj)(e, (0, y.aW)("initial_status"));
    null != n && (t = n)
  }
  let n = W(e);
  return null == n ? (R.error("Tried to determine initial overlay method for untracked pid ".concat(e)), {
    source: g.d0.NO_TRACKED_GAME,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: g.gl.Disabled
  }) : et(n, t)
}
async function eo(e, t) {
  var n;
  let r = t.overlayMethod;
  Q(e, "state", r === g.gl.Disabled ? g.mM.OVERLAY_DISABLED : g.mM.WAITING_FOR_MODULE_TRACKING), Q(e, "overlayMethod", r), Q(e, "source", t.source), Q(e, "oopEnabled", t.enabledOOP), Q(e, "legacyEnabled", t.enabledLegacy), R.verbose("Updating overlay method for pid ".concat(e, ' "').concat(null == (n = W(e)) ? true : n.gameName, '" to ').concat((0, y.P_)(r))), eL.emitChange();
  let i = W(e);
  return null != i && await s.Z.updateTrackedGame(e, i), s.Z.updateOverlayMethod(e, r)
}
async function es() {
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => d.ZP.getOverlayEnabledForGame(e)).map(e => e.pid)),
    t = new Set(K()),
    n = new Set([...exports].filter(t => !e.has(t)));
  for (let e of require) await er(module), await (0, Chunk379649._v)(16);
  let r = new Set([...module].filter(e => !t.has(e)));
  for (let e of r) await en(module), await (0, Chunk379649._v)(16);
  let i = new Set([...exports].filter(t => e.has(t)));
  await ed(Chunk442837), (require.size > 0 || r.size > 0) && R.verbose("Tracked games have changes", {
    trackedPIDsNoLongerValid: require,
    validPIDsNotAlreadyTracked: r,
    pidsAlreadyTracked: Chunk442837
  })
}
async function el(e) {
  let t = false,
    n = W(e);
  if (null == n) return R.error("Tried to determine overlay method swap for untracked pid ".concat(e)), false;
  if (b.l.has(n.state)) return R.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), false;
  let r = await (0, y.hj)(e, 0);
  if (null == r) return R.error("Failed to get revised fullscreen type for pid ".concat(e)), false;
  n.fullscreenType !== r && (R.verbose("Fullscreen type different in swap for pid ".concat(e), {
    oldFullscreenType: n.fullscreenType,
    newFullscreenType: r
  }), Q(e, "previousFullscreenType", n.fullscreenType), Q(e, "fullscreenType", r), eL.emitChange(), t = true);
  let i = et(n, r);
  if (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy && i.overlayMethod !== g.gl.Disabled || (L === p.UNSET_PID || null === L) && n.state === g.mM.OVERLAY_RENDERING) return t;
  let a = P === g.R5.OUT_OF_PROCESS_V3 || P === g.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
    o = P === g.R5.IN_PROCESS_V2,
    s = (0, y.PD)(n, r, H()),
    l = (0, y.DH)(n, r, H());
  switch (R.verbose("Overlay method different for pid ".concat(e), {
      oldOverlayMethod: n.overlayMethod,
      revisedFullscreenType: r,
      previousFullscreenType: n.previousFullscreenType,
      newOverlayGameStatus: i,
      shouldSwitchToHook: l,
      shouldSwitchToOutOfProcess: s,
      isForcedInProcess: o,
      isForcedOutOfProcess: a,
      legacyEnabled: V(),
      overlayEnabled: H()
    }), i.overlayMethod) {
    case g.gl.OutOfProcess:
    case g.gl.OutOfProcessLimitedInteraction:
      (s && !o || a) && await eu(e, i);
      break;
    case g.gl.Hook:
      (l && !a || o || V()) && await ec(e, i);
      break;
    case g.gl.Disabled:
      await er(e)
  }
  return t
}

function ec(e, t) {
  var n;
  return X(e) ? (null == (n = W(e)) ? true : n.overlayMethod) === g.gl.Hook ? (R.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (R.verbose("Enabling hook for pid ".concat(e)), Q(e, "hasChangedRenderMode", true), eo(e, t)) : (R.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve())
}

function eu(e, t) {
  var n;
  return X(e) ? (null == (n = W(e)) ? true : n.overlayMethod) === t.overlayMethod ? (R.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (R.verbose("Enabling OOP for pid ".concat(e)), Q(e, "hasChangedRenderMode", true), eo(e, t)) : (R.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve())
}
async function ed(e) {
  let t = false;
  for (let n of e) t = await el(n) || t, await (0, a._v)(16);
  t && (R.info("determineFullscreenOverlayMethodSwaps has changes"), eL.emitChange(), F(null, "fullscreen_overlay_method_swap_changes", {
    tracked_game_pids: Array.from(e)
  }))
}

function ef(e) {
  null == M && (__OVERLAY__ && R.error("Running Polling While in Overlay Context!"), M = setTimeout(async () => {
    M = null;
    let e = K();
    e.length > 0 && (ef(y.HD), await ed(new Set(e)))
  }, e))
}
async function e_(e, t) {
  if (!v.iP) return void R.verbose("setOverlayEnabled: not supported");
  R.info("setOverlayEnabled: supported", {
    newLegacyEnabled: e,
    newOopEnabled: t
  });
  let n = e !== w,
    r = t !== D;
  if (w = e, D = t, m.v.update({
      legacyEnabled: w,
      oopEnabled: D
    }), R.info("setOverlayEnabled", {
      newOopEnabled: t,
      newLegacyEnabled: e
    }), D && r && (0, p.setOutOfProcessSupport)(true), w || D) n && R.info("Legacy change"), r && R.info("OOP change"), eb();
  else
    for (let e of K()) await er(e), await (0, a._v)(16)
}

function ep() {
  es(), x = false, k = null, eP()
}

function eh(e) {
  let {
    legacyEnabled: t,
    oopEnabled: n
  } = e;
  return R.info("handleOverlaySetEnabled", {
    legacyEnabled: t,
    oopEnabled: n
  }), e_(t, n), true
}

function em(e) {
  if (null != e.pids)
    for (let t of e.pids) en(t)
}

function eg(e) {
  for (let t of (__OVERLAY__ && R.error("Running handleRunningGamesChange While in Overlay Context!"), e.added)) en(t.pid);
  for (let t of e.removed) er(t.pid)
}

function eE(e) {
  if (__OVERLAY__ && R.error("Running handleGameToggleOverlay While in Overlay Context!"), R.verbose("handleGameToggleOverlay", {
      action: e
    }), !Y()) {
    if (R.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game) {
      let t = e.game.pid,
        n = W(t);
      if (null != n) return eo(t, et(n, n.fullscreenType)), true
    }
    returnfalse
  }
  if (!("pid" in e.game)) return R.verbose("handleGameToggleOverlay: game is not a PersistGame"), es(), true;
  let t = e.game.pid,
    {
      newLegacyOverlayEnabledValue: n,
      newOverlayV3EnabledValue: r
    } = e;
  if (X(t)) {
    let e = W(t);
    (null == e ? true : e.legacyEnabled) !== n && Q(t, "legacyEnabled", n), (null == e ? true : e.oopEnabled) !== r && Q(t, "oopEnabled", null != r && r)
  }
  let i = n && V(),
    a = null != r && r && H();
  return i || a ? (R.verbose("handleGameToggleOverlay: game enabled changed", {
    pid: t,
    legacyEnabled: i,
    overlayV3Enabled: a
  }), X(t) ? eb() : en(t)) : er(t), true
}
async function eb() {
  await ey(), await (0, Chunk379649._v)(2e3);
  let e = K(),
    t = new Set([...Chunk594190.ZP.getRunningGames().filter(e => d.ZP.getOverlayEnabledForGame(e)).map(e => e.pid), ...module]);
  for (let n of (R.info("Retracking ".concat(exports.size, " games (").concat(module.length, " already tracked)")), exports)) await en(require), await (0, Chunk379649._v)(16);
  R.info("Retracked ".concat(module.length, " games"))
}
async function ey() {
  for (let e of K()) await er(module), await (0, Chunk379649._v)(16)
}

function eO(e) {
  return R.error("Overlay reload for pid", {
    pid: e.pid
  }), eb(), true
}

function ev(e) {
  return R.error("Overlay crashed for pid ".concat(e.pid)), !!X(e.pid) && (Q(e.pid, "state", g.mM.OVERLAY_CRASHED), true)
}

function eI(e) {
  return P = e.mode, eb(), true
}

function eT(e) {
  if (null != W(e.pid)) return Q(e.pid, "state", e.overlayState), R.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)), e.overlayState === g.mM.WAITING_FOR_OVERLAY_OPEN ? $(e.pid, g.zE.MODULE_TRACKING) : e.overlayState === g.mM.OVERLAY_RENDERING && $(e.pid, g.zE.OVERLAY_RENDERING), true
}

function eS() {
  return eb(), true
}

function eA(e) {
  return e.mode === g.GO.TrackFocusPIDs && (B = e.enabled), true
}

function eC() {
  return Z = [], true
}

function eN(e) {
  if (L = e.pid, B) {
    var t;
    let n = [performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
    Z = [...Z, n]
  }
  return !(0, p.isValidGamePID)(e.pid) || ((0, p.setPID)(e.pid), true)
}

function eR(e) {
  X(e.pid) && Q(e.pid, "successfullyShown", true), F(e.pid, "overlay_successfully_shown", {
    pid: e.pid
  });
  let t = W(e.pid);
  return null == t || (s.Z.updateTrackedGame(e.pid, t), true)
}

function eP() {
  Chunk353926.Z.hasLoadedExperiments && !x && (x = true, e_(Chunk454991.v.legacyEnabled, Chunk454991.v.oopEnabled))
}

function ew() {
  x = false, k = null
}

function eD() {
  x = false, k = null, ey()
}
class ex extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk314897.default, Chunk353926.Z, Chunk624864.Z), this.syncWith([Chunk353926.Z], eP)
  }
  getDevToolsFocusedPidsWithTimestamp() {
    return Z
  }
  getHasLoadedExperiments() {
    return x
  }
  getForcedRenderMode() {
    return P
  }
  isAnyOverlayRendering() {
    return Object.values(j).some(e => e.state === g.mM.OVERLAY_RENDERING)
  }
  getOverlayMethod(e) {
    var t, n;
    return null != (n = null == (t = W(e)) ? true : t.overlayMethod) ? n : g.gl.Disabled
  }
  isOverlayOOPEnabledForPid(e) {
    let t = this.getOverlayMethod(e);
    return t === g.gl.OutOfProcess || t === g.gl.OutOfProcessLimitedInteraction
  }
  hasChangedRenderMode(e) {
    var t, n;
    return null != (n = null == (t = W(e)) ? true : t.hasChangedRenderMode) && n
  }
  getTrackedGameByPid(e) {
    return W(e)
  }
  getTrackedGames() {
    return j
  }
  getGameOverlayStatus(e) {
    let t = W(e.pid);
    return null == t ? null : T({
      enabledOOP: t.oopEnabled,
      enabledLegacy: t.legacyEnabled
    }, t)
  }
  getGlobalEnabledStatus() {
    return {
      oopEnabled: H(),
      legacyEnabled: V()
    }
  }
  getAnyGlobalEnabledOverlay() {
    return H() || V()
  }
  getPerGameEnabledStatus(e) {
    if (null == e) return {
      oopEnabled: false,
      legacyEnabled: false
    };
    let t = W(e.pid);
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
    if (null != e) return null != (n = null == (t = W(e)) ? true : t.overlayMethod) ? n : true
  }
  getMostRecentOverlayRenderMethod() {
    return k
  }
  getOverlayRenderingTrackedGames() {
    return Object.values(j).filter(e => e.overlayMethod !== g.gl.Disabled && e.state === g.mM.OVERLAY_RENDERING)
  }
}
I(ex, "displayName", "OverlayRenderStore");
let eL = new ex(Chunk570140.Z, __OVERLAY__ ? {} : {
    CONNECTION_OPEN: ep,
    LOGIN: ew,
    LOGOUT: eD,
    EXPERIMENT_OVERRIDE_BUCKET: ep,
    OVERLAY_SET_ENABLED: eh,
    GAME_LAUNCH_SUCCESS: em,
    RUNNING_GAMES_CHANGE: eg,
    RUNNING_GAME_TOGGLE_OVERLAY: eE,
    OVERLAY_FORCE_RENDER_MODE: eI,
    OVERLAY_UPDATE_OVERLAY_STATE: eT,
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eS,
    OVERLAY_CRASHED: ev,
    OVERLAY_RELOAD: eO,
    OVERLAY_FOCUSED: eN,
    OVERLAY_SUCCESSFULLY_SHOWN: eR,
    OVERLAY_RENDER_DEBUG_MODE: eA,
    OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eC
  }),
  ej = eL