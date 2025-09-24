/** Chunk was on web.js **/
/** chunk id: 610394, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A8: () => L,
  Il: () => j,
  ZP: () => e6
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

function x(e) {
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
let L = "repaint-complete",
  j = "request-repaint";
class M {
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
        Chunk998502.ZP.SetGPUBoostEnabledByPid(r, require) && (this.isGPUBoosted = require), e5.emitChange()
      } catch (e) {
        (null == (n = module.message) ? true : require.includes("IPC method called after context was released")) && this.resetGPUBoosts(), k.error("Error during GPU boost request flush:", module), ef(null != K ? K : Chunk145597.UNSET_PID, module)
      }
    })
  }
}
let k = new Chunk710845.Z("OverlayStoreV3");

function U(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : y.l6.Info;
  y.JC.addModuleBreadcrumb(t, null != n ? n : {}, y.C7.OOPModule, e, r), e5.emitChange()
}
let G = new Set,
  B = new Set,
  Z = {},
  F = new M,
  V = new Set,
  H = null,
  Y = false,
  W = null,
  K = null,
  z = null,
  q = null,
  X = {},
  Q = {},
  J = false,
  $ = Chunk837268.R5.UNSET,
  ee = null,
  et = null,
  en = false,
  er = false,
  ei = 3e4;
class ea {
  _setCaptureZones(e) {
    try {
      let t = e.map(e => ({
        name: e.name,
        left: e.left,
        top: e.top,
        right: e.right,
        bottom: e.bottom
      }));
      U(K, "capture_zones_set", {
        capture_zones: t
      }), null == H || H.setCaptureZones(t)
    } catch (e) {
      k.error("Error setting capture zones:", e), ef(null != K ? K : b.UNSET_PID, e)
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
    if (!Y) {
      if (0 === this.clickZones.length) return;
      this.clearClickZones();
      return
    }
    this.clickZones = e, this.focusLostStoredClickZones = [...e];
    try {
      let t = setTimeout(() => {
          this.triggerClickZoneTimer(t)
        }, ei),
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
      null == H || H.setCaptureZones(n)
    } catch (e) {
      k.error("Error setting capture zones:", e), ef(null != K ? K : b.UNSET_PID, e)
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
let eo = new ea,
  es = new Set;

function el(e) {
  var t;
  return null != (t = Z[e]) ? t : {}
}

function ec(e, t) {
  var n, r;
  let i = null == (n = Z[e]) ? true : n.error,
    a = null == (r = Z[e]) ? true : r.error_description;
  Z[e] = x({}, Z[e], t), null != i && (Z[e].error = i), null != a && (Z[e].error_description = a)
}

function eu(e) {
  var t, n, r;
  if (null != Z[e]) return;
  let i = _.ZP.getGameOrTransformedSubgameForPID(e);
  Z[e] = {
    overlay_method: I.gl[null != (t = Q[e]) ? t : I.gl.OutOfProcess],
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

function ed(e, t) {
  let n = _.ZP.getGameOrTransformedSubgameForPID(e);
  return {
    crash_type: t,
    gameName: null == n ? true : n.name
  }
}

function ef(e, t) {
  var n;
  e !== b.UNSET_PID && (ec(e, {
    host_crash_count: 1,
    error: t.message,
    error_description: t.stack
  }), (0, O.V6)(t, Q[e], {
    extra: ed(e, "host")
  }), y.JC.addModuleBreadcrumb("host_crash", {
    error: t.message,
    error_description: null != (n = t.stack) ? n : ""
  }, y.C7.NativeOOP, e, y.l6.Error), eo.clearClickZones(), e5.emitChange())
}

function e_(e, t) {
  var n;
  e !== b.UNSET_PID && (ec(e, {
    renderer_crash_count: 1,
    error: t.message,
    error_description: t.stack
  }), (0, O.V6)(t, Q[e], {
    extra: ed(e, "renderer")
  }), y.JC.addModuleBreadcrumb("renderer_crash", {
    error: t.message,
    error_description: null != (n = t.stack) ? n : ""
  }, y.C7.OOPModule, e, y.l6.Error), eo.clearClickZones(), e5.emitChange())
}

function ep(e, t) {
  try {
    if (null != t && (Q[e] = t), null == H || H.trackGame(e), eu(e), G.has(e)) return;
    G.add(e), U(e, "game_tracked", {
      newOverlayMethod: null != t ? I.gl[t] : null
    }), c.Z.updateOverlayState(e, I.mM.WAITING_FOR_POPOUT_OPEN)
  } catch (t) {
    k.error("Error tracking game:", t), ef(e, t)
  }
}

function eh(e) {
  try {
    null == H || H.untrackGame(e), G.delete(e), delete X[e], delete Q[e], k.verbose("Removing tracked game ".concat(e)), V.delete(e)
  } catch (t) {
    k.error("Error removing tracked game:", t), ef(e, t)
  }
}

function em() {
  try {
    for (let e of G) null == H || H.untrackGame(module);
    G.clear(), X = {}, Q = {}, V.clear(), k.verbose("Cleared all tracked games")
  } catch (e) {
    k.error("Error clearing tracked games:", module), ef(Chunk145597.UNSET_PID, module)
  }
}

function eg() {
  return (0, Chunk32300.NW)("overlay_store_v3", false)
}

function eE() {
  if (!Y) return void em();
  let e = new Set(Chunk594190.ZP.getRunningGames().filter(e => _.ZP.getOverlayEnabledForGame(e)).map(e => e.pid));
  for (let t of new Set([...G].filter(t => !e.has(t)))) eh(exports);
  for (let e of G) ep(module)
}

function eb(e) {
  if (null == H) return void k.warn("Overlay module not initialized during lock attempt");
  try {
    let t = !e;
    H.setInteractionEnabled(t), F.toggleGPUBoost(I.zS.OVERLAY_UNLOCKED, t)
  } catch (e) {
    k.error("Error during overlay lock:", e), ef(null != K ? K : b.UNSET_PID, e)
  }
}

function ey(e) {
  let t = _.ZP.getGameOrTransformedSubgameForPID(e);
  c.Z.setAssociatedGame(null != K ? K : b.UNSET_PID, e, t)
}
async function eO() {
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
      k.error("Error getting native window handle, retrying...", module)
    }
    if (Chunk348327) {
      k.error("Failed to get native window handle, giving up");
      break
    }
    k.info("Failed to get window handle on attempt ".concat(i + 1, " of ").concat(exports));
    let o = Math.pow(2, i + 1) * module;
    await new Promise(e => setTimeout(e, o))
  }
  return null
}
async function ev(e) {
  k.verbose("Creating OOP Host Window for pid ".concat(e));
  try {
    let t = new Date().getTime(),
      n = {
        mounting_started_at: t
      };
    ec(e, n), er = false, z = null, U(e, "renderer_window_mounting_started", n), await (0, C.f)($);
    let r = {
      renderer_started: true,
      fullscreen_type: await (0, A.hj)(e, 0),
      graphics_info_after: new Date().getTime() - t
    };
    ec(e, r), U(e, "renderer_window_mounted", r), u.Z.window.setBackgroundThrottling(false), E.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && F.toggleGPUBoost(I.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, true), F.toggleGPUBoost(I.zS.OVERLAY_RENDERING, true), ey(e), K = e, (0, b.setPID)(e), k.info("Getting Native Handle for pid", e);
    let i = await eO();
    if (null == i) return k.error("Failed to get native handle for pid", e), ef(e, Error("Failed to get native handle for pid")), "";
    k.info("Native Handle for pid ".concat(e, ":"), i), c.Z.updateOverlayState(e, I.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
    let a = {
      renderer_started_after: new Date().getTime() - t
    };
    return U(e, "renderer_started", a), ec(e, a), eU(false), S.Z.resetWindowState(), (null == H ? true : H.setOnWindowHandleInitializedCallback) == null && eM(true), i
  } catch (t) {
    k.error("failed to create out of process overlay host window", t), e_(e, t), c.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED_DISABLED)
  }
  return eT(e), ""
}

function eI() {
  k.verbose("Destroying OOP host window"), F.resetGPUBoosts();
  try {
    var e;
    null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.window) || module.close(Chunk501787.$J)
  } catch (e) {
    k.error("Error destroying overlay window:", module), ef(null != K ? K : Chunk145597.UNSET_PID, module)
  }
  try {
    Chunk579806.Z.window.setBackgroundThrottling(true)
  } catch (e) {
    k.error("Error setting background throttling:", module), ef(null != K ? K : Chunk145597.UNSET_PID, module)
  }
  eP(), B.clear(), Chunk503522.Z.resetWindowState(false), null != K && eT(K), K = null, (0, Chunk145597.setPID)(null != K ? K : Chunk145597.UNSET_PID), er = false, (null == H ? true : H.setOnWindowHandleInitializedCallback) == null && eM(false)
}

function eT(e) {
  g.default.track(w.rMx.OVERLAY_HOOK_RESULT, el(e))
}

function eS(e) {
  try {
    k.verbose("Refreshing OOP host window for pid ".concat(e)), U(e, "renderer_window_refreshing_started"), ey(e), B.delete(null != K ? K : b.UNSET_PID), K = e, (0, b.setPID)(null != K ? K : b.UNSET_PID);
    let t = p.Z.getWindow(P.$J),
      n = () => new Promise(e => {
        let n = t => {
          t.data === L && (window.removeEventListener("message", n), e())
        };
        window.addEventListener("message", n), null == t || t.postMessage(j, "*"), setTimeout(() => {
          let e = new MessageEvent("message", {
            data: L
          });
          n(e)
        }, 100)
      }),
      r = 0,
      i = () => {
        15 === r ? (eo.clearClickZones(), U(e, "renderer_window_refreshing_finished"), null == H || H.readyToShow(e), c.Z.updateOverlayState(e, I.mM.OVERLAY_RENDERING), k.verbose("Showing overlay v3 for pid ".concat(e))) : (r += 1, n().then(i))
      };
    i()
  } catch (e) {
    k.error("failed to refresh out of process overlay host window", e), ef(null != K ? K : b.UNSET_PID, e)
  }
}

function eA(e, t, n, r) {
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

function eC(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (null == e ? eo.storeClickZones() : eo.refreshClickZones(), e !== W && U(e, "renderer_window_focus_flushed", {
      focusedPID: W,
      isUntracked: t
    }), null != e) {
    let t = Q[e] === I.gl.OutOfProcessLimitedInteraction;
    if (t !== z) {
      z = t;
      try {
        "function" == typeof(null == H ? true : H.setLimitedInteraction) ? (k.info("Setting limited interaction", t), U(e, "focus_and_interaction_set", {
          isLimitedInteraction: t,
          focusable: !t
        }), H.setLimitedInteraction(t), E.ZP.setFocusable(P.$J, !t)) : k.info("No setLimitedInteraction function found, skipping")
      } catch (t) {
        k.error("Error setting limited interaction mode:", t), ef(e, t)
      }
    }
  }
  c.Z.setFocusedPID(0 === e ? null : e, t)
}

function eN(e) {
  eC(e), e5.emitChange(), e !== W && k.info("OverlayStore: Focused new PID", e)
}

function eR(e) {
  eP(), e5.emitChange()
}

function eP() {
  eC(null, true), e5.emitChange()
}

function ew(e) {
  return W = e.pid, true
}

function eD(e) {
  if (!V.has(e) || !er) return;
  let t = el(e).mounting_started_at;
  ec(e, {
    total_mount_time_ms: null != t ? new Date().getTime() - t : true,
    success: true
  }), c.Z.successfullyShown(e)
}

function ex() {
  var e;
  return null == H || null == (e = H.onPopoutShowInactive) || module.call(H), false
}

function eL() {
  er = true, V.forEach(e => {
    eD(e)
  })
}

function ej(e) {
  U(e, "_successfullyShownCallback"), V.add(e), eD(e)
}

function eM(e) {
  en = e, e && c.Z.updateOverlayState((0, b.getPID)(), I.mM.WAITING_FOR_REACT_INITIALIZATION), e5.emitChange()
}
let ek = (() => {
  let e = null;
  async function t() {
    if (!Chunk987650.iP) return void k.error("Attempted to load overlay on an unsupported platform.");
    k.info("Loading Out of Process Overlay Module");
    try {
      var e, t, n, r;
      await Chunk998502.ZP.ensureModule("discord_desktop_overlay");
      let i = Chunk998502.ZP.requireModule("discord_desktop_overlay");
      null == i || null == (e = i.init) || module.call(i), i.setCaptureZoneCallback(eA), i.setHostWindowCallbacks(ev, eI, eS), i.setFocusCallback(eN), null == (t = i.setFocusLostCallback) || exports.call(i, eR), null == (n = i.setSuccessfullyShownCallback) || require.call(i, ej), null == (r = i.setOnWindowHandleInitializedCallback) || r.call(i, eM), H = i, (0, Chunk145597.setOutOfProcessSupport)(true), eE(), k.info("OverlayV3 Module Loaded"), U((0, Chunk145597.getPID)(), "overlay_v3_module_loaded")
    } catch (e) {
      throw k.error("failed loading overlay module", module), (0, Chunk145597.setOutOfProcessSupport)(false), (0, Chunk41534.V6)(module, Chunk837268.gl.OutOfProcess, {
        extra: ed(null != K ? K : Chunk145597.UNSET_PID, "module_load")
      }), module
    }
  }
  return () => (null == module && (e = exports()), module)
})();

function eU(e) {
  U((0, b.getPID)(), "setInteractionEnabled called", {
    interactionEnabled: e
  }), null == H || H.setInteractionEnabled(e)
}

function eG(e) {
  if (N.iP && (Y = e, null == H && eg())) return void ek()
}
async function eB(e) {
  e.overlayMethod === I.gl.OutOfProcess || e.overlayMethod === I.gl.OutOfProcessLimitedInteraction ? (null == H && await ek(), ep(e.pid, e.overlayMethod)) : eh(e.pid), e5.emitChange()
}

function eZ(e) {
  k.verbose("Updating OverlayMethod", e), eB(e)
}

function eF(e) {
  let {
    pid: t,
    error: n
  } = e;
  G.has(t) && e_(t, n instanceof Error ? n : Error(null != n ? n : "Unknown error"))
}

function eV(e) {
  F.toggleGPUBoost(e.reason, e.enabled)
}

function eH() {
  k.verbose("Maybe Enable Overlay"), eg() ? (eG(Chunk454991.v.oopEnabled), (0, Chunk145597.setOutOfProcessSupport)(true), ek()) : Y && eG(false)
}

function eY(e) {
  let {
    oopEnabled: t
  } = e;
  eG(t)
}

function eW(e) {
  let {
    zones: t
  } = e;
  eo.setClickZones(t)
}

function eK(e) {
  X[e.pid] = e.overlayState
}

function ez(e) {
  let {
    locked: t,
    pid: n
  } = e, r = X[n];
  if (t || r !== I.mM.OVERLAY_CRASHED_DISABLED) {
    if (U(n, "setInputLocked called", {
        locked: t
      }), t ? B.delete(n) : B.add(n), null != q && (clearTimeout(q), q = null, t)) return;
    t ? eb(t) : q = setTimeout(() => {
      eb(t), q = null
    }, 100)
  }
}

function eq(e) {
  let {
    region: t
  } = e;
  eb(false)
}

function eX() {
  eb(true)
}

function eQ(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  t ? es.add(n) : es.delete(n), n === I.GO.DisabledGPUBoost && F.toggleDisabledGPUBoost(t), n === I.GO.ForceGPUBoost && F.toggleGPUBoost(I.zS.DEV_FORCED_GPU_BOOST, t)
}

function eJ() {
  Chunk353926.Z.hasLoadedExperiments && !J && (J = true, eH())
}

function e$() {
  J = false
}

function e0(e) {
  let {
    mode: t
  } = e;
  $ = t
}
let e1 = 3e3,
  e2 = 100;

function e3(e) {
  let {
    enabled: t
  } = e;
  if (t) {
    if (null != ee) returnfalse;
    ee = setInterval(() => {
      null == H || H.getBreadcrumbs({
        minBreadcrumbId: y.JC.getLatestBreadcrumbId()
      }, e => {
        let {
          breadcrumbs: t
        } = e;
        for (let e of t) y.JC.addNativeBreadcrumb(e, y.C7.NativeOOP, (0, b.getPID)());
        e5.emitChange()
      })
    }, e1)
  } else clearInterval(ee), ee = null
}

function e4(e) {
  let {
    enabled: t
  } = e;
  if (t) {
    if (null != et) returnfalse;
    et = setInterval(() => {
      var e;
      null == H || null == (e = H.getDebuggingState) || e.call(H, e => {
        o()(r, e) || (r = e, e5.emitChange())
      })
    }, e2)
  } else clearInterval(et), et = null
}
class e8 extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk314897.default, Chunk353926.Z), this.syncWith([Chunk353926.Z], eJ)
  }
  DEV_getOverlayLoggingBreadcrumbs(e) {
    return y.JC.getBreadcrumbs(e)
  }
  DEV_isOverlayModuleLoggingEnabled() {
    return null != ee
  }
  DEV_getDebuggingState() {
    return r
  }
  DEV_isStateDebuggingEnabled() {
    return null != et
  }
  isInputLocked(e) {
    return !B.has(e)
  }
  isSupported() {
    return Chunk987650.iP
  }
  isOverlayV3Enabled() {
    return eg()
  }
  isOverlayV3EnabledForPID(e) {
    return G.has(e)
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
    return Y
  }
  hasRenderDebugMode(e) {
    return es.has(e)
  }
  getFocusedPID() {
    return W
  }
  isFocused(e) {
    return null != W && e !== b.UNSET_PID && (!!G.has(e) || e === b.DEV_PID) && W === e
  }
  getFocusedRunningGame() {
    var e;
    return null == W ? null : null != (e = Chunk594190.ZP.getGameOrTransformedSubgameForPID(W)) ? module : null
  }
  isReady(e) {
    return G.has(e)
  }
  isGPUBoosted() {
    return F.isGPUBoosted
  }
  getOverlayState(e) {
    var t;
    return null != (t = X[e]) ? t : null
  }
  getOverlayMethod(e) {
    var t;
    return null != (t = Q[e]) ? t : null
  }
  isWindowHandleInitialized() {
    return en
  }
}
D(e8, "displayName", "OverlayStore-v3");
let e5 = new e8(Chunk570140.Z, __OVERLAY__ ? {} : {
    LOGIN: e$,
    LOGOUT: e$,
    EXPERIMENT_OVERRIDE_BUCKET: eH,
    OVERLAY_SET_ENABLED: eY,
    OVERLAY_FORCE_RENDER_MODE: e0,
    OVERLAY_SET_CLICK_ZONES: eW,
    OVERLAY_SET_INPUT_LOCKED: ez,
    OVERLAY_ACTIVATE_REGION: eq,
    OVERLAY_DEACTIVATE_ALL_REGIONS: eX,
    OVERLAY_RENDER_DEBUG_MODE: eQ,
    OVERLAY_UPDATE_OVERLAY_METHOD: eZ,
    OVERLAY_UPDATE_OVERLAY_STATE: eK,
    OVERLAY_SET_GPU_BOOST_REQUESTED: eV,
    OVERLAY_CRASHED: eF,
    OVERLAY_FOCUSED: ew,
    OVERLAY_SET_MODULE_LOGGING: e3,
    OVERLAY_SET_STATE_DEBUGGING: e4,
    OVERLAY_OOP_UI_INITIALIZED: eL,
    OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ex
  }),
  e6 = e5