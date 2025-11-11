/** Chunk was on web.js **/
/** chunk id: 371651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => eG
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

function A(e, t, n) {
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
      A(e, t, n[t])
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

function P(e, t) {
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
let D = new Chunk710845.Z("OverlayRenderStore"),
  x = Chunk837268.R5.UNSET,
  L = false,
  M = false,
  j = false,
  k = (0, Chunk358085.isWindows)() && Chunk358085.isPlatformEmbedded && !__OVERLAY__,
  U = null,
  G = {},
  B = null,
  Z = null,
  F = new Set([Chunk593472.Jx.FULLSCREEN, Chunk593472.Jx.BORDERLESS_FULLSCREEN, Chunk593472.Jx.UNKNOWN, Chunk593472.Jx.MINIMIZED]),
  V = new Set([Chunk593472.Jx.MINIMIZED, Chunk593472.Jx.UNKNOWN]),
  H = false,
  Y = new Chunk188274.Z(1e4);

function W(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : g.l6.Info;
  (0, S._l)({
    pid: e,
    name: t,
    type: g.C7.Renderer,
    data: n,
    logType: r
  })
}

function K() {
  return L
}

function z() {
  return M
}

function q() {
  return z() || K()
}

function X(e) {
  var t;
  return null != (t = G[e]) ? t : null
}

function Q() {
  return Object.keys(G).map(Number)
}

function J(e, t) {
  var n;
  let r = null == (n = G[e]) ? true : n.state;
  G = R(C({}, G), {
    [e]: C({}, t)
  }), r !== t.state && s.Z.trackOverlayStateChanged(e, r, t.state)
}

function $(e) {
  delete G[e]
}

function ee(e) {
  return e in G
}

function et(e, t, n) {
  let r = X(e);
  if (null == r) return void D.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
  let i = C({}, r);
  i[t] = n, J(e, i)
}

function en() {
  return {
    startTrackingTimestamp: Date.now()
  }
}

function er(e, t) {
  let n = X(e);
  if (null == n) return;
  let r = n.timer;
  switch (t) {
    case b.zE.SCREEN_TYPE_RESOLUTION:
      r.screenTypeResolutionTimestamp = Date.now();
      break;
    case b.zE.MODULE_TRACKING:
      r.moduleTrackingTimestamp = Date.now();
      break;
    case b.zE.OVERLAY_RENDERING:
      r.overlayRenderingTimestamp = Date.now()
  }
  et(e, "timer", r), eU.emitChange()
}
async function ei(e) {
  var t, n, r, i;
  let a = X(e);
  if (null != a) return a;
  let o = f.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == o) return D.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
  let s = (0, f.b6)(o),
    {
      enabledOOP: l,
      enabledLegacy: c
    } = s,
    u = P(s, ["enabledOOP", "enabledLegacy"]),
    d = p.Z.getGameByName(o.name),
    _ = null != (t = await (0, v.hj)(e, 0)) ? t : o.fullscreenType;
  D.verbose("Tracking game ".concat(e, " for overlay"));
  let h = R(C({}, u), {
    pid: e,
    oopEnabled: l,
    legacyEnabled: c,
    applicationId: null != (n = null == d ? true : d.id) ? n : null,
    gameName: null != (r = o.name) ? r : null,
    state: b.mM.INITIALIZING,
    timer: en(),
    fullscreenType: _,
    previousFullscreenType: o.fullscreenType,
    hasChangedRenderMode: false,
    supportsOutOfProcess: null == (i = null == d ? true : d.supportsOutOfProcessOverlay) || i,
    successfullyShown: false
  });
  return J(e, h), eU.emitChange(), h
}

function ea(e, t) {
  var n, r;
  switch (x) {
    case b.R5.UNSET:
      break;
    case b.R5.IN_PROCESS_V2:
      return {
        source: b.d0.DEV_OVERRIDE, enabledOOP: false, enabledLegacy: true, overlayMethod: b.gl.Hook
      };
    case b.R5.OUT_OF_PROCESS_V3:
      return {
        source: b.d0.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: b.gl.OutOfProcess
      };
    case b.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
      return {
        source: b.d0.DEV_OVERRIDE, enabledOOP: true, enabledLegacy: false, overlayMethod: b.gl.OutOfProcessLimitedInteraction
      }
  }
  if (!q()) return {
    source: b.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: b.gl.Disabled
  };
  let i = f.ZP.getGameOrTransformedSubgameForPID(e.pid);
  if (null == i) return {
    source: b.d0.DEFAULT,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: b.gl.Disabled
  };
  let a = (0, f.b6)(i);
  if (!(a.enabledLegacy || a.enabledOOP)) return {
    source: a.source,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: b.gl.Disabled
  };
  if (!(e.oopEnabled || e.legacyEnabled)) return {
    source: b.d0.USER_OVERRIDE,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: b.gl.Disabled
  };
  if (!(0, y.NW)("determineOverlayMethod", false)) {
    let e = (0, v.qT)(i),
      t = e.enabledLegacy && K();
    return R(C({}, e), {
      overlayMethod: t ? e.overlayMethod : b.gl.Disabled
    })
  }
  if (!z() && K()) {
    let e = (0, v.qT)(i);
    return R(C({}, e), {
      overlayMethod: e.enabledLegacy ? e.overlayMethod : b.gl.Disabled
    })
  }
  if (!(0, m.supportsOutOfProcess)()) return R(C({}, (0, v.qT)(i)), {
    source: b.d0.NO_OUT_OF_PROCESS_SUPPORT
  });
  if (!a.enabledOOP && a.enabledLegacy) return K() ? R(C({}, (0, v.qT)(i)), {
    source: b.d0.LEGACY_ENABLED
  }) : R(C({}, a), {
    overlayMethod: b.gl.Disabled,
    source: b.d0.LEGACY_ENABLED
  });
  let o = null == (n = p.Z.getGameByName(i.name)) ? true : n.id,
    s = (0, v.qc)(i) || I.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
  switch (t) {
    case l.Jx.MINIMIZED:
    case l.Jx.WINDOWED:
    case l.Jx.MAXIMIZED:
    case l.Jx.BORDERLESS_FULLSCREEN: {
      let e = a.enabledOOP && z(),
        t = a.enabledLegacy && K(),
        n = s ? b.gl.OutOfProcessLimitedInteraction : b.gl.OutOfProcess;
      return R(C({}, a), {
        overlayMethod: e ? n : t ? (0, v.qT)(i).overlayMethod : b.gl.Disabled
      })
    }
    case l.Jx.FULLSCREEN: {
      let e = (0, v.qT)(i),
        t = e.enabledLegacy && K();
      return R(C({}, e), {
        overlayMethod: t ? e.overlayMethod : b.gl.Disabled
      })
    }
    case l.Jx.UNKNOWN:
      return {
        source: b.d0.FULL_SCREEN_TYPE, enabledOOP: false, enabledLegacy: false, overlayMethod: b.gl.Disabled
      };
    default:
      return {
        source: b.d0.DEFAULT, enabledOOP: false, enabledLegacy: false, overlayMethod: b.gl.Disabled
      }
  }
}
async function eo(e) {
  if (ee(e)) {
    D.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")), await eh(new Set([e]));
    return
  }
  if (!q()) return void D.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
  let t = await ei(e);
  if (null == t) return void D.error("Failed to track game ".concat(e));
  W(e, "game_tracking_starting", {
    game_name: t.gameName,
    fullscreen_type: t.fullscreenType
  }), et(e, "state", b.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION), eU.emitChange(), D.verbose("Determining initial overlay method for pid ".concat(e));
  let n = await ec(e);
  D.verbose("Overlay method for pid ".concat(e, ": ").concat((0, v.P_)(n.overlayMethod))), er(e, b.zE.SCREEN_TYPE_RESOLUTION), await eu(e, n), em(v.HD), Z = n.overlayMethod, eU.emitChange(), await s.Z.updateTrackedGame(e, t)
}
async function es(e) {
  var t, n, r;
  if (!ee(e)) return void D.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
  D.verbose("Untracking game ".concat(e));
  let i = X(e),
    a = {
      source: null != (t = null == i ? true : i.source) ? t : b.d0.DEFAULT,
      enabledOOP: null != (n = null == i ? true : i.oopEnabled) && n,
      enabledLegacy: null != (r = null == i ? true : i.legacyEnabled) && r,
      overlayMethod: b.gl.Disabled
    };
  await eu(e, a, true), $(e), eU.emitChange(), await s.Z.updateTrackedGame(e, null)
}
async function el(e) {
  var t;
  let n = f.ZP.getGameOrTransformedSubgameForPID(e);
  if (null == n) return D.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.Jx.UNKNOWN;
  let r = null != (t = null == n ? true : n.fullscreenType) ? t : l.Jx.UNKNOWN;
  if (F.has(r)) {
    let t = await (0, v.hj)(e, (0, v.O0)("first_fullscreen"));
    D.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t)
  }
  return r
}
async function ec(e) {
  let t = await el(e);
  if (V.has(t)) {
    let n = await (0, v.hj)(e, (0, v.aW)("initial_status"));
    null != n && (t = n)
  }
  if (t === l.Jx.UNKNOWN) {
    let n = await (0, v.hj)(e, (0, v.aW)("initial_status"));
    null != n && (t = n)
  }
  let n = X(e);
  return null == n ? (D.error("Tried to determine initial overlay method for untracked pid ".concat(e)), {
    source: b.d0.NO_TRACKED_GAME,
    enabledOOP: false,
    enabledLegacy: false,
    overlayMethod: b.gl.Disabled
  }) : ea(n, t)
}
async function eu(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = t.overlayMethod;
  et(e, "state", i === b.gl.Disabled ? r ? b.mM.OVERLAY_TEARING_DOWN : b.mM.OVERLAY_DISABLED : b.mM.WAITING_FOR_MODULE_TRACKING), et(e, "overlayMethod", i), et(e, "source", t.source), et(e, "oopEnabled", t.enabledOOP), et(e, "legacyEnabled", t.enabledLegacy), D.verbose("Updating overlay method for pid ".concat(e, ' "').concat(null == (n = X(e)) ? true : n.gameName, '" to ').concat((0, v.P_)(i))), eU.emitChange();
  let a = X(e);
  return null != a && await s.Z.updateTrackedGame(e, a), s.Z.updateOverlayMethod(e, i)
}
async function ed() {
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => f.ZP.getOverlayEnabledForGame(e)).map(e => e.pid)),
    t = new Set(Q()),
    n = new Set([...exports].filter(t => !e.has(t)));
  for (let e of require) await es(module), await (0, Chunk379649._v)(16);
  let r = new Set([...module].filter(e => !t.has(e)));
  for (let e of r) await eo(module), await (0, Chunk379649._v)(16);
  let i = new Set([...exports].filter(t => e.has(t)));
  await eh(Chunk442837), (require.size > 0 || r.size > 0) && D.verbose("Tracked games have changes", {
    trackedPIDsNoLongerValid: require,
    validPIDsNotAlreadyTracked: r,
    pidsAlreadyTracked: Chunk442837
  })
}
async function ef(e) {
  let t = false,
    n = X(e);
  if (null == n) return D.error("Tried to determine overlay method swap for untracked pid ".concat(e)), false;
  if (O.l.has(n.state)) return D.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), false;
  let r = await (0, v.hj)(e, 0);
  if (null == r) return D.error("Failed to get revised fullscreen type for pid ".concat(e)), false;
  n.fullscreenType !== r && D.verbose("Fullscreen type different in swap for pid ".concat(e), {
    oldFullscreenType: n.fullscreenType,
    newFullscreenType: r
  });
  let i = ea(n, r);
  if (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy || (U === m.UNSET_PID || null === U) && n.state === b.mM.OVERLAY_RENDERING) return t;
  let a = x === b.R5.OUT_OF_PROCESS_V3 || x === b.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
    o = x === b.R5.IN_PROCESS_V2,
    s = (0, v.PD)(r, z()),
    l = (0, v.DH)(n, r, z());
  D.verbose("Overlay method different for pid ".concat(e), {
    oldOverlayMethod: n.overlayMethod,
    revisedFullscreenType: r,
    previousFullscreenType: n.previousFullscreenType,
    newOverlayGameStatus: i,
    shouldSwitchToHook: l,
    shouldSwitchToOutOfProcess: s,
    isForcedInProcess: o,
    isForcedOutOfProcess: a,
    legacyEnabled: K(),
    overlayEnabled: z()
  });
  let c = () => {
    D.verbose("Updating fullscreen type for pid ".concat(e), {
      oldFullscreenType: n.fullscreenType,
      newFullscreenType: r
    }), et(e, "previousFullscreenType", n.fullscreenType), et(e, "fullscreenType", r), eU.emitChange(), t = true
  };
  switch (i.overlayMethod) {
    case b.gl.OutOfProcess:
    case b.gl.OutOfProcessLimitedInteraction:
      (s && !o || a) && (c(), await ep(e, i));
      break;
    case b.gl.Hook:
      (l && !a || o || K()) && (c(), await e_(e, i));
      break;
    case b.gl.Disabled:
      c(), eu(e, i)
  }
  return t
}

function e_(e, t) {
  var n;
  return ee(e) ? (null == (n = X(e)) ? true : n.overlayMethod) === b.gl.Hook ? (D.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (D.verbose("Enabling hook for pid ".concat(e)), et(e, "hasChangedRenderMode", true), eu(e, t)) : (D.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve())
}

function ep(e, t) {
  var n;
  return ee(e) ? (null == (n = X(e)) ? true : n.overlayMethod) === t.overlayMethod ? (D.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve()) : (D.verbose("Enabling OOP for pid ".concat(e)), et(e, "hasChangedRenderMode", true), eu(e, t)) : (D.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve())
}
async function eh(e) {
  let t = false;
  for (let n of e) t = await ef(n) || t, await (0, a._v)(16);
  t && (D.info("determineFullscreenOverlayMethodSwaps has changes"), eU.emitChange(), W(null, "fullscreen_overlay_method_swap_changes", {
    tracked_game_pids: Array.from(e)
  }))
}

function em(e) {
  null == B && (__OVERLAY__ && D.error("Running Polling While in Overlay Context!"), B = setTimeout(async () => {
    B = null;
    let e = Q();
    e.length > 0 && (em(v.HD), await eh(new Set(e)))
  }, e))
}
async function eg(e, t) {
  if (!T.iP) return void D.verbose("setOverlayEnabled: not supported");
  D.info("setOverlayEnabled: supported", {
    newLegacyEnabled: e,
    newOopEnabled: t
  });
  let n = e !== L,
    r = t !== M;
  if (L = e, M = t, E.v.update({
      legacyEnabled: L,
      oopEnabled: M
    }), D.info("setOverlayEnabled", {
      newOopEnabled: t,
      newLegacyEnabled: e
    }), M && r && (0, m.setOutOfProcessSupport)(true), L || M) n && D.info("Legacy change"), r && D.info("OOP change"), eI();
  else
    for (let e of Q()) await es(e), await (0, a._v)(16)
}

function eE() {
  ed(), j = false, Z = null, eL()
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
    for (let t of e.pids) eo(t)
}

function eO(e) {
  for (let t of (__OVERLAY__ && D.error("Running handleRunningGamesChange While in Overlay Context!"), e.added)) eo(t.pid);
  for (let t of e.removed) es(t.pid)
}

function ev(e) {
  if (__OVERLAY__ && D.error("Running handleGameToggleOverlay While in Overlay Context!"), D.verbose("handleGameToggleOverlay", {
      action: e
    }), !q()) {
    if (D.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game) {
      let t = e.game.pid,
        n = X(t);
      if (null != n) return eu(t, ea(n, n.fullscreenType)), true
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
    let e = X(t);
    (null == e ? true : e.legacyEnabled) !== n && et(t, "legacyEnabled", n), (null == e ? true : e.oopEnabled) !== r && et(t, "oopEnabled", null != r && r)
  }
  let i = n && K(),
    a = null != r && r && z();
  return i || a ? (D.verbose("handleGameToggleOverlay: game enabled changed", {
    pid: t,
    legacyEnabled: i,
    overlayV3Enabled: a
  }), ee(t) ? eI() : eo(t)) : es(t), true
}
async function eI() {
  await eS(), await (0, Chunk379649._v)(2e3);
  let e = Q(),
    t = new Set([...Chunk594190.ZP.getRunningGames().filter(e => f.ZP.getOverlayEnabledForGame(e)).map(e => e.pid), ...module]);
  for (let n of (D.info("Retracking ".concat(exports.size, " games (").concat(module.length, " already tracked)")), exports)) await eo(require), await (0, Chunk379649._v)(16);
  D.info("Retracked ".concat(module.length, " games"))
}
async function eS() {
  for (let e of Q()) await es(module), await (0, Chunk379649._v)(16)
}

function eT(e) {
  return D.error("Overlay reload for pid", {
    pid: e.pid
  }), eI(), true
}

function eA(e) {
  return D.error("Overlay crashed for pid ".concat(e.pid)), !!ee(e.pid) && (et(e.pid, "state", b.mM.OVERLAY_CRASHED), true)
}

function eC(e) {
  return x = e.mode, eI(), true
}

function eN(e) {
  if (null != X(e.pid)) return et(e.pid, "state", e.overlayState), D.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)), e.overlayState === b.mM.WAITING_FOR_POPOUT_OPEN || e.overlayState === b.mM.WAITING_FOR_OVERLAY_OPEN ? er(e.pid, b.zE.MODULE_TRACKING) : e.overlayState === b.mM.OVERLAY_RENDERING && er(e.pid, b.zE.OVERLAY_RENDERING), true
}

function eR() {
  return eI(), true
}

function eP(e) {
  return e.mode === b.GO.TrackFocusPIDs && (H = e.enabled), true
}

function ew() {
  return Y = new Chunk188274.Z(1e4), true
}

function eD(e) {
  if (U = e.pid, H) {
    var t;
    let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
    Y.push(n)
  }
  return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), true)
}

function ex(e) {
  s.Z.updateOverlayState(e.pid, b.mM.OVERLAY_RENDERING), ee(e.pid) && et(e.pid, "successfullyShown", true), W(e.pid, "overlay_successfully_shown", {
    pid: e.pid
  });
  let t = X(e.pid);
  null != t && s.Z.updateTrackedGame(e.pid, t)
}

function eL() {
  Chunk353926.Z.hasLoadedExperiments && !j && (j = true, eg(Chunk454991.v.legacyEnabled, Chunk454991.v.oopEnabled))
}

function eM() {
  j = false, Z = null
}

function ej() {
  j = false, Z = null, eS()
}
class ek extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk353926.Z, Chunk77498.Z, Chunk624864.Z, Chunk594190.ZP), this.syncWith([Chunk353926.Z], eL)
  }
  getDevToolsFocusedPidsWithTimestamp() {
    return Y
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
    return __OVERLAY__ ? b.gl.Hook : null != (n = null == (t = X(e)) ? true : t.overlayMethod) ? n : b.gl.Disabled
  }
  isOverlayOOPEnabledForPid(e) {
    let t = this.getOverlayMethod(e);
    return t === b.gl.OutOfProcess || t === b.gl.OutOfProcessLimitedInteraction
  }
  hasChangedRenderMode(e) {
    var t, n;
    return null != (n = null == (t = X(e)) ? true : t.hasChangedRenderMode) && n
  }
  getTrackedGameByPid(e) {
    return X(e)
  }
  getTrackedGames() {
    return G
  }
  getGameOverlayStatus(e) {
    let t = X(e.pid);
    return null == t ? null : C({
      enabledOOP: t.oopEnabled,
      enabledLegacy: t.legacyEnabled
    }, t)
  }
  getGlobalEnabledStatus() {
    return {
      oopEnabled: z(),
      legacyEnabled: K()
    }
  }
  getAnyGlobalEnabledOverlay() {
    return z() || K()
  }
  getPerGameEnabledStatus(e) {
    if (null == e) return {
      oopEnabled: false,
      legacyEnabled: false
    };
    let t = X(e.pid);
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
    if (null != e) return null != (n = null == (t = X(e)) ? true : t.overlayMethod) ? n : true
  }
  getMostRecentOverlayRenderMethod() {
    return Z
  }
  getOverlayRenderingTrackedGames() {
    return Object.values(G).filter(e => e.overlayMethod !== b.gl.Disabled && e.state === b.mM.OVERLAY_RENDERING)
  }
}
A(ek, "displayName", "OverlayRenderStore");
let eU = new ek(Chunk570140.Z, !k ? {} : {
    CONNECTION_OPEN: eE,
    LOGIN: eM,
    LOGOUT: ej,
    EXPERIMENT_OVERRIDE_BUCKET: eE,
    OVERLAY_SET_ENABLED: eb,
    GAME_LAUNCH_SUCCESS: ey,
    RUNNING_GAMES_CHANGE: eO,
    RUNNING_GAME_TOGGLE_OVERLAY: ev,
    OVERLAY_FORCE_RENDER_MODE: eC,
    OVERLAY_UPDATE_OVERLAY_STATE: eN,
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eR,
    OVERLAY_CRASHED: eA,
    OVERLAY_RELOAD: eT,
    OVERLAY_FOCUSED: eD,
    OVERLAY_SUCCESSFULLY_SHOWN: ex,
    OVERLAY_RENDER_DEBUG_MODE: eP,
    OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: ew
  }),
  eG = eU