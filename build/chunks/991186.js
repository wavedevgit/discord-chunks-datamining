/** Chunk was on web.js **/
/** chunk id: 991186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FM: () => C,
  Wx: () => S,
  ZP: () => P,
  Zh: () => I,
  jt: () => T,
  xj: () => y
}), require("./388685.js");
var Chunk663042 = require("./663042.js"),
  Chunk579092 = require("./579092.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk660216 = require("./660216.js"),
  Chunk147913 = require("./147913.js"),
  Chunk266454 = require("./266454.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk32300 = require("./32300.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = "overlayKeybindExperimentPreviousKeybindSettings",
  b = new Chunk579092.Yd("OverlayKeybindExperimentManager"),
  y = (0, Chunk663042.U)(() => o.K.get(E, {}));

function O() {
  return y.getState()
}

function v(e) {
  y.setState(t => h({}, t, e), true), o.K.set(E, y.getState())
}
let S = () => {
    v({
      isNewOverlayUser: true
    })
  },
  I = () => {
    v({
      isUsingDefaultOverlayKeybind: true
    })
  },
  T = e => {
    v({
      overrideIsNewOverlayUser: e
    })
  };

function C(e) {
  v({
    overrideIsUsingDefaultOverlayKeybind: e
  })
}

function A() {
  let e = u.ZP.getKeybindForAction(p.kg4.TOGGLE_OVERLAY_INPUT_LOCK, true);
  if (null == e) returntrue;
  let t = (0, u.vN)();
  return (0, d.m3)(e.shortcut, t.shortcut)
}
class N extends Chunk147913.Z {
  constructor(...e) {
    super(...e), _(this, "_hasInitialized", false), _(this, "_isProcessing", false), _(this, "initializeKeybind", () => {
      if (null != O().previousKeybind) return;
      let e = u.ZP.getOverlayKeybind();
      v({
        previousKeybind: (0, d.BB)(e.shortcut)
      })
    }), _(this, "dispatchSetKeybind", e => {
      if (null == e) return;
      let t = u.ZP.getOverlayKeybind();
      return s.Z.setKeybind(g(h({}, t), {
        shortcut: (0, d.Kd)(e)
      }))
    }), _(this, "restoreKeybind", async () => {
      let e = O().previousKeybind;
      null != e && await this.dispatchSetKeybind(e)
    }), _(this, "processKeybindExperiment", async () => {
      this.initializeKeybind();
      let {
        keybindOverride: e
      } = (0, f.eV)("OverlayKeybindExperimentManager", false), t = this.isEligibleForExperiment();
      O().keybindTreatment !== e && (null == e ? (await this.restoreKeybind(), v({
        keybindTreatment: true
      })) : t && (await this.dispatchSetKeybind(e), v({
        keybindTreatment: e
      })))
    }), _(this, "processExperiment", async () => {
      if (!__OVERLAY__ && !this._isProcessing) {
        this._isProcessing = true;
        try {
          await this.processKeybindExperiment()
        } catch (e) {
          b.error("Experiments processing failed", {
            error: e
          })
        } finally {
          this._isProcessing = false
        }
      }
    }), _(this, "maybeInitExperiment", async () => {
      this._hasInitialized || (this._hasInitialized = true, b.info("Experiments initializing..."), await this.processExperiment(), b.info("Experiments initialized"))
    }), _(this, "isNewOverlayUser", () => (null == O().isNewOverlayUser && v({
      isNewOverlayUser: !(0, c.zu)(a.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) && !(0, c.zu)(a.z.OVERLAY_OOP_WELCOME_NUX)
    }), null != O().overrideIsNewOverlayUser) ? O().overrideIsNewOverlayUser : O().isNewOverlayUser), _(this, "isUsingDefaultOverlayKeybind", () => (null == O().isUsingDefaultOverlayKeybind && v({
      isUsingDefaultOverlayKeybind: A()
    }), null != O().overrideIsUsingDefaultOverlayKeybind) ? O().overrideIsUsingDefaultOverlayKeybind : O().isUsingDefaultOverlayKeybind), _(this, "isEligibleForExperiment", () => {
      let e = this.isNewOverlayUser(),
        t = this.isUsingDefaultOverlayKeybind();
      return e && t
    }), _(this, "handlePostConnectionOpen", async () => {
      __OVERLAY__ || this._isProcessing || await this.maybeInitExperiment()
    }), _(this, "handleExperimentsInit", async () => {
      __OVERLAY__ || this._isProcessing || await this.maybeInitExperiment()
    }), _(this, "handleExperimentOverrideBucket", async e => {
      __OVERLAY__ || this._isProcessing || (b.info("Experiments processing...", {
        action: e
      }), await this.processExperiment())
    }), _(this, "handleKeybindSet", e => {
      __OVERLAY__ || this._isProcessing || e.keybind.action === p.kg4.TOGGLE_OVERLAY_INPUT_LOCK && v({
        previousKeybind: (0, d.BB)(e.keybind.shortcut)
      })
    }), _(this, "handleOverlayReady", () => {
      !__OVERLAY__ && this.isEligibleForExperiment() && f.ZU.trackExposure({
        location: "OverlayKeybindExperimentManager"
      })
    }), _(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
      EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
      KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
      OVERLAY_READY: this.handleOverlayReady
    })
  }
}
let P = new N