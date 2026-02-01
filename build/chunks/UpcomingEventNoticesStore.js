/** Chunk was on 42402 **/
/** chunk id: 11550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk698441 = require("./698441.js"),
  Chunk357801 = require("./357801.js"),
  Chunk988794 = require("./988794.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let p = {},
  h = {};

function g(e) {
  let t = d({}, p);
  delete t[e], p = t;
  let n = d({}, h);
  delete n[e], h = n
}
class f extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(s.default, a.Ay), null != e) {
      var t, n;
      p = null != (t = e.upcomingEventDismissals) ? t : {}, h = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return p[e]
  }
  getAllEventDismissals() {
    return p
  }
  getUpcomingNoticeSeenTime(e) {
    return h[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return h
  }
  getState() {
    return {
      upcomingEventDismissals: p,
      upcomingEventSeenTimestamps: h
    }
  }
}
u(f, "displayName", "UpcomingEventNoticesStore"), u(f, "persistKey", "UpcomingEventNotices");
let m = new f(Chunk73153.h, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = d({}, p);
    n[t] = Date.now(), p = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === c.XG.CANCELED || t.status === c.XG.COMPLETED) && g(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    g(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e;
    if (t !== s.default.getId()) return;
    let r = a.Ay.getGuildScheduledEvent(n);
    if (null == r || r.status !== c.XG.SCHEDULED || null != p[n]) return;
    let l = h[n];
    if ((0, o.F)(r, true, l, false) === c.w0.NEW_EVENT) {
      let e = d({}, p);
      e[n] = Date.now(), p = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = d({}, h);
    n[t] = Date.now(), h = n
  }
})