/** Chunk was on 88806 **/
/** chunk id: 835184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk765305 = require("./765305.js");

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

function f(e) {
  let t = d({}, p);
  delete t[e], p = t;
  let n = d({}, h);
  delete n[e], h = n
}
class m extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
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
u(m, "displayName", "UpcomingEventNoticesStore"), u(m, "persistKey", "UpcomingEventNotices");
let g = new m(Chunk570140.Z, {
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
    (t.status === c.p1.CANCELED || t.status === c.p1.COMPLETED) && f(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    f(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e;
    if (t !== a.default.getId()) return;
    let r = o.ZP.getGuildScheduledEvent(n);
    if (null == r || r.status !== c.p1.SCHEDULED || null != p[n]) return;
    let i = h[n];
    if ((0, s.M)(r, true, i, false) === c.X_.NEW_EVENT) {
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