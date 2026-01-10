/** Chunk was on 81985 **/
/** chunk id: 835184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  f = {};

function h(e) {
  let t = d({}, p);
  delete t[e], p = t;
  let n = d({}, f);
  delete n[e], f = n
}
class g extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(a.default, o.ZP), null != e) {
      var t, n;
      p = null != (t = e.upcomingEventDismissals) ? t : {}, f = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return p[e]
  }
  getAllEventDismissals() {
    return p
  }
  getUpcomingNoticeSeenTime(e) {
    return f[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return f
  }
  getState() {
    return {
      upcomingEventDismissals: p,
      upcomingEventSeenTimestamps: f
    }
  }
}
u(g, "displayName", "UpcomingEventNoticesStore"), u(g, "persistKey", "UpcomingEventNotices");
let m = new g(Chunk570140.Z, {
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
    (t.status === c.p1.CANCELED || t.status === c.p1.COMPLETED) && h(t.id)
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
    let r = o.ZP.getGuildScheduledEvent(n);
    if (null == r || r.status !== c.p1.SCHEDULED || null != p[n]) return;
    let i = f[n];
    if ((0, s.M)(r, true, i, false) === c.X_.NEW_EVENT) {
      let e = d({}, p);
      e[n] = Date.now(), p = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = d({}, f);
    n[t] = Date.now(), f = n
  }
})