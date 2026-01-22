/** Chunk was on web.js **/
/** chunk id: 833551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => eG
}), require("./896048.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk73153 = require("./73153.js"),
  Chunk684013 = require("./684013.js"),
  Chunk56562 = require("./56562.js"),
  Chunk635731 = require("./635731.js"),
  Chunk626584 = require("./626584.js"),
  Chunk49463 = require("./49463.js"),
  Chunk15285 = require("./15285.js"),
  Chunk961350 = require("./961350.js"),
  Chunk760751 = require("./760751.js"),
  Chunk723702 = require("./723702.js"),
  Chunk9302 = require("./9302.js"),
  Chunk211753 = require("./211753.js"),
  Chunk41984 = require("./41984.js"),
  Chunk181435 = require("./181435.js"),
  Chunk318739 = require("./318739.js"),
  Chunk515183 = require("./515183.js"),
  Chunk592598 = require("./592598.js"),
  Chunk682763 = require("./682763.js"),
  Chunk680243 = require("./680243.js"),
  Chunk672396 = require("./672396.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
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

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = P(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let D = new Chunk626584.A("OverlayRenderStore"),
  x = Chunk41984.V6.UNSET,
  L = false,
  j = false,
  M = (0, Chunk723702.isWindows)() && Chunk723702.isPlatformEmbedded && !__OVERLAY__,
  k = null,
  U = {},
  G = {},
  V = null,
  F = null,
  B = new Set([Chunk56562.aI.FULLSCREEN, Chunk56562.aI.BORDERLESS_FULLSCREEN, Chunk56562.aI.UNKNOWN, Chunk56562.aI.MINIMIZED]),
  H = new Set([Chunk56562.aI.MINIMIZED, Chunk56562.aI.UNKNOWN]),
  Y = false,
  W = new Chunk635731.A(1e4);

function K(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : b.QJ.Info;
  (0, v.aS)({
    pid: e,
    name: t,
    type: b.ON.Renderer,
    data: n,
    logType: r
  })
}

function z() {
  return L
}

function q() {
  return S.A.isOverlayEnabled
}

function X() {
  return q() || z()
}

function Z(e) {
  var t;
  return null != (t = U[e]) ? t : null
}

function Q() {
  return Object.keys(U).map(Number)
}

function $(e, t, n) {
  var r;
  let i = null == (r = U[e]) ? true : r.state;
  U = R(C({}, U), {
    [e]: C({}, t)
  }), i !== t.state && o.A.trackOverlayStateChanged(e, i, t.state, n)
}

function J(e) {
  null != U[e] && (G[e] = R(C({}, U[e]), {
    state: E.AR.GAME_UNTRACKED
  }), delete U[e])
}

function ee(e) {
  return e in U
}

function et(e, t, n, r) {
  let i = Z(e);
  if (null == i) return void D.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
  let a = C({}, i);
  a[t] = n, $(e, a, r)
}

function en() {
  return {
    startTrackingTimestamp: Date.now()
  }
}

function er(e, t) {
  let n = Z(e);
  if (null == n) return;
  let r = n.timer;
  switch (t) {
    case E.sf.SCREEN_TYPE_RESOLUTION:
      r.screenTypeResolutionTimestamp = Date.now();
      break;
    case E.sf.MODULE_TRACKING:
      r.moduleTrackingTimestamp = Date.now();
      break;
    case E.sf.OVERLAY_RENDERING:
      r.overlayRenderingTimestamp = Date.now()
  }
  et(e, "timer", r, "timeOverlayEvent"), eU.emitChange()
}
async function ei(e) {
  var t, n, r, i;
  let a = Z(e);
  if (null != a) return a;
  let s = f.Ay.getGameOrTransformedSubgameForPID(e),
    o = Date.now();
  if (null == s) return D.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
  let l = (0, f.hw)(s),
    {
      enabledOOP: c,
      enabledLegacy: u
    } = l,
    d = w(l, ["enabledOOP", "enabledLegacy"]),
    p = _.A.getGameByName(s.name),
    h = null != (t = await (0, O.E1)(e, 0)) ? t : s.fullscreenType,
    m = Date.now();
  D.verbose("Tracking game ".concat(e, " for overlay"));
  let g = R(C({}, d), {
    pid: e,
    oopEnabled: c,
    legacyEnabled: u,
    applicationId: null != (n = null == p ? true : p.id) ? n : null,
    gameName: null != (r = s.name) ? r : null,
    state: E.AR.INITIALIZING,
    timer: en(),
    fullscreenType: h,
    fullscreenHistory: {
      [m]: h
    },
    hasChangedRenderMode: false,
    supportsOutOfProcess: null == (i = null == p ? true : p.supportsOutOfProcessOverlay) || i,
    successfullyShown: false
  });
  return h !== s.fullscreenType && (g.fullscreenHistory[o] = s.fullscreenType), $(e, g, "initializeTrackedGame"), eU.emitChange(), g
}

function ea(e, t) {
  var n, r;
  switch (x) {
    case E.V6.UNSET:
      break;
    case E.V6.IN_PROCESS_V2:
      return {
        source: E.yp.DEV_OVERRIDE, enabledOOP: false, enabledLegacy: true, overlayMethod: E.Ue.Hook, reason: "Forced in-process overlay rendering"
      };
    case E.V6.OUT_OF_PROCESS_V3:
      return {
        source: E.yp.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: E.Ue.OutOfProcess, reason: "Forced out-of-process overlay rendering"
      };
    case E.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
      return {
        source: E.yp.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: E.Ue.OutOfProcessLimitedInteraction, reason: "Forced out-of-process limited interaction overlay rendering"
      }
  }
  if (!X()) return {
    source: E.yp.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.Ue.Disabled,
    reason: "Overlay globally disabled"
  };
  let i = f.Ay.getGameOrTransformedSubgameForPID(e.pid);
  if (null == i) return {
    source: E.yp.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.Ue.Disabled,
    reason: "No running game found for tracked game"
  };
  let a = (0, f.hw)(i);
  if (!(a.enabledLegacy || a.enabledOOP)) return {
    source: a.source,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.Ue.Disabled,
    reason: a.reason
  };
  if (!(e.oopEnabled || e.legacyEnabled)) return {
    source: E.yp.USER_OVERRIDE,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.Ue.Disabled,
    reason: "Overlay disabled for specific game"
  };
  if (!q() && z()) {
    let e = (0, O.O4)(i);
    return R(C({}, e), {
      overlayMethod: e.enabledLegacy ? e.overlayMethod : E.Ue.Disabled,
      reason: "isOverlayV3Enabled failed"
    })
  }
  if (!(0, m.supportsOutOfProcess)()) return R(C({}, (0, O.O4)(i)), {
    source: E.yp.NO_OUT_OF_PROCESS_SUPPORT,
    reason: "supportsOutOfProcess failed"
  });
  if (!a.enabledOOP && a.enabledLegacy) return z() ? R(C({}, (0, O.O4)(i)), {
    source: E.yp.LEGACY_ENABLED,
    reason: "Legacy overlay enabled only"
  }) : R(C({}, a), {
    overlayMethod: E.Ue.Disabled,
    source: E.yp.LEGACY_ENABLED,
    reason: "Legacy overlay disabled"
  });
  let s = null == (r = _.A.getGameByName(i.name)) ? true : r.id,
    o = (0, O.zi)(i) || A.A.isLimitedInteractionOverrideEnabled(null != (n = i.id) ? n : s);
  switch (t) {
    case l.aI.MINIMIZED:
    case l.aI.WINDOWED:
    case l.aI.MAXIMIZED:
    case l.aI.BORDERLESS_FULLSCREEN: {
      let e = a.enabledOOP && q(),
        n = a.enabledLegacy && z(),
        r = o ? E.Ue.OutOfProcessLimitedInteraction : E.Ue.OutOfProcess;
      return R(C({}, a), {
        overlayMethod: e ? r : n ? (0, O.O4)(i).overlayMethod : E.Ue.Disabled,
        reason: "Normal case - overlayOOPEnabled: ".concat(e, ", overlayLegacyEnabled: ").concat(n, ", runningGameFullscreenType: ").concat(t)
      })
    }
    case l.aI.FULLSCREEN: {
      let e = (0, O.O4)(i),
        t = e.enabledLegacy && z(),
        n = t ? e.overlayMethod : E.Ue.Disabled;
      return R(C({}, e), {
        overlayMethod: n,
        reason: "Fullscreen - legacyEnabled: ".concat(t, ", newOverlayMethod: ").concat(n)
      })
    }
    case l.aI.UNKNOWN:
      return {
        source: E.yp.FULL_SCREEN_TYPE, enabledOOP: false, enabledLegacy: false, overlayMethod: E.Ue.Disabled, reason: "Unknown fullscreen type"
      };
    default:
      return {
        source: E.yp.DEFAULT, enabledOOP: false, enabledLegacy: false, overlayMethod: E.Ue.Disabled, reason: "Missing runningFullscreenType case: ".concat(t)
      }
  }
}
async function es(e) {
  if (ee(e)) {
    D.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")), await eh(new Set([e]));
    return
  }
  if (!X()) return void D.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
  let t = await ei(e);
  if (null == t) return void D.error("Failed to track game ".concat(e));
  K(e, "game_tracking_starting", {
    game_name: t.gameName,
    fullscreen_type: t.fullscreenType
  }), et(e, "state", E.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"), eU.emitChange(), D.verbose("Determining initial overlay method for pid ".concat(e));
  let n = await ec(e);
  D.verbose("Overlay method for pid ".concat(e, ": ").concat((0, O.gK)(n.overlayMethod))), er(e, E.sf.SCREEN_TYPE_RESOLUTION), await eu(e, n, "maybeTrackGame - 2"), em(O.T$), F = n.overlayMethod, eU.emitChange(), await o.A.updateTrackedGame(e, t)
}
async function eo(e) {
  var t, n, r;
  if (!ee(e)) return void D.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
  D.verbose("Untracking game ".concat(e));
  let i = Z(e),
    a = {
      source: null != (t = null == i ? true : i.source) ? t : E.yp.DEFAULT,
      enabledOOP: null != (n = null == i ? true : i.oopEnabled) && n,
      enabledLegacy: null != (r = null == i ? true : i.legacyEnabled) && r,
      overlayMethod: E.Ue.Disabled,
      reason: "Untracking game"
    };
  await eu(e, a, "maybeUntrackGame", true), J(e), eU.emitChange(), await o.A.updateTrackedGame(e, null)
}
async function el(e) {
  var t;
  let n = f.Ay.getGameOrTransformedSubgameForPID(e);
  if (null == n) return D.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.aI.UNKNOWN;
  let r = null != (t = null == n ? true : n.fullscreenType) ? t : l.aI.UNKNOWN;
  if (B.has(r)) {
    let t = await (0, O.E1)(e, (0, O.Ag)("first_fullscreen"));
    D.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t)
  }
  return r
}
async function ec(e) {
  let t = await el(e);
  if (H.has(t)) {
    let n = await (0, O.E1)(e, (0, O.mk)("initial_status"));
    null != n && (t = n)
  }
  if (t === l.aI.UNKNOWN) {
    let n = await (0, O.E1)(e, (0, O.mk)("initial_status"));
    null != n && (t = n)
  }
  let n = Z(e);
  return null == n ? (D.error("Tried to determine initial overlay method for untracked pid ".concat(e)), {
    source: E.yp.NO_TRACKED_GAME,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: E.Ue.Disabled,
    reason: "No tracked game found"
  }) : ea(n, t)
}
async function eu(e, t, n) {
  var r;
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    a = t.overlayMethod,
    s = a === E.Ue.Disabled ? i ? E.AR.OVERLAY_TEARING_DOWN : E.AR.OVERLAY_DISABLED : E.AR.WAITING_FOR_MODULE_TRACKING,
    l = "".concat(n, ": ").concat(t.reason);
  et(e, "state", s, l), et(e, "overlayMethod", a, l), et(e, "source", t.source, l), et(e, "oopEnabled", t.enabledOOP, l), et(e, "legacyEnabled", t.enabledLegacy, l), D.verbose("Updating overlay method for pid ".concat(e, ' "').concat(null == (r = Z(e)) ? true : r.gameName, '" to ').concat((0, O.gK)(a))), eU.emitChange();
  let c = Z(e);
  return null != c && await o.A.updateTrackedGame(e, c), o.A.updateOverlayMethod(e, a)
}
async function ed() {
  let e = new Set(f.Ay.getRunningGames().filter(e => f.Ay.getOverlayEnabledForGame(e)).map(e => e.pid)),
    t = new Set(Q()),
    n = new Set([...t].filter(t => !e.has(t)));
  for (let e of n) await eo(e), await (0, a.yy)(16);
  let r = new Set([...e].filter(e => !t.has(e)));
  for (let e of r) await es(e), await (0, a.yy)(16);
  let i = new Set([...t].filter(t => e.has(t)));
  await eh(i), (n.size > 0 || r.size > 0) && D.verbose("Tracked games have changes", {
    trackedPIDsNoLongerValid: n,
    validPIDsNotAlreadyTracked: r,
    pidsAlreadyTracked: i
  })
}
async function ef(e) {
  let t = false,
    n = Z(e);
  if (null == n) return D.error("Tried to determine overlay method swap for untracked pid ".concat(e)), false;
  if (y.Q.has(n.state)) return D.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), false;
  let r = await (0, O.E1)(e, 0);
  if (null == r) return D.error("Failed to get revised fullscreen type for pid ".concat(e)), false;
  n.fullscreenType !== r && D.verbose("Fullscreen type different in swap for pid ".concat(e), {
    oldFullscreenType: n.fullscreenType,
    newFullscreenType: r
  });
  let i = ea(n, r);
  if (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy || (k === m.UNSET_PID || null === k) && n.state === E.AR.OVERLAY_RENDERING) return t;
  let a = x === E.V6.OUT_OF_PROCESS_V3 || x === E.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
    s = x === E.V6.IN_PROCESS_V2,
    o = (0, O.e3)(r, q()),
    l = (0, O.Zj)(n, r, q());
  D.verbose("Overlay method different for pid ".concat(e), {
    oldOverlayMethod: n.overlayMethod,
    revisedFullscreenType: r,
    fullscreenHistory: n.fullscreenHistory,
    newOverlayGameStatus: i,
    shouldSwitchToHook: l,
    shouldSwitchToOutOfProcess: o,
    isForcedInProcess: s,
    isForcedOutOfProcess: a,
    legacyEnabled: z(),
    overlayEnabled: q()
  });
  let c = () => {
    D.verbose("Updating fullscreen type for pid ".concat(e), {
      oldFullscreenType: n.fullscreenType,
      newFullscreenType: r
    }), et(e, "fullscreenHistory", R(C({}, n.fullscreenHistory), {
      [Date.now()]: r
    }), "updateFullscreenType"), et(e, "fullscreenType", r, "updateFullscreenType"), eU.emitChange(), t = true
  };
  switch (i.overlayMethod) {
    case E.Ue.OutOfProcess:
    case E.Ue.OutOfProcessLimitedInteraction:
      (o && !s || a) && (c(), await e_(e, i));
      break;
    case E.Ue.Hook:
      (l && !a || s || z()) && (c(), await ep(e, i));
      break;
    case E.Ue.Disabled:
      c(), eu(e, i, "determineOverlayMethodSwap - disabled")
  }
  return t
}

function ep(e, t) {
  var n;
  return ee(e) ? (null == (n = Z(e)) ? true : n.overlayMethod) === E.Ue.Hook ? (D.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (D.verbose("Enabling hook for pid ".concat(e)), et(e, "hasChangedRenderMode", true, "enableHook"), eu(e, t, "enableHook")) : (D.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve())
}

function e_(e, t) {
  var n;
  return ee(e) ? (null == (n = Z(e)) ? true : n.overlayMethod) === t.overlayMethod ? (D.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (D.verbose("Enabling OOP for pid ".concat(e)), et(e, "hasChangedRenderMode", true, "enableOutOfProcess"), eu(e, t, "enableOutOfProcess")) : (D.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve())
}
async function eh(e) {
  let t = false;
  for (let n of e) t = await ef(n) || t, await (0, a.yy)(16);
  t && (D.info("determineFullscreenOverlayMethodSwaps has changes"), eU.emitChange(), K(null, "fullscreen_overlay_method_swap_changes", {
    tracked_game_pids: Array.from(e)
  }))
}

function em(e) {
  null == V && (__OVERLAY__ && D.error("Running Polling While in Overlay Context!"), V = setTimeout(async () => {
    V = null;
    let e = Q();
    e.length > 0 && (em(O.T$), await eh(new Set(e)))
  }, e))
}
async function eg(e, t) {
  if (!I.OX) return void D.verbose("setOverlayEnabled: not supported");
  if (D.info("setOverlayEnabled: supported", {
      newLegacyEnabled: e,
      newOopEnabled: t
    }), L = e, g.x.update({
      legacyEnabled: e,
      oopEnabled: t
    }), D.info("setOverlayEnabled", {
      newOopEnabled: t,
      newLegacyEnabled: e
    }), e || t) return void ev();
  for (let e of Q()) await eo(e), await (0, a.yy)(16)
}

function eE() {
  ed(), j = false, F = null, eL()
}

function eb(e) {
  let {
    legacyEnabled: t,
    oopEnabled: n
  } = e;
  return D.info("handleOverlaySetEnabled", {
    legacyEnabled: t,
    oopEnabled: n
  }), eg(t, n), true
}

function ey(e) {
  if (null != e.pids)
    for (let t of e.pids) es(t)
}

function eO(e) {
  for (let t of (__OVERLAY__ && D.error("Running handleRunningGamesChange While in Overlay Context!"), e.added)) es(t.pid);
  for (let t of e.removed) eo(t.pid)
}

function eA(e) {
  if (__OVERLAY__ && D.error("Running handleGameToggleOverlay While in Overlay Context!"), D.verbose("handleGameToggleOverlay", {
      action: e
    }), !X()) {
    if (D.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game) {
      let t = e.game.pid,
        n = Z(t);
      if (null != n) return eu(t, ea(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), true
    }
    returnfalse
  }
  if (!("pid" in e.game)) return D.verbose("handleGameToggleOverlay: game is not a PersistGame"), ed(), true;
  let t = e.game.pid,
    {
      newLegacyOverlayEnabledValue: n,
      newOverlayV3EnabledValue: r
    } = e;
  if (ee(t)) {
    let e = Z(t);
    (null == e ? true : e.legacyEnabled) !== n && et(t, "legacyEnabled", n, "handleGameToggleOverlay"), (null == e ? true : e.oopEnabled) !== r && et(t, "oopEnabled", null != r && r, "handleGameToggleOverlay")
  }
  let i = n && z(),
    a = null != r && r && q();
  return i || a ? (D.verbose("handleGameToggleOverlay: game enabled changed", {
    pid: t,
    legacyEnabled: i,
    overlayV3Enabled: a
  }), ee(t) ? ev() : es(t)) : eo(t), true
}
async function ev() {
  await eS(), await (0, a.yy)(2e3);
  let e = Q(),
    t = new Set([...f.Ay.getRunningGames().filter(e => f.Ay.getOverlayEnabledForGame(e)).map(e => e.pid), ...e]);
  for (let n of (D.info("Retracking ".concat(t.size, " games (").concat(e.length, " already tracked)")), t)) await es(n), await (0, a.yy)(16);
  D.info("Retracked ".concat(e.length, " games"))
}
async function eS() {
  for (let e of Q()) await eo(e), await (0, a.yy)(16)
}

function eI(e) {
  return D.error("Overlay reload for pid", {
    pid: e.pid
  }), ev(), true
}

function eT(e) {
  return D.error("Overlay crashed for pid ".concat(e.pid)), !!ee(e.pid) && (et(e.pid, "state", E.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), true)
}

function eC(e) {
  return x = e.mode, ev(), true
}

function eN(e) {
  if (null != Z(e.pid)) return et(e.pid, "state", e.overlayState, e.reason), D.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)), e.overlayState === E.AR.WAITING_FOR_POPOUT_OPEN || e.overlayState === E.AR.WAITING_FOR_OVERLAY_OPEN ? er(e.pid, E.sf.MODULE_TRACKING) : e.overlayState === E.AR.OVERLAY_RENDERING && er(e.pid, E.sf.OVERLAY_RENDERING), true
}

function eR() {
  return ev(), true
}

function ew(e) {
  return e.mode === E.x7.TrackFocusPIDs && (Y = e.enabled), true
}

function eP() {
  return W = new c.A(1e4), true
}

function eD(e) {
  if (k = e.pid, Y) {
    var t;
    let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
    W.push(n)
  }
  return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), true)
}

function ex(e) {
  o.A.updateOverlayState(e.pid, E.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"), ee(e.pid) && et(e.pid, "successfullyShown", true, "handleOverlaySuccessfullyShown"), K(e.pid, "overlay_successfully_shown", {
    pid: e.pid
  });
  let t = Z(e.pid);
  null != t && o.A.updateTrackedGame(e.pid, t)
}

function eL() {
  d.A.hasLoadedExperiments && !j && (j = true, eg(g.x.legacyEnabled, g.x.oopEnabled))
}

function ej() {
  j = false, F = null
}

function eM() {
  j = false, F = null, eS()
}
class ek extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.default, d.A, _.A, A.A, f.Ay, S.A), this.syncWith([d.A], eL)
  }
  getDevToolsFocusedPidsWithTimestamp() {
    return W
  }
  getHasLoadedExperiments() {
    return j
  }
  getForcedRenderMode() {
    return x
  }
  isAnyOverlayRendering() {
    return this.getOverlayRenderingTrackedGames().length > 0
  }
  getOverlayMethod(e) {
    var t, n;
    return __OVERLAY__ ? E.Ue.Hook : null != (t = null == (n = Z(e)) ? true : n.overlayMethod) ? t : E.Ue.Disabled
  }
  isOverlayOOPEnabledForPid(e) {
    let t = this.getOverlayMethod(e);
    return t === E.Ue.OutOfProcess || t === E.Ue.OutOfProcessLimitedInteraction
  }
  hasChangedRenderMode(e) {
    var t, n;
    return null != (t = null == (n = Z(e)) ? true : n.hasChangedRenderMode) && t
  }
  getTrackedGameByPid(e) {
    return Z(e)
  }
  getTrackedGames() {
    return U
  }
  getClosedTrackedGamesHistory() {
    return G
  }
  getGameOverlayStatus(e) {
    let t = Z(e.pid);
    return null == t ? null : C({
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
    let t = Z(e.pid);
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
    if (null != e) return null != (t = null == (n = Z(e)) ? true : n.overlayMethod) ? t : true
  }
  getMostRecentOverlayRenderMethod() {
    return F
  }
  getOverlayRenderingTrackedGames() {
    return Object.values(U).filter(e => e.overlayMethod !== E.Ue.Disabled && e.state === E.AR.OVERLAY_RENDERING)
  }
}
T(ek, "displayName", "OverlayRenderStore");
let eU = new ek(Chunk73153.h, !M ? {} : {
    CONNECTION_OPEN: eE,
    LOGIN: ej,
    LOGOUT: eM,
    EXPERIMENT_OVERRIDE_BUCKET: eE,
    OVERLAY_SET_ENABLED: eb,
    GAME_LAUNCH_SUCCESS: ey,
    RUNNING_GAMES_CHANGE: eO,
    RUNNING_GAME_TOGGLE_OVERLAY: eA,
    OVERLAY_FORCE_RENDER_MODE: eC,
    OVERLAY_UPDATE_OVERLAY_STATE: eN,
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eR,
    OVERLAY_CRASHED: eT,
    OVERLAY_RELOAD: eI,
    OVERLAY_FOCUSED: eD,
    OVERLAY_SUCCESSFULLY_SHOWN: ex,
    OVERLAY_RENDER_DEBUG_MODE: ew,
    OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eP
  }),
  eG = eU