/** Chunk was on web.js **/
/** chunk id: 242297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => I
}), require("./415506.js"), require("./388685.js");
var Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk928518 = require("./928518.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk307149 = require("./307149.js"),
  Chunk503522 = require("./503522.js"),
  Chunk610394 = require("./610394.js"),
  Chunk932404 = require("./932404.js"),
  Chunk575140 = require("./575140.js"),
  Chunk886189 = require("./886189.js"),
  Chunk398269 = require("./398269.jsx"),
  Chunk987650 = require("./987650.js"),
  Chunk501787 = require("./501787.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = new Chunk710845.Z("OverlayV3NativeModule");

function b(e, t, n) {
  (0, d.bs)(e, "renderer_window_focus_changed", {
    windowHandle: t,
    popoutInitializationStages: u.Z.getPopoutInitializationStages()
  }), (0, d.P9)(e, null != t ? (0, f.rd)(t) : null, n)
}

function y(e) {
  (0, d.bs)(e, "renderer_window_focus_lost", {
    popoutInitializationStages: u.Z.getPopoutInitializationStages()
  }), (0, d.VQ)(e)
}

function O(e) {
  (0, d.bs)(e, "successfully_shown", {
    popoutInitializationStages: u.Z.getPopoutInitializationStages()
  }), (0, d.uD)(e)
}

function v(e) {
  (0, d.bs)(null, "window_handle_initialized", {
    real_initialized: e,
    popoutInitializationStages: u.Z.getPopoutInitializationStages()
  }), (0, d.zg)(e)
}

function S(e) {
  var t, n, r, i;
  null == (t = e.setFocusCallback) || t.call(e, b), null == (n = e.setFocusLostCallback) || n.call(e, y), null == (r = e.setSuccessfullyShownCallback) || r.call(e, O), null == (i = e.setOnWindowHandleInitializedCallback) || i.call(e, v), (0, d.bs)(null, "native_module_callbacks_setup"), E.verbose("Native module callbacks setup")
}
class I {
  static getInstance() {
    return null == this.instance && (this.instance = new I), this.instance
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
    if (!Chunk987650.iP) return void E.error("Attempted to load overlay on an unsupported platform.");
    E.info("Loading Out of Process Overlay Module");
    try {
      await Chunk998502.ZP.ensureModule("discord_desktop_overlay");
      let e = Chunk998502.ZP.requireModule("discord_desktop_overlay");
      module.init(), module.setHostWindowCallbacks(e => this.createOutOfProcessOverlayHostWindow(e), () => this.destroyOutOfProcessOverlayHostWindow(), e => this.refreshOutOfProcessOverlayHostWindow(e)), this.module = module, (0, Chunk932404.bs)(null, "module_loaded"), (0, Chunk145597.setOutOfProcessSupport)(true), S(this.module), (0, Chunk932404.U9)(), E.info("OverlayV3 Module Loaded")
    } catch (e) {
      throw E.error("failed loading overlay module", module), (0, Chunk145597.setOutOfProcessSupport)(false), (0, Chunk932404.UK)(module), this.module = null, this.modulePromise = null, module
    }
  }
  async createOutOfProcessOverlayHostWindow(e) {
    E.verbose("Creating OOP Host Window for pid ".concat(e)), (0, d.pH)(e);
    let t = null;
    try {
      (0, d.bs)(e, "host_window_mounting_started", {
        popoutInitializationStages: u.Z.getPopoutInitializationStages()
      }), await (0, p.s)(), t = await this.openOverlayPopout(), await (0, d.sG)(e), (0, d.bs)(e, "host_window_created", {
        hasWindow: null != t,
        popoutInitializationStages: u.Z.getPopoutInitializationStages()
      })
    } catch (t) {
      E.error("Error creating OOP host window:", t), (0, d.bs)(e, "host_window_mounting_failed", {
        error: t
      }, l.l6.Error)
    }
    try {
      r.Z.window.setBackgroundThrottling(false)
    } catch (t) {
      E.error("Error setting background throttling:", t), (0, d.bs)(e, "background_throttling_setting_failed", {
        error: t
      }, l.l6.Error)
    }
    let n = null;
    try {
      var i;
      n = await this.getNativeWindowHandleWithRetry(), c.Z.resetWindowState(), (0, d.bs)(e, "native_window_handle_retrieved", {
        handle: n,
        hasWindow: null != n,
        popoutInitializationStages: u.Z.getPopoutInitializationStages()
      }), await (0, d.xO)(e, n), (null == (i = this.module) ? true : i.setOnWindowHandleInitializedCallback) == null && await (0, d.zg)(true)
    } catch (t) {
      E.error("Error getting native window handle:", t), (0, d.MP)(e, t, n), (0, d.bs)(e, "native_window_handle_retrieval_failed", {
        error: t,
        handle: n,
        hasWindow: null != n,
        popoutInitializationStages: u.Z.getPopoutInitializationStages()
      }, l.l6.Error)
    }
    return null == n ? (0, d.PV)(e, Error("Native window handle not found"), {
      crashType: "native",
      isCrashedDisabled: true
    }) : this.lastAssociatedPID = e, null != n ? n : ""
  }
  destroyOutOfProcessOverlayHostWindow() {
    E.verbose("Destroying OOP host window"), (0, Chunk932404.bs)(this.lastAssociatedPID, "host_window_destroyed");
    try {
      var e, t;
      null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.window) || module.close(Chunk501787.$J), null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.window) || exports.setBackgroundThrottling(true), Chunk503522.Z.resetWindowState(false)
    } catch (e) {
      E.error("Error closing overlay window:", module)
    }(0, Chunk932404.Hi)(this.lastAssociatedPID), this.lastAssociatedPID = null
  }
  refreshOutOfProcessOverlayHostWindow(e) {
    E.verbose("Refreshing OOP host window for pid ".concat(e)), (0, d.bs)(e, "host_window_refreshing_started", {
      popoutInitializationStages: u.Z.getPopoutInitializationStages()
    }), (0, d.nV)(e, this.lastAssociatedPID), this.lastAssociatedPID = e
  }
  async openOverlayPopout() {
    return await (0, Chunk398269.f)(), await this.getWindowWithRetry()
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
      let e = Chunk928518.Z.getWindow(Chunk501787.$J);
      if (null == module) throw Error("Overlay popout window not found");
      return Promise.resolve(module)
    }, module, exports)
  }
  async getNativeWindowHandleWithRetry() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 500,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3;
    return await this.getWithRetry(async () => {
      var e;
      let t = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.window) ? true : module.getNativeHandle(Chunk501787.$J));
      return null != exports ? (0, Chunk575140.rd)(exports) : null
    }, module, exports)
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
    return null != (t = null == (e = this.module) ? true : module.version) ? exports : 0
  }
  onNativePopoutShowInactiveSuccess() {
    var e, t;
    null == (t = this.module) || null == (e = exports.onPopoutShowInactive) || module.call(exports)
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
    null == (n = this.module) || null == (t = n.setLimitedInteraction) || t.call(n, e), o.ZP.setFocusable(h.$J, !e)
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
    null != this.module && (this.module.trackGame(e), this.trackedGamePids.add(e), (0, d.NB)(e))
  }
  untrackGame(e) {
    if (null == this.module) return;
    this.module.untrackGame(e), this.trackedGamePids.delete(e);
    let t = this.trackedGamePids.values().next().value;
    this.lastAssociatedPID === e && null != t ? this.lastAssociatedPID = t : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null), (0, d.k0)(e)
  }
  constructor() {
    g(this, "module", null), g(this, "modulePromise", null), g(this, "isCrashedDisabled", false), g(this, "lastAssociatedPID", null), g(this, "trackedGamePids", new Set)
  }
}
g(I, "instance", null)