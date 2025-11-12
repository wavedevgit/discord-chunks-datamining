/** Chunk was on web.js **/
/** chunk id: 517100, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => U
});
var i, Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287734 = require("./287734.js"),
  Chunk579806 = require("./579806.js"),
  Chunk491966 = require("./491966.js"),
  Chunk695346 = require("./695346.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = Date.now(),
  y = false,
  O = false,
  v = false,
  I = false,
  T = false;

function S() {
  return v || I || (0, Chunk358085.isAndroid)() && T
}

function A() {
  let e = Chunk695346.CM.getSetting();
  0 === module || null != r || Date.now() - b > Math.min(module * Chunk70956.Z.Millis.SECOND, Chunk981631.OSm) || S() ? O || Chunk570140.Z.dispatch({
    type: "AFK",
    afk: true
  }) : O && Chunk570140.Z.dispatch({
    type: "AFK",
    afk: false
  })
}

function C() {
  Date.now() - b > Chunk981631.OSm || S() ? y || Chunk570140.Z.dispatch({
    type: "IDLE",
    idle: true,
    idleSince: b
  }) : y && Chunk570140.Z.dispatch({
    type: "IDLE",
    idle: false
  })
}

function N() {
  C(), A()
}

function R() {
  var e;
  let t = e => {
    if (d.Z.getConfig({
        location: "checkNativeIdle"
      }).system_wide_input) {
      let t = Date.now() - e;
      (null == r || t > r) && (b = Math.max(t, b), r = null)
    }
    N(), setTimeout(R, 10 * _.Z.Millis.SECOND)
  };
  if ((null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.remotePowerMonitor) ? true : module.getSystemIdleTimeMs) != null) {
    let e = Chunk579806.Z.remotePowerMonitor.getSystemIdleTimeMs();
    module instanceof Promise ? module.then(exports) : exports(module)
  }
}

function P(e) {
  d.Z.getConfig({
    location: "handlePowerEvent"
  }).power_events ? M({}) : (e && (r = Date.now()), N())
}
if (!__OVERLAY__) {
  Chunk358085.isPlatformEmbedded && (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.remotePowerMonitor) != null ? (R(), Chunk579806.Z.remotePowerMonitor.on("resume", () => {
    v = false, P(false)
  }), Chunk579806.Z.remotePowerMonitor.on("suspend", () => {
    v = true, P(true), Chunk287734.default.disconnect()
  }), Chunk579806.Z.remotePowerMonitor.on("lock-screen", () => {
    I = true, P(true)
  }), Chunk579806.Z.remotePowerMonitor.on("unlock-screen", () => {
    I = false, P(false)
  })) : setInterval(N, 30 * Chunk70956.Z.Millis.SECOND);
  let e = o()(() => {
    Chunk491966.Z.getConfig({
      location: "handleGenericInput"
    }).generic_inputs && M({})
  }, 500);
  window.addEventListener("mouseup", module), window.addEventListener("wheel", module), window.addEventListener("keypress", module)
}

function D(e) {
  y = e.idle
}

function w(e) {
  O = e.afk
}

function x(e) {
  let {
    userId: t,
    speakingFlags: n
  } = e;
  return n !== g.Dg.NONE && t === h.default.getId() && M({}), false
}

function L(e) {
  let {
    state: t
  } = e;
  return T = t === m.$7l.BACKGROUND, r = null, b = Date.now(), N(), false
}

function M(e) {
  let {
    timestamp: t,
    type: n
  } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!i || !(t <= b)) && (r = null, b = i ? t : Date.now(), __OVERLAY__ ? l.Z.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: b
  }) : N(), false)
}

function j() {
  if (!Chunk491966.Z.getConfig({
      location: "handleSettingsProtoUpdate"
    }).settings_updates) returnfalse;
  M({})
}
class k extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default)
  }
  isIdle() {
    return y
  }
  isAFK() {
    return O
  }
  getIdleSince() {
    return y ? b : null
  }
  getSystemSuspended() {
    return v
  }
  getSystemLocked() {
    return I
  }
}
E(k, "displayName", "IdleStore");
let U = new k(Chunk570140.Z, {
  IDLE: D,
  AFK: w,
  SPEAKING: x,
  APP_STATE_UPDATE: L,
  OVERLAY_SET_NOT_IDLE: M,
  CHANNEL_SELECT: M,
  VOICE_CHANNEL_SELECT: M,
  WINDOW_FOCUS: M,
  OVERLAY_INITIALIZE: M,
  OVERLAY_SET_INPUT_LOCKED: M,
  USER_SETTINGS_PROTO_UPDATE: j
})