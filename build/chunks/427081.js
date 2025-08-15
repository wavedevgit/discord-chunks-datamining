/** Chunk was on web.js **/
/** chunk id: 427081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk754700 = require("./754700.js"),
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
  Chunk5881 = require("./5881.js"),
  Chunk46140 = require("./46140.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = +Chunk70956.Z.Millis.MINUTE,
  v = 2,
  I = +Chunk70956.Z.Millis.SECOND,
  T = (0, Chunk5881.T)({
    location: Chunk46140.dr.QUESTS_MANAGER
  });

function S(e) {
  return !(0, h.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}

function A(e, t) {
  return null != t && e.config.application.id === l.eB && (0, c.le)(t)
}
class N extends Chunk147913.Z {
  syncHeartbeats(e, t) {
    for (let n of ("VOICE_STATE_UPDATES" !== t && "PASSIVE_UPDATE_V2" !== t && T.log("~ syncHeartbeats -> syncing heartbeats for taskTypes: ".concat(e.join(", "), " (triggered by: ").concat(t, ")")), e)) {
      let e = this.heartbeats[n],
        t = this.getActivelyProgressingQuestIds(n);
      for (let r of new Set(Object.keys(e))) t.has(r) || this.terminateHeartbeat(r, n);
      for (let r of t) e.has(r) || this.initiateHeartbeat(r, n)
    }
  }
  getActivelyProgressingQuestIds(e) {
    switch (e) {
      case r.X.PLAY_ON_DESKTOP:
        return this.getActivelyProgressingPlayOnDesktopQuestIds();
      case r.X.STREAM_ON_DESKTOP:
        return this.getActivelyProgressingStreamOnDesktopQuestIds();
      case r.X.PLAY_ACTIVITY:
        return this.getActivelyProgressingActivityQuestIds();
      default:
        (0, p.vE)(e)
    }
  }
  getActivelyProgressingPlayOnDesktopQuestIds() {
    let e = new Set,
      t = Chunk594190.ZP.getRunningGames(),
      n = Chunk569984.Z.quests;
    T.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", exports);
    let r = {};
    for (let e of exports) {
      if (module.isLauncher) continue;
      if (null != module.id) {
        Chunk754700[module.id] = module;
        continue
      }
      let t = Chunk594190.ZP.getOverrideForGame(module);
      if (null == module.distributor && null != exports) continue;
      let n = Chunk77498.Z.getGameByName(module.name);
      if ((null == require ? true : require.id) != null) {
        Chunk754700[require.id] = module;
        continue
      }
    }
    for (let t of Object.keys(Chunk754700)) {
      let i = Chunk754700[exports];
      for (let r of require.values()) S(Chunk754700) && (0, Chunk509212.Nj)({
        quest: Chunk754700
      }) && (Chunk754700.config.application.id === exports || A(Chunk754700, Chunk147913)) && module.add(Chunk754700.id)
    }
    return T.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", module), module
  }
  getActivelyProgressingStreamOnDesktopQuestIds() {
    let e = new Set,
      t = Chunk199902.Z.getCurrentUserActiveStream();
    if (null == exports || Chunk938475.ZP.countVoiceStatesForChannel(exports.channelId) < v) return module;
    let n = Chunk199902.Z.getStreamerActiveStreamMetadata();
    if (null == require) return module;
    T.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", require);
    let r = require.id;
    if (null == Chunk754700) return module;
    for (let t of Chunk569984.Z.quests.values()) S(exports) && (0, Chunk509212.Dr)({
      quest: exports
    }) && exports.config.application.id === Chunk754700 && module.add(exports.id);
    return T.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", module), module
  }
  getActivelyProgressingActivityQuestIds() {
    let e = new Set,
      t = Chunk317381.ZP.getSelfEmbeddedActivities(),
      n = exports.size > 0;
    if (T.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", exports), !require) return module;
    let r = Chunk569984.Z.quests;
    for (let n of exports.keys())
      for (let t of Chunk754700.values()) S(exports) && (0, Chunk509212.pO)(exports) && exports.config.application.id === require && module.add(exports.id);
    for (let t of Chunk754700.values()) S(exports) && (0, Chunk509212.KM)(exports) && require && module.add(exports.id);
    return T.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", module), module
  }
  constructor(...e) {
    super(...e), y(this, "heartbeats", {
      [r.X.PLAY_ON_DESKTOP]: new Map,
      [r.X.STREAM_ON_DESKTOP]: new Map,
      [r.X.PLAY_ACTIVITY]: new Map
    }), y(this, "calculateHeartbeatDurationMs", e => {
      let t = g.Z.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return O;
      let {
        progressSeconds: n,
        targetSeconds: i
      } = (0, h.il)(t, r.T.DESKTOP), a = Math.max(0, (i - n) * _.Z.Millis.SECOND);
      return a <= O ? a + I : O
    }), y(this, "initiateHeartbeat", (e, t) => {
      let n = this.heartbeats[t];
      if (n.has(e)) return void T.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
      let i = () => {
        if (this.getActivelyProgressingQuestIds(t).has(e)) {
          if (t === r.X.STREAM_ON_DESKTOP) {
            let n = u.Z.getCurrentUserActiveStream();
            if (null == n) {
              T.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(e)), this.terminateHeartbeat(e, t);
              return
            }
            let r = (0, s.V9)(n);
            T.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, m.m0)({
              questId: e,
              streamKey: r
            })
          } else T.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, m.m0)({
            questId: e
          });
          let a = this.calculateHeartbeatDurationMs(e),
            o = window.setTimeout(i, a);
          n.set(e, o)
        } else T.log("~ initiateHeartbeat -> Quest ".concat(e, " is no longer actively progressing, terminating heartbeat")), this.terminateHeartbeat(e, t)
      };
      T.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), i()
    }), y(this, "terminateHeartbeat", (e, t) => {
      let n = this.heartbeats[t],
        r = g.Z.quests,
        i = n.get(e);
      if (null != i) {
        T.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)), window.clearTimeout(i), n.delete(e);
        let t = r.get(e);
        null != t && S(t) && (T.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)), (0, m.m0)({
          questId: e,
          terminal: true
        }))
      }
    }), y(this, "handleSendHeartbeatSuccess", e => {
      let {
        questId: t,
        userStatus: n
      } = e;
      if (T.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")), null != n.completedAt)
        for (let e of (T.log("~ handleSendHeartbeatSuccess -> Quest ".concat(t, " completed, terminating any heartbeats for it")), Object.keys(this.heartbeats))) this.terminateHeartbeat(t, e)
    }), y(this, "handleSendHeartbeatFailure", e => {
      let {
        questId: t
      } = e;
      T.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t))
    }), y(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP], "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS"),
      QUESTS_ENROLL_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], "QUESTS_ENROLL_SUCCESS"),
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
      QUESTS_PREVIEW_UPDATE_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], "QUESTS_PREVIEW_UPDATE_SUCCESS"),
      RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP], "RUNNING_GAMES_CHANGE"),
      STREAM_START: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_START"),
      STREAM_CREATE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_CREATE"),
      STREAM_CLOSE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_CLOSE"),
      PASSIVE_UPDATE_V2: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "PASSIVE_UPDATE_V2"),
      VOICE_STATE_UPDATES: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "VOICE_STATE_UPDATES"),
      EMBEDDED_ACTIVITY_UPDATE_V2: () => this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2")
    })
  }
}
let C = new N