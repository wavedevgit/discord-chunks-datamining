/** Chunk was on 1272 **/
/** chunk id: 151864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk765305 = require("./765305.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
  hiddenEventsAndStages: []
};
class c extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && null != e.hiddenEventsAndStages && (s = e)
  }
  isLiveChannelNoticeHidden(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    return !!(null != n && s.hiddenEventsAndStages.includes("stage-".concat(n))) || null != t && s.hiddenEventsAndStages.includes("event-".concat(t))
  }
  getState() {
    return s
  }
}
o(c, "displayName", "LiveChannelNoticesStore"), o(c, "persistKey", "liveChannelNotices_v2");
let u = new c(Chunk570140.Z, {
  LIVE_CHANNEL_NOTICE_HIDE: function(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    null != t ? s.hiddenEventsAndStages.push("event-".concat(t)) : null != n && s.hiddenEventsAndStages.push("stage-".concat(n))
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    s.hiddenEventsAndStages.includes(n) && (t.status === a.p1.CANCELED || t.status === a.p1.COMPLETED) && (s.hiddenEventsAndStages = s.hiddenEventsAndStages.filter(e => e !== n))
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    s.hiddenEventsAndStages.includes(n) && (s.hiddenEventsAndStages = s.hiddenEventsAndStages.filter(e => e !== n))
  },
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e, n = "stage-".concat(t.id);
    s.hiddenEventsAndStages.includes(n) && (s.hiddenEventsAndStages = s.hiddenEventsAndStages.filter(e => e !== n))
  }
})