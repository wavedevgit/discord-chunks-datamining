/** Chunk was on web.js **/
/** chunk id: 435736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => w,
  C3: () => T,
  sw: () => S,
  tM: () => I,
  wW: () => b,
  xc: () => A
}), require("./896048.js");
var Chunk353640 = require("./353640.js"),
  Chunk118356 = require("./118356.js"),
  Chunk554146 = require("./554146.js"),
  Chunk506774 = require("./506774.js"),
  Chunk97260 = require("./97260.js"),
  Chunk439372 = require("./439372.js"),
  Chunk826673 = require("./826673.js"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk589051 = require("./589051.js"),
  Chunk652215 = require("./652215.js");

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
  y = new Chunk118356.Vy("OverlayKeybindExperimentManager"),
  b = (0, Chunk353640.v)(() => o.w.get(E, {}));

function O() {
  return b.getState()
}

function v(e) {
  b.setState(t => h({}, t, e), true), o.w.set(E, b.getState())
}
let A = () => {
    v({
      isNewOverlayUser: true
    })
  },
  I = () => {
    v({
      isUsingDefaultOverlayKeybind: true
    })
  },
  S = e => {
    v({
      overrideIsNewOverlayUser: e
    })
  };

function T(e) {
  v({
    overrideIsUsingDefaultOverlayKeybind: e
  })
}

function C() {
  let e = u.Ay.getKeybindForAction(p.hCu.TOGGLE_OVERLAY_INPUT_LOCK, true);
  if (null == e) returntrue;
  let t = (0, u.aS)();
  return (0, d.Xt)(e.shortcut, t.shortcut)
}
class N extends Chunk439372.A {
  constructor(...e) {
    super(...e), _(this, "_hasInitialized", false), _(this, "_isProcessing", false), _(this, "initializeKeybind", () => {
      if (null != O().previousKeybind) return;
      let e = u.Ay.getOverlayKeybind();
      v({
        previousKeybind: (0, d.dI)(e.shortcut)
      })
    }), _(this, "dispatchSetKeybind", e => {
      if (null == e) return;
      let t = u.Ay.getOverlayKeybind();
      return s.A.setKeybind(g(h({}, t), {
        shortcut: (0, d.OH)(e)
      }))
    }), _(this, "restoreKeybind", async () => {
      let e = O().previousKeybind;
      null != e && await this.dispatchSetKeybind(e)
    }), _(this, "processKeybindExperiment", async () => {
      this.initializeKeybind();
      let {
        keybindOverride: e
      } = (0, f.sq)("OverlayKeybindExperimentManager", false), t = this.isEligibleForExperiment();
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
          y.error("Experiments processing failed", {
            error: e
          })
        } finally {
          this._isProcessing = false
        }
      }
    }), _(this, "maybeInitExperiment", async () => {
      this._hasInitialized || (this._hasInitialized = true, y.info("Experiments initializing..."), await this.processExperiment(), y.info("Experiments initialized"))
    }), _(this, "isNewOverlayUser", () => (null == O().isNewOverlayUser && v({
      isNewOverlayUser: !(0, c.k8)(a.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) && !(0, c.k8)(a.M.OVERLAY_OOP_WELCOME_NUX)
    }), null != O().overrideIsNewOverlayUser) ? O().overrideIsNewOverlayUser : O().isNewOverlayUser), _(this, "isUsingDefaultOverlayKeybind", () => (null == O().isUsingDefaultOverlayKeybind && v({
      isUsingDefaultOverlayKeybind: C()
    }), null != O().overrideIsUsingDefaultOverlayKeybind) ? O().overrideIsUsingDefaultOverlayKeybind : O().isUsingDefaultOverlayKeybind), _(this, "isEligibleForExperiment", () => {
      let e = this.isNewOverlayUser(),
        t = this.isUsingDefaultOverlayKeybind();
      return e && t
    }), _(this, "handlePostConnectionOpen", async () => {
      __OVERLAY__ || this._isProcessing || await this.maybeInitExperiment()
    }), _(this, "handleExperimentsInit", async () => {
      __OVERLAY__ || this._isProcessing || await this.maybeInitExperiment()
    }), _(this, "handleExperimentOverrideBucket", async e => {
      __OVERLAY__ || this._isProcessing || (y.info("Experiments processing...", {
        action: e
      }), await this.processExperiment())
    }), _(this, "handleKeybindSet", e => {
      __OVERLAY__ || this._isProcessing || e.keybind.action === p.hCu.TOGGLE_OVERLAY_INPUT_LOCK && v({
        previousKeybind: (0, d.dI)(e.keybind.shortcut)
      })
    }), _(this, "handleOverlayReady", () => {
      __OVERLAY__ || this.isEligibleForExperiment() && f.lR.trackExposure({
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
let w = new N