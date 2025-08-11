/** Chunk was on web.js **/
/** chunk id: 427081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk754700 = require("./754700.js"),
  Chunk147913 = require("./147913.js"),
  Chunk317381 = require("./317381.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
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

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = +Chunk70956.Z.Millis.MINUTE,
  y = 2,
  O = +Chunk70956.Z.Millis.SECOND,
  v = (0, Chunk5881.T)({
    location: Chunk46140.dr.QUESTS_MANAGER
  });

function I(e) {
  return !(0, _.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}
class T extends Chunk147913.Z {
  syncHeartbeats(e, t) {
    for (let n of ("VOICE_STATE_UPDATES" !== t && "PASSIVE_UPDATE_V2" !== t && v.log("~ syncHeartbeats -> syncing heartbeats for taskTypes: ".concat(e.join(", "), " (triggered by: ").concat(t, ")")), e)) {
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
        (0, f.vE)(e)
    }
  }
  getActivelyProgressingPlayOnDesktopQuestIds() {
    let e = new Set,
      t = Chunk594190.ZP.getRunningGames(),
      n = Chunk569984.Z.quests;
    v.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", exports);
    let r = new Set;
    for (let e of exports) {
      if (module.isLauncher) continue;
      if (null != module.id) {
        Chunk754700.add(module.id);
        continue
      }
      let t = Chunk594190.ZP.getOverrideForGame(module);
      if (null == module.distributor && null != exports) continue;
      let n = Chunk77498.Z.getGameByName(module.name);
      if ((null == require ? true : require.id) != null) {
        Chunk754700.add(require.id);
        continue
      }
    }
    for (let t of Chunk754700)
      for (let r of require.values()) I(Chunk754700) && (0, Chunk509212.Nj)({
        quest: Chunk754700
      }) && Chunk754700.config.application.id === exports && module.add(Chunk754700.id);
    return v.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", module), module
  }
  getActivelyProgressingStreamOnDesktopQuestIds() {
    let e = new Set,
      t = Chunk199902.Z.getCurrentUserActiveStream();
    if (null == exports || Chunk938475.ZP.countVoiceStatesForChannel(exports.channelId) < y) return module;
    let n = Chunk199902.Z.getStreamerActiveStreamMetadata();
    if (null == require) return module;
    v.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", require);
    let r = require.id;
    if (null == Chunk754700) return module;
    for (let t of Chunk569984.Z.quests.values()) I(exports) && (0, Chunk509212.Dr)({
      quest: exports
    }) && exports.config.application.id === Chunk754700 && module.add(exports.id);
    return v.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", module), module
  }
  getActivelyProgressingActivityQuestIds() {
    let e = new Set,
      t = Chunk317381.ZP.getSelfEmbeddedActivities(),
      n = exports.size > 0;
    if (v.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", exports), !require) return module;
    let r = Chunk569984.Z.quests;
    for (let n of exports.keys())
      for (let t of Chunk754700.values()) I(exports) && (0, Chunk509212.pO)(exports) && exports.config.application.id === require && module.add(exports.id);
    for (let t of Chunk754700.values()) I(exports) && (0, Chunk509212.KM)(exports) && require && module.add(exports.id);
    return v.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", module), module
  }
  constructor(...e) {
    super(...e), E(this, "heartbeats", {
      [r.X.PLAY_ON_DESKTOP]: new Map,
      [r.X.STREAM_ON_DESKTOP]: new Map,
      [r.X.PLAY_ACTIVITY]: new Map
    }), E(this, "calculateHeartbeatDurationMs", e => {
      let t = h.Z.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return b;
      let {
        progressSeconds: n,
        targetSeconds: i
      } = (0, _.il)(t, r.T.DESKTOP), o = Math.max(0, (i - n) * d.Z.Millis.SECOND);
      return o <= b ? o + O : b
    }), E(this, "initiateHeartbeat", (e, t) => {
      let n = this.heartbeats[t];
      if (n.has(e)) return void v.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
      let i = () => {
        if (this.getActivelyProgressingQuestIds(t).has(e)) {
          if (t === r.X.STREAM_ON_DESKTOP) {
            let n = l.Z.getCurrentUserActiveStream();
            if (null == n) {
              v.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(e)), this.terminateHeartbeat(e, t);
              return
            }
            let r = (0, s.V9)(n);
            v.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, p.m0)({
              questId: e,
              streamKey: r
            })
          } else v.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)), (0, p.m0)({
            questId: e
          });
          let o = this.calculateHeartbeatDurationMs(e),
            a = window.setTimeout(i, o);
          n.set(e, a)
        } else v.log("~ initiateHeartbeat -> Quest ".concat(e, " is no longer actively progressing, terminating heartbeat")), this.terminateHeartbeat(e, t)
      };
      v.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), i()
    }), E(this, "terminateHeartbeat", (e, t) => {
      let n = this.heartbeats[t],
        r = h.Z.quests,
        i = n.get(e);
      if (null != i) {
        v.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)), window.clearTimeout(i), n.delete(e);
        let t = r.get(e);
        null != t && I(t) && (v.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)), (0, p.m0)({
          questId: e,
          terminal: true
        }))
      }
    }), E(this, "handleSendHeartbeatSuccess", e => {
      let {
        questId: t,
        userStatus: n
      } = e;
      if (v.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")), null != n.completedAt)
        for (let e of (v.log("~ handleSendHeartbeatSuccess -> Quest ".concat(t, " completed, terminating any heartbeats for it")), Object.keys(this.heartbeats))) this.terminateHeartbeat(t, e)
    }), E(this, "handleSendHeartbeatFailure", e => {
      let {
        questId: t
      } = e;
      v.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t))
    }), E(this, "actions", {
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
let S = new T