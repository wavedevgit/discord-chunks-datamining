/** Chunk was on web.js **/
/** chunk id: 427081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
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
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk535584 = require("./535584.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk324805 = require("./324805.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = +Chunk70956.Z.Millis.MINUTE,
  C = 2,
  N = +Chunk70956.Z.Millis.SECOND,
  P = (0, Chunk535584.T)({
    location: Chunk324805.dr.QUESTS_MANAGER
  });

function R(e) {
  return !(0, O.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}

function D(e) {
  for (let r of E.Z.quests.values()) {
    var t, n;
    let a = (0, v.Mo)(r);
    if (null != r && (0, S.Rt)(r) && r.config.features.includes(i.S.ACTIVITY_QUEST_AUTO_ENROLLMENT) && !(0, O.zi)(r) && a === e && a !== I.Ts && (null == (t = r.userStatus) ? true : t.completedAt) == null && (null == (n = r.userStatus) ? true : n.enrolledAt) == null) return void(0, h.AH)(r.id, {
      questContent: b.jn.RUNNING_ACTIVITY,
      questContentCTA: g.jZ.ACCEPT_QUEST,
      sourceQuestContent: b.jn.RUNNING_ACTIVITY
    })
  }
}

function w(e, t) {
  return null != t && e.some(e => e === c.eB) && (0, u.le)(t)
}

function x(e) {
  return null != e && e.config.features.includes(i.S.MANUAL_HEARTBEAT_INITIALIZATION)
}
class L extends Chunk147913.Z {
  syncHeartbeats(e, t, n) {
    for (let r of ("VOICE_STATE_UPDATES" !== t && "PASSIVE_UPDATE_V2" !== t && P.log("~ syncHeartbeats -> syncing heartbeats for taskTypes: ".concat(e.join(", "), " (triggered by: ").concat(t, ")")), e)) {
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
        (0, m.vE)(e)
    }
  }
  getActivelyProgressingPlayOnDesktopQuests() {
    let e = new Map,
      t = Chunk594190.ZP.getRunningGames(),
      n = Chunk594190.ZP.getRunningNonGames(),
      r = Chunk616022.Z.quests;
    P.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", exports, "Running non-games: ", require);
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
    for (let e of require) null != module.id && (Chunk670081[module.id] = module);
    for (let t of Object.keys(Chunk670081)) {
      let n = Chunk670081[exports];
      for (let i of Chunk754700.values()) {
        let r = (0, Chunk254579.vj)(Chunk670081);
        if (!R(Chunk670081) || null == Chunk754700) continue;
        let a = Chunk754700.find(e => e === t);
        null != Chunk147913 ? module.set(Chunk670081.id, {
          applicationId: Chunk147913
        }) : w(Chunk754700, require) && module.set(Chunk670081.id, {
          applicationId: Chunk817788.eB
        })
      }
    }
    return P.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(module.keys())), module
  }
  getActivelyProgressingStreamOnDesktopQuests() {
    let e = new Map,
      t = Chunk199902.Z.getCurrentUserActiveStream();
    if (null == exports || Chunk938475.ZP.countVoiceStatesForChannel(exports.channelId) < C) return module;
    let n = Chunk199902.Z.getStreamerActiveStreamMetadata();
    if (null == require) return module;
    P.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", require);
    let r = require.id;
    if (null == Chunk754700) return module;
    for (let t of Chunk616022.Z.quests.values()) {
      let n = (0, Chunk254579.DR)(exports);
      R(exports) && null != require && require === Chunk754700 && module.set(exports.id, {
        applicationId: Chunk754700
      })
    }
    return P.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(module.keys())), module
  }
  getActivelyProgressingActivityQuests() {
    let e = new Map,
      t = Chunk317381.ZP.getSelfEmbeddedActivities(),
      n = exports.size > 0;
    if (P.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", exports), !require) return module;
    let r = Chunk616022.Z.quests;
    for (let n of exports.keys())
      for (let t of Chunk754700.values()) {
        let r = (0, Chunk254579.Mo)(exports);
        R(exports) && null != Chunk754700 && Chunk754700 === require && module.set(exports.id, {
          applicationId: require
        })
      }
    for (let t of Chunk754700.values()) R(exports) && (0, Chunk283689.KM)(exports) && require && module.set(exports.id, {
      applicationId: Chunk324805.Ts
    });
    return P.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(module.keys())), module
  }
  constructor(...e) {
    super(...e), T(this, "heartbeats", {
      [r.X.PLAY_ON_DESKTOP]: new Map,
      [r.X.STREAM_ON_DESKTOP]: new Map,
      [r.X.PLAY_ACTIVITY]: new Map
    }), T(this, "calculateHeartbeatDurationMs", e => {
      let t = E.Z.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return A;
      let {
        progressSeconds: n,
        targetSeconds: i
      } = (0, v.il)(t, r.T.DESKTOP), a = Math.max(0, (i - n) * _.Z.Millis.SECOND);
      return a <= A ? a + N : A
    }), T(this, "initiateHeartbeat", (e, t, n) => {
      let i = this.heartbeats[t];
      if (i.has(e)) return void P.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
      let a = () => {
        let o = this.getActivelyProgressingQuests(t);
        if (o.has(e)) {
          var s;
          let c = o.get(e),
            u = null != (s = null == c ? true : c.applicationId) ? s : n;
          if (t === r.X.STREAM_ON_DESKTOP) {
            let n = d.Z.getCurrentUserActiveStream();
            if (null == n) {
              P.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(e)), this.terminateHeartbeat(e, t);
              return
            }
            let r = (0, l.V9)(n);
            P.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, h.m0)({
              questId: e,
              streamKey: r,
              applicationId: u
            })
          } else P.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, h.m0)({
            questId: e,
            applicationId: u
          });
          let f = this.calculateHeartbeatDurationMs(e),
            p = window.setTimeout(a, f);
          i.set(e, p)
        } else P.log("~ initiateHeartbeat -> Quest ".concat(e, " is no longer actively progressing, terminating heartbeat")), this.terminateHeartbeat(e, t)
      };
      P.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), a()
    }), T(this, "terminateHeartbeat", (e, t) => {
      let n = this.heartbeats[t],
        r = E.Z.quests,
        i = n.get(e);
      if (null != i) {
        P.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)), window.clearTimeout(i), n.delete(e);
        let t = r.get(e);
        null != t && R(t) && (P.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)), (0, h.m0)({
          questId: e,
          terminal: true
        }))
      }
    }), T(this, "handleSendHeartbeatSuccess", e => {
      let {
        questId: t,
        userStatus: n
      } = e;
      if (P.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")), null != n.completedAt)
        for (let e of (P.log("~ handleSendHeartbeatSuccess -> Quest ".concat(t, " completed, terminating any heartbeats for it")), Object.keys(this.heartbeats))) this.terminateHeartbeat(t, e)
    }), T(this, "handleSendHeartbeatFailure", e => {
      let {
        questId: t
      } = e;
      P.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t))
    }), T(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP], "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS"),
      QUESTS_ENROLL_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], "QUESTS_ENROLL_SUCCESS", e => !x(e)),
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
      EMBEDDED_ACTIVITY_UPDATE_V2: () => this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", e => !x(e)),
      QUEST_APPLICATION_START_TIMER: e => {
        let {
          questId: t
        } = e;
        this.syncHeartbeats([r.X.PLAY_ACTIVITY], "QUEST_APPLICATION_START_TIMER", e => null != e && e.id === t && x(e))
      }
    })
  }
}
let j = new L