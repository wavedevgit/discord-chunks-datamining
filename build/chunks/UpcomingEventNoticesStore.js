/** Chunk was on 97755 **/
/** chunk id: 835184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk765305 = require("./765305.js");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}
let f = {},
  E = {};

function Z(e) {
  let t = d({}, f);
  delete t[e], f = t;
  let n = d({}, E);
  delete n[e], E = n
}
class g extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      f = null != (t = e.upcomingEventDismissals) ? t : {}, E = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return f[e]
  }
  getAllEventDismissals() {
    return f
  }
  getUpcomingNoticeSeenTime(e) {
    return E[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return E
  }
  getState() {
    return {
      upcomingEventDismissals: f,
      upcomingEventSeenTimestamps: E
    }
  }
}
s(g, "displayName", "UpcomingEventNoticesStore"), s(g, "persistKey", "UpcomingEventNotices");
let N = new g(Chunk570140.Z, {
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
    (t.status === a.p1.CANCELED || t.status === a.p1.COMPLETED) && Z(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    Z(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e;
    if (t !== u.default.getId()) return;
    let r = c.ZP.getGuildScheduledEvent(n);
    if (null == r || r.status !== a.p1.SCHEDULED || null != f[n]) return;
    let l = E[n];
    if ((0, o.M)(r, true, l, false) === a.X_.NEW_EVENT) {
      let e = d({}, f);
      e[n] = Date.now(), f = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = d({}, E);
    n[t] = Date.now(), E = n
  }
})