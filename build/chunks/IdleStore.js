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
  return v || S || (0, _.isAndroid)() && I
}

function C() {
  let e = f.CM.getSetting();
  0 === e || null != r || Date.now() - b > Math.min(e * p.Z.Millis.SECOND, h.OSm) || T() ? O || l.Z.dispatch({
    type: "AFK",
    afk: true
  }) : O && l.Z.dispatch({
    type: "AFK",
    afk: false
  })
}

function A() {
  Date.now() - b > h.OSm || T() ? y || l.Z.dispatch({
    type: "IDLE",
    idle: true,
    idleSince: b
  }) : y && l.Z.dispatch({
    type: "IDLE",
    idle: false
  })
}

function N() {
  A(), C()
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
  if ((null === u.Z || true === u.Z || null == (e = u.Z.remotePowerMonitor) ? true : e.getSystemIdleTimeMs) != null) {
    let e = u.Z.remotePowerMonitor.getSystemIdleTimeMs();
    e instanceof Promise ? e.then(t) : t(e)
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
    v = true, R(true), c.default.disconnect()
  }), Chunk579806.Z.remotePowerMonitor.on("lock-screen", () => {
    S = true, R(true)
  }), Chunk579806.Z.remotePowerMonitor.on("unlock-screen", () => {
    S = false, R(false)
  })) : setInterval(N, 30 * Chunk70956.Z.Millis.SECOND);
  let e = o()(() => {
    d.Z.getConfig({
      location: "handleGenericInput"
    }).generic_inputs && j({})
  }, 500);
  window.addEventListener("mouseup", module), window.addEventListener("wheel", module), window.addEventListener("keypress", module)
}

function w(e) {
  y = e.idle
}

function D(e) {
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
  if (!d.Z.getConfig({
      location: "handleSettingsProtoUpdate"
    }).settings_updates) returnfalse;
  j({})
}
class k extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(m.default)
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
  IDLE: w,
  AFK: D,
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