/** Chunk was on 97492 **/
/** chunk id: 11550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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
let f = {},
  p = {};

function h(e) {
  let t = d({}, f);
  delete t[e], f = t;
  let n = d({}, p);
  delete n[e], p = n
}
class b extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(a.default, s.Ay), null != e) {
      var t, n;
      f = null != (t = e.upcomingEventDismissals) ? t : {}, p = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return f[e]
  }
  getAllEventDismissals() {
    return f
  }
  getUpcomingNoticeSeenTime(e) {
    return p[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return p
  }
  getState() {
    return {
      upcomingEventDismissals: f,
      upcomingEventSeenTimestamps: p
    }
  }
}
u(b, "displayName", "UpcomingEventNoticesStore"), u(b, "persistKey", "UpcomingEventNotices");
let g = new b(Chunk73153.h, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = d({}, f);
    n[t] = Date.now(), f = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === c.XG.CANCELED || t.status === c.XG.COMPLETED) && h(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    h(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e;
    if (t !== a.default.getId()) return;
    let r = s.Ay.getGuildScheduledEvent(n);
    if (null == r || r.status !== c.XG.SCHEDULED || null != f[n]) return;
    let l = p[n];
    if ((0, o.F)(r, true, l, false) === c.w0.NEW_EVENT) {
      let e = d({}, f);
      e[n] = Date.now(), f = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = d({}, p);
    n[t] = Date.now(), p = n
  }
})