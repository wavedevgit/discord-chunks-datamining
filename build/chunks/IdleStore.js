/** Chunk was on web.js **/
/** chunk id: 517100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var r, Chunk954955 = require("./954955.js"),
  a = require.n(Chunk954955),
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

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = Date.now(),
  b = false,
  y = false,
  O = false,
  v = false,
  I = false;

function T() {
  return O || v || (0, Chunk358085.isAndroid)() && I
}

function S() {
  let e = Chunk695346.CM.getSetting();
  0 === module || Date.now() - E > Math.min(module * Chunk70956.Z.Millis.SECOND, Chunk981631.OSm) || T() ? y || Chunk570140.Z.dispatch({
    type: "AFK",
    afk: true
  }) : y && Chunk570140.Z.dispatch({
    type: "AFK",
    afk: false
  })
}

function A() {
  Date.now() - E > Chunk981631.OSm || T() ? b || Chunk570140.Z.dispatch({
    type: "IDLE",
    idle: true,
    idleSince: E
  }) : b && Chunk570140.Z.dispatch({
    type: "IDLE",
    idle: false
  })
}

function C() {
  A(), S()
}

function N() {
  var e;
  let t = e => {
    E = Math.max(Date.now() - e, E), C(), setTimeout(N, 10 * f.Z.Millis.SECOND)
  };
  if ((null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.remotePowerMonitor) ? true : module.getSystemIdleTimeMs) != null) {
    let e = Chunk579806.Z.remotePowerMonitor.getSystemIdleTimeMs();
    module instanceof Promise ? module.then(exports) : exports(module)
  }
}

function R(e) {
  u.Z.getConfig({
    location: "handlePowerEvent"
  }).power_events ? L({}) : (e && (E = false / 0), C())
}
if (!__OVERLAY__) {
  Chunk358085.isPlatformEmbedded && (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.remotePowerMonitor) != null ? (N(), Chunk579806.Z.remotePowerMonitor.on("resume", () => {
    O = false, R(false)
  }), Chunk579806.Z.remotePowerMonitor.on("suspend", () => {
    O = true, R(true), Chunk287734.default.disconnect()
  }), Chunk579806.Z.remotePowerMonitor.on("lock-screen", () => {
    v = true, R(true)
  }), Chunk579806.Z.remotePowerMonitor.on("unlock-screen", () => {
    v = false, R(false)
  })) : setInterval(C, 30 * Chunk70956.Z.Millis.SECOND);
  let e = a()(() => {
    Chunk491966.Z.getConfig({
      location: "handleGenericInput"
    }).generic_inputs && L({})
  }, 500);
  window.addEventListener("mouseup", module), window.addEventListener("wheel", module), window.addEventListener("keypress", module)
}

function P(e) {
  b = e.idle
}

function w(e) {
  y = e.afk
}

function D(e) {
  let {
    userId: t,
    speakingFlags: n
  } = e;
  return n !== m.Dg.NONE && t === p.default.getId() && L({}), false
}

function x(e) {
  let {
    state: t
  } = e;
  return I = t === h.$7l.BACKGROUND, E = Date.now(), C(), false
}

function L(e) {
  let {
    timestamp: t,
    type: n
  } = e, r = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!r || !(t <= E)) && (E = r ? t : Date.now(), __OVERLAY__ ? s.Z.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: E
  }) : C(), false)
}

function j() {
  if (!Chunk491966.Z.getConfig({
      location: "handleSettingsProtoUpdate"
    }).settings_updates) returnfalse;
  L({})
}
class M extends(r = Chunk442837.ZP.Store) {
  isIdle() {
    return b
  }
  isAFK() {
    return y
  }
  getIdleSince() {
    return b ? E : null
  }
  getSystemSuspended() {
    return O
  }
  getSystemLocked() {
    return v
  }
}
g(M, "displayName", "IdleStore");
let k = new M(Chunk570140.Z, {
  IDLE: P,
  AFK: w,
  SPEAKING: D,
  APP_STATE_UPDATE: x,
  OVERLAY_SET_NOT_IDLE: L,
  CHANNEL_SELECT: L,
  VOICE_CHANNEL_SELECT: L,
  WINDOW_FOCUS: L,
  OVERLAY_INITIALIZE: L,
  OVERLAY_SET_INPUT_LOCKED: L,
  USER_SETTINGS_PROTO_UPDATE: j
})