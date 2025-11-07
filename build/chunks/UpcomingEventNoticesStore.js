/** Chunk was on 79521 **/
/** chunk id: 835184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk765305 = require("./765305.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let E = {},
  f = {};

function N(e) {
  let t = c({}, E);
  delete t[e], E = t;
  let n = c({}, f);
  delete n[e], f = n
}
class g extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(u.default, a.ZP), null != e) {
      var t, n;
      E = null != (t = e.upcomingEventDismissals) ? t : {}, f = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return E[e]
  }
  getAllEventDismissals() {
    return E
  }
  getUpcomingNoticeSeenTime(e) {
    return f[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return f
  }
  getState() {
    return {
      upcomingEventDismissals: E,
      upcomingEventSeenTimestamps: f
    }
  }
}
d(g, "displayName", "UpcomingEventNoticesStore"), d(g, "persistKey", "UpcomingEventNotices");
let _ = new g(Chunk570140.Z, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = c({}, E);
    n[t] = Date.now(), E = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === s.p1.CANCELED || t.status === s.p1.COMPLETED) && N(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    N(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e;
    if (t !== u.default.getId()) return;
    let l = a.ZP.getGuildScheduledEvent(n);
    if (null == l || l.status !== s.p1.SCHEDULED || null != E[n]) return;
    let i = f[n];
    if ((0, o.M)(l, true, i, false) === s.X_.NEW_EVENT) {
      let e = c({}, E);
      e[n] = Date.now(), E = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = c({}, f);
    n[t] = Date.now(), f = n
  }
})