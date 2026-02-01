/** Chunk was on web.js **/
/** chunk id: 461213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => z
}), require("./321073.js"), require("./896048.js"), require("./638769.js"), require("./938796.js");
var r, Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk90644 = require("./90644.js"),
  Chunk655116 = require("./655116.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk674378 = require("./674378.js"),
  Chunk760751 = require("./760751.js"),
  Chunk885576 = require("./885576.js"),
  Chunk189081 = require("./189081.js"),
  Chunk375492 = require("./375492.js"),
  Chunk290863 = require("./290863.js"),
  Chunk528767 = require("./528767.js"),
  Chunk652215 = require("./652215.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = false,
  S = Chunk652215.clD.ONLINE,
  T = Chunk652215.clD.UNKNOWN,
  C = 0,
  N = [],
  w = [],
  R = false,
  P = true,
  D = Object.freeze([]),
  L = Object.freeze([]),
  x = [],
  M = [];

function j(e) {
  if (0 === e.length) return e;
  let t = [],
    n = [];
  for (let r of e) r.type === v.$pd.PLAYING ? n.push(r) : t.push(r);
  return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(b.m)[0]].sort(b.m)
}

function k(e) {
  return (0, h.kv)(e, E.A)
}

function U(e) {
  let t = m.A.getGameByName(e);
  return null != t ? k(t.id) : p.tz.getSetting()
}

function G(e) {
  var t;
  if ((0, l.Lt)(null != (t = e.flags) ? t : 0, v.jUm.CONTEXTLESS)) returntrue;
  switch (e.type) {
    case v.$pd.LISTENING:
      if ((0, d.A)(e)) return f.A.shouldShowActivity();
      if (null != e.application_id) return k(e.application_id);
      returnfalse;
    case v.$pd.PLAYING:
      return null != e.application_id ? k(e.application_id) : U(e.name);
    case v.$pd.STREAMING:
    case v.$pd.WATCHING:
    default:
      return null == e.application_id || k(e.application_id)
  }
}

function V() {
  P = true, T = S, F()
}

function F() {
  var e;
  if (C = null != (e = g.A.getIdleSince()) ? e : 0, R = g.A.isAFK(), P) S = T;
  else if (I) S = v.clD.INVISIBLE;
  else {
    let e = p.jP.getSetting();
    S = e !== v.clD.UNKNOWN ? e : v.clD.ONLINE
  }
  S === v.clD.ONLINE && C > 0 && (S = v.clD.IDLE);
  let t = false,
    n = P || S === v.clD.INVISIBLE ? [] : y.A.getActivities().filter(G);
  a()(N, n) || (N = n, w = j(n), t = true);
  let r = O.A.getRemoteActivities();
  D !== r && (D = r, t = true);
  let i = O.A.getHiddenActivities();
  L !== i && (L = i), t && (M = j(x = s()([...N, ...D.filter(e => e.type !== v.$pd.CUSTOM_STATUS)].sort(b.m)).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()))
}

function B(e) {
  return I = e.invisible, F()
}

function H() {
  return I = false, F()
}

function Y() {
  P = false, T = v.clD.UNKNOWN, F(), b.A.setCurrentUserOnConnectionOpen(S, x)
}

function W() {
  Y()
}
class K extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(m.A, g.A, E.A, y.A, b.A, O.A, f.A, _.A), this.syncWith([y.A], F)
  }
  getLocalPresence() {
    return {
      status: S,
      since: C,
      activities: w,
      afk: R
    }
  }
  getStatus() {
    return S
  }
  getActivities() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return e ? M : w
  }
  getUnfilteredActivities() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    return e ? x : N
  }
  getHiddenActivities() {
    return L
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
A(K, "displayName", "SelfPresenceStore");
let z = new K(Chunk73153.h, {
  START_SESSION: F,
  CONNECTION_OPEN: W,
  CONNECTION_OPEN_SUPPLEMENTAL: Y,
  OVERLAY_INITIALIZE: Y,
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
  LOGOUT: V,
  FORCE_INVISIBLE: B,
  WINDOW_FOCUS: H
})