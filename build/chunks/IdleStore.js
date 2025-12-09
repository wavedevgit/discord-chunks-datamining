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
  S = false,
  I = false;

function T() {
  return v || S || (0, Chunk358085.isAndroid)() && I
}

function A() {
  let e = Chunk695346.CM.getSetting();
  0 === module || null != r || Date.now() - b > Math.min(module * Chunk70956.Z.Millis.SECOND, Chunk981631.OSm) || T() ? O || Chunk570140.Z.dispatch({
    type: "AFK",
    afk: true
  }) : O && Chunk570140.Z.dispatch({
    type: "AFK",
    afk: false
  })
}

function C() {
  Date.now() - b > Chunk981631.OSm || T() ? y || Chunk570140.Z.dispatch({
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

function P() {
  var e;
  let t = e => {
    if (d.Z.getConfig({
        location: "checkNativeIdle"
      }).system_wide_input) {
      let t = Date.now() - e;
      (null == r || t > r) && (b = Math.max(t, b), r = null)
    }
    N(), setTimeout(P, 10 * p.Z.Millis.SECOND)
  };
  if ((null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.remotePowerMonitor) ? true : module.getSystemIdleTimeMs) != null) {
    let e = Chunk579806.Z.remotePowerMonitor.getSystemIdleTimeMs();
    module instanceof Promise ? module.then(exports) : exports(module)
  }
}

function R(e) {
  d.Z.getConfig({
    location: "handlePowerEvent"
  }).power_events ? j({}) : (e && (r = Date.now()), N())
}
if (!__OVERLAY__) {
  Chunk358085.isPlatformEmbedded && (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.remotePowerMonitor) != null ? (P(), Chunk579806.Z.remotePowerMonitor.on("resume", () => {
    v = false, R(false)
  }), Chunk579806.Z.remotePowerMonitor.on("suspend", () => {
    v = true, R(true), Chunk287734.default.disconnect()
  }), Chunk579806.Z.remotePowerMonitor.on("lock-screen", () => {
    S = true, R(true)
  }), Chunk579806.Z.remotePowerMonitor.on("unlock-screen", () => {
    S = false, R(false)
  })) : setInterval(N, 30 * Chunk70956.Z.Millis.SECOND);
  let e = o()(() => {
    Chunk491966.Z.getConfig({
      location: "handleGenericInput"
    }).generic_inputs && j({})
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
  return n !== g.Dg.NONE && t === m.default.getId() && j({}), false
}

function L(e) {
  let {
    state: t
  } = e;
  return I = t === h.$7l.BACKGROUND, r = null, b = Date.now(), N(), false
}

function j(e) {
  let {
    timestamp: t,
    type: n
  } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!i || !(t <= b)) && (r = null, b = i ? t : Date.now(), __OVERLAY__ ? l.Z.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: b
  }) : N(), false)
}

function M() {
  if (!Chunk491966.Z.getConfig({
      location: "handleSettingsProtoUpdate"
    }).settings_updates) returnfalse;
  j({})
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
    return S
  }
}
E(k, "displayName", "IdleStore");
let U = new k(Chunk570140.Z, {
  IDLE: D,
  AFK: w,
  SPEAKING: x,
  APP_STATE_UPDATE: L,
  OVERLAY_SET_NOT_IDLE: j,
  CHANNEL_SELECT: j,
  VOICE_CHANNEL_SELECT: j,
  WINDOW_FOCUS: j,
  OVERLAY_INITIALIZE: j,
  OVERLAY_SET_INPUT_LOCKED: j,
  USER_SETTINGS_PROTO_UPDATE: M
})