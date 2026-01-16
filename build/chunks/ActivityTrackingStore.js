/** Chunk was on 1272 **/
/** chunk id: 243852, original params: e,t,n (module,exports,require) **/
require("./388685.js");
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk278323 = require("./278323.js"),
  Chunk581567 = require("./581567.js"),
  Chunk594190 = require("./594190.js"),
  Chunk581883 = require("./581883.js"),
  Chunk70956 = require("./70956.js"),
  Chunk780570 = require("./780570.js"),
  Chunk314897 = require("./314897.js"),
  Chunk404577 = require("./404577.js"),
  Chunk283595 = require("./283595.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");
let I = "ActivityTrackingStore",
  y = 30 * Chunk70956.Z.Millis.MINUTE,
  C = 5 * Chunk70956.Z.Millis.MINUTE,
  S = null != (r = Chunk433517.K.get(I)) ? r : {},
  T = {},
  N = false;

function j(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  t && x(e, true);
  let n = T[e.applicationId];
  null != n && (n.stop(), delete T[e.applicationId]), delete S[e.applicationId], o.K.set(I, S)
}

function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = Date.now(),
    r = null != e.updatedAt ? n - e.updatedAt : 0;
  r > y + C && (r = 0);
  let i = (0, h.OT)(e.applicationId, _.Z),
    l = O.Z.getVoiceChannelId(),
    a = m.default.getSessionId(),
    c = E.Z.getMediaSessionId();
  u.Z.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? v.GQo.DISCORD : e.distributor,
    shareActivity: i,
    token: e.token,
    duration: Math.floor(r / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    sessionId: a,
    mediaSessionId: c
  }), e.updatedAt = n;
  let d = T[e.applicationId];
  null == d && (d = T[e.applicationId] = new s.Xp).start(y, () => x(e)), t || (S[e.applicationId] = e, o.K.set(I, S))
}

function P() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = p.ZP.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: r,
      exePath: i
    }
    of t) {
    let t = b.Z.getGameByName(e);
    null != t && (n.add(t.id), t.id in S || x({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: r,
      exePath: (0, d.N6)(null != i ? i : "")
    }))
  }
  for (let t of Object.keys(S)) n.has(t) || j(S[t], e)
}

function A() {
  for (let e of Object.keys(S)) j(S[e]);
  N = false
}
class Z extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(m.default, b.Z, _.Z, E.Z, p.ZP, O.Z, f.Z), this.syncWith([f.Z], P)
  }
  getActivities() {
    return S
  }
}(l = "displayName") in Z ? Object.defineProperty(Z, l, {
  value: "ActivityTrackingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : Z[l] = "ActivityTrackingStore", new Z(Chunk570140.Z, {
  RUNNING_GAMES_CHANGE: () => P(),
  CONNECTION_OPEN: function() {
    if (N) returnfalse;
    for (let e of Object.keys(S)) x(S[e]);
    P(false), N = true
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && A()
  },
  LOGOUT: A,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, r = S[t];
    if (null == r) returnfalse;
    r.token = n, o.K.set(I, S)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = S[t];
    if (null == n) returnfalse;
    n.token = null, n.updatedAt = null, o.K.set(I, S)
  }
})