/** Chunk was on web.js **/
/** chunk id: 610394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A8: () => w,
  Il: () => D,
  ZP: () => e1
}), require("./388685.js"), require("./415506.js");
var r, Chunk442837 = require("./442837.js"),
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

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}
let w = "repaint-complete",
  D = "request-repaint";
class x {
  constructor() {
    R(this, "gpuBoostRequests", new Set), R(this, "isGPUBoosted", false), R(this, "isDisabledGPUBoost", false), R(this, "toggleGPUBoost", (e, t) => {
      t ? this.gpuBoostRequests.add(e) : this.gpuBoostRequests.delete(e), this.flushGPUBoostRequests()
    }), R(this, "toggleDisabledGPUBoost", e => {
      this.isDisabledGPUBoost = e, this.flushGPUBoostRequests()
    }), R(this, "resetGPUBoosts", () => {
      this.gpuBoostRequests.clear(), this.flushGPUBoostRequests()
    }), R(this, "shouldBoostGPU", () => !this.isDisabledGPUBoost && this.gpuBoostRequests.size > 0), R(this, "flushGPUBoostRequests", async () => {
      var e, t, n;
      try {
        let n = this.shouldBoostGPU();
        if (this.isGPUBoosted === require) return;
        let r = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getGpuProcessId) ? true : module.call(exports));
        if (null == r) return;
        Chunk998502.ZP.SetGPUBoostEnabledByPid(r, require) && (this.isGPUBoosted = require), e0.emitChange()
      } catch (e) {
        (null == (n = module.message) ? true : require.includes("IPC method called after context was released")) && this.resetGPUBoosts(), L.error("Error during GPU boost request flush:", module), el(null != H ? H : Chunk145597.UNSET_PID, module)
      }
    })
  }
}
let L = new Chunk710845.Z("OverlayStoreV3");

function j(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : g.l6.Info;
  g.JC.addModuleBreadcrumb(t, null != n ? n : {}, g.C7.OOPModule, e, r), e0.emitChange()
}
let M = new Set,
  k = new Set,
  U = {},
  G = new x,
  B = new Set,
  Z = null,
  F = false,
  V = null,
  H = null,
  Y = null,
  W = null,
  K = {},
  z = {},
  q = false,
  X = Chunk837268.R5.UNSET,
  Q = null,
  J = false,
  $ = false,
  ee = 3e4;
class et {
  _setCaptureZones(e) {
    try {
      let t = e.map(e => ({
        name: e.name,
        left: e.left,
        top: e.top,
        right: e.right,
        bottom: e.bottom
      }));
      j(H, "capture_zones_set", {
        capture_zones: t
      }), null == Z || Z.setCaptureZones(t)
    } catch (e) {
      L.error("Error setting capture zones:", e), el(null != H ? H : m.UNSET_PID, e)
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
    if (!F) {
      if (0 === this.clickZones.length) return;
      this.clearClickZones();
      return
    }
    this.clickZones = e, this.focusLostStoredClickZones = [...e];
    try {
      let t = setTimeout(() => {
          this.triggerClickZoneTimer(t)
        }, ee),
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
      null == Z || Z.setCaptureZones(n)
    } catch (e) {
      L.error("Error setting capture zones:", e), el(null != H ? H : m.UNSET_PID, e)
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
    R(this, "clickZones", []), R(this, "focusLostStoredClickZones", []), R(this, "clickZoneTimers", {})
  }
}
let en = new et,
  er = new Set;

function ei(e) {
  var t;
  return null != (t = U[e]) ? t : {}
}

function ea(e, t) {
  var n, r;
  let i = null == (n = U[e]) ? true : n.error,
    a = null == (r = U[e]) ? true : r.error_description;
  U[e] = P({}, U[e], t), null != i && (U[e].error = i), null != a && (U[e].error_description = a)
}

function eo(e) {
  var t, n, r;
  if (null != U[e]) return;
  let i = u.ZP.getGameOrTransformedSubgameForPID(e);
  U[e] = {
    overlay_method: y.gl[null != (t = z[e]) ? t : y.gl.OutOfProcess],
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

function es(e, t) {
  let n = u.ZP.getGameOrTransformedSubgameForPID(e);
  return {
    crash_type: t,
    gameName: null == n ? true : n.name
  }
}

function el(e, t) {
  var n;
  e !== m.UNSET_PID && (ea(e, {
    host_crash_count: 1,
    error: t.message,
    error_description: t.stack
  }), (0, E.V6)(t, z[e], {
    extra: es(e, "host")
  }), g.JC.addModuleBreadcrumb("host_crash", {
    error: t.message,
    error_description: null != (n = t.stack) ? n : ""
  }, g.C7.NativeOOP, e, g.l6.Error), en.clearClickZones(), e0.emitChange())
}

function ec(e, t) {
  var n;
  e !== m.UNSET_PID && (ea(e, {
    renderer_crash_count: 1,
    error: t.message,
    error_description: t.stack
  }), (0, E.V6)(t, z[e], {
    extra: es(e, "renderer")
  }), g.JC.addModuleBreadcrumb("renderer_crash", {
    error: t.message,
    error_description: null != (n = t.stack) ? n : ""
  }, g.C7.OOPModule, e, g.l6.Error), en.clearClickZones(), e0.emitChange())
}

function eu(e, t) {
  try {
    if (null != t && (z[e] = t), null == Z || Z.trackGame(e), eo(e), M.has(e)) return;
    M.add(e), j(e, "game_tracked", {
      newOverlayMethod: null != t ? y.gl[t] : null
    }), o.Z.updateOverlayState(e, y.mM.WAITING_FOR_POPOUT_OPEN)
  } catch (t) {
    L.error("Error tracking game:", t), el(e, t)
  }
}

function ed(e) {
  try {
    null == Z || Z.untrackGame(e), M.delete(e), delete K[e], delete z[e], L.verbose("Removing tracked game ".concat(e)), B.delete(e)
  } catch (t) {
    L.error("Error removing tracked game:", t), el(e, t)
  }
}

function ef() {
  try {
    for (let e of M) null == Z || Z.untrackGame(module);
    M.clear(), K = {}, z = {}, B.clear(), L.verbose("Cleared all tracked games")
  } catch (e) {
    L.error("Error clearing tracked games:", module), el(Chunk145597.UNSET_PID, module)
  }
}

function e_() {
  return (0, Chunk32300.NW)("overlay_store_v3", false)
}

function ep() {
  if (!F) return void ef();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => u.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...M].filter(t => !e.has(t)))) ed(exports);
  for (let e of M) eu(module)
}

function eh(e) {
  if (null == Z) return void L.warn("Overlay module not initialized during lock attempt");
  try {
    let t = !e;
    Z.setInteractionEnabled(t), G.toggleGPUBoost(y.zS.OVERLAY_UNLOCKED, t)
  } catch (e) {
    L.error("Error during overlay lock:", e), el(null != H ? H : m.UNSET_PID, e)
  }
}

function em(e) {
  let t = u.ZP.getGameOrTransformedSubgameForPID(e);
  o.Z.setAssociatedGame(null != H ? H : m.UNSET_PID, e, t)
}
async function eg() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 500,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3;
  for (let i = 0; Chunk442837 < exports; Chunk442837++) {
    let a = Chunk442837 + 1 >= exports;
    try {
      var n, r;
      let e = null != (r = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (n = Chunk579806.Z.window) ? true : require.getNativeHandle(Chunk501787.$J))) ? r : "";
      if ("" !== module) return module
    } catch (e) {
      if (Chunk570140) throw module;
      L.error("Error getting native window handle, retrying...", module)
    }
    if (Chunk570140) {
      L.error("Failed to get native window handle, giving up");
      break
    }
    L.info("Failed to get window handle on attempt ".concat(Chunk442837 + 1, " of ").concat(exports));
    let o = Math.pow(2, Chunk442837 + 1) * module;
    await new Promise(e => setTimeout(e, o))
  }
  return null
}
async function eE(e) {
  L.verbose("Creating OOP Host Window for pid ".concat(e));
  try {
    let t = new Date().getTime(),
      n = {
        mounting_started_at: t
      };
    ea(e, n), $ = false, Y = null, j(e, "renderer_window_mounting_started", n), await (0, T.f)(X);
    let r = {
      renderer_started: true,
      fullscreen_type: await (0, I.hj)(e, 0),
      graphics_info_after: new Date().getTime() - t
    };
    ea(e, r), j(e, "renderer_window_mounted", r), s.Z.window.setBackgroundThrottling(false), h.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && G.toggleGPUBoost(y.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, true), G.toggleGPUBoost(y.zS.OVERLAY_RENDERING, true), em(e), H = e, (0, m.setPID)(e), L.info("Getting Native Handle for pid", e);
    let i = await eg();
    if (null == i) return L.error("Failed to get native handle for pid", e), el(e, Error("Failed to get native handle for pid")), "";
    L.info("Native Handle for pid ".concat(e, ":"), i), o.Z.updateOverlayState(e, y.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
    let a = {
      renderer_started_after: new Date().getTime() - t
    };
    return j(e, "renderer_started", a), ea(e, a), eL(false), v.Z.resetWindowState(), (null == Z ? true : Z.setOnWindowHandleInitializedCallback) == null && eD(true), i
  } catch (t) {
    L.error("failed to create out of process overlay host window", t), ec(e, t), o.Z.updateOverlayState(e, y.mM.OVERLAY_CRASHED_DISABLED)
  }
  return ey(e), ""
}

function eb() {
  L.verbose("Destroying OOP host window"), G.resetGPUBoosts();
  try {
    var e;
    null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.window) || module.close(Chunk501787.$J)
  } catch (e) {
    L.error("Error destroying overlay window:", module), el(null != H ? H : Chunk145597.UNSET_PID, module)
  }
  try {
    Chunk579806.Z.window.setBackgroundThrottling(true)
  } catch (e) {
    L.error("Error setting background throttling:", module), el(null != H ? H : Chunk145597.UNSET_PID, module)
  }
  eA(), k.clear(), Chunk503522.Z.resetWindowState(false), null != H && ey(H), H = null, (0, Chunk145597.setPID)(null != H ? H : Chunk145597.UNSET_PID), $ = false, (null == Z ? true : Z.setOnWindowHandleInitializedCallback) == null && eD(false)
}

function ey(e) {
  p.default.track(N.rMx.OVERLAY_HOOK_RESULT, ei(e))
}

function eO(e) {
  try {
    L.verbose("Refreshing OOP host window for pid ".concat(e)), j(e, "renderer_window_refreshing_started"), em(e), k.delete(null != H ? H : m.UNSET_PID), H = e, (0, m.setPID)(null != H ? H : m.UNSET_PID);
    let t = d.Z.getWindow(C.$J),
      n = () => new Promise(e => {
        let n = t => {
          t.data === w && (window.removeEventListener("message", n), e())
        };
        window.addEventListener("message", n), null == t || t.postMessage(D, "*"), setTimeout(() => {
          let e = new MessageEvent("message", {
            data: w
          });
          n(e)
        }, 100)
      }),
      r = 0,
      i = () => {
        15 === r ? (en.clearClickZones(), j(e, "renderer_window_refreshing_finished"), null == Z || Z.readyToShow(e), o.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING), L.verbose("Showing overlay v3 for pid ".concat(e))) : (r += 1, n().then(i))
      };
    i()
  } catch (e) {
    L.error("failed to refresh out of process overlay host window", e), el(null != H ? H : m.UNSET_PID, e)
  }
}

function ev(e, t, n, r) {
  let i = d.Z.getWindow(C.$J);
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

function eI(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (null == e ? en.storeClickZones() : en.refreshClickZones(), e !== V && j(e, "renderer_window_focus_flushed", {
      focusedPID: V,
      isUntracked: t
    }), null != e) {
    let t = z[e] === y.gl.OutOfProcessLimitedInteraction;
    if (t !== Y) {
      Y = t;
      try {
        "function" == typeof(null == Z ? true : Z.setLimitedInteraction) ? (L.info("Setting limited interaction", t), j(e, "focus_and_interaction_set", {
          isLimitedInteraction: t,
          focusable: !t
        }), Z.setLimitedInteraction(t), h.ZP.setFocusable(C.$J, !t)) : L.info("No setLimitedInteraction function found, skipping")
      } catch (t) {
        L.error("Error setting limited interaction mode:", t), el(e, t)
      }
    }
  }
  o.Z.setFocusedPID(0 === e ? null : e, t)
}

function eT(e) {
  eI(e), e0.emitChange(), e !== V && L.info("OverlayStore: Focused new PID", e)
}

function eS(e) {
  eA(), e0.emitChange()
}

function eA() {
  eI(null, true), e0.emitChange()
}

function eC(e) {
  return V = e.pid, true
}

function eN(e) {
  if (!B.has(e) || !$) return;
  let t = ei(e).mounting_started_at;
  ea(e, {
    total_mount_time_ms: null != t ? new Date().getTime() - t : true,
    success: true
  }), o.Z.successfullyShown(e)
}

function eR() {
  var e;
  return null == Z || null == (e = Z.onPopoutShowInactive) || module.call(Z), false
}

function eP() {
  $ = true, B.forEach(e => {
    eN(e)
  })
}

function ew(e) {
  j(e, "_successfullyShownCallback"), B.add(e), eN(e)
}

function eD(e) {
  J = e, e && o.Z.updateOverlayState((0, m.getPID)(), y.mM.WAITING_FOR_REACT_INITIALIZATION), e0.emitChange()
}
let ex = (() => {
  let e = null;
  async function t() {
    if (!Chunk987650.iP) return void L.error("Attempted to load overlay on an unsupported platform.");
    L.info("Loading Out of Process Overlay Module");
    try {
      var e, t, n, r;
      await Chunk998502.ZP.ensureModule("discord_desktop_overlay");
      let i = Chunk998502.ZP.requireModule("discord_desktop_overlay");
      null == Chunk442837 || null == (e = Chunk442837.init) || module.call(Chunk442837), Chunk442837.setCaptureZoneCallback(ev), Chunk442837.setHostWindowCallbacks(eE, eb, eO), Chunk442837.setFocusCallback(eT), null == (t = Chunk442837.setFocusLostCallback) || exports.call(Chunk442837, eS), null == (n = Chunk442837.setSuccessfullyShownCallback) || require.call(Chunk442837, ew), null == (r = Chunk442837.setOnWindowHandleInitializedCallback) || r.call(Chunk442837, eD), Z = Chunk442837, (0, Chunk145597.setOutOfProcessSupport)(true), ep(), L.info("OverlayV3 Module Loaded"), j((0, Chunk145597.getPID)(), "overlay_v3_module_loaded")
    } catch (e) {
      throw L.error("failed loading overlay module", module), (0, Chunk145597.setOutOfProcessSupport)(false), (0, Chunk41534.V6)(module, Chunk837268.gl.OutOfProcess, {
        extra: es(null != H ? H : Chunk145597.UNSET_PID, "module_load")
      }), module
    }
  }
  return () => (null == module && (e = exports()), module)
})();

function eL(e) {
  j((0, m.getPID)(), "setInteractionEnabled called", {
    interactionEnabled: e
  }), null == Z || Z.setInteractionEnabled(e)
}

function ej(e) {
  if (S.iP && (F = e, null == Z && e_())) return void ex()
}
async function eM(e) {
  e.overlayMethod === y.gl.OutOfProcess || e.overlayMethod === y.gl.OutOfProcessLimitedInteraction ? (null == Z && await ex(), eu(e.pid, e.overlayMethod)) : ed(e.pid), e0.emitChange()
}

function ek(e) {
  L.verbose("Updating OverlayMethod", e), eM(e)
}

function eU(e) {
  let {
    pid: t,
    error: n
  } = e;
  M.has(t) && ec(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"))
}

function eG(e) {
  G.toggleGPUBoost(e.reason, e.enabled)
}

function eB() {
  L.verbose("Maybe Enable Overlay"), e_() ? (ej(Chunk454991.v.oopEnabled), (0, Chunk145597.setOutOfProcessSupport)(true), ex()) : F && ej(false)
}

function eZ(e) {
  let {
    oopEnabled: t
  } = e;
  ej(t)
}

function eF(e) {
  let {
    zones: t
  } = e;
  en.setClickZones(t)
}

function eV(e) {
  K[e.pid] = e.overlayState
}

function eH(e) {
  let {
    locked: t,
    pid: n
  } = e, r = K[n];
  if (t || r !== y.mM.OVERLAY_CRASHED_DISABLED) {
    if (j(n, "setInputLocked called", {
        locked: t
      }), t ? k.delete(n) : k.add(n), null != W && (clearTimeout(W), W = null, t)) return;
    t ? eh(t) : W = setTimeout(() => {
      eh(t), W = null
    }, 100)
  }
}

function eY(e) {
  let {
    region: t
  } = e;
  eh(false)
}

function eW() {
  eh(true)
}

function eK(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  t ? er.add(n) : er.delete(n), n === y.GO.DisabledGPUBoost && G.toggleDisabledGPUBoost(t), n === y.GO.ForceGPUBoost && G.toggleGPUBoost(y.zS.DEV_FORCED_GPU_BOOST, t)
}

function ez() {
  Chunk353926.Z.hasLoadedExperiments && !q && (q = true, eB())
}

function eq() {
  q = false
}

function eX(e) {
  let {
    mode: t
  } = e;
  X = t
}
let eQ = 3e3;

function eJ(e) {
  let {
    enabled: t
  } = e;
  t ? Q = setInterval(() => {
    null == Z || Z.getBreadcrumbs({
      minBreadcrumbId: g.JC.getLatestBreadcrumbId()
    }, e => {
      let {
        breadcrumbs: t
      } = e;
      for (let e of t) g.JC.addNativeBreadcrumb(e, g.C7.NativeOOP, (0, m.getPID)());
      e0.emitChange()
    })
  }, eQ) : clearInterval(Q)
}
class e$ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk314897.default, Chunk353926.Z), this.syncWith([Chunk353926.Z], ez)
  }
  DEV_getOverlayLoggingBreadcrumbs(e) {
    return g.JC.getBreadcrumbs(e)
  }
  DEV_isOverlayModuleLoggingEnabled() {
    return null != Q
  }
  isInputLocked(e) {
    return !k.has(e)
  }
  isSupported() {
    return Chunk987650.iP
  }
  isOverlayV3Enabled() {
    return e_()
  }
  isOverlayV3EnabledForPID(e) {
    return M.has(e)
  }
  getWidgetByType(e) {
    let t = _.Z.getLayout(A.$S);
    if (null != t) {
      let r = t.widgets.find(t => {
        let n = _.Z.getWidget(t);
        return null != n && n.type === e ? t : null
      });
      if (null != r) {
        var n;
        return null != (n = _.Z.getWidget(r)) ? n : null
      }
    }
    return null
  }
  isPinned(e) {
    let t = this.getWidgetByType(e);
    return null != t && t.pinned
  }
  get enabled() {
    return F
  }
  hasRenderDebugMode(e) {
    return er.has(e)
  }
  getFocusedPID() {
    return V
  }
  isFocused(e) {
    return null != V && e !== m.UNSET_PID && (!!M.has(e) || e === m.DEV_PID) && V === e
  }
  getFocusedRunningGame() {
    var e;
    return null == V ? null : null != (e = Chunk594190.ZP.getGameOrTransformedSubgameForPID(V)) ? module : null
  }
  isReady(e) {
    return M.has(e)
  }
  isGPUBoosted() {
    return G.isGPUBoosted
  }
  getOverlayState(e) {
    var t;
    return null != (t = K[e]) ? t : null
  }
  getOverlayMethod(e) {
    var t;
    return null != (t = z[e]) ? t : null
  }
  isWindowHandleInitialized() {
    return J
  }
}
R(e$, "displayName", "OverlayStore-v3");
let e0 = new e$(Chunk570140.Z, __OVERLAY__ ? {} : {
    LOGIN: eq,
    LOGOUT: eq,
    EXPERIMENT_OVERRIDE_BUCKET: eB,
    OVERLAY_SET_ENABLED: eZ,
    OVERLAY_FORCE_RENDER_MODE: eX,
    OVERLAY_SET_CLICK_ZONES: eF,
    OVERLAY_SET_INPUT_LOCKED: eH,
    OVERLAY_ACTIVATE_REGION: eY,
    OVERLAY_DEACTIVATE_ALL_REGIONS: eW,
    OVERLAY_RENDER_DEBUG_MODE: eK,
    OVERLAY_UPDATE_OVERLAY_METHOD: ek,
    OVERLAY_UPDATE_OVERLAY_STATE: eV,
    OVERLAY_SET_GPU_BOOST_REQUESTED: eG,
    OVERLAY_CRASHED: eU,
    OVERLAY_FOCUSED: eC,
    OVERLAY_SET_MODULE_LOGGING: eJ,
    OVERLAY_OOP_UI_INITIALIZED: eP,
    OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: eR
  }),
  e1 = e0