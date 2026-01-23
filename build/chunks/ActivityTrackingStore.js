/** Chunk was on 21738 **/
/** chunk id: 140061, original params: e,t,n (module,exports,require) **/
require("./896048.js");
var r, i, l, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk308368 = require("./308368.js"),
  Chunk973522 = require("./973522.js"),
  Chunk15285 = require("./15285.js"),
  Chunk617617 = require("./617617.js"),
  Chunk927813 = require("./927813.js"),
  Chunk674378 = require("./674378.js"),
  Chunk961350 = require("./961350.js"),
  Chunk760751 = require("./760751.js"),
  Chunk189081 = require("./189081.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");
let y = "ActivityTrackingStore",
  I = 30 * Chunk927813.A.Millis.MINUTE,
  v = 5 * Chunk927813.A.Millis.MINUTE,
  S = null != (r = Chunk506774.w.get(y)) ? r : {},
  C = {},
  N = false;

function T(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  t && j(e, true);
  let n = C[e.applicationId];
  null != n && (n.stop(), delete C[e.applicationId]), delete S[e.applicationId], s.w.set(y, S)
}

function j(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = Date.now(),
    r = null != e.updatedAt ? n - e.updatedAt : 0;
  r > I + v && (r = 0);
  let i = (0, f.kv)(e.applicationId, _.A),
    l = E.A.getVoiceChannelId(),
    a = m.default.getSessionId(),
    c = b.A.getMediaSessionId();
  u.A.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? O.d3x.DISCORD : e.distributor,
    shareActivity: i,
    token: e.token,
    duration: Math.floor(r / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    sessionId: a,
    mediaSessionId: c
  }), e.updatedAt = n;
  let d = C[e.applicationId];
  null == d && (d = C[e.applicationId] = new o.IX).start(I, () => j(e)), t || (S[e.applicationId] = e, s.w.set(y, S))
}

function x() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = p.Ay.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: r,
      exePath: i
    }
    of t) {
    let t = A.A.getGameByName(e);
    null != t && (n.add(t.id), t.id in S || j({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: r,
      exePath: (0, d.Ic)(null != i ? i : "")
    }))
  }
  for (let t of Object.keys(S)) n.has(t) || T(S[t], e)
}

function P() {
  for (let e of Object.keys(S)) T(S[e]);
  N = false
}
class w extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(m.default, A.A, _.A, b.A, p.Ay, E.A, h.A), this.syncWith([h.A], x)
  }
  getActivities() {
    return S
  }
}(l = "displayName") in w ? Object.defineProperty(w, l, {
  value: "ActivityTrackingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : w[l] = "ActivityTrackingStore", new w(Chunk73153.h, {
  RUNNING_GAMES_CHANGE: () => x(),
  CONNECTION_OPEN: function() {
    if (N) returnfalse;
    for (let e of Object.keys(S)) j(S[e]);
    x(false), N = true
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && P()
  },
  LOGOUT: P,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, r = S[t];
    if (null == r) returnfalse;
    r.token = n, s.w.set(y, S)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = S[t];
    if (null == n) returnfalse;
    n.token = null, n.updatedAt = null, s.w.set(y, S)
  }
})