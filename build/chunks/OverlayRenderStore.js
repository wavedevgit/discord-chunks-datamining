/** Chunk was on web.js **/
/** chunk id: 371651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => eB
}), require("./388685.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk188274 = require("./188274.js"),
  Chunk710845 = require("./710845.js"),
  Chunk353926 = require("./353926.js"),
  Chunk594190 = require("./594190.js"),
  Chunk314897 = require("./314897.js"),
  Chunk77498 = require("./77498.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk145597 = require("./145597.js"),
  Chunk427860 = require("./427860.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk542750 = require("./542750.js"),
  Chunk829907 = require("./829907.js"),
  Chunk624864 = require("./624864.js"),
  Chunk932404 = require("./932404.js"),
  Chunk987650 = require("./987650.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let x = new Chunk710845.Z("OverlayRenderStore"),
  L = Chunk837268.R5.UNSET,
  M = false,
  k = false,
  j = false,
  U = (0, Chunk358085.isWindows)() && Chunk358085.isPlatformEmbedded && !__OVERLAY__,
  G = null,
  B = {},
  Z = null,
  F = null,
  V = new Set([Chunk593472.Jx.FULLSCREEN, Chunk593472.Jx.BORDERLESS_FULLSCREEN, Chunk593472.Jx.UNKNOWN, Chunk593472.Jx.MINIMIZED]),
  H = new Set([Chunk593472.Jx.MINIMIZED, Chunk593472.Jx.UNKNOWN]),
  Y = false,
  W = new Chunk188274.Z(1e4);

function K(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : E.l6.Info;
  (0, S._l)({
    pid: e,
    name: t,
    type: E.C7.Renderer,
    data: n,
    logType: r
  })
}

function z() {
  return M
}

function q() {
  return k
}

function X() {
  return q() || z()
}

function Q(e) {
  var t;
  return null != (t = B[e]) ? t : null
}

function J() {
  return Object.keys(B).map(Number)
}

function $(e, t, n) {
  var r;
  let i = null == (r = B[e]) ? true : r.state;
  B = P(N({}, B), {
    [e]: N({}, t)
  }), i !== t.state && s.Z.trackOverlayStateChanged(e, i, t.state, n)
}

function ee(e) {
  delete B[e]
}

function et(e) {
  return e in B
}

function en(e, t, n, r) {
  let i = Q(e);
  if (null == i) return void x.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
  let a = N({}, i);
  a[t] = n, $(e, a, r)
}

function er() {
  return {
    startTrackingTimestamp: Date.now()
  }
}

function ei(e, t) {
  let n = Q(e);
  if (null == n) return;
  let r = n.timer;
  switch (t) {
    case y.zE.SCREEN_TYPE_RESOLUTION:
      r.screenTypeResolutionTimestamp = Date.now();
      break;
    case y.zE.MODULE_TRACKING:
      r.moduleTrackingTimestamp = Date.now();
      break;
    case y.zE.OVERLAY_RENDERING:
      r.overlayRenderingTimestamp = Date.now()
  }
  en(e, "timer", r, "timeOverlayEvent"), eG.emitChange()
}
async function ea(e) {
  var t, n, r, i;
  let a = Q(e);
  if (null != a) return a;
  let o = f.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == o) return x.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
  let s = (0, f.b6)(o),
    {
      enabledOOP: l,
      enabledLegacy: c
    } = s,
    u = D(s, ["enabledOOP", "enabledLegacy"]),
    d = p.Z.getGameByName(o.name),
    _ = null != (t = await (0, I.hj)(e, 0)) ? t : o.fullscreenType;
  x.verbose("Tracking game ".concat(e, " for overlay"));
  let h = P(N({}, u), {
    pid: e,
    oopEnabled: l,
    legacyEnabled: c,
    applicationId: null != (n = null == d ? true : d.id) ? n : null,
    gameName: null != (r = o.name) ? r : null,
    state: y.mM.INITIALIZING,
    timer: er(),
    fullscreenType: _,
    previousFullscreenType: o.fullscreenType,
    hasChangedRenderMode: false,
    supportsOutOfProcess: null == (i = null == d ? true : d.supportsOutOfProcessOverlay) || i,
    successfullyShown: false
  });
  return $(e, h, "initializeTrackedGame"), eG.emitChange(), h
}

function eo(e, t) {
  var n, r;
  switch (L) {
    case y.R5.UNSET:
      break;
    case y.R5.IN_PROCESS_V2:
      return {
        source: y.d0.DEV_OVERRIDE, enabledOOP: false, enabledLegacy: true, overlayMethod: y.gl.Hook, reason: "Forced in-process overlay rendering"
      };
    case y.R5.OUT_OF_PROCESS_V3:
      return {
        source: y.d0.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: y.gl.OutOfProcess, reason: "Forced out-of-process overlay rendering"
      };
    case y.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
      return {
        source: y.d0.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: y.gl.OutOfProcessLimitedInteraction, reason: "Forced out-of-process limited interaction overlay rendering"
      }
  }
  if (!X()) return {
    source: y.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled,
    reason: "Overlay globally disabled"
  };
  let i = f.ZP.getGameOrTransformedSubgameForPID(e.pid);
  if (null == i) return {
    source: y.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled,
    reason: "No running game found for tracked game"
  };
  let a = (0, f.b6)(i);
  if (!(a.enabledLegacy || a.enabledOOP)) return {
    source: a.source,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled,
    reason: a.reason
  };
  if (!(e.oopEnabled || e.legacyEnabled)) return {
    source: y.d0.USER_OVERRIDE,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled,
    reason: "Overlay disabled for specific game"
  };
  if (!(0, O.NW)("determineOverlayMethod", false)) {
    let e = (0, I.qT)(i),
      t = e.enabledLegacy && z();
    return P(N({}, e), {
      overlayMethod: t ? e.overlayMethod : y.gl.Disabled,
      reason: "Overlay V3 Experiment check failed"
    })
  }
  if (!q() && z()) {
    let e = (0, I.qT)(i);
    return P(N({}, e), {
      overlayMethod: e.enabledLegacy ? e.overlayMethod : y.gl.Disabled,
      reason: "isOverlayV3Enabled failed"
    })
  }
  if (!(0, g.supportsOutOfProcess)()) return P(N({}, (0, I.qT)(i)), {
    source: y.d0.NO_OUT_OF_PROCESS_SUPPORT,
    reason: "supportsOutOfProcess failed"
  });
  if (!a.enabledOOP && a.enabledLegacy) return z() ? P(N({}, (0, I.qT)(i)), {
    source: y.d0.LEGACY_ENABLED,
    reason: "Legacy overlay enabled only"
  }) : P(N({}, a), {
    overlayMethod: y.gl.Disabled,
    source: y.d0.LEGACY_ENABLED,
    reason: "Legacy overlay disabled"
  });
  let o = null == (n = p.Z.getGameByName(i.name)) ? true : n.id,
    s = (0, I.qc)(i) || T.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
  switch (t) {
    case l.Jx.MINIMIZED:
    case l.Jx.WINDOWED:
    case l.Jx.MAXIMIZED:
    case l.Jx.BORDERLESS_FULLSCREEN: {
      let e = a.enabledOOP && q(),
        n = a.enabledLegacy && z(),
        r = s ? y.gl.OutOfProcessLimitedInteraction : y.gl.OutOfProcess;
      return P(N({}, a), {
        overlayMethod: e ? r : n ? (0, I.qT)(i).overlayMethod : y.gl.Disabled,
        reason: "Normal case - overlayOOPEnabled: ".concat(e, ", overlayLegacyEnabled: ").concat(n, ", runningGameFullscreenType: ").concat(t)
      })
    }
    case l.Jx.FULLSCREEN: {
      let e = (0, I.qT)(i),
        t = e.enabledLegacy && z();
      return P(N({}, e), {
        overlayMethod: t ? e.overlayMethod : y.gl.Disabled,
        reason: "Fullscreen - using legacy overlay"
      })
    }
    case l.Jx.UNKNOWN:
      return {
        source: y.d0.FULL_SCREEN_TYPE, enabledOOP: false, enabledLegacy: false, overlayMethod: y.gl.Disabled, reason: "Unknown fullscreen type"
      };
    default:
      (0, h.vE)(t)
  }
}
async function es(e) {
  if (et(e)) {
    x.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")), await em(new Set([e]));
    return
  }
  if (!X()) return void x.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
  let t = await ea(e);
  if (null == t) return void x.error("Failed to track game ".concat(e));
  K(e, "game_tracking_starting", {
    game_name: t.gameName,
    fullscreen_type: t.fullscreenType
  }), en(e, "state", y.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"), eG.emitChange(), x.verbose("Determining initial overlay method for pid ".concat(e));
  let n = await eu(e);
  x.verbose("Overlay method for pid ".concat(e, ": ").concat((0, I.P_)(n.overlayMethod))), ei(e, y.zE.SCREEN_TYPE_RESOLUTION), await ed(e, n, "maybeTrackGame - 2"), eg(I.HD), F = n.overlayMethod, eG.emitChange(), await s.Z.updateTrackedGame(e, t)
}
async function el(e) {
  var t, n, r;
  if (!et(e)) return void x.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
  x.verbose("Untracking game ".concat(e));
  let i = Q(e),
    a = {
      source: null != (t = null == i ? true : i.source) ? t : y.d0.DEFAULT,
      enabledOOP: null != (n = null == i ? true : i.oopEnabled) && n,
      enabledLegacy: null != (r = null == i ? true : i.legacyEnabled) && r,
      overlayMethod: y.gl.Disabled,
      reason: "Untracking game"
    };
  await ed(e, a, "maybeUntrackGame", true), ee(e), eG.emitChange(), await s.Z.updateTrackedGame(e, null)
}
async function ec(e) {
  var t;
  let n = f.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == n) return x.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.Jx.UNKNOWN;
  let r = null != (t = null == n ? true : n.fullscreenType) ? t : l.Jx.UNKNOWN;
  if (V.has(r)) {
    let t = await (0, I.hj)(e, (0, I.O0)("first_fullscreen"));
    x.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t)
  }
  return r
}
async function eu(e) {
  let t = await ec(e);
  if (H.has(t)) {
    let n = await (0, I.hj)(e, (0, I.aW)("initial_status"));
    null != n && (t = n)
  }
  if (t === l.Jx.UNKNOWN) {
    let n = await (0, I.hj)(e, (0, I.aW)("initial_status"));
    null != n && (t = n)
  }
  let n = Q(e);
  return null == n ? (x.error("Tried to determine initial overlay method for untracked pid ".concat(e)), {
    source: y.d0.NO_TRACKED_GAME,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: y.gl.Disabled,
    reason: "No tracked game found"
  }) : eo(n, t)
}
async function ed(e, t, n) {
  var r;
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    a = t.overlayMethod,
    o = a === y.gl.Disabled ? i ? y.mM.OVERLAY_TEARING_DOWN : y.mM.OVERLAY_DISABLED : y.mM.WAITING_FOR_MODULE_TRACKING,
    l = "".concat(n, ": ").concat(t.reason);
  en(e, "state", o, l), en(e, "overlayMethod", a, l), en(e, "source", t.source, l), en(e, "oopEnabled", t.enabledOOP, l), en(e, "legacyEnabled", t.enabledLegacy, l), x.verbose("Updating overlay method for pid ".concat(e, ' "').concat(null == (r = Q(e)) ? true : r.gameName, '" to ').concat((0, I.P_)(a))), eG.emitChange();
  let c = Q(e);
  return null != c && await s.Z.updateTrackedGame(e, c), s.Z.updateOverlayMethod(e, a)
}
async function ef() {
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => f.ZP.getOverlayEnabledForGame(e)).map(e => e.pid)),
    t = new Set(J()),
    n = new Set([...exports].filter(t => !e.has(t)));
  for (let e of require) await el(module), await (0, Chunk379649._v)(16);
  let r = new Set([...module].filter(e => !t.has(e)));
  for (let e of r) await es(module), await (0, Chunk379649._v)(16);
  let i = new Set([...exports].filter(t => e.has(t)));
  await em(Chunk442837), (require.size > 0 || r.size > 0) && x.verbose("Tracked games have changes", {
    trackedPIDsNoLongerValid: require,
    validPIDsNotAlreadyTracked: r,
    pidsAlreadyTracked: Chunk442837
  })
}
async function e_(e) {
  let t = false,
    n = Q(e);
  if (null == n) return x.error("Tried to determine overlay method swap for untracked pid ".concat(e)), false;
  if (v.l.has(n.state)) return x.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), false;
  let r = await (0, I.hj)(e, 0);
  if (null == r) return x.error("Failed to get revised fullscreen type for pid ".concat(e)), false;
  n.fullscreenType !== r && x.verbose("Fullscreen type different in swap for pid ".concat(e), {
    oldFullscreenType: n.fullscreenType,
    newFullscreenType: r
  });
  let i = eo(n, r);
  if (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy || (G === g.UNSET_PID || null === G) && n.state === y.mM.OVERLAY_RENDERING) return t;
  let a = L === y.R5.OUT_OF_PROCESS_V3 || L === y.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
    o = L === y.R5.IN_PROCESS_V2,
    s = (0, I.PD)(r, q()),
    l = (0, I.DH)(n, r, q());
  x.verbose("Overlay method different for pid ".concat(e), {
    oldOverlayMethod: n.overlayMethod,
    revisedFullscreenType: r,
    previousFullscreenType: n.previousFullscreenType,
    newOverlayGameStatus: i,
    shouldSwitchToHook: l,
    shouldSwitchToOutOfProcess: s,
    isForcedInProcess: o,
    isForcedOutOfProcess: a,
    legacyEnabled: z(),
    overlayEnabled: q()
  });
  let c = () => {
    x.verbose("Updating fullscreen type for pid ".concat(e), {
      oldFullscreenType: n.fullscreenType,
      newFullscreenType: r
    }), en(e, "previousFullscreenType", n.fullscreenType, "updateFullscreenType"), en(e, "fullscreenType", r, "updateFullscreenType"), eG.emitChange(), t = true
  };
  switch (i.overlayMethod) {
    case y.gl.OutOfProcess:
    case y.gl.OutOfProcessLimitedInteraction:
      (s && !o || a) && (c(), await eh(e, i));
      break;
    case y.gl.Hook:
      (l && !a || o || z()) && (c(), await ep(e, i));
      break;
    case y.gl.Disabled:
      c(), ed(e, i, "determineOverlayMethodSwap - disabled")
  }
  return t
}

function ep(e, t) {
  var n;
  return et(e) ? (null == (n = Q(e)) ? true : n.overlayMethod) === y.gl.Hook ? (x.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (x.verbose("Enabling hook for pid ".concat(e)), en(e, "hasChangedRenderMode", true, "enableHook"), ed(e, t, "enableHook")) : (x.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve())
}

function eh(e, t) {
  var n;
  return et(e) ? (null == (n = Q(e)) ? true : n.overlayMethod) === t.overlayMethod ? (x.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (x.verbose("Enabling OOP for pid ".concat(e)), en(e, "hasChangedRenderMode", true, "enableOutOfProcess"), ed(e, t, "enableOutOfProcess")) : (x.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve())
}
async function em(e) {
  let t = false;
  for (let n of e) t = await e_(n) || t, await (0, a._v)(16);
  t && (x.info("determineFullscreenOverlayMethodSwaps has changes"), eG.emitChange(), K(null, "fullscreen_overlay_method_swap_changes", {
    tracked_game_pids: Array.from(e)
  }))
}

function eg(e) {
  null == Z && (__OVERLAY__ && x.error("Running Polling While in Overlay Context!"), Z = setTimeout(async () => {
    Z = null;
    let e = J();
    e.length > 0 && (eg(I.HD), await em(new Set(e)))
  }, e))
}
async function eE(e, t) {
  if (!A.iP) return void x.verbose("setOverlayEnabled: not supported");
  x.info("setOverlayEnabled: supported", {
    newLegacyEnabled: e,
    newOopEnabled: t
  });
  let n = e !== M,
    r = t !== k;
  if (M = e, k = t, b.v.update({
      legacyEnabled: M,
      oopEnabled: k
    }), x.info("setOverlayEnabled", {
      newOopEnabled: t,
      newLegacyEnabled: e
    }), k && r && (0, g.setOutOfProcessSupport)(true), M || k) n && x.info("Legacy change"), r && x.info("OOP change"), eT();
  else
    for (let e of J()) await el(e), await (0, a._v)(16)
}

function eb() {
  ef(), j = false, F = null, eM()
}

function ey(e) {
  let {
    legacyEnabled: t,
    oopEnabled: n
  } = e;
  return x.info("handleOverlaySetEnabled", {
    legacyEnabled: t,
    oopEnabled: n
  }), eE(t, n), true
}

function eO(e) {
  if (null != e.pids)
    for (let t of e.pids) es(t)
}

function ev(e) {
  for (let t of (__OVERLAY__ && x.error("Running handleRunningGamesChange While in Overlay Context!"), e.added)) es(t.pid);
  for (let t of e.removed) el(t.pid)
}

function eI(e) {
  if (__OVERLAY__ && x.error("Running handleGameToggleOverlay While in Overlay Context!"), x.verbose("handleGameToggleOverlay", {
      action: e
    }), !X()) {
    if (x.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game) {
      let t = e.game.pid,
        n = Q(t);
      if (null != n) return ed(t, eo(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), true
    }
    returnfalse
  }
  if (!("pid" in e.game)) return x.verbose("handleGameToggleOverlay: game is not a PersistGame"), ef(), true;
  let t = e.game.pid,
    {
      newLegacyOverlayEnabledValue: n,
      newOverlayV3EnabledValue: r
    } = e;
  if (et(t)) {
    let e = Q(t);
    (null == e ? true : e.legacyEnabled) !== n && en(t, "legacyEnabled", n, "handleGameToggleOverlay"), (null == e ? true : e.oopEnabled) !== r && en(t, "oopEnabled", null != r && r, "handleGameToggleOverlay")
  }
  let i = n && z(),
    a = null != r && r && q();
  return i || a ? (x.verbose("handleGameToggleOverlay: game enabled changed", {
    pid: t,
    legacyEnabled: i,
    overlayV3Enabled: a
  }), et(t) ? eT() : es(t)) : el(t), true
}
async function eT() {
  await eS(), await (0, Chunk379649._v)(2e3);
  let e = J(),
    t = new Set([...Chunk594190.ZP.getRunningGames().filter(e => f.ZP.getOverlayEnabledForGame(e)).map(e => e.pid), ...module]);
  for (let n of (x.info("Retracking ".concat(exports.size, " games (").concat(module.length, " already tracked)")), exports)) await es(require), await (0, Chunk379649._v)(16);
  x.info("Retracked ".concat(module.length, " games"))
}
async function eS() {
  for (let e of J()) await el(module), await (0, Chunk379649._v)(16)
}

function eA(e) {
  return x.error("Overlay reload for pid", {
    pid: e.pid
  }), eT(), true
}

function eC(e) {
  return x.error("Overlay crashed for pid ".concat(e.pid)), !!et(e.pid) && (en(e.pid, "state", y.mM.OVERLAY_CRASHED, "handleOverlayCrashed"), true)
}

function eN(e) {
  return L = e.mode, eT(), true
}

function eR(e) {
  if (null != Q(e.pid)) return en(e.pid, "state", e.overlayState, e.reason), x.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)), e.overlayState === y.mM.WAITING_FOR_POPOUT_OPEN || e.overlayState === y.mM.WAITING_FOR_OVERLAY_OPEN ? ei(e.pid, y.zE.MODULE_TRACKING) : e.overlayState === y.mM.OVERLAY_RENDERING && ei(e.pid, y.zE.OVERLAY_RENDERING), true
}

function eP() {
  return eT(), true
}

function eD(e) {
  return e.mode === y.GO.TrackFocusPIDs && (Y = e.enabled), true
}

function ew() {
  return W = new Chunk188274.Z(1e4), true
}

function ex(e) {
  if (G = e.pid, Y) {
    var t;
    let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
    W.push(n)
  }
  return !(0, g.isValidGamePID)(e.pid) || ((0, g.setPID)(e.pid), true)
}

function eL(e) {
  s.Z.updateOverlayState(e.pid, y.mM.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"), et(e.pid) && en(e.pid, "successfullyShown", true, "handleOverlaySuccessfullyShown"), K(e.pid, "overlay_successfully_shown", {
    pid: e.pid
  });
  let t = Q(e.pid);
  null != t && s.Z.updateTrackedGame(e.pid, t)
}

function eM() {
  Chunk353926.Z.hasLoadedExperiments && !j && (j = true, eE(Chunk454991.v.legacyEnabled, Chunk454991.v.oopEnabled))
}

function ek() {
  j = false, F = null
}

function ej() {
  j = false, F = null, eS()
}
class eU extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk353926.Z, Chunk77498.Z, Chunk624864.Z, Chunk594190.ZP), this.syncWith([Chunk353926.Z], eM)
  }
  getDevToolsFocusedPidsWithTimestamp() {
    return W
  }
  getHasLoadedExperiments() {
    return j
  }
  getForcedRenderMode() {
    return L
  }
  isAnyOverlayRendering() {
    return this.getOverlayRenderingTrackedGames().length > 0
  }
  getOverlayMethod(e) {
    var t, n;
    return __OVERLAY__ ? y.gl.Hook : null != (n = null == (t = Q(e)) ? true : t.overlayMethod) ? n : y.gl.Disabled
  }
  isOverlayOOPEnabledForPid(e) {
    let t = this.getOverlayMethod(e);
    return t === y.gl.OutOfProcess || t === y.gl.OutOfProcessLimitedInteraction
  }
  hasChangedRenderMode(e) {
    var t, n;
    return null != (n = null == (t = Q(e)) ? true : t.hasChangedRenderMode) && n
  }
  getTrackedGameByPid(e) {
    return Q(e)
  }
  getTrackedGames() {
    return B
  }
  getGameOverlayStatus(e) {
    let t = Q(e.pid);
    return null == t ? null : N({
      enabledOOP: t.oopEnabled,
      enabledLegacy: t.legacyEnabled
    }, t)
  }
  getGlobalEnabledStatus() {
    return {
      oopEnabled: q(),
      legacyEnabled: z()
    }
  }
  getAnyGlobalEnabledOverlay() {
    return q() || z()
  }
  getPerGameEnabledStatus(e) {
    if (null == e) return {
      oopEnabled: false,
      legacyEnabled: false
    };
    let t = Q(e.pid);
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
    if (null != e) return null != (n = null == (t = Q(e)) ? true : t.overlayMethod) ? n : true
  }
  getMostRecentOverlayRenderMethod() {
    return F
  }
  getOverlayRenderingTrackedGames() {
    return Object.values(B).filter(e => e.overlayMethod !== y.gl.Disabled && e.state === y.mM.OVERLAY_RENDERING)
  }
}
C(eU, "displayName", "OverlayRenderStore");
let eG = new eU(Chunk570140.Z, !U ? {} : {
    CONNECTION_OPEN: eb,
    LOGIN: ek,
    LOGOUT: ej,
    EXPERIMENT_OVERRIDE_BUCKET: eb,
    OVERLAY_SET_ENABLED: ey,
    GAME_LAUNCH_SUCCESS: eO,
    RUNNING_GAMES_CHANGE: ev,
    RUNNING_GAME_TOGGLE_OVERLAY: eI,
    OVERLAY_FORCE_RENDER_MODE: eN,
    OVERLAY_UPDATE_OVERLAY_STATE: eR,
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eP,
    OVERLAY_CRASHED: eC,
    OVERLAY_RELOAD: eA,
    OVERLAY_FOCUSED: ex,
    OVERLAY_SUCCESSFULLY_SHOWN: eL,
    OVERLAY_RENDER_DEBUG_MODE: eD,
    OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: ew
  }),
  eB = eG