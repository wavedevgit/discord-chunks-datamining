/** Chunk was on web.js **/
/** chunk id: 885110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./997841.js"), require("./388685.js"), require("./642613.js");
var r, Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
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
let T = false,
  S = Chunk981631.Skl.ONLINE,
  A = Chunk981631.Skl.UNKNOWN,
  N = 0,
  C = [],
  R = false,
  P = true,
  w = Object.freeze([]),
  D = Object.freeze([]),
  L = [];

function x(e) {
  return (0, h.OT)(e, E.Z)
}

function M(e) {
  let t = m.Z.getGameByName(e);
  return null != t ? x(t.id) : f.G6.getSetting()
}

function j(e) {
  var t;
  if ((0, p.yE)(null != (t = e.flags) ? t : 0, v.xjy.CONTEXTLESS)) returntrue;
  switch (e.type) {
    case v.IIU.LISTENING:
      if ((0, u.Z)(e)) return d.Z.shouldShowActivity();
      if (null != e.application_id) return x(e.application_id);
      returnfalse;
    case v.IIU.PLAYING:
      return null != e.application_id ? x(e.application_id) : M(e.name);
    case v.IIU.STREAMING:
    case v.IIU.WATCHING:
    default:
      return null == e.application_id || x(e.application_id)
  }
}

function k() {
  P = true, A = S, U()
}

function U() {
  var e;
  if (N = null != (e = Chunk517100.Z.getIdleSince()) ? module : 0, R = Chunk517100.Z.isAFK(), P) S = A;
  else if (T) S = Chunk981631.Skl.INVISIBLE;
  else {
    let e = Chunk695346.co.getSetting();
    S = module !== Chunk981631.Skl.UNKNOWN ? module : Chunk981631.Skl.ONLINE
  }
  S === Chunk981631.Skl.ONLINE && N > 0 && (S = Chunk981631.Skl.IDLE);
  let t = false,
    n = P || S === Chunk981631.Skl.INVISIBLE ? [] : Chunk293273.Z.getActivities().filter(j);
  o()(C, require) || (C = require, t = true);
  let r = Chunk797258.Z.getRemoteActivities();
  w !== r && (w = r, t = true);
  let i = Chunk797258.Z.getHiddenActivities();
  D !== Chunk348327 && (D = Chunk348327), exports && (L = s()([...C, ...w.filter(e => e.type !== v.IIU.CUSTOM_STATUS)].sort(Chunk158776.f)).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value())
}

function G(e) {
  return T = e.invisible, U()
}

function B() {
  return T = false, U()
}

function Z() {
  P = false, A = Chunk981631.Skl.UNKNOWN, U(), Chunk158776.Z.setCurrentUserOnConnectionOpen(S, L)
}

function F() {
  Z()
}
class V extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk517100.Z, Chunk581883.Z, Chunk293273.Z, Chunk797258.Z, Chunk283595.Z, Chunk77498.Z), this.syncWith([Chunk293273.Z], U)
  }
  getLocalPresence() {
    return {
      status: S,
      since: N,
      activities: C,
      afk: R
    }
  }
  getStatus() {
    return S
  }
  getActivities() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return module ? L : C
  }
  getHiddenActivities() {
    return D
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return module ? L[0] : C[0]
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
I(V, "displayName", "SelfPresenceStore");
let H = new V(Chunk570140.Z, {
  START_SESSION: U,
  CONNECTION_OPEN: F,
  CONNECTION_OPEN_SUPPLEMENTAL: Z,
  OVERLAY_INITIALIZE: Z,
  CONNECTION_CLOSED: U,
  IDLE: U,
  AFK: U,
  RUNNING_GAMES_CHANGE: U,
  STREAMING_UPDATE: U,
  USER_SETTINGS_PROTO_UPDATE: U,
  LOCAL_ACTIVITY_UPDATE: U,
  SPOTIFY_PLAYER_STATE: U,
  SPOTIFY_PLAYER_PLAY: U,
  USER_CONNECTIONS_UPDATE: U,
  SESSIONS_REPLACE: U,
  RPC_APP_DISCONNECTED: U,
  LIBRARY_FETCH_SUCCESS: U,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: U,
  LOGOUT: k,
  FORCE_INVISIBLE: G,
  WINDOW_FOCUS: B
})