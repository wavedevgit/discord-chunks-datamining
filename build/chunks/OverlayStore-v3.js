/** Chunk was on web.js **/
/** chunk id: 610394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A8: () => w,
  Il: () => D,
  ZP: () => eQ
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
class L {
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
        Chunk998502.ZP.SetGPUBoostEnabledByPid(r, require) && (this.isGPUBoosted = require), eX.emitChange()
      } catch (e) {
        (null == (n = module.message) ? true : require.includes("IPC method called after context was released")) && this.resetGPUBoosts(), x.error("Error during GPU boost request flush:", module), eo(null != V ? V : Chunk145597.UNSET_PID, module)
      }
    })
  }
}
let x = new Chunk710845.Z("OverlayStoreV3");

function M(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : g.l6.Info;
  g.JC.addModuleBreadcrumb(t, null != n ? n : {}, g.C7.OOPModule, e, r), eX.emitChange()
}
let j = new Set,
  k = new Set,
  U = {},
  G = new L,
  B = null,
  Z = false,
  F = null,
  V = null,
  H = null,
  Y = null,
  W = {},
  K = {},
  z = false,
  q = Chunk837268.R5.UNSET,
  X = null,
  Q = 3e4;
class J {
  _setCaptureZones(e) {
    try {
      let t = e.map(e => ({
        name: e.name,
        left: e.left,
        top: e.top,
        right: e.right,
        bottom: e.bottom
      }));
      M(V, "capture_zones_set", {
        capture_zones: t
      }), null == B || B.setCaptureZones(t)
    } catch (e) {
      x.error("Error setting capture zones:", e), eo(null != V ? V : m.UNSET_PID, e)
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
    if (!Z) {
      if (0 === this.clickZones.length) return;
      this.clearClickZones();
      return
    }
    this.clickZones = e, this.focusLostStoredClickZones = [...e];
    try {
      let t = setTimeout(() => {
          this.triggerClickZoneTimer(t)
        }, Q),
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
      null == B || B.setCaptureZones(n)
    } catch (e) {
      x.error("Error setting capture zones:", e), eo(null != V ? V : m.UNSET_PID, e)
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
let $ = new J,
  ee = new Set;

function et(e) {
  var t;
  return null != (t = U[e]) ? t : {}
}

function en(e, t) {
  var n, r;
  let i = null == (n = U[e]) ? true : n.error,
    o = null == (r = U[e]) ? true : r.error_description;
  U[e] = P({}, U[e], t), null != i && (U[e].error = i), null != o && (U[e].error_description = o)
}

function er(e) {
  var t, n, r;
  if (null != U[e]) return;
  let i = u.ZP.getGameOrTransformedSubgameForPID(e);
  U[e] = {
    overlay_method: y.gl[null != (t = K[e]) ? t : y.gl.OutOfProcess],
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

function ei(e, t) {
  let n = u.ZP.getGameOrTransformedSubgameForPID(e);
  return {
    crash_type: t,
    gameName: null == n ? true : n.name
  }
}

function eo(e, t) {
  var n;
  e !== m.UNSET_PID && (en(e, {
    host_crash_count: 1,
    error: t.message,
    error_description: t.stack
  }), (0, E.V6)(t, K[e], {
    extra: ei(e, "host")
  }), g.JC.addModuleBreadcrumb("host_crash", {
    error: t.message,
    error_description: null != (n = t.stack) ? n : ""
  }, g.C7.NativeOOP, e, g.l6.Error), $.clearClickZones(), eX.emitChange())
}

function ea(e, t) {
  var n;
  e !== m.UNSET_PID && (en(e, {
    renderer_crash_count: 1,
    error: t.message,
    error_description: t.stack
  }), (0, E.V6)(t, K[e], {
    extra: ei(e, "renderer")
  }), g.JC.addModuleBreadcrumb("renderer_crash", {
    error: t.message,
    error_description: null != (n = t.stack) ? n : ""
  }, g.C7.OOPModule, e, g.l6.Error), $.clearClickZones(), eX.emitChange())
}

function es(e, t) {
  try {
    if (null != t && (K[e] = t), null == B || B.trackGame(e), er(e), j.has(e)) return;
    j.add(e), M(e, "game_tracked", {
      newOverlayMethod: null != t ? y.gl[t] : null
    }), a.Z.updateOverlayState(e, y.mM.WAITING_FOR_OVERLAY_OPEN)
  } catch (t) {
    x.error("Error tracking game:", t), eo(e, t)
  }
}

function el(e) {
  try {
    null == B || B.untrackGame(e), j.delete(e), delete W[e], delete K[e], x.verbose("Removing tracked game ".concat(e))
  } catch (t) {
    x.error("Error removing tracked game:", t), eo(e, t)
  }
}

function ec() {
  try {
    for (let e of j) null == B || B.untrackGame(module);
    j.clear(), W = {}, K = {}, x.verbose("Cleared all tracked games")
  } catch (e) {
    x.error("Error clearing tracked games:", module), eo(Chunk145597.UNSET_PID, module)
  }
}

function eu() {
  return (0, Chunk32300.NW)("overlay_store_v3", false)
}

function ed() {
  if (!Z) return void ec();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => u.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...j].filter(t => !e.has(t)))) el(exports);
  for (let e of j) es(module)
}

function ef(e) {
  if (null == B) return void x.warn("Overlay module not initialized during lock attempt");
  try {
    let t = !e;
    B.setInteractionEnabled(t), G.toggleGPUBoost(y.zS.OVERLAY_UNLOCKED, t)
  } catch (e) {
    x.error("Error during overlay lock:", e), eo(null != V ? V : m.UNSET_PID, e)
  }
}

function e_(e) {
  let t = u.ZP.getGameOrTransformedSubgameForPID(e);
  a.Z.setAssociatedGame(null != V ? V : m.UNSET_PID, e, t)
}
async function ep() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 500,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3;
  for (let i = 0; Chunk442837 < exports; Chunk442837++) {
    let o = Chunk442837 + 1 >= exports;
    try {
      var n, r;
      let e = null != (r = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (n = Chunk579806.Z.window) ? true : require.getNativeHandle(Chunk501787.$J))) ? r : "";
      if ("" !== module) return module
    } catch (e) {
      if (Chunk570140) throw module;
      x.error("Error getting native window handle, retrying...", module)
    }
    if (Chunk570140) {
      x.error("Failed to get native window handle, giving up");
      break
    }
    x.info("Failed to get window handle on attempt ".concat(Chunk442837 + 1, " of ").concat(exports));
    let a = Math.pow(2, Chunk442837 + 1) * module;
    await new Promise(e => setTimeout(e, a))
  }
  return null
}
async function eh(e) {
  x.verbose("Creating OOP Host Window for pid ".concat(e));
  try {
    let t = new Date().getTime(),
      n = {
        mounting_started_at: t
      };
    en(e, n), H = null, M(e, "renderer_window_mounting_started", n), await (0, T.f)(q);
    let r = {
      renderer_started: true,
      fullscreen_type: await (0, I.hj)(e, 0),
      graphics_info_after: new Date().getTime() - t
    };
    en(e, r), M(e, "renderer_window_mounted", r), s.Z.window.setBackgroundThrottling(false), h.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && G.toggleGPUBoost(y.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, true), G.toggleGPUBoost(y.zS.OVERLAY_RENDERING, true), e_(e), V = e, (0, m.setPID)(e), x.info("Getting Native Handle for pid", e);
    let i = await ep();
    if (null == i) return x.error("Failed to get native handle for pid", e), eo(e, Error("Failed to get native handle for pid")), "";
    x.info("Native Handle for pid ".concat(e, ":"), i), a.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING);
    let o = {
      renderer_started_after: new Date().getTime() - t
    };
    return M(e, "renderer_started", o), en(e, o), eN(false), v.Z.resetWindowState(), i
  } catch (t) {
    x.error("failed to create out of process overlay host window", t), ea(e, t), a.Z.updateOverlayState(e, y.mM.OVERLAY_CRASHED_DISABLED)
  }
  return eg(e), ""
}

function em() {
  x.verbose("Destroying OOP host window"), G.resetGPUBoosts();
  try {
    var e;
    null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.window) || module.close(Chunk501787.$J)
  } catch (e) {
    x.error("Error destroying overlay window:", module), eo(null != V ? V : Chunk145597.UNSET_PID, module)
  }
  try {
    Chunk579806.Z.window.setBackgroundThrottling(true)
  } catch (e) {
    x.error("Error setting background throttling:", module), eo(null != V ? V : Chunk145597.UNSET_PID, module)
  }
  eI(), k.clear(), Chunk503522.Z.resetWindowState(false), null != V && eg(V), V = null, (0, Chunk145597.setPID)(null != V ? V : Chunk145597.UNSET_PID)
}

function eg(e) {
  p.default.track(C.rMx.OVERLAY_HOOK_RESULT, et(e))
}

function eE(e) {
  try {
    x.verbose("Refreshing OOP host window for pid ".concat(e)), M(e, "renderer_window_refreshing_started"), e_(e), k.delete(null != V ? V : m.UNSET_PID), V = e, (0, m.setPID)(null != V ? V : m.UNSET_PID);
    let t = d.Z.getWindow(N.$J),
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
        15 === r ? ($.clearClickZones(), M(e, "renderer_window_refreshing_finished"), null == B || B.readyToShow(e), a.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING), x.verbose("Showing overlay v3 for pid ".concat(e))) : (r += 1, n().then(i))
      };
    i()
  } catch (e) {
    x.error("failed to refresh out of process overlay host window", e), eo(null != V ? V : m.UNSET_PID, e)
  }
}

function eb(e, t, n, r) {
  let i = d.Z.getWindow(N.$J);
  if (null == i) return;
  let o = Math.ceil(n * i.innerWidth),
    a = Math.ceil(r * i.innerHeight),
    s = new MouseEvent(t, {
      screenX: o,
      screenY: a,
      clientX: o,
      clientY: a,
      bubbles: true,
      view: i
    }),
    l = i.document.elementFromPoint(o, a);
  if (null == l) throw Error("No node found at point");
  l.dispatchEvent(s)
}

function ey(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (null == e ? $.storeClickZones() : $.refreshClickZones(), e !== F && M(e, "renderer_window_focus_flushed", {
      focusedPID: F,
      isUntracked: t
    }), null != e) {
    let t = K[e] === y.gl.OutOfProcessLimitedInteraction;
    if (t !== H) {
      H = t;
      try {
        "function" == typeof(null == B ? true : B.setLimitedInteraction) ? (x.info("Setting limited interaction", t), M(e, "focus_and_interaction_set", {
          isLimitedInteraction: t,
          focusable: !t
        }), B.setLimitedInteraction(t), h.ZP.setFocusable(N.$J, !t)) : x.info("No setLimitedInteraction function found, skipping")
      } catch (t) {
        x.error("Error setting limited interaction mode:", t), eo(e, t)
      }
    }
  }
  a.Z.setFocusedPID(0 === e ? null : e, t)
}

function eO(e) {
  ey(e), eX.emitChange(), e !== F && x.info("OverlayStore: Focused new PID", e)
}

function ev(e) {
  eI(), eX.emitChange()
}

function eI() {
  ey(null, true), eX.emitChange()
}

function eT(e) {
  return F = e.pid, true
}

function eS(e) {
  M(e, "_successfullyShownCallback"), a.Z.successfullyShown(e), a.Z.updateOverlayState(e, y.mM.OVERLAY_RENDERING);
  let t = et(e).mounting_started_at;
  en(e, {
    total_mount_time_ms: null != t ? new Date().getTime() - t : true,
    success: true
  }), eX.emitChange()
}
let eA = (() => {
  let e = null;
  async function t() {
    if (!Chunk987650.iP) return void x.error("Attempted to load overlay on an unsupported platform.");
    x.info("Loading Out of Process Overlay Module");
    try {
      var e, t, n;
      await Chunk998502.ZP.ensureModule("discord_desktop_overlay");
      let r = Chunk998502.ZP.requireModule("discord_desktop_overlay");
      null == r || null == (e = r.init) || module.call(r), r.setCaptureZoneCallback(eb), r.setHostWindowCallbacks(eh, em, eE), r.setFocusCallback(eO), null == (t = r.setFocusLostCallback) || exports.call(r, ev), null == (n = r.setSuccessfullyShownCallback) || require.call(r, eS), B = r, (0, Chunk145597.setOutOfProcessSupport)(true), ed(), x.info("OverlayV3 Module Loaded"), M((0, Chunk145597.getPID)(), "overlay_v3_module_loaded")
    } catch (e) {
      throw x.error("failed loading overlay module", module), (0, Chunk145597.setOutOfProcessSupport)(false), (0, Chunk41534.V6)(module, Chunk837268.gl.OutOfProcess, {
        extra: ei(null != V ? V : Chunk145597.UNSET_PID, "module_load")
      }), module
    }
  }
  return () => (null == module && (e = exports()), module)
})();

function eN(e) {
  M((0, m.getPID)(), "setInteractionEnabled called", {
    interactionEnabled: e
  }), null == B || B.setInteractionEnabled(e)
}

function eC(e) {
  if (S.iP && (Z = e, null == B && eu())) return void eA()
}

function eR(e) {}

function eP(e) {}

function ew(e) {}
async function eD(e) {
  e.overlayMethod === y.gl.OutOfProcess || e.overlayMethod === y.gl.OutOfProcessLimitedInteraction ? (null == B && await eA(), es(e.pid, e.overlayMethod)) : el(e.pid), eX.emitChange()
}

function eL(e) {
  x.verbose("Updating OverlayMethod", e), eD(e)
}

function ex(e) {
  let {
    pid: t,
    error: n
  } = e;
  j.has(t) && ea(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"))
}

function eM(e) {
  G.toggleGPUBoost(e.reason, e.enabled)
}

function ej() {
  x.verbose("Maybe Enable Overlay"), eu() ? (eC(Chunk454991.v.oopEnabled), (0, Chunk145597.setOutOfProcessSupport)(true), eA()) : Z && eC(false)
}

function ek(e) {
  let {
    oopEnabled: t
  } = e;
  eC(t)
}

function eU(e) {
  let {
    zones: t
  } = e;
  $.setClickZones(t)
}

function eG(e) {
  W[e.pid] = e.overlayState
}

function eB(e) {
  let {
    locked: t,
    pid: n
  } = e, r = W[n];
  if (t || r !== y.mM.OVERLAY_CRASHED_DISABLED) {
    if (M(n, "setInputLocked called", {
        locked: t
      }), t ? k.delete(n) : k.add(n), null != Y && (clearTimeout(Y), Y = null, t)) return;
    t ? ef(t) : Y = setTimeout(() => {
      ef(t), Y = null
    }, 100)
  }
}

function eZ(e) {
  let {
    region: t
  } = e;
  ef(false)
}

function eF() {
  ef(true)
}

function eV(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  t ? ee.add(n) : ee.delete(n), n === y.GO.DisabledGPUBoost && G.toggleDisabledGPUBoost(t), n === y.GO.ForceGPUBoost && G.toggleGPUBoost(y.zS.DEV_FORCED_GPU_BOOST, t)
}

function eH() {
  Chunk353926.Z.hasLoadedExperiments && !z && (z = true, ej())
}

function eY() {
  z = false
}

function eW(e) {
  let {
    mode: t
  } = e;
  q = t
}
let eK = 3e3;

function ez(e) {
  let {
    enabled: t
  } = e;
  t ? X = setInterval(() => {
    null == B || B.getBreadcrumbs({
      minBreadcrumbId: g.JC.getLatestBreadcrumbId()
    }, e => {
      let {
        breadcrumbs: t
      } = e;
      for (let e of t) g.JC.addNativeBreadcrumb(e, g.C7.NativeOOP, (0, m.getPID)());
      eX.emitChange()
    })
  }, eK) : clearInterval(X)
}
class eq extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk314897.default, Chunk353926.Z), this.syncWith([Chunk353926.Z], eH)
  }
  DEV_getOverlayLoggingBreadcrumbs(e) {
    return g.JC.getBreadcrumbs(e)
  }
  DEV_isOverlayModuleLoggingEnabled() {
    return null != X
  }
  isInputLocked(e) {
    return !k.has(e)
  }
  isSupported() {
    return Chunk987650.iP
  }
  isOverlayV3Enabled() {
    return eu()
  }
  isOverlayV3EnabledForPID(e) {
    return j.has(e)
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
    return Z
  }
  hasRenderDebugMode(e) {
    return ee.has(e)
  }
  getFocusedPID() {
    return F
  }
  isFocused(e) {
    return null != F && e !== m.UNSET_PID && (!!j.has(e) || e === m.DEV_PID) && F === e
  }
  getFocusedRunningGame() {
    var e;
    return null == F ? null : null != (e = Chunk594190.ZP.getGameOrTransformedSubgameForPID(F)) ? module : null
  }
  isReady(e) {
    return j.has(e)
  }
  isGPUBoosted() {
    return G.isGPUBoosted
  }
  getOverlayState(e) {
    var t;
    return null != (t = W[e]) ? t : null
  }
  getOverlayMethod(e) {
    var t;
    return null != (t = K[e]) ? t : null
  }
}
R(eq, "displayName", "OverlayStore-v3");
let eX = new eq(Chunk570140.Z, __OVERLAY__ ? {} : {
    LOGIN: eY,
    LOGOUT: eY,
    EXPERIMENT_OVERRIDE_BUCKET: ej,
    OVERLAY_SET_ENABLED: ek,
    GAME_LAUNCH_SUCCESS: eR,
    RUNNING_GAMES_CHANGE: eP,
    RUNNING_GAME_TOGGLE_OVERLAY: ew,
    OVERLAY_FORCE_RENDER_MODE: eW,
    OVERLAY_SET_CLICK_ZONES: eU,
    OVERLAY_SET_INPUT_LOCKED: eB,
    OVERLAY_ACTIVATE_REGION: eZ,
    OVERLAY_DEACTIVATE_ALL_REGIONS: eF,
    OVERLAY_RENDER_DEBUG_MODE: eV,
    OVERLAY_UPDATE_OVERLAY_METHOD: eL,
    OVERLAY_UPDATE_OVERLAY_STATE: eG,
    OVERLAY_SET_GPU_BOOST_REQUESTED: eM,
    OVERLAY_CRASHED: ex,
    OVERLAY_FOCUSED: eT,
    OVERLAY_SET_MODULE_LOGGING: ez
  }),
  eQ = eX