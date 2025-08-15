/** Chunk was on 42743 **/
/** chunk id: 835184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk765305 = require("./765305.js");

function o(e, t, n) {
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let a = {},
  f = {};

function N(e) {
  let t = s({}, a);
  delete t[e], a = t;
  let n = s({}, f);
  delete n[e], f = n
}
class _ extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      a = null != (t = e.upcomingEventDismissals) ? t : {}, f = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return a[e]
  }
  getAllEventDismissals() {
    return a
  }
  getUpcomingNoticeSeenTime(e) {
    return f[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return f
  }
  getState() {
    return {
      upcomingEventDismissals: a,
      upcomingEventSeenTimestamps: f
    }
  }
}
o(_, "displayName", "UpcomingEventNoticesStore"), o(_, "persistKey", "UpcomingEventNotices");
let g = new _(Chunk570140.Z, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = s({}, a);
    n[t] = Date.now(), a = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === d.p1.CANCELED || t.status === d.p1.COMPLETED) && N(t.id)
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
    if (t !== i.default.getId()) return;
    let l = c.ZP.getGuildScheduledEvent(n);
    if (null == l || l.status !== d.p1.SCHEDULED || null != a[n]) return;
    let r = f[n];
    if ((0, E.M)(l, true, r, false) === d.X_.NEW_EVENT) {
      let e = s({}, a);
      e[n] = Date.now(), a = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = s({}, f);
    n[t] = Date.now(), f = n
  }
})