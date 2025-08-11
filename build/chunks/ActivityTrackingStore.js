/** Chunk was on 1272 **/
/** chunk id: 243852, original params: e,t,n (module,exports,require) **/
require("./388685.js");
var r, i, l, a, Chunk442837 = require("./442837.js"),
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
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");
let I = "ActivityTrackingStore",
  C = 30 * Chunk70956.Z.Millis.MINUTE,
  S = 5 * Chunk70956.Z.Millis.MINUTE,
  N = null != (r = Chunk433517.K.get(I)) ? r : {},
  T = {},
  P = false;

function j(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  t && x(e, true);
  let n = T[e.applicationId];
  null != n && (n.stop(), delete T[e.applicationId]), delete N[e.applicationId], s.K.set(I, N)
}

function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = Date.now(),
    r = null != e.updatedAt ? n - e.updatedAt : 0;
  r > C + S && (r = 0);
  let i = (0, m.OT)(e.applicationId, O.Z),
    l = y.Z.getVoiceChannelId(),
    a = b.default.getSessionId(),
    o = E.Z.getMediaSessionId();
  d.Z.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? v.GQo.DISCORD : e.distributor,
    shareActivity: i,
    token: e.token,
    duration: Math.floor(r / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    sessionId: a,
    mediaSessionId: o
  }), e.updatedAt = n;
  let u = T[e.applicationId];
  null == u && (u = T[e.applicationId] = new c.Xp).start(C, () => x(e)), t || (N[e.applicationId] = e, s.K.set(I, N))
}

function A() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = Chunk594190.ZP.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: r,
      exePath: i
    }
    of exports) {
    let t = Chunk77498.Z.getGameByName(module);
    null != exports && (require.add(exports.id), exports.id in N || x({
      applicationId: exports.id,
      updatedAt: Date.now(),
      distributor: r,
      exePath: (0, Chunk581567.N6)(null != i ? i : "")
    }))
  }
  for (let t of Object.keys(N)) require.has(exports) || j(N[exports], module)
}

function Z() {
  for (let e of Object.keys(N)) j(N[module]);
  P = false
}
class w extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk581883.Z, Chunk283595.Z), this.syncWith([Chunk581883.Z], A)
  }
  getActivities() {
    return N
  }
}
a = "ActivityTrackingStore", (l = "displayName") in w ? Object.defineProperty(w, l, {
  value: a,
  enumerable: true,
  configurable: true,
  writable: true
}) : w[l] = a, new w(Chunk570140.Z, {
  RUNNING_GAMES_CHANGE: () => A(),
  CONNECTION_OPEN: function() {
    if (P) returnfalse;
    for (let e of Object.keys(N)) x(N[module]);
    A(false), P = true
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && Z()
  },
  LOGOUT: Z,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, r = N[t];
    if (null == r) returnfalse;
    r.token = n, s.K.set(I, N)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = N[t];
    if (null == n) returnfalse;
    n.token = null, n.updatedAt = null, s.K.set(I, N)
  }
})