/** Chunk was on web.js **/
/** chunk id: 885576, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => U
});
var i, Chunk111956 = require("./111956.js"),
  s = require.n(Chunk111956),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk956793 = require("./956793.js"),
  Chunk77729 = require("./77729.js"),
  Chunk253168 = require("./253168.js"),
  Chunk253932 = require("./253932.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = Date.now(),
  b = false,
  O = false,
  v = false,
  A = false,
  I = false;

function S() {
  return v || A || (0, _.isAndroid)() && I
}

function T() {
  let e = f.cU.getSetting();
  0 === e || null != r || Date.now() - y > Math.min(e * p.A.Millis.SECOND, m.sdF) || S() ? O || l.h.dispatch({
    type: "AFK",
    afk: true
  }) : O && l.h.dispatch({
    type: "AFK",
    afk: false
  })
}

function C() {
  Date.now() - y > m.sdF || S() ? b || l.h.dispatch({
    type: "IDLE",
    idle: true,
    idleSince: y
  }) : b && l.h.dispatch({
    type: "IDLE",
    idle: false
  })
}

function N() {
  C(), T()
}

function R() {
  var e;
  let t = e => {
    if (d.A.getConfig({
        location: "checkNativeIdle"
      }).system_wide_input) {
      let t = Date.now() - e;
      (null == r || t > r) && (y = Math.max(t, y), r = null)
    }
    N(), setTimeout(R, 10 * p.A.Millis.SECOND)
  };
  if ((null === u.A || true === u.A || null == (e = u.A.remotePowerMonitor) ? true : e.getSystemIdleTimeMs) != null) {
    let e = u.A.remotePowerMonitor.getSystemIdleTimeMs();
    e instanceof Promise ? e.then(t) : t(e)
  }
}

function w(e) {
  d.A.getConfig({
    location: "handlePowerEvent"
  }).power_events ? j({}) : (e && (r = Date.now()), N())
}
if (!__OVERLAY__) {
  Chunk723702.isPlatformEmbedded && (null === Chunk77729.A || true === Chunk77729.A ? true : Chunk77729.A.remotePowerMonitor) != null ? (R(), Chunk77729.A.remotePowerMonitor.on("resume", () => {
    v = false, w(false)
  }), Chunk77729.A.remotePowerMonitor.on("suspend", () => {
    v = true, w(true), c.default.disconnect()
  }), Chunk77729.A.remotePowerMonitor.on("lock-screen", () => {
    A = true, w(true)
  }), Chunk77729.A.remotePowerMonitor.on("unlock-screen", () => {
    A = false, w(false)
  })) : setInterval(N, 30 * Chunk927813.A.Millis.SECOND);
  let e = s()(() => {
    d.A.getConfig({
      location: "handleGenericInput"
    }).generic_inputs && j({})
  }, 500);
  window.addEventListener("mouseup", module), window.addEventListener("wheel", module), window.addEventListener("keypress", module)
}

function P(e) {
  b = e.idle
}

function D(e) {
  O = e.afk
}

function x(e) {
  let {
    userId: t,
    speakingFlags: n
  } = e;
  return n !== g.ME.NONE && t === h.default.getId() && j({}), false
}

function L(e) {
  let {
    state: t
  } = e;
  return I = t === m.g6G.BACKGROUND, r = null, y = Date.now(), N(), false
}

function j(e) {
  let {
    timestamp: t,
    type: n
  } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!i || !(t <= y)) && (r = null, y = i ? t : Date.now(), __OVERLAY__ ? l.h.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: y
  }) : N(), false)
}

function M() {
  if (!d.A.getConfig({
      location: "handleSettingsProtoUpdate"
    }).settings_updates) returnfalse;
  j({})
}
class k extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.default)
  }
  isIdle() {
    return b
  }
  isAFK() {
    return O
  }
  getIdleSince() {
    return b ? y : null
  }
  getSystemSuspended() {
    return v
  }
  getSystemLocked() {
    return A
  }
}
E(k, "displayName", "IdleStore");
let U = new k(Chunk73153.h, {
  IDLE: P,
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