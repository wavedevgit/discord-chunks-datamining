/** Chunk was on 21738 **/
/** chunk id: 473019, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk988794 = require("./988794.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {
  hiddenEventsAndStages: []
};
class c extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && null != e.hiddenEventsAndStages && (o = e)
  }
  isLiveChannelNoticeHidden(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    return !!(null != n && o.hiddenEventsAndStages.includes("stage-".concat(n))) || null != t && o.hiddenEventsAndStages.includes("event-".concat(t))
  }
  getState() {
    return o
  }
}
s(c, "displayName", "LiveChannelNoticesStore"), s(c, "persistKey", "liveChannelNotices_v2");
let u = new c(Chunk73153.h, {
  LIVE_CHANNEL_NOTICE_HIDE: function(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    null != t ? o.hiddenEventsAndStages.push("event-".concat(t)) : null != n && o.hiddenEventsAndStages.push("stage-".concat(n))
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    o.hiddenEventsAndStages.includes(n) && (t.status === a.XG.CANCELED || t.status === a.XG.COMPLETED) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== n))
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    o.hiddenEventsAndStages.includes(n) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== n))
  },
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e, n = "stage-".concat(t.id);
    o.hiddenEventsAndStages.includes(n) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== n))
  }
})