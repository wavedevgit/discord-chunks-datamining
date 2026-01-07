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
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk503438 = require("./503438.js"),
  Chunk768419 = require("./768419.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk780570 = require("./780570.js"),
  Chunk77498 = require("./77498.js"),
  Chunk517100 = require("./517100.js"),
  Chunk283595 = require("./283595.js"),
  Chunk293273 = require("./293273.js"),
  Chunk158776 = require("./158776.js"),
  Chunk797258 = require("./797258.js"),
  Chunk981631 = require("./981631.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = false,
  T = Chunk981631.Skl.ONLINE,
  C = Chunk981631.Skl.UNKNOWN,
  A = 0,
  N = [],
  P = [],
  R = false,
  w = true,
  D = Object.freeze([]),
  x = Object.freeze([]),
  L = [],
  j = [];

function M(e) {
  if (0 === e.length) return e;
  let t = [],
    n = [];
  for (let r of e) r.type === v.IIU.PLAYING ? n.push(r) : t.push(r);
  return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(y.f)[0]].sort(y.f)
}

function k(e) {
  return (0, m.OT)(e, E.Z)
}

function U(e) {
  let t = h.Z.getGameByName(e);
  return null != t ? k(t.id) : p.G6.getSetting()
}

function G(e) {
  var t;
  if ((0, l.yE)(null != (t = e.flags) ? t : 0, v.xjy.CONTEXTLESS)) returntrue;
  switch (e.type) {
    case v.IIU.LISTENING:
      if ((0, d.Z)(e)) return f.Z.shouldShowActivity();
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

function Z() {
  w = true, C = T, F()
}

function F() {
  var e;
  if (A = null != (e = g.Z.getIdleSince()) ? e : 0, R = g.Z.isAFK(), w) T = C;
  else if (I) T = v.Skl.INVISIBLE;
  else {
    let e = p.co.getSetting();
    T = e !== v.Skl.UNKNOWN ? e : v.Skl.ONLINE
  }
  T === v.Skl.ONLINE && A > 0 && (T = v.Skl.IDLE);
  let t = false,
    n = w || T === v.Skl.INVISIBLE ? [] : b.Z.getActivities().filter(G);
  a()(N, n) || (N = n, P = M(n), t = true);
  let r = O.Z.getRemoteActivities();
  D !== r && (D = r, t = true);
  let i = O.Z.getHiddenActivities();
  x !== i && (x = i), t && (j = M(L = s()([...N, ...D.filter(e => e.type !== v.IIU.CUSTOM_STATUS)].sort(y.f)).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()))
}

function B(e) {
  return I = e.invisible, F()
}

function V() {
  return I = false, F()
}

function H() {
  w = false, C = v.Skl.UNKNOWN, F(), y.Z.setCurrentUserOnConnectionOpen(T, L)
}

function Y() {
  H()
}
class W extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, g.Z, E.Z, b.Z, y.Z, O.Z, f.Z, _.Z), this.syncWith([b.Z], F)
  }
  getLocalPresence() {
    return {
      status: T,
      since: A,
      activities: P,
      afk: R
    }
  }
  getStatus() {
    return T
  }
  getActivities() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return e ? j : P
  }
  getUnfilteredActivities() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return e ? L : N
  }
  getHiddenActivities() {
    return x
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return this.getActivities(e)[0]
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
S(W, "displayName", "SelfPresenceStore");
let K = new W(Chunk570140.Z, {
  START_SESSION: F,
  CONNECTION_OPEN: Y,
  CONNECTION_OPEN_SUPPLEMENTAL: H,
  OVERLAY_INITIALIZE: H,
  CONNECTION_CLOSED: F,
  IDLE: F,
  AFK: F,
  RUNNING_GAMES_CHANGE: F,
  STREAMING_UPDATE: F,
  USER_SETTINGS_PROTO_UPDATE: F,
  LOCAL_ACTIVITY_UPDATE: F,
  SPOTIFY_PLAYER_STATE: F,
  SPOTIFY_PLAYER_PLAY: F,
  USER_CONNECTIONS_UPDATE: F,
  SESSIONS_REPLACE: F,
  RPC_APP_DISCONNECTED: F,
  LIBRARY_FETCH_SUCCESS: F,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: F,
  LOGOUT: Z,
  FORCE_INVISIBLE: B,
  WINDOW_FOCUS: V
})