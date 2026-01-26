/** Chunk was on 89209 **/
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

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let f = {},
  A = {};

function E(e) {
  let t = s({}, f);
  delete t[e], f = t;
  let n = s({}, A);
  delete n[e], A = n
}
class y extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(u.default, a.Ay), null != e) {
      var t, n;
      f = null != (t = e.upcomingEventDismissals) ? t : {}, A = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return f[e]
  }
  getAllEventDismissals() {
    return f
  }
  getUpcomingNoticeSeenTime(e) {
    return A[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return A
  }
  getState() {
    return {
      upcomingEventDismissals: f,
      upcomingEventSeenTimestamps: A
    }
  }
}
d(y, "displayName", "UpcomingEventNoticesStore"), d(y, "persistKey", "UpcomingEventNotices");
let g = new y(Chunk73153.h, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = s({}, f);
    n[t] = Date.now(), f = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === c.XG.CANCELED || t.status === c.XG.COMPLETED) && E(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    E(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e;
    if (t !== u.default.getId()) return;
    let r = a.Ay.getGuildScheduledEvent(n);
    if (null == r || r.status !== c.XG.SCHEDULED || null != f[n]) return;
    let l = A[n];
    if ((0, o.F)(r, true, l, false) === c.w0.NEW_EVENT) {
      let e = s({}, f);
      e[n] = Date.now(), f = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = s({}, A);
    n[t] = Date.now(), A = n
  }
})