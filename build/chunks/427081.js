/** Chunk was on web.js **/
/** chunk id: 427081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk754700 = require("./754700.js"),
  Chunk670081 = require("./670081.js"),
  Chunk147913 = require("./147913.js"),
  Chunk317381 = require("./317381.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk817788 = require("./817788.js"),
  Chunk509003 = require("./509003.js"),
  Chunk199902 = require("./199902.js"),
  Chunk404577 = require("./404577.js"),
  Chunk938475 = require("./938475.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk535584 = require("./535584.js"),
  Chunk862657 = require("./862657.js"),
  Chunk759479 = require("./759479.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk324805 = require("./324805.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = +Chunk70956.Z.Millis.MINUTE,
  N = 2,
  P = +Chunk70956.Z.Millis.SECOND,
  w = (0, Chunk535584.T)({
    location: Chunk324805.dr.QUESTS_MANAGER
  });

function R(e) {
  return !(0, O.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}

function D(e) {
  let t = E.Z.quests;
  for (let n of (0, v.zs)(t, e))
    if (n.config.features.includes(i.S.ACTIVITY_QUEST_AUTO_ENROLLMENT)) return void(0, m.AH)(n.id, {
      questContent: b.jn.RUNNING_ACTIVITY,
      questContentCTA: g.jZ.ACCEPT_QUEST,
      sourceQuestContent: b.jn.RUNNING_ACTIVITY
    })
}

function x(e, t) {
  return null != t && e.some(e => e === c.eB) && (0, u.le)(t)
}

function L(e) {
  return null != e && e.config.features.includes(i.S.MANUAL_HEARTBEAT_INITIALIZATION)
}
class j extends Chunk147913.Z {
  syncHeartbeats(e, t, n) {
    for (let r of ("VOICE_STATE_UPDATES" !== t && "PASSIVE_UPDATE_V2" !== t && w.log("~ syncHeartbeats -> syncing heartbeats for taskTypes: ".concat(e.join(", "), " (triggered by: ").concat(t, ")")), e)) {
      let e = this.heartbeats[r],
        t = this.getActivelyProgressingQuests(r);
      for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, r);
      for (let [i, a] of t.entries()) !e.has(i) && (null == n || n(E.Z.quests.get(i))) && this.initiateHeartbeat(i, r, a.applicationId)
    }
  }
  getActivelyProgressingQuests(e) {
    switch (e) {
      case r.X.PLAY_ON_DESKTOP:
        return this.getActivelyProgressingPlayOnDesktopQuests();
      case r.X.STREAM_ON_DESKTOP:
        return this.getActivelyProgressingStreamOnDesktopQuests();
      case r.X.PLAY_ACTIVITY:
        return this.getActivelyProgressingActivityQuests();
      default:
        (0, h.vE)(e)
    }
  }
  getActivelyProgressingPlayOnDesktopQuests() {
    let e = new Map,
      t = s.ZP.getRunningGames(),
      n = s.ZP.getRunningNonGames(),
      r = E.Z.quests;
    w.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t, "Running non-games: ", n);
    let i = {};
    for (let e of t) {
      if (e.isLauncher) continue;
      if (null != e.id) {
        i[e.id] = e;
        continue
      }
      let t = s.ZP.getOverrideForGame(e);
      if (null == e.distributor && null != t) continue;
      let n = f.Z.getGameByName(e.name);
      if ((null == n ? true : n.id) != null) {
        i[n.id] = e;
        continue
      }
    }
    for (let e of n) null != e.id && (i[e.id] = e);
    for (let t of Object.keys(i)) {
      let n = i[t];
      for (let i of r.values()) {
        let r = (0, S.vj)(i);
        if (!R(i) || null == r) continue;
        let a = r.find(e => e === t);
        null != a ? e.set(i.id, {
          applicationId: a
        }) : x(r, n) && e.set(i.id, {
          applicationId: c.eB
        })
      }
    }
    return w.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(e.keys())), e
  }
  getActivelyProgressingStreamOnDesktopQuests() {
    let e = new Map,
      t = d.Z.getCurrentUserActiveStream();
    if (null == t || p.ZP.countVoiceStatesForChannel(t.channelId) < N) return e;
    let n = d.Z.getStreamerActiveStreamMetadata();
    if (null == n) return e;
    w.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
    let r = n.id;
    if (null == r) return e;
    for (let t of E.Z.quests.values()) {
      let n = (0, S.DR)(t);
      R(t) && null != n && n === r && e.set(t.id, {
        applicationId: r
      })
    }
    return w.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(e.keys())), e
  }
  getActivelyProgressingActivityQuests() {
    let e = new Map,
      t = o.ZP.getSelfEmbeddedActivities(),
      n = t.size > 0;
    if (w.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n) return e;
    let r = E.Z.quests;
    for (let n of t.keys())
      for (let t of r.values()) {
        let r = (0, S.Mo)(t);
        R(t) && null != r && r === n && e.set(t.id, {
          applicationId: n
        })
      }
    for (let t of r.values()) R(t) && (0, I.KM)(t) && n && e.set(t.id, {
      applicationId: T.Ts
    });
    return w.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())), e
  }
  constructor(...e) {
    super(...e), C(this, "heartbeats", {
      [r.X.PLAY_ON_DESKTOP]: new Map,
      [r.X.STREAM_ON_DESKTOP]: new Map,
      [r.X.PLAY_ACTIVITY]: new Map
    }), C(this, "calculateHeartbeatDurationMs", e => {
      let t = E.Z.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return A;
      let {
        progressSeconds: n,
        targetSeconds: i
      } = (0, S.il)(t, r.T.DESKTOP), a = Math.max(0, (i - n) * _.Z.Millis.SECOND);
      return a <= A ? a + P : A
    }), C(this, "initiateHeartbeat", (e, t, n) => {
      let i = this.heartbeats[t];
      if (i.has(e)) return void w.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
      let a = () => {
        let o = this.getActivelyProgressingQuests(t);
        if (o.has(e)) {
          var s;
          let c = o.get(e),
            u = null != (s = null == c ? true : c.applicationId) ? s : n;
          if (t === r.X.STREAM_ON_DESKTOP) {
            let n = d.Z.getCurrentUserActiveStream();
            if (null == n) {
              w.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(e)), this.terminateHeartbeat(e, t);
              return
            }
            let r = (0, l.V9)(n);
            w.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, m.m0)({
              questId: e,
              streamKey: r,
              applicationId: u
            })
          } else w.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, m.m0)({
            questId: e,
            applicationId: u
          });
          let f = this.calculateHeartbeatDurationMs(e),
            p = window.setTimeout(a, f);
          i.set(e, p)
        } else w.log("~ initiateHeartbeat -> Quest ".concat(e, " is no longer actively progressing, terminating heartbeat")), this.terminateHeartbeat(e, t)
      };
      w.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), a()
    }), C(this, "terminateHeartbeat", (e, t) => {
      let n = this.heartbeats[t],
        r = E.Z.quests,
        i = n.get(e);
      if (null != i) {
        w.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)), window.clearTimeout(i), n.delete(e);
        let t = r.get(e);
        null != t && R(t) && (w.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)), (0, m.m0)({
          questId: e,
          terminal: true
        }))
      }
    }), C(this, "handleSendHeartbeatSuccess", e => {
      let {
        questId: t,
        userStatus: n
      } = e;
      if (w.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")), null != n.completedAt)
        for (let e of (w.log("~ handleSendHeartbeatSuccess -> Quest ".concat(t, " completed, terminating any heartbeats for it")), Object.keys(this.heartbeats))) this.terminateHeartbeat(t, e)
    }), C(this, "handleSendHeartbeatFailure", e => {
      let {
        questId: t
      } = e;
      w.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t))
    }), C(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP], "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS"),
      QUESTS_ENROLL_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], "QUESTS_ENROLL_SUCCESS", e => !L(e)),
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
      QUESTS_PREVIEW_UPDATE_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], "QUESTS_PREVIEW_UPDATE_SUCCESS"),
      RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP], "RUNNING_GAMES_CHANGE"),
      RUNNING_NON_GAMES_CHANGE: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP], "RUNNING_NON_GAMES_CHANGE"),
      STREAM_START: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_START"),
      STREAM_CREATE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_CREATE"),
      STREAM_CLOSE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_CLOSE"),
      PASSIVE_UPDATE_V2: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "PASSIVE_UPDATE_V2"),
      VOICE_STATE_UPDATES: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "VOICE_STATE_UPDATES"),
      EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: e => {
        let {
          applicationId: t
        } = e;
        D(t)
      },
      EMBEDDED_ACTIVITY_UPDATE_V2: () => this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", e => !L(e)),
      QUEST_APPLICATION_START_TIMER: e => {
        let {
          questId: t
        } = e;
        this.syncHeartbeats([r.X.PLAY_ACTIVITY], "QUEST_APPLICATION_START_TIMER", e => null != e && e.id === t && L(e))
      }
    })
  }
}
let M = new j