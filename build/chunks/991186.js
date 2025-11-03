/** Chunk was on web.js **/
/** chunk id: 991186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk579092 = require("./579092.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk660216 = require("./660216.js"),
  Chunk147913 = require("./147913.js"),
  Chunk266454 = require("./266454.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk338949 = require("./338949.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = "overlayKeybindExperimentPreviousKeybindSettings",
  y = new Chunk579092.Yd("OverlayKeybindExperimentManager");
class O {
  constructor() {
    h(this, "_settings", true), h(this, "setKeybindTreatment", e => {
      this._settings.keybindTreatment = e, a.K.set(b, this._settings)
    }), h(this, "getKeybindTreatment", () => this._settings.keybindTreatment), h(this, "setPreviousKeybind", e => {
      this._settings.previousKeybind = e, a.K.set(b, this._settings)
    }), h(this, "getPreviousKeybind", () => this._settings.previousKeybind), h(this, "hasPreviousKeybind", () => null != this._settings.previousKeybind), h(this, "setIsNewOverlayUser", e => {
      this._settings.isNewOverlayUser = e, a.K.set(b, this._settings)
    }), h(this, "getIsNewOverlayUser", () => this._settings.isNewOverlayUser), h(this, "hasIsNewOverlayUser", () => null != this._settings.isNewOverlayUser), this._settings = Chunk433517.K.get(b, {})
  }
}
class v extends Chunk147913.Z {
  constructor(...e) {
    super(...e), h(this, "_hasInitialized", false), h(this, "_isProcessing", false), h(this, "_storage", new O), h(this, "initializeKeybind", () => {
      if (this._storage.hasPreviousKeybind()) return;
      let e = c.ZP.getOverlayKeybind();
      this._storage.setPreviousKeybind((0, u.BB)(e.shortcut))
    }), h(this, "dispatchSetKeybind", e => {
      if (null == e) return;
      let t = c.ZP.getOverlayKeybind();
      return o.Z.setKeybind(E(m({}, t), {
        shortcut: (0, u.Kd)(e)
      }))
    }), h(this, "restoreKeybind", async () => {
      let e = this._storage.getPreviousKeybind();
      null != e && await this.dispatchSetKeybind(e)
    }), h(this, "processKeybindExperiment", async () => {
      this.initializeKeybind();
      let {
        keybindOverride: e
      } = (0, f.eV)("OverlayKeybindExperimentManager", false);
      this._storage.getKeybindTreatment() !== e && (null == e ? await this.restoreKeybind() : await this.dispatchSetKeybind(e), this._storage.setKeybindTreatment(e))
    }), h(this, "processExperiment", async () => {
      if (!__OVERLAY__ && !this._isProcessing) {
        this._isProcessing = true;
        try {
          await this.processKeybindExperiment()
        } catch (e) {
          y.error("Experiments processing failed", {
            error: e
          })
        } finally {
          this._isProcessing = false
        }
      }
    }), h(this, "maybeInitExperiment", async () => {
      this._hasInitialized || (this._hasInitialized = true, y.info("Experiments initializing..."), await this.processExperiment(), y.info("Experiments initialized"))
    }), h(this, "isNewOverlayUser", () => (this._storage.hasIsNewOverlayUser() || this._storage.setIsNewOverlayUser(!(0, l.zu)(i.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) && !(0, l.zu)(i.z.OVERLAY_OOP_WELCOME_NUX)), _.Z.hasRenderDebugMode(d.GO.OverrideIsNewOverlayUser) || this._storage.getIsNewOverlayUser())), h(this, "handlePostConnectionOpen", async () => {
      __OVERLAY__ || this._isProcessing || this.isNewOverlayUser() && await this.maybeInitExperiment()
    }), h(this, "handleExperimentsInit", async () => {
      __OVERLAY__ || this._isProcessing || this.isNewOverlayUser() && await this.maybeInitExperiment()
    }), h(this, "handleExperimentOverrideBucket", async e => {
      __OVERLAY__ || this._isProcessing || this.isNewOverlayUser() && (y.info("Experiments processing...", {
        action: e
      }), await this.processExperiment())
    }), h(this, "handleKeybindSet", e => {
      __OVERLAY__ || this._isProcessing || e.keybind.action === p.kg4.TOGGLE_OVERLAY_INPUT_LOCK && this._storage.setPreviousKeybind((0, u.BB)(e.keybind.shortcut))
    }), h(this, "handleOverlayReady", () => {
      !__OVERLAY__ && this.isNewOverlayUser() && f.ZU.trackExposure({
        location: "OverlayKeybindExperimentManager"
      })
    }), h(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
      EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
      KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
      OVERLAY_READY: this.handleOverlayReady
    })
  }
}
let I = new v