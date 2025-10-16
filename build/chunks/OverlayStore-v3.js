/** Chunk was on web.js **/
/** chunk id: 610394, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  ZP: () => ta
}), require("./388685.js"), require("./415506.js");
var i, Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk353926 = require("./353926.js"),
  Chunk594190 = require("./594190.js"),
  Chunk928518 = require("./928518.js"),
  Chunk314897 = require("./314897.js"),
  Chunk355863 = require("./355863.js"),
  Chunk626135 = require("./626135.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk427860 = require("./427860.js"),
  Chunk41534 = require("./41534.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk503522 = require("./503522.js"),
  Chunk829907 = require("./829907.js"),
  Chunk398269 = require("./398269.jsx"),
  Chunk987650 = require("./987650.js"),
  Chunk757744 = require("./757744.js"),
  Chunk501787 = require("./501787.js"),
  Chunk981631 = require("./981631.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class k {
  constructor() {
    D(this, "gpuBoostRequests", new Set), D(this, "isGPUBoosted", false), D(this, "isDisabledGPUBoost", false), D(this, "toggleGPUBoost", (e, t) => {
      t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests()
    }), D(this, "toggleDisabledGPUBoost", e => {
      this.isDisabledGPUBoost = e, this.flushGPUBoostRequests()
    }), D(this, "resetGPUBoosts", () => {
      this.gpuBoostRequests.clear(), this.flushGPUBoostRequests()
    }), D(this, "shouldBoostGPU", () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0), D(this, "flushGPUBoostRequests", async () => {
      var e, t, n;
      try {
        let n = this.shouldBoostGPU();
        if (this.isGPUBoosted === require) return;
        let r = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getGpuProcessId) ? true : module.call(exports));
        if (null == r) return;
        Chunk998502.ZP.SetGPUBoostEnabledByPid(r, require) && (this.isGPUBoosted = require), ti.emitChange()
      } catch (e) {
        (null == (n = module.message) ? true : require.includes("IPC method called after context was released")) && this.resetGPUBoosts(), j.error("Error during GPU boost request flush:", module), eh(null != Q ? Q : Chunk145597.UNSET_PID, module)
      }
    })
  }
}
let j = new Chunk710845.Z("OverlayStoreV3");

function U(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : y.l6.Info;
  y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.OOPModule, e, r), ti.emitChange()
}

function G(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : y.l6.Info;
  y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.Flux, e, r), ti.emitChange()
}
let B = new Set,
  Z = new Set,
  F = {},
  V = new k,
  H = new Set,
  Y = null,
  W = false,
  K = null,
  z = null,
  q = null,
  X = null,
  Q = null,
  J = null,
  $ = null,
  ee = {},
  et = {},
  en = false,
  er = Chunk837268.R5.UNSET,
  ei = null,
  ea = null,
  eo = {
    popoutOpened: false,
    windowHandleSentToNative: false,
    hasUseEffectFired: false,
    trackedPidFocused: false,
    reactInitializationStarted: false,
    cssLoaded: false,
    showInactiveCalled: false,
    allDone: false,
    errorMessage: null
  };

function es() {
  eo = {
    popoutOpened: false,
    windowHandleSentToNative: false,
    hasUseEffectFired: false,
    trackedPidFocused: false,
    reactInitializationStarted: false,
    cssLoaded: false,
    showInactiveCalled: false,
    allDone: false,
    errorMessage: null
  }
}
let el = 3e4;
class ec {
  _setCaptureZones(e) {
    try {
      let t = e.map(e => ({
        name: e.name,
        left: e.left,
        top: e.top,
        right: e.right,
        bottom: e.bottom
      }));
      U(Q, "capture_zones_set", {
        capture_zones: t,
        rawZones: e
      }), null == Y || Y.setCaptureZones(t)
    } catch (e) {
      j.error("Error setting capture zones:", e), eh(null != Q ? Q : b.UNSET_PID, e)
    }
  }
  getClickZoneByTimerId(e) {
    return Object.keys(this.clickZoneTimers).filter(t => this.clickZoneTimers[t] === e)
  }
  hasStoredClickZones() {
    return this.focusLostStoredClickZones.length > 0 && 0 === this.clickZones.length
  }
  triggerClickZoneTimer(e) {
    let t = this.getClickZoneByTimerId(e);
    for (let n of (null != e && clearTimeout(e), t)) delete this.clickZoneTimers[n];
    let n = this.focusLostStoredClickZones.filter(e => !t.includes(e.name));
    this.hasStoredClickZones() || (this.clickZones = n, this._setCaptureZones(n)), this.focusLostStoredClickZones = [...n]
  }
  setClickZones(e) {
    if (!W) {
      if (0 === this.clickZones.length) return;
      this.clearClickZones();
      return
    }
    this.clickZones = e, this.focusLostStoredClickZones = [...e];
    try {
      let t = setTimeout(() => {
          this.triggerClickZoneTimer(t)
        }, el),
        n = e.map(e => {
          let n = {
            name: e.name,
            left: e.left,
            top: e.top,
            right: e.right,
            bottom: e.bottom
          };
          return this.clickZoneTimers[e.name] = t, n
        });
      null == Y || Y.setCaptureZones(n)
    } catch (e) {
      j.error("Error setting capture zones:", e), eh(null != Q ? Q : b.UNSET_PID, e)
    }
  }
  clearClickZones() {
    for (let e of Object.values(this.clickZoneTimers)) null != module && clearTimeout(module);
    this.clickZoneTimers = {}, this.clickZones = [], this.focusLostStoredClickZones = [], this._setCaptureZones([])
  }
  storeClickZones() {
    0 !== this.clickZones.length && (this.focusLostStoredClickZones = [...this.clickZones], this.clickZones = [], this._setCaptureZones([]))
  }
  refreshClickZones() {
    this.clickZones.length > 0 || (this.clickZones = [...this.focusLostStoredClickZones], this._setCaptureZones(this.clickZones))
  }
  constructor() {
    D(this, "clickZones", []), D(this, "focusLostStoredClickZones", []), D(this, "clickZoneTimers", {})
  }
}
let eu = new ec;

function ed(e) {
  var t;
  return null != (t = F[e]) ? t : {}
}

function ef(e, t) {
  var n, r;
  let i = null == (n = F[e]) ? true : n.error,
    a = null == (r = F[e]) ? true : r.error_description;
  F[e] = L({}, F[e], t), null != i && (F[e].error = i), null != a && (F[e].error_description = a)
}

function e_(e) {
  var t, n, r;
  if (null != F[e]) return;
  let i = _.ZP.getGameOrTransformedSubgameForPID(e);
  F[e] = {
    overlay_method: I.gl[null != (t = et[e]) ? t : I.gl.OutOfProcess],
    success: false,
    game_name: null != (n = null == i ? true : i.name) ? n : null,
    game_id: null != (r = null == i ? true : i.id) ? r : null,
    error: null,
    error_description: null,
    renderer_started: false,
    renderer_started_after: null,
    renderer_ready_after: null,
    renderer_load_succeeded_after: null,
    renderer_crash_count: 0,
    renderer_load_failures: 0,
    renderer_ignored_paints: 0,
    host_crash_count: 0
  }
}

function ep(e, t) {
  let n = _.ZP.getGameOrTransformedSubgameForPID(e);
  return {
    crash_type: t,
    gameName: null == n ? true : n.name
  }
}

function eh(e, t) {
  var n;
  e !== b.UNSET_PID && (ef(e, {
    host_crash_count: 1,
    error: t.message,
    error_description: t.stack
  }), (0, O.V6)(t, et[e], {
    extra: ep(e, "host")
  }), y.JC.addModuleBreadcrumb("host_crash", {
    error: t.message,
    error_description: null != (n = t.stack) ? n : ""
  }, y.C7.NativeOOP, e, y.l6.Error), eu.clearClickZones(), ti.emitChange())
}

function em(e, t) {
  var n;
  e !== b.UNSET_PID && (ef(e, {
    renderer_crash_count: 1,
    error: t.message,
    error_description: t.stack
  }), (0, O.V6)(t, et[e], {
    extra: ep(e, "renderer")
  }), y.JC.addModuleBreadcrumb("renderer_crash", {
    error: t.message,
    error_description: null != (n = t.stack) ? n : ""
  }, y.C7.OOPModule, e, y.l6.Error), eu.clearClickZones(), ti.emitChange())
}

function eg(e, t) {
  try {
    if (null != t && (et[e] = t), null == Y || Y.trackGame(e), e_(e), B.has(e)) return;
    B.add(e), G(e, "maybeTrackGame", {
      newOverlayMethod: null != t ? I.gl[t] : null
    }), c.Z.updateOverlayState(e, I.mM.WAITING_FOR_POPOUT_OPEN)
  } catch (t) {
    j.error("Error tracking game:", t), eh(e, t)
  }
}

function eE(e) {
  try {
    let t = et[e],
      n = ee[e];
    G(e, "removeTrackedGame", {
      overlayMethod: null != t ? I.gl[t] : null,
      overlayState: n
    }), null == Y || Y.untrackGame(e), B.delete(e), delete ee[e], delete et[e], j.verbose("Removing tracked game ".concat(e)), H.delete(e)
  } catch (t) {
    j.error("Error removing tracked game:", t), eh(e, t)
  }
}

function eb() {
  try {
    for (let e of B) null == Y || Y.untrackGame(module);
    B.clear(), U(null, "clearTrackedGames"), ee = {}, et = {}, H.clear(), j.verbose("Cleared all tracked games")
  } catch (e) {
    j.error("Error clearing tracked games:", module), eh(Chunk145597.UNSET_PID, module)
  }
}

function ey() {
  return (0, Chunk32300.NW)("overlay_store_v3", false)
}

function eO() {
  if (!W) return void eb();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => _.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...B].filter(t => !e.has(t)))) eE(exports);
  for (let e of B) eg(module)
}

function ev(e) {
  if (null == Y) return void j.warn("Overlay module not initialized during lock attempt");
  try {
    let t = !e;
    Y.setInteractionEnabled(t), V.toggleGPUBoost(I.zS.OVERLAY_UNLOCKED, t)
  } catch (e) {
    j.error("Error during overlay lock:", e), eh(null != Q ? Q : b.UNSET_PID, e)
  }
}

function eI(e) {
  let t = _.ZP.getGameOrTransformedSubgameForPID(e);
  c.Z.setAssociatedGame(null != Q ? Q : b.UNSET_PID, e, t)
}
async function eT() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 500,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3;
  for (let i = 0; i < exports; i++) {
    let a = i + 1 >= exports;
    try {
      var n, r;
      let e = null != (r = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (n = Chunk579806.Z.window) ? true : require.getNativeHandle(Chunk501787.$J))) ? r : "";
      if ("" !== module) return module
    } catch (e) {
      if (Chunk348327) throw module;
      j.error("Error getting native window handle, retrying...", module)
    }
    if (Chunk348327) {
      j.error("Failed to get native window handle, giving up");
      break
    }
    j.info("Failed to get window handle on attempt ".concat(i + 1, " of ").concat(exports));
    let o = Math.pow(2, i + 1) * module;
    await new Promise(e => setTimeout(e, o))
  }
  return null
}
async function eS() {
  let e;
  if (null == Chunk928518.Z.getWindow(Chunk501787.$J)) return;
  j.warn("Waiting for previous overlay popout to be destroyed.");
  let t = new Promise(e => {
    setTimeout(() => {
      e()
    }, 5e3)
  });

  function n() {
    null == Chunk928518.Z.getWindow(Chunk501787.$J) && (null == module || module())
  }
  let r = new Promise(t => {
    e = t, p.Z.addChangeListener(n)
  });
  try {
    await Promise.race([exports, r])
  } finally {
    Chunk928518.Z.removeChangeListener(require)
  }
  null != Chunk928518.Z.getWindow(Chunk501787.$J) && j.error("Previous overlay popout was not destroyed after 5 seconds!")
}
async function eA(e) {
  j.verbose("Creating OOP Host Window for pid ".concat(e));
  try {
    let t = new Date().getTime(),
      n = {
        mounting_started_at: t
      };
    ef(e, n), await eS(), es(), J = null, U(e, "renderer_window_mounting_started", {
      mountingAnalyticsData: n,
      popoutInitializationStages: eo
    }), await (0, C.f)(er), eo = M(L({}, eo), {
      popoutOpened: true
    });
    let r = {
      renderer_started: true,
      fullscreen_type: await (0, A.hj)(e, 0),
      graphics_info_after: new Date().getTime() - t
    };
    ef(e, r), U(e, "renderer_window_mounted", {
      rendererWindowMountedAnalyticsData: r,
      popoutInitializationStages: eo
    }), u.Z.window.setBackgroundThrottling(false), E.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && V.toggleGPUBoost(I.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, true), V.toggleGPUBoost(I.zS.OVERLAY_RENDERING, true), eI(e), Q = e, (0, b.setPID)(e), j.info("Getting Native Handle for pid", e);
    let i = await eT();
    if (null == i) return j.error("Failed to get native handle for pid", e), eh(e, Error("Failed to get native handle for pid")), "";
    j.info("Native Handle for pid ".concat(e, ":"), i), c.Z.updateOverlayState(e, I.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
    let a = {
      renderer_started_after: new Date().getTime() - t
    };
    return U(e, "renderer_started", {
      rendererStartedAnalyticsData: a,
      popoutInitializationStages: eo
    }), ef(e, a), eW(false), S.Z.resetWindowState(), (null == Y ? true : Y.setOnWindowHandleInitializedCallback) == null && eH(true), i
  } catch (t) {
    j.error("failed to create out of process overlay host window", t), em(e, t), c.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED_DISABLED), eo = M(L({}, eo), {
      errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + t
    }), U(e, "renderer_window_mounting_failed", {
      error: t,
      popoutInitializationStages: eo
    })
  } finally {
    ti.emitChange()
  }
  return eN(e), ""
}

function eC() {
  j.verbose("Destroying OOP host window"), V.resetGPUBoosts();
  try {
    var e;
    null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.window) || module.close(Chunk501787.$J)
  } catch (e) {
    j.error("Error destroying overlay window:", module), eh(null != Q ? Q : Chunk145597.UNSET_PID, module)
  }
  try {
    Chunk579806.Z.window.setBackgroundThrottling(true)
  } catch (e) {
    j.error("Error setting background throttling:", module), eh(null != Q ? Q : Chunk145597.UNSET_PID, module)
  }
  eM(), Z.clear(), Chunk503522.Z.resetWindowState(false), null != Q && eN(Q), Q = null, (0, Chunk145597.setPID)(null != Q ? Q : Chunk145597.UNSET_PID), es(), ti.emitChange()
}

function eN(e) {
  g.default.track(w.rMx.OVERLAY_HOOK_RESULT, ed(e))
}

function eR(e) {
  try {
    j.verbose("Refreshing OOP host window for pid ".concat(e)), U(e, "renderer_window_refreshing_started"), X = e, eI(e), Z.delete(null != Q ? Q : b.UNSET_PID), Q = e, (0, b.setPID)(null != Q ? Q : b.UNSET_PID), eP()
  } catch (e) {
    j.error("failed to refresh out of process overlay host window", e), eh(null != Q ? Q : b.UNSET_PID, e)
  } finally {
    ti.emitChange()
  }
}

function eP() {
  var e;
  null != X && q === X && (X = null, eu.clearClickZones(), U(q, "renderer_window_refreshing_finished"), null == Y || null == (e = Y.readyToShow) || module.call(Y, q), Chunk13245.Z.updateOverlayState(q, Chunk837268.mM.OVERLAY_RENDERING), j.verbose("Showing overlay v3 for pid ".concat(q)))
}

function ew(e, t, n, r) {
  let i = p.Z.getWindow(P.$J);
  if (null == i) return;
  let a = Math.ceil(n * i.innerWidth),
    o = Math.ceil(r * i.innerHeight),
    s = new MouseEvent(t, {
      screenX: a,
      screenY: o,
      clientX: a,
      clientY: o,
      bubbles: true,
      view: i
    }),
    l = i.document.elementFromPoint(a, o);
  if (null == l) throw Error("No node found at point");
  l.dispatchEvent(s)
}

function eD(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null == e ? eu.storeClickZones() : eu.refreshClickZones(), e !== K && U(e, "renderer_window_focus_flushed", {
      focusedPID: K,
      isUntracked: n
    }), null != e) {
    let t = et[e] === I.gl.OutOfProcessLimitedInteraction;
    if (t !== J) {
      J = t;
      try {
        "function" == typeof(null == Y ? true : Y.setLimitedInteraction) ? (j.info("Setting limited interaction", t), U(e, "focus_and_interaction_set", {
          isLimitedInteraction: t,
          focusable: !t
        }), Y.setLimitedInteraction(t), E.ZP.setFocusable(P.$J, !t)) : j.info("No setLimitedInteraction function found, skipping")
      } catch (t) {
        j.error("Error setting limited interaction mode:", t), eh(e, t)
      }
    }
  }
  c.Z.setFocusedPID(0 === e ? null : e, t, n)
}

function eL(e, t) {
  U(null != K ? K : null, "focus_callback", {
    callbackPid: e,
    currentFocusedPID: K
  }), eD(e, t), ti.emitChange(), e !== K && j.info("OverlayStore: Focused new PID", e)
}

function ex(e) {
  null != K && U(K, "focus_lost_callback", {
    focusedPID: K,
    lostPid: e
  }), eM(), ti.emitChange()
}

function eM() {
  eD(null, null, true), ti.emitChange()
}

function ek(e) {
  return G(null != K ? K : null, "overlay_focused", {
    focusedPID: e.pid
  }), K = e.pid, z = e.windowHandle, true
}

function ej(e) {
  if (!H.has(e) || !eo.allDone) return;
  let t = ed(e).mounting_started_at;
  ef(e, {
    total_mount_time_ms: null != t ? new Date().getTime() - t : true,
    success: true
  }), c.Z.successfullyShown(e)
}

function eU() {
  var e;
  eo = M(L({}, eo), {
    showInactiveCalled: true
  }), null == Y || null == (e = Y.onPopoutShowInactive) || module.call(Y)
}

function eG() {
  eo = M(L({}, eo), {
    allDone: true
  }), H.forEach(e => {
    ej(e)
  })
}

function eB(e) {
  let {
    update: t
  } = e;
  eo = L({}, eo, t)
}

function eZ(e) {
  var t;
  let {
    enabled: n
  } = e;
  null == Y || null == (t = Y.setDetailedLogging) || t.call(Y, n)
}

function eF(e) {
  let {
    pid: t,
    windowHandle: n
  } = e;
  if (q = t, eP(), null != n) {
    var r;
    null == Y || null == (r = Y.setRenderingWindowHandle) || r.call(Y, n)
  }
}

function eV(e) {
  U(e, "_successfullyShownCallback"), H.add(e), ej(e)
}

function eH(e) {
  eo = M(L({}, eo), {
    windowHandleSentToNative: e
  }), e && c.Z.updateOverlayState((0, b.getPID)(), I.mM.WAITING_FOR_REACT_INITIALIZATION), ti.emitChange()
}
let eY = (() => {
  let e = null;
  async function t() {
    if (!Chunk987650.iP) return void j.error("Attempted to load overlay on an unsupported platform.");
    j.info("Loading Out of Process Overlay Module");
    try {
      var e, t, n, r;
      await Chunk998502.ZP.ensureModule("discord_desktop_overlay");
      let i = Chunk998502.ZP.requireModule("discord_desktop_overlay");
      null == i || null == (e = i.init) || module.call(i), i.setCaptureZoneCallback(ew), i.setHostWindowCallbacks(eA, eC, eR), i.setFocusCallback(eL), null == (t = i.setFocusLostCallback) || exports.call(i, ex), null == (n = i.setSuccessfullyShownCallback) || require.call(i, eV), null == (r = i.setOnWindowHandleInitializedCallback) || r.call(i, eH), Y = i, (0, Chunk145597.setOutOfProcessSupport)(true), eO(), Chunk13245.Z.setRenderDebugMode(true, Chunk837268.GO.TrackFocusPIDs), j.info("OverlayV3 Module Loaded"), U((0, Chunk145597.getPID)(), "overlay_v3_module_loaded")
    } catch (e) {
      throw j.error("failed loading overlay module", module), (0, Chunk145597.setOutOfProcessSupport)(false), (0, Chunk41534.V6)(module, Chunk837268.gl.OutOfProcess, {
        extra: ep(null != Q ? Q : Chunk145597.UNSET_PID, "module_load")
      }), module
    }
  }
  return () => (null == module && (e = exports()), module)
})();

function eW(e) {
  G((0, b.getPID)(), "setInteractionEnabled called", {
    interactionEnabled: e
  }), null == Y || Y.setInteractionEnabled(e)
}

function eK(e) {
  if (N.iP && (W = e, null == Y && ey())) return void eY()
}
async function ez(e) {
  e.overlayMethod === I.gl.OutOfProcess || e.overlayMethod === I.gl.OutOfProcessLimitedInteraction ? (null == Y && await eY(), eg(e.pid, e.overlayMethod)) : eE(e.pid), ti.emitChange()
}

function eq(e) {
  j.verbose("Updating OverlayMethod", e), ez(e)
}

function eX(e) {
  let {
    pid: t,
    error: n
  } = e;
  B.has(t) && em(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"))
}

function eQ(e) {
  V.toggleGPUBoost(e.reason, e.enabled)
}

function eJ() {
  j.verbose("Maybe Enable Overlay"), ey() ? (eK(Chunk454991.v.oopEnabled), (0, Chunk145597.setOutOfProcessSupport)(true), eY()) : W && eK(false)
}

function e$(e) {
  let {
    oopEnabled: t
  } = e;
  eK(t)
}

function e0(e) {
  let {
    zones: t
  } = e;
  eu.setClickZones(t)
}

function e1(e) {
  ee[e.pid] = e.overlayState
}

function e2(e) {
  let {
    locked: t,
    pid: n
  } = e, r = ee[n];
  if (t || r !== I.mM.OVERLAY_CRASHED_DISABLED) {
    if (G(n, "setInputLocked called", {
        locked: t
      }), t ? Z.delete(n) : Z.add(n), null != $ && (clearTimeout($), $ = null, t)) return;
    t ? ev(t) : $ = setTimeout(() => {
      ev(t), $ = null
    }, 100)
  }
}

function e3(e) {
  let {
    region: t
  } = e;
  G(null != K ? K : null, "activate_region", {
    region: t
  }), ev(false)
}

function e4() {
  G(null != K ? K : null, "deactivate_all_regions"), ev(true)
}

function e8(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  return n === I.GO.DisabledGPUBoost && V.toggleDisabledGPUBoost(t), n === I.GO.ForceGPUBoost && V.toggleGPUBoost(I.zS.DEV_FORCED_GPU_BOOST, t), true
}

function e5() {
  Chunk353926.Z.hasLoadedExperiments && !en && (en = true, eJ())
}

function e6() {
  en = false
}

function e7(e) {
  let {
    mode: t
  } = e;
  er = t
}
let e9 = 3e3,
  te = 100;

function tt(e) {
  let {
    enabled: t
  } = e;
  if (t) {
    if (null != ei) returnfalse;
    ei = setInterval(() => {
      null == Y || Y.getBreadcrumbs({
        minBreadcrumbId: y.JC.getLatestBreadcrumbId()
      }, e => {
        let {
          breadcrumbs: t
        } = e;
        for (let e of t) y.JC.addNativeBreadcrumb(e, y.C7.NativeOOP, (0, b.getPID)());
        ti.emitChange()
      })
    }, e9)
  } else clearInterval(ei), ei = null
}

function tn(e) {
  let {
    enabled: t
  } = e;
  if (t) {
    if (null != ea) returnfalse;
    ea = setInterval(() => {
      var e;
      null == Y || null == (e = Y.getDebuggingState) || e.call(Y, e => {
        o()(r, e) || (r = e, ti.emitChange())
      })
    }, te)
  } else clearInterval(ea), ea = null
}
class tr extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk314897.default, Chunk353926.Z), this.syncWith([Chunk353926.Z], e5)
  }
  DEV_getOverlayLoggingBreadcrumbs(e) {
    return y.JC.getBreadcrumbs(e)
  }
  DEV_isOverlayModuleLoggingEnabled() {
    return null != ei
  }
  DEV_getDebuggingState() {
    return r
  }
  DEV_isStateDebuggingEnabled() {
    return null != ea
  }
  isInputLocked(e) {
    return !Z.has(e)
  }
  isSupported() {
    return Chunk987650.iP
  }
  isOverlayV3Enabled() {
    return ey()
  }
  isOverlayV3EnabledForPID(e) {
    return B.has(e)
  }
  getWidgetByType(e) {
    let t = m.Z.getLayout(R.$S);
    if (null != t) {
      let r = t.widgets.find(t => {
        let n = m.Z.getWidget(t);
        return null != n && n.type === e ? t : null
      });
      if (null != r) {
        var n;
        return null != (n = m.Z.getWidget(r)) ? n : null
      }
    }
    return null
  }
  isPinned(e) {
    let t = this.getWidgetByType(e);
    return null != t && t.pinned
  }
  get enabled() {
    return W
  }
  getFocusedPID() {
    return K
  }
  getFocusedWindowHandle() {
    return z
  }
  isFocused(e) {
    return null != K && e !== b.UNSET_PID && (!!B.has(e) || e === b.DEV_PID) && K === e
  }
  getFocusedRunningGame() {
    var e;
    return null == K ? null : null != (e = Chunk594190.ZP.getGameOrTransformedSubgameForPID(K)) ? module : null
  }
  isReady(e) {
    return !!B.has(e) && ee[e] === I.mM.OVERLAY_RENDERING
  }
  isGPUBoosted() {
    return V.isGPUBoosted
  }
  getOverlayState(e) {
    var t;
    return null != (t = ee[e]) ? t : null
  }
  getOverlayMethod(e) {
    var t;
    return null != (t = et[e]) ? t : null
  }
  isWindowHandleInitialized() {
    return eo.windowHandleSentToNative
  }
  getInitializationStages() {
    return eo
  }
}
D(tr, "displayName", "OverlayStore-v3");
let ti = new tr(Chunk570140.Z, __OVERLAY__ ? {} : {
    LOGIN: e6,
    LOGOUT: e6,
    EXPERIMENT_OVERRIDE_BUCKET: eJ,
    OVERLAY_SET_ENABLED: e$,
    OVERLAY_FORCE_RENDER_MODE: e7,
    OVERLAY_SET_CLICK_ZONES: e0,
    OVERLAY_SET_INPUT_LOCKED: e2,
    OVERLAY_ACTIVATE_REGION: e3,
    OVERLAY_DEACTIVATE_ALL_REGIONS: e4,
    OVERLAY_RENDER_DEBUG_MODE: e8,
    OVERLAY_UPDATE_OVERLAY_METHOD: eq,
    OVERLAY_UPDATE_OVERLAY_STATE: e1,
    OVERLAY_SET_GPU_BOOST_REQUESTED: eQ,
    OVERLAY_CRASHED: eX,
    OVERLAY_FOCUSED: ek,
    OVERLAY_SET_MODULE_LOGGING: tt,
    OVERLAY_SET_STATE_DEBUGGING: tn,
    OVERLAY_OOP_UI_INITIALIZED: eG,
    OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: eU,
    OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: eB,
    OVERLAY_SET_DETAILED_LOGGING: eZ,
    OVERLAY_UI_FOCUSED_PID: eF
  }),
  ta = ti