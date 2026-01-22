/** Chunk was on web.js **/
/** chunk id: 327194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => S
}), require("./65821.js"), require("./896048.js");
var Chunk77729 = require("./77729.js"),
  Chunk626584 = require("./626584.js"),
  Chunk869146 = require("./869146.js"),
  Chunk837921 = require("./837921.js"),
  Chunk9302 = require("./9302.js"),
  Chunk181435 = require("./181435.js"),
  Chunk48345 = require("./48345.js"),
  Chunk395011 = require("./395011.js"),
  Chunk682763 = require("./682763.js"),
  Chunk96175 = require("./96175.js"),
  Chunk905555 = require("./905555.js"),
  Chunk237984 = require("./237984.jsx"),
  Chunk672396 = require("./672396.js"),
  Chunk392164 = require("./392164.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = new Chunk626584.A("OverlayV3NativeModule");

function b(e, t, n) {
  (0, d._r)(e, "renderer_window_focus_changed", {
    windowHandle: t,
    popoutInitializationStages: u.A.getPopoutInitializationStages()
  }), (0, d.cS)(e, null != t ? (0, f.Oy)(t) : null, n)
}

function y(e) {
  (0, d._r)(e, "renderer_window_focus_lost", {
    popoutInitializationStages: u.A.getPopoutInitializationStages()
  }), (0, d.C7)(e)
}

function O(e) {
  (0, d._r)(e, "successfully_shown", {
    popoutInitializationStages: u.A.getPopoutInitializationStages()
  }), (0, d.oW)(e)
}

function A(e) {
  (0, d._r)(null, "window_handle_initialized", {
    real_initialized: e,
    popoutInitializationStages: u.A.getPopoutInitializationStages()
  }), (0, d.i0)(e)
}

function v(e) {
  var t, n, r, i;
  null == (t = e.setFocusCallback) || t.call(e, b), null == (n = e.setFocusLostCallback) || n.call(e, y), null == (r = e.setSuccessfullyShownCallback) || r.call(e, O), null == (i = e.setOnWindowHandleInitializedCallback) || i.call(e, A), (0, d._r)(null, "native_module_callbacks_setup"), E.verbose("Native module callbacks setup")
}
class S {
  static getInstance() {
    return null == this.instance && (this.instance = new S), this.instance
  }
  async initialize() {
    return await this.prepareOverlayModule()
  }
  getOverlayModule() {
    if (null == this.module) throw Error("Overlay module not loaded");
    return this.module
  }
  destroy() {
    this.module = null, this.lastAssociatedPID = null, this.trackedGamePids = new Set, E.info("OverlayV3 Native Module destroyed")
  }
  getLastAssociatedPID() {
    return this.lastAssociatedPID
  }
  prepareOverlayModule() {
    return null != this.modulePromise || (this.modulePromise = this.loadOutOfProcessOverlayModule()), this.modulePromise
  }
  async loadOutOfProcessOverlayModule() {
    if (!h.OX) return void E.error("Attempted to load overlay on an unsupported platform.");
    E.info("Loading Out of Process Overlay Module");
    try {
      await s.Ay.ensureModule("discord_desktop_overlay");
      let e = s.Ay.requireModule("discord_desktop_overlay");
      e.init(), e.setHostWindowCallbacks(e => this.createOutOfProcessOverlayHostWindow(e), () => this.destroyOutOfProcessOverlayHostWindow(), e => this.refreshOutOfProcessOverlayHostWindow(e)), this.module = e, (0, d._r)(null, "module_loaded"), (0, o.setOutOfProcessSupport)(true), v(this.module), (0, d.Mi)(), E.info("OverlayV3 Module Loaded")
    } catch (e) {
      throw E.error("failed loading overlay module", e), (0, o.setOutOfProcessSupport)(false), (0, d.wK)(e), this.module = null, this.modulePromise = null, e
    }
  }
  async createOutOfProcessOverlayHostWindow(e) {
    E.verbose("Creating OOP Host Window for pid ".concat(e)), (0, d.wX)(e);
    let t = null;
    try {
      (0, d._r)(e, "host_window_mounting_started", {
        popoutInitializationStages: u.A.getPopoutInitializationStages()
      }), await (0, p.H)(), t = await this.openOverlayPopout(), await (0, d.hJ)(e), (0, d._r)(e, "host_window_created", {
        hasWindow: null != t,
        popoutInitializationStages: u.A.getPopoutInitializationStages()
      })
    } catch (t) {
      E.error("Error creating OOP host window:", t), (0, d._r)(e, "host_window_mounting_failed", {
        error: t
      }, l.QJ.Error)
    }
    try {
      r.A.window.setBackgroundThrottling(false)
    } catch (t) {
      E.error("Error setting background throttling:", t), (0, d._r)(e, "background_throttling_setting_failed", {
        error: t
      }, l.QJ.Error)
    }
    let n = null;
    try {
      var i;
      n = await this.getNativeWindowHandleWithRetry(), c.A.resetWindowState(), (0, d._r)(e, "native_window_handle_retrieved", {
        handle: n,
        hasWindow: null != n,
        popoutInitializationStages: u.A.getPopoutInitializationStages()
      }), await (0, d.pi)(e, n), (null == (i = this.module) ? true : i.setOnWindowHandleInitializedCallback) == null && await (0, d.i0)(true)
    } catch (t) {
      E.error("Error getting native window handle:", t), (0, d.lo)(e, t, n), (0, d._r)(e, "native_window_handle_retrieval_failed", {
        error: t,
        handle: n,
        hasWindow: null != n,
        popoutInitializationStages: u.A.getPopoutInitializationStages()
      }, l.QJ.Error)
    }
    return null == n ? (0, d.mD)(e, Error("Native window handle not found"), {
      crashType: "native",
      isCrashedDisabled: true
    }) : this.lastAssociatedPID = e, null != n ? n : ""
  }
  destroyOutOfProcessOverlayHostWindow() {
    E.verbose("Destroying OOP host window"), (0, d._r)(this.lastAssociatedPID, "host_window_destroyed");
    try {
      var e, t;
      null === r.A || true === r.A || null == (e = r.A.window) || e.close(m.f), null === r.A || true === r.A || null == (t = r.A.window) || t.setBackgroundThrottling(true), c.A.resetWindowState(false)
    } catch (e) {
      E.error("Error closing overlay window:", e)
    }(0, d.bF)(this.lastAssociatedPID), this.lastAssociatedPID = null
  }
  refreshOutOfProcessOverlayHostWindow(e) {
    E.verbose("Refreshing OOP host window for pid ".concat(e)), (0, d._r)(e, "host_window_refreshing_started", {
      popoutInitializationStages: u.A.getPopoutInitializationStages()
    }), (0, d.ot)(e, this.lastAssociatedPID), this.lastAssociatedPID = e
  }
  async openOverlayPopout() {
    return await (0, _.o)(), await this.getWindowWithRetry()
  }
  async getWithRetry(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 500,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 3;
    for (let r = 0; r < n; r++) {
      let i = r + 1 >= n;
      try {
        let t = await e();
        if (null != t) return t
      } catch (n) {
        if (i) throw n;
        let e = Math.pow(2, r + 1) * t;
        await new Promise(t => setTimeout(t, e))
      }
    }
    return null
  }
  async getWindowWithRetry() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 100,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3;
    return await this.getWithRetry(() => {
      let e = a.A.getWindow(m.f);
      if (null == e) throw Error("Overlay popout window not found");
      return Promise.resolve(e)
    }, e, t)
  }
  async getNativeWindowHandleWithRetry() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 500,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3;
    return await this.getWithRetry(async () => {
      var e;
      let t = await (null === r.A || true === r.A || null == (e = r.A.window) ? true : e.getNativeHandle(m.f));
      return null != t ? (0, f.Oy)(t) : null
    }, e, t)
  }
  getNativeBreadcrumbs(e, t) {
    var n, r;
    null == (r = this.module) || null == (n = r.getBreadcrumbs) || n.call(r, e, t)
  }
  getDebuggingState(e) {
    var t, n;
    null == (n = this.module) || null == (t = n.getDebuggingState) || t.call(n, e)
  }
  setDetailedLogging(e) {
    var t, n;
    null == (n = this.module) || null == (t = n.setDetailedLogging) || t.call(n, e)
  }
  version() {
    var e, t;
    return null != (e = null == (t = this.module) ? true : t.version) ? e : 0
  }
  onNativePopoutShowInactiveSuccess() {
    var e, t;
    null == (t = this.module) || null == (e = t.onPopoutShowInactive) || e.call(t)
  }
  setRenderingWindowHandle(e, t) {
    var n, r;
    null == (r = this.module) || null == (n = r.setRenderingWindowHandle) || n.call(r, e), E.verbose("Setting rendering window handle for pid ".concat(t, ": ").concat(e))
  }
  setInteractionEnabled(e) {
    var t, n;
    null == (n = this.module) || null == (t = n.setInteractionEnabled) || t.call(n, e)
  }
  setLimitedInteraction(e) {
    var t, n;
    null == (n = this.module) || null == (t = n.setLimitedInteraction) || t.call(n, e), s.Ay.setFocusable(m.f, !e)
  }
  setCaptureZoneCallback(e) {
    var t, n;
    null == (n = this.module) || null == (t = n.setCaptureZoneCallback) || t.call(n, e)
  }
  setCaptureZones(e) {
    var t, n;
    null == (n = this.module) || null == (t = n.setCaptureZones) || t.call(n, e)
  }
  readyToShow(e) {
    var t, n;
    null == (n = this.module) || null == (t = n.readyToShow) || t.call(n, e)
  }
  trackGame(e) {
    null != this.module && (this.module.trackGame(e), this.trackedGamePids.add(e), (0, d.wb)(e))
  }
  untrackGame(e) {
    if (null == this.module) return;
    this.module.untrackGame(e), this.trackedGamePids.delete(e);
    let t = this.trackedGamePids.values().next().value;
    this.lastAssociatedPID === e && null != t ? this.lastAssociatedPID = t : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null), (0, d.Lt)(e)
  }
  constructor() {
    g(this, "module", null), g(this, "modulePromise", null), g(this, "isCrashedDisabled", false), g(this, "lastAssociatedPID", null), g(this, "trackedGamePids", new Set)
  }
}
g(S, "instance", null)