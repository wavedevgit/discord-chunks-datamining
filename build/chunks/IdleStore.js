/** Chunk was on web.js **/
/** chunk id: 517100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287734 = require("./287734.js"),
  Chunk579806 = require("./579806.js"),
  Chunk695346 = require("./695346.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = Date.now(),
  m = false,
  g = false,
  E = false,
  b = false,
  y = false;

function O() {
  return E || b || (0, Chunk358085.isAndroid)() && y
}

function v() {
  Date.now() - h > Math.min(Chunk695346.CM.getSetting() * Chunk70956.Z.Millis.SECOND, Chunk981631.OSm) || O() ? g || Chunk570140.Z.dispatch({
    type: "AFK",
    afk: true
  }) : g && Chunk570140.Z.dispatch({
    type: "AFK",
    afk: false
  })
}

function I() {
  Date.now() - h > Chunk981631.OSm || O() ? m || Chunk570140.Z.dispatch({
    type: "IDLE",
    idle: true,
    idleSince: h
  }) : m && Chunk570140.Z.dispatch({
    type: "IDLE",
    idle: false
  })
}

function T() {
  I(), v()
}

function S() {
  var e;
  let t = e => {
    h = Math.max(Date.now() - e, h), T(), setTimeout(S, 10 * c.Z.Millis.SECOND)
  };
  if ((null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.remotePowerMonitor) ? true : module.getSystemIdleTimeMs) != null) {
    let e = Chunk579806.Z.remotePowerMonitor.getSystemIdleTimeMs();
    module instanceof Promise ? module.then(exports) : exports(module)
  }
}

function A(e) {
  m = e.idle
}

function N(e) {
  g = e.afk
}

function C(e) {
  let {
    userId: t,
    speakingFlags: n
  } = e;
  return n !== _.Dg.NONE && t === d.default.getId() && P({}), false
}

function R(e) {
  let {
    state: t
  } = e;
  return y = t === f.$7l.BACKGROUND, h = Date.now(), T(), false
}

function P(e) {
  let {
    timestamp: t,
    type: n
  } = e, r = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!r || !(t <= h)) && (h = r ? t : Date.now(), __OVERLAY__ ? o.Z.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: h
  }) : T(), false)
}
__OVERLAY__ || (Chunk358085.isPlatformEmbedded && (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.remotePowerMonitor) != null ? (S(), Chunk579806.Z.remotePowerMonitor.on("resume", () => {
  E = false, P({})
}), Chunk579806.Z.remotePowerMonitor.on("suspend", () => {
  E = true, P({}), Chunk287734.default.disconnect()
}), Chunk579806.Z.remotePowerMonitor.on("lock-screen", () => {
  b = true, P({})
}), Chunk579806.Z.remotePowerMonitor.on("unlock-screen", () => {
  b = false, P({})
})) : setInterval(T, 30 * Chunk70956.Z.Millis.SECOND));
class w extends(r = Chunk442837.ZP.Store) {
  isIdle() {
    return m
  }
  isAFK() {
    return g
  }
  getIdleSince() {
    return m ? h : null
  }
  getSystemSuspended() {
    return E
  }
  getSystemLocked() {
    return b
  }
}
p(w, "displayName", "IdleStore");
let D = new w(Chunk570140.Z, {
  IDLE: A,
  AFK: N,
  SPEAKING: C,
  APP_STATE_UPDATE: R,
  OVERLAY_SET_NOT_IDLE: P,
  CHANNEL_SELECT: P,
  VOICE_CHANNEL_SELECT: P,
  WINDOW_FOCUS: P,
  OVERLAY_INITIALIZE: P,
  OVERLAY_SET_INPUT_LOCKED: P,
  USER_SETTINGS_PROTO_UPDATE: P
})