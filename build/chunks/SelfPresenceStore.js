/** Chunk was on web.js **/
/** chunk id: 885110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./539854.js"), require("./388685.js"), require("./642613.js"), require("./997841.js");
var r, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk503438 = require("./503438.js"),
  Chunk768419 = require("./768419.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk630388 = require("./630388.js"),
  Chunk780570 = require("./780570.js"),
  Chunk77498 = require("./77498.js"),
  Chunk517100 = require("./517100.js"),
  Chunk283595 = require("./283595.js"),
  Chunk293273 = require("./293273.js"),
  Chunk158776 = require("./158776.js"),
  Chunk797258 = require("./797258.js"),
  Chunk981631 = require("./981631.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = false,
  T = Chunk981631.Skl.ONLINE,
  A = Chunk981631.Skl.UNKNOWN,
  C = 0,
  N = [],
  R = [],
  P = false,
  w = true,
  D = Object.freeze([]),
  x = Object.freeze([]),
  L = [],
  M = [];

function j(e) {
  if (0 === e.length) return e;
  let t = [],
    n = [];
  for (let r of e) r.type === v.IIU.PLAYING ? n.push(r) : t.push(r);
  return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(y.f)[0]].sort(y.f)
}

function k(e) {
  return (0, h.OT)(e, E.Z)
}

function U(e) {
  let t = m.Z.getGameByName(e);
  return null != t ? k(t.id) : f.G6.getSetting()
}

function G(e) {
  var t;
  if ((0, p.yE)(null != (t = e.flags) ? t : 0, v.xjy.CONTEXTLESS)) returntrue;
  switch (e.type) {
    case v.IIU.LISTENING:
      if ((0, u.Z)(e)) return d.Z.shouldShowActivity();
      if (null != e.application_id) return k(e.application_id);
      returnfalse;
    case v.IIU.PLAYING:
      return null != e.application_id ? k(e.application_id) : U(e.name);
    case v.IIU.STREAMING:
    case v.IIU.WATCHING:
    default:
      return null == e.application_id || k(e.application_id)
  }
}

function B() {
  w = true, A = T, Z()
}

function Z() {
  var e;
  if (C = null != (e = Chunk517100.Z.getIdleSince()) ? module : 0, P = Chunk517100.Z.isAFK(), w) T = A;
  else if (S) T = Chunk981631.Skl.INVISIBLE;
  else {
    let e = Chunk695346.co.getSetting();
    T = module !== Chunk981631.Skl.UNKNOWN ? module : Chunk981631.Skl.ONLINE
  }
  T === Chunk981631.Skl.ONLINE && C > 0 && (T = Chunk981631.Skl.IDLE);
  let t = false,
    n = w || T === Chunk981631.Skl.INVISIBLE ? [] : Chunk293273.Z.getActivities().filter(G);
  a()(N, require) || (N = require, R = j(require), t = true);
  let r = Chunk797258.Z.getRemoteActivities();
  D !== r && (D = r, t = true);
  let i = Chunk797258.Z.getHiddenActivities();
  x !== Chunk348327 && (x = Chunk348327), exports && (M = j(L = s()([...N, ...D.filter(e => e.type !== v.IIU.CUSTOM_STATUS)].sort(Chunk158776.f)).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()))
}

function F(e) {
  return S = e.invisible, Z()
}

function V() {
  return S = false, Z()
}

function H() {
  w = false, A = Chunk981631.Skl.UNKNOWN, Z(), Chunk158776.Z.setCurrentUserOnConnectionOpen(T, L)
}

function Y() {
  H()
}
class W extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk77498.Z, Chunk517100.Z, Chunk283595.Z, Chunk293273.Z, Chunk158776.Z, Chunk797258.Z, Chunk768419.Z, Chunk581883.Z), this.syncWith([Chunk293273.Z], Z)
  }
  getLocalPresence() {
    return {
      status: T,
      since: C,
      activities: R,
      afk: P
    }
  }
  getStatus() {
    return T
  }
  getActivities() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return module ? M : R
  }
  getUnfilteredActivities() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return module ? L : N
  }
  getHiddenActivities() {
    return x
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return this.getActivities(module)[0]
  }
  getApplicationActivity(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return this.findActivity(t => t.application_id === e, t)
  }
  findActivity(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return this.getActivities(t).find(e)
  }
}
I(W, "displayName", "SelfPresenceStore");
let K = new W(Chunk570140.Z, {
  START_SESSION: Z,
  CONNECTION_OPEN: Y,
  CONNECTION_OPEN_SUPPLEMENTAL: H,
  OVERLAY_INITIALIZE: H,
  CONNECTION_CLOSED: Z,
  IDLE: Z,
  AFK: Z,
  RUNNING_GAMES_CHANGE: Z,
  STREAMING_UPDATE: Z,
  USER_SETTINGS_PROTO_UPDATE: Z,
  LOCAL_ACTIVITY_UPDATE: Z,
  SPOTIFY_PLAYER_STATE: Z,
  SPOTIFY_PLAYER_PLAY: Z,
  USER_CONNECTIONS_UPDATE: Z,
  SESSIONS_REPLACE: Z,
  RPC_APP_DISCONNECTED: Z,
  LIBRARY_FETCH_SUCCESS: Z,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: Z,
  LOGOUT: B,
  FORCE_INVISIBLE: F,
  WINDOW_FOCUS: V
})