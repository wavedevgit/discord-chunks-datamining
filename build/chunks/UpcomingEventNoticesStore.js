/** Chunk was on web.js **/
/** chunk id: 835184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
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
let f = {},
  _ = {};

function p(e) {
  let t = d({}, f);
  delete t[e], f = t;
  let n = d({}, _);
  delete n[e], _ = n
}

function h(e) {
  let {
    eventId: t
  } = e, n = d({}, f);
  n[t] = Date.now(), f = n
}

function m(e) {
  let {
    guildScheduledEvent: t
  } = e;
  (t.status === c.p1.CANCELED || t.status === c.p1.COMPLETED) && p(t.id)
}

function g(e) {
  let {
    guildScheduledEvent: t
  } = e;
  p(t.id)
}

function E(e) {
  let {
    userId: t,
    guildEventId: n
  } = e;
  if (t !== a.default.getId()) return;
  let r = s.ZP.getGuildScheduledEvent(n);
  if (null == r || r.status !== c.p1.SCHEDULED || null != f[n]) return;
  let i = _[n];
  if ((0, l.M)(r, true, i, false) === c.X_.NEW_EVENT) {
    let e = d({}, f);
    e[n] = Date.now(), f = e
  }
}

function b(e) {
  let {
    guildEventId: t
  } = e, n = d({}, _);
  n[t] = Date.now(), _ = n
}
class y extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      f = null != (t = e.upcomingEventDismissals) ? t : {}, _ = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return f[e]
  }
  getAllEventDismissals() {
    return f
  }
  getUpcomingNoticeSeenTime(e) {
    return _[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return _
  }
  getState() {
    return {
      upcomingEventDismissals: f,
      upcomingEventSeenTimestamps: _
    }
  }
}
u(y, "displayName", "UpcomingEventNoticesStore"), u(y, "persistKey", "UpcomingEventNotices");
let O = new y(Chunk570140.Z, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: h,
  GUILD_SCHEDULED_EVENT_UPDATE: m,
  GUILD_SCHEDULED_EVENT_DELETE: g,
  GUILD_SCHEDULED_EVENT_USER_ADD: E,
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: b
})