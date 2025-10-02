/** Chunk was on web.js **/
/** chunk id: 427081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
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
  Chunk77498 = require("./77498.js"),
  Chunk938475 = require("./938475.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk937797 = require("./937797.js"),
  Chunk5881 = require("./5881.js"),
  Chunk46140 = require("./46140.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = +Chunk70956.Z.Millis.MINUTE,
  T = 2,
  S = +Chunk70956.Z.Millis.SECOND,
  A = (0, Chunk5881.T)({
    location: Chunk46140.dr.QUESTS_MANAGER
  });

function C(e) {
  return !(0, m.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}

function N(e, t) {
  return null != t && e.config.application.id === c.eB && (0, u.le)(t)
}

function R(e) {
  return null != e && e.config.features.includes(i.S.MANUAL_HEARTBEAT_INITIALIZATION)
}
class P extends Chunk147913.Z {
  syncHeartbeats(e, t, n) {
    for (let r of ("VOICE_STATE_UPDATES" !== t && "PASSIVE_UPDATE_V2" !== t && A.log("~ syncHeartbeats -> syncing heartbeats for taskTypes: ".concat(e.join(", "), " (triggered by: ").concat(t, ")")), e)) {
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
      t = Chunk594190.ZP.getRunningGames(),
      n = Chunk569984.Z.quests;
    A.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", exports);
    let i = {};
    for (let e of exports) {
      if (module.isLauncher) continue;
      if (null != module.id) {
        Chunk670081[module.id] = module;
        continue
      }
      let t = Chunk594190.ZP.getOverrideForGame(module);
      if (null == module.distributor && null != exports) continue;
      let n = Chunk77498.Z.getGameByName(module.name);
      if ((null == require ? true : require.id) != null) {
        Chunk670081[require.id] = module;
        continue
      }
    }
    let a = (0, Chunk937797.CD)(Chunk46140.dr.QUESTS_MANAGER);
    for (let t of Object.keys(Chunk670081)) {
      let o = Chunk670081[exports];
      for (let i of require.values()) {
        let n = Chunk670081.config.taskConfigV2.tasks[Chunk754700.X.PLAY_ON_DESKTOP];
        if (!C(Chunk670081) || null == require) continue;
        let s = [Chunk670081.config.application];
        Chunk147913 && null != require.applications && (s = require.applications);
        let l = Chunk594190.find(e => e.id === t);
        null != Chunk569545 ? module.set(Chunk670081.id, {
          applicationId: Chunk569545.id
        }) : N(Chunk670081, Chunk317381) && module.set(Chunk670081.id, {
          applicationId: Chunk817788.eB
        })
      }
    }
    return A.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(module.keys())), module
  }
  getActivelyProgressingStreamOnDesktopQuests() {
    let e = new Map,
      t = Chunk199902.Z.getCurrentUserActiveStream();
    if (null == exports || Chunk938475.ZP.countVoiceStatesForChannel(exports.channelId) < T) return module;
    let n = Chunk199902.Z.getStreamerActiveStreamMetadata();
    if (null == require) return module;
    A.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", require);
    let r = require.id;
    if (null == Chunk754700) return module;
    for (let t of Chunk569984.Z.quests.values()) C(exports) && (0, Chunk509212.Dr)({
      quest: exports
    }) && exports.config.application.id === Chunk754700 && module.set(exports.id, {
      applicationId: Chunk754700
    });
    return A.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(module.keys())), module
  }
  getActivelyProgressingActivityQuests() {
    let e = new Map,
      t = Chunk317381.ZP.getSelfEmbeddedActivities(),
      n = exports.size > 0;
    if (A.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", exports), !require) return module;
    let r = Chunk569984.Z.quests;
    for (let n of exports.keys())
      for (let t of Chunk754700.values()) C(exports) && (0, Chunk509212.pO)(exports) && exports.config.application.id === require && module.set(exports.id, {
        applicationId: require
      });
    for (let t of Chunk754700.values()) C(exports) && (0, Chunk509212.KM)(exports) && require && module.set(exports.id, {
      applicationId: Chunk46140.Ts
    });
    return A.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(module.keys())), module
  }
  constructor(...e) {
    super(...e), v(this, "heartbeats", {
      [r.X.PLAY_ON_DESKTOP]: new Map,
      [r.X.STREAM_ON_DESKTOP]: new Map,
      [r.X.PLAY_ACTIVITY]: new Map
    }), v(this, "calculateHeartbeatDurationMs", e => {
      let t = E.Z.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return I;
      let {
        progressSeconds: n,
        targetSeconds: i
      } = (0, m.il)(t, r.T.DESKTOP), a = Math.max(0, (i - n) * p.Z.Millis.SECOND);
      return a <= I ? a + S : I
    }), v(this, "initiateHeartbeat", (e, t, n) => {
      let i = this.heartbeats[t];
      if (i.has(e)) return void A.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
      let a = () => {
        let o = this.getActivelyProgressingQuests(t);
        if (o.has(e)) {
          var s;
          let c = o.get(e),
            u = null != (s = null == c ? true : c.applicationId) ? s : n;
          if (t === r.X.STREAM_ON_DESKTOP) {
            let n = d.Z.getCurrentUserActiveStream();
            if (null == n) {
              A.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(e)), this.terminateHeartbeat(e, t);
              return
            }
            let r = (0, l.V9)(n);
            A.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, g.m0)({
              questId: e,
              streamKey: r,
              applicationId: u
            })
          } else A.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, g.m0)({
            questId: e,
            applicationId: u
          });
          let f = this.calculateHeartbeatDurationMs(e),
            _ = window.setTimeout(a, f);
          i.set(e, _)
        } else A.log("~ initiateHeartbeat -> Quest ".concat(e, " is no longer actively progressing, terminating heartbeat")), this.terminateHeartbeat(e, t)
      };
      A.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), a()
    }), v(this, "terminateHeartbeat", (e, t) => {
      let n = this.heartbeats[t],
        r = E.Z.quests,
        i = n.get(e);
      if (null != i) {
        A.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)), window.clearTimeout(i), n.delete(e);
        let t = r.get(e);
        null != t && C(t) && (A.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)), (0, g.m0)({
          questId: e,
          terminal: true
        }))
      }
    }), v(this, "handleSendHeartbeatSuccess", e => {
      let {
        questId: t,
        userStatus: n
      } = e;
      if (A.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")), null != n.completedAt)
        for (let e of (A.log("~ handleSendHeartbeatSuccess -> Quest ".concat(t, " completed, terminating any heartbeats for it")), Object.keys(this.heartbeats))) this.terminateHeartbeat(t, e)
    }), v(this, "handleSendHeartbeatFailure", e => {
      let {
        questId: t
      } = e;
      A.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t))
    }), v(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP], "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS"),
      QUESTS_ENROLL_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], "QUESTS_ENROLL_SUCCESS", e => !R(e)),
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
      QUESTS_PREVIEW_UPDATE_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], "QUESTS_PREVIEW_UPDATE_SUCCESS"),
      RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP], "RUNNING_GAMES_CHANGE"),
      STREAM_START: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_START"),
      STREAM_CREATE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_CREATE"),
      STREAM_CLOSE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_CLOSE"),
      PASSIVE_UPDATE_V2: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "PASSIVE_UPDATE_V2"),
      VOICE_STATE_UPDATES: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "VOICE_STATE_UPDATES"),
      EMBEDDED_ACTIVITY_UPDATE_V2: () => this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", e => !R(e)),
      QUEST_APPLICATION_START_TIMER: e => {
        let {
          questId: t
        } = e;
        this.syncHeartbeats([r.X.PLAY_ACTIVITY], "QUEST_APPLICATION_START_TIMER", e => null != e && e.id === t && R(e))
      }
    })
  }
}
let w = new P