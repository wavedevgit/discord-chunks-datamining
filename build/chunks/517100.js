/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => D
});
var r, i = n(442837),
  o = n(570140),
  a = n(287734),
  s = n(579806),
  l = n(695346),
  c = n(70956),
  u = n(358085),
  d = n(314897),
  f = n(981631),
  p = n(65154);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = Date.now(),
  m = !1,
  g = !1,
  E = !1,
  v = !1,
  b = !1;

function y() {
  return E || v || (0, u.isAndroid)() && b
}

function O() {
  Date.now() - h > Math.min(l.CM.getSetting() * c.Z.Millis.SECOND, f.OSm) || y() ? g || o.Z.dispatch({
    type: "AFK",
    afk: !0
  }) : g && o.Z.dispatch({
    type: "AFK",
    afk: !1
  })
}

function S() {
  Date.now() - h > f.OSm || y() ? m || o.Z.dispatch({
    type: "IDLE",
    idle: !0,
    idleSince: h
  }) : m && o.Z.dispatch({
    type: "IDLE",
    idle: !1
  })
}

function I() {
  S(), O()
}

function T() {
  var e;
  let t = e => {
    h = Math.max(Date.now() - e, h), I(), setTimeout(T, 10 * c.Z.Millis.SECOND)
  };
  if ((null === s.Z || void 0 === s.Z ? void 0 : null === (e = s.Z.remotePowerMonitor) || void 0 === e ? void 0 : e.getSystemIdleTimeMs) != null) {
    let e = s.Z.remotePowerMonitor.getSystemIdleTimeMs();
    e instanceof Promise ? e.then(t) : t(e)
  }
}

function N(e) {
  m = e.idle
}

function A(e) {
  g = e.afk
}

function C(e) {
  let {
    userId: t,
    speakingFlags: n
  } = e;
  return n !== p.Dg.NONE && t === d.default.getId() && P({}), !1
}

function R(e) {
  let {
    state: t
  } = e;
  return b = t === f.$7l.BACKGROUND, h = Date.now(), I(), !1
}

function P(e) {
  let {
    timestamp: t,
    type: n
  } = e, r = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!r || !(t <= h)) && (h = r ? t : Date.now(), __OVERLAY__ ? o.Z.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: h
  }) : I(), !1)
}
__OVERLAY__ || (u.isPlatformEmbedded && (null === s.Z || void 0 === s.Z ? void 0 : s.Z.remotePowerMonitor) != null ? (T(), s.Z.remotePowerMonitor.on("resume", () => {
  E = !1, P({})
}), s.Z.remotePowerMonitor.on("suspend", () => {
  E = !0, P({}), a.default.disconnect()
}), s.Z.remotePowerMonitor.on("lock-screen", () => {
  v = !0, P({})
}), s.Z.remotePowerMonitor.on("unlock-screen", () => {
  v = !1, P({})
})) : setInterval(I, .25 * f.OSm));
class w extends(r = i.ZP.Store) {
  isIdle() {
    return m
  }
  isAFK() {
    return g
  }
  getIdleSince() {
    return m ? h : null
  }
}
_(w, "displayName", "IdleStore");
let D = new w(o.Z, {
  IDLE: N,
  AFK: A,
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