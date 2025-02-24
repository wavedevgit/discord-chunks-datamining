/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => V
}), n(47120), n(230036);
var r, i = n(348327),
  o = n.n(i),
  a = n(392711),
  s = n.n(a),
  l = n(442837),
  c = n(570140),
  u = n(503438),
  d = n(768419),
  f = n(695346),
  p = n(581883),
  _ = n(780570),
  h = n(77498),
  m = n(517100),
  g = n(283595),
  E = n(293273),
  v = n(158776),
  b = n(797258),
  y = n(981631);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = !1,
  I = y.Skl.ONLINE,
  T = y.Skl.UNKNOWN,
  N = 0,
  A = [],
  C = !1,
  R = !0,
  P = Object.freeze([]),
  D = [];

function w(e) {
  return (0, _.OT)(e, g.Z)
}

function L(e) {
  let t = h.Z.getGameByName(e);
  return null != t ? w(t.id) : f.G6.getSetting()
}

function x(e) {
  switch (e.type) {
    case y.IIU.LISTENING:
      if ((0, u.Z)(e)) return d.Z.shouldShowActivity();
      if (null != e.application_id) return w(e.application_id);
      return !1;
    case y.IIU.PLAYING:
      return null != e.application_id ? w(e.application_id) : L(e.name);
    case y.IIU.STREAMING:
    case y.IIU.WATCHING:
    default:
      return null == e.application_id || w(e.application_id)
  }
}

function M() {
  R = !0, T = I, j()
}

function j() {
  var e;
  if (N = null !== (e = m.Z.getIdleSince()) && void 0 !== e ? e : 0, C = m.Z.isAFK(), R) I = T;
  else if (S) I = y.Skl.INVISIBLE;
  else {
    let e = f.co.getSetting();
    I = e !== y.Skl.UNKNOWN ? e : y.Skl.ONLINE
  }
  I === y.Skl.ONLINE && N > 0 && (I = y.Skl.IDLE);
  let t = !1,
    n = R || I === y.Skl.INVISIBLE ? [] : E.Z.getActivities().filter(x);
  o()(A, n) || (A = n, t = !0);
  let r = b.Z.getRemoteActivities();
  P !== r && (P = r, t = !0), t && (D = s()([...A, ...P.filter(e => e.type !== y.IIU.CUSTOM_STATUS)].sort(v.f)).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value())
}

function k(e) {
  return S = e.invisible, j()
}

function U() {
  return S = !1, j()
}

function G() {
  R = !1, T = y.Skl.UNKNOWN, j(), v.Z.setCurrentUserOnConnectionOpen(I, D)
}

function B() {
  G()
}
class F extends(r = l.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, p.Z, E.Z, b.Z, g.Z, h.Z), this.syncWith([E.Z], j)
  }
  getLocalPresence() {
    return {
      status: I,
      since: N,
      activities: A,
      afk: C
    }
  }
  getStatus() {
    return I
  }
  getActivities() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? D : A
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? D[0] : A[0]
  }
  getApplicationActivity(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.findActivity(t => t.application_id === e, t)
  }
  findActivity(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.getActivities(t).find(e)
  }
}
O(F, "displayName", "SelfPresenceStore");
let V = new F(c.Z, {
  START_SESSION: j,
  CONNECTION_OPEN: B,
  CONNECTION_OPEN_SUPPLEMENTAL: G,
  OVERLAY_INITIALIZE: G,
  CONNECTION_CLOSED: j,
  IDLE: j,
  AFK: j,
  RUNNING_GAMES_CHANGE: j,
  STREAMING_UPDATE: j,
  USER_SETTINGS_PROTO_UPDATE: j,
  LOCAL_ACTIVITY_UPDATE: j,
  SPOTIFY_PLAYER_STATE: j,
  SPOTIFY_PLAYER_PLAY: j,
  USER_CONNECTIONS_UPDATE: j,
  SESSIONS_REPLACE: j,
  RPC_APP_DISCONNECTED: j,
  LIBRARY_FETCH_SUCCESS: j,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: j,
  LOGOUT: M,
  FORCE_INVISIBLE: k,
  WINDOW_FOCUS: U
})