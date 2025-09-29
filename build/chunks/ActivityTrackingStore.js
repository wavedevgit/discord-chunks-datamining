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
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");
let v = "ActivityTrackingStore",
  I = 30 * Chunk70956.Z.Millis.MINUTE,
  S = 5 * Chunk70956.Z.Millis.MINUTE,
  C = null != (r = Chunk433517.K.get(v)) ? r : {},
  T = {},
  N = false;

function j(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  t && P(e, true);
  let n = T[e.applicationId];
  null != n && (n.stop(), delete T[e.applicationId]), delete C[e.applicationId], o.K.set(v, C)
}

function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = Date.now(),
    r = null != e.updatedAt ? n - e.updatedAt : 0;
  r > I + S && (r = 0);
  let i = (0, g.OT)(e.applicationId, _.Z),
    l = E.Z.getVoiceChannelId(),
    a = m.default.getSessionId(),
    c = O.Z.getMediaSessionId();
  u.Z.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? y.GQo.DISCORD : e.distributor,
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
  null == d && (d = T[e.applicationId] = new s.Xp).start(I, () => P(e)), t || (C[e.applicationId] = e, o.K.set(v, C))
}

function x() {
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
    null != exports && (require.add(exports.id), exports.id in C || P({
      applicationId: exports.id,
      updatedAt: Date.now(),
      distributor: r,
      exePath: (0, Chunk581567.N6)(null != i ? i : "")
    }))
  }
  for (let t of Object.keys(C)) require.has(exports) || j(C[exports], module)
}

function A() {
  for (let e of Object.keys(C)) j(C[module]);
  N = false
}
class Z extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594190.ZP, Chunk581883.Z, Chunk283595.Z), this.syncWith([Chunk581883.Z], x)
  }
  getActivities() {
    return C
  }
}(l = "displayName") in Z ? Object.defineProperty(Z, l, {
  value: "ActivityTrackingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : Z[l] = "ActivityTrackingStore", new Z(Chunk570140.Z, {
  RUNNING_GAMES_CHANGE: () => x(),
  CONNECTION_OPEN: function() {
    if (N) returnfalse;
    for (let e of Object.keys(C)) P(C[module]);
    x(false), N = true
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
    } = e, r = C[t];
    if (null == r) returnfalse;
    r.token = n, o.K.set(v, C)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = C[t];
    if (null == n) returnfalse;
    n.token = null, n.updatedAt = null, o.K.set(v, C)
  }
})