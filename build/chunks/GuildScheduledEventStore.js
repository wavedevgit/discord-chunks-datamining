/** Chunk was on web.js **/
/** chunk id: 698441, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AZ: () => et,
  Ay: () => er,
  Fd: () => J,
  W$: () => ee,
  d6: () => $,
  ej: () => g
}), require("./321073.js"), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk661191 = require("./661191.js"),
  Chunk988794 = require("./988794.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = {
  EVENT: "event",
  EVENT_ACTIVE: "active",
  EVENT_UPCOMING: "event-upcoming",
  GUILD_EVENT: e => "".concat(e, "-").concat(g.EVENT),
  GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(g.EVENT_ACTIVE),
  GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(g.EVENT_UPCOMING),
  CHANNEL_EVENT: e => "".concat(e, "-").concat(g.EVENT),
  CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(g.EVENT_ACTIVE),
  CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(g.EVENT_UPCOMING)
};

function E(e) {
  let {
    id: t,
    scheduled_start_time: n
  } = e, r = J(e) ? "\0" : "\x01";
  return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
}
let y = e => {
    let {
      guild_id: t,
      entity_id: n,
      channel_id: r
    } = e, i = [t];
    return null != n && i.push(n), i.push(g.GUILD_EVENT(t)), null != r && i.push(g.CHANNEL_EVENT(r)), J(e) && (i.push(g.EVENT_ACTIVE), i.push(g.GUILD_EVENT_ACTIVE(t)), null != r && i.push(g.CHANNEL_EVENT_ACTIVE(r))), $(e) && (i.push(g.EVENT_UPCOMING), i.push(g.GUILD_EVENT_UPCOMING(t)), null != r && i.push(g.CHANNEL_EVENT_UPCOMING(r))), i
  },
  b = new Chunk713402.J(y, E),
  O = 0,
  v = [],
  A = "SERIES",
  I = {},
  S = {};

function T(e) {
  b.set(e.id, e), O += 1
}

function C(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  b.delete(e), delete I[e], t && delete S[e], O += 1
}

function N(e) {
  return null != e ? e : A
}

function w(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = e.guild_scheduled_event_id;
  null == I[r] && (I[r] = {});
  let i = N(e.guild_scheduled_event_exception_id);
  null == I[r][i] && (I[r][i] = {}), I[r][i][e.user_id] = e, t && D(e), n && (O += 1)
}

function R(e) {
  var t, n, r, i;
  let a = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    s = N(e.guild_scheduled_event_exception_id),
    o = (null == (n = I[e.guild_scheduled_event_id]) || null == (t = n[s]) ? true : t[e.user_id]) != null,
    l = e.user_id === c.default.getId();
  (o || !l) && (null == (i = I[e.guild_scheduled_event_id]) || null == (r = i[s]) || delete r[e.user_id], x(e), a && (O += 1))
}

function P(e, t, n) {
  let r = N(t);
  null == S[e] && (S[e] = {}), S[e][r] = n
}

function D(e) {
  var t, n;
  let r = N(e.guild_scheduled_event_exception_id),
    i = (null != (t = null == (n = S[e.guild_scheduled_event_id]) ? true : n[r]) ? t : 0) + (null != e.guild_scheduled_event_exception_id && e.response === f.Qi.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === f.Qi.INTERESTED ? 1 : false);
  P(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i)
}

function x(e) {
  var t, n;
  let r = N(e.guild_scheduled_event_exception_id),
    i = (null != (t = null == (n = S[e.guild_scheduled_event_id]) ? true : n[r]) ? t : 0) + (null != e.guild_scheduled_event_exception_id && e.response === f.Qi.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === f.Qi.INTERESTED ? false : 1);
  P(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i)
}

function L(e) {
  let {
    guilds: t
  } = e;
  return b.clear(), O = 0, I = {}, S = {}, v.forEach(T), t.forEach(e => e.guild_scheduled_events.forEach(e => T(e))), true
}

function j(e) {
  let {
    guildScheduledEvent: t
  } = e;
  T(t)
}

function M(e) {
  let {
    guildId: t,
    guildScheduledEvents: n
  } = e, r = b.values(g.GUILD_EVENT(t), true).map(e => e.id), i = n.map(e => e.id);
  for (let e of (a().difference(r, i).forEach(e => {
      C(e)
    }), n)) T(e);
  returntrue
}

function k(e) {
  let {
    guild: t
  } = e;
  return G(t.id, false), t.guild_scheduled_events.forEach(e => T(e)), true
}

function U(e) {
  let {
    guild: t
  } = e;
  return G(t.id, true), true
}

function G(e, t) {
  b.values(g.GUILD_EVENT(e)).forEach(e => C(e.id, t))
}

function V(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return T(t), true
}

function F(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return C(t.id), true
}

function B(e) {
  let {
    eventException: t
  } = e, n = b.get(t.event_id);
  if (null == n) returnfalse;
  let r = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
    i = [...n.guild_scheduled_event_exceptions];
  return r < 0 ? i.push(t) : i[r] = t, T(m(_({}, n), {
    guild_scheduled_event_exceptions: i
  })), true
}

function H(e) {
  let {
    eventException: t
  } = e, n = b.get(t.event_id);
  if (null == n) returnfalse;
  let r = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
  return T(m(_({}, n), {
    guild_scheduled_event_exceptions: r
  })), true
}

function Y(e) {
  let {
    eventId: t
  } = e, n = b.get(t);
  return null != n && (T(m(_({}, n), {
    guild_scheduled_event_exceptions: []
  })), true)
}

function W(e) {
  let {
    guildScheduledEventUsers: t
  } = e;
  return t.forEach(e => w(e, false, false)), O += 1, true
}

function K(e) {
  let {
    guildScheduledEventUsers: t
  } = e;
  return t.forEach(e => w(e, false, false)), O += 1, true
}

function z(e) {
  var t, n;
  let {
    userId: r,
    guildEventId: i,
    guildId: a,
    guildEventExceptionId: s,
    response: o
  } = e, l = N(s), c = null == (n = I[i]) || null == (t = n[l]) ? true : t[r];
  null != c && R(c, false);
  let d = u.Ay.getMember(a, r);
  return w({
    user_id: r,
    guild_scheduled_event_id: i,
    member: null != d ? d : true,
    guild_scheduled_event_exception_id: s,
    response: o
  }), true
}

function q(e) {
  let {
    userId: t,
    guildEventId: n,
    guildEventExceptionId: r,
    response: i
  } = e;
  R({
    user_id: t,
    guild_scheduled_event_id: n,
    guild_scheduled_event_exception_id: r,
    response: i
  })
}

function Z(e) {
  let {
    eventId: t,
    counts: n
  } = e;
  P(t, null, n.eventCount), d.default.forEachKey(n.recurrenceCounts, e => {
    P(t, e, n.eventCount - n.recurrenceCounts[e])
  })
}

function X() {
  return b.clear(), true
}

function Q(e) {
  let {
    invite: t
  } = e, n = t.guild_scheduled_event;
  return null != n && (T(n), true)
}

function J(e) {
  return null != e && (null == e ? true : e.status) === f.XG.ACTIVE
}

function $(e) {
  return !f.lV.has(e.status)
}

function ee(e, t) {
  return new Date(e.scheduled_start_time).getTime() < Date.now() + 1e3 * t
}

function et(e) {
  return null != e && f.lV.has(e.status)
}
class en extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default, u.Ay)
  }
  getGuildScheduledEvent(e) {
    var t;
    return null == e ? null : null != (t = b.get(e)) ? t : null
  }
  getGuildEventCountByIndex(e) {
    return b.size(e)
  }
  getGuildScheduledEventsForGuild(e) {
    return null == e ? [] : b.values(e)
  }
  getGuildScheduledEventsByIndex(e) {
    return b.values(e)
  }
  getRsvpVersion() {
    return O
  }
  getRsvp(e, t, n) {
    var r, i;
    if (null == e) return null;
    let a = N(t);
    return null == (i = I[e]) || null == (r = i[a]) ? true : r[n]
  }
  isInterestedInEventRecurrence(e, t) {
    let n = c.default.getId(),
      r = this.getRsvp(e, null, n),
      i = this.getRsvp(e, t, n),
      a = (null == r ? true : r.response) === f.Qi.INTERESTED,
      s = (null == i ? true : i.response) === f.Qi.INTERESTED,
      o = (null == i ? true : i.response) === f.Qi.UNINTERESTED;
    return a && !o || s
  }
  getUserCount(e, t) {
    var n, r, i, a;
    if (null == e) return 0;
    let s = null != (n = null == (i = S[e]) ? true : i[A]) ? n : 0;
    return null == t ? s : s - (null != (r = null == (a = S[e]) ? true : a[t]) ? r : 0)
  }
  hasUserCount(e, t) {
    var n;
    let r = N(t);
    return (null == (n = S[e]) ? true : n[r]) != null
  }
  isActive(e) {
    return null != e && J(b.get(e))
  }
  getActiveEventByChannel(e) {
    if (null != e) return this.getGuildScheduledEventsByIndex(g.CHANNEL_EVENT_ACTIVE(e))[0]
  }
  getUsersForGuildEvent(e, t) {
    var n, r;
    if (null == e) return {};
    let i = N(t);
    return null != (n = null == (r = I[e]) ? true : r[i]) ? n : {}
  }
}
p(en, "displayName", "GuildScheduledEventStore");
let er = new en(Chunk73153.h, {
  CONNECTION_OPEN: L,
  GUILD_CREATE: k,
  GUILD_DELETE: U,
  FETCH_GUILD_EVENT: j,
  FETCH_GUILD_EVENTS_FOR_GUILD: M,
  GUILD_SCHEDULED_EVENT_CREATE: V,
  GUILD_SCHEDULED_EVENT_UPDATE: V,
  GUILD_SCHEDULED_EVENT_DELETE: F,
  GUILD_SCHEDULED_EVENT_USER_ADD: z,
  GUILD_SCHEDULED_EVENT_USER_REMOVE: q,
  GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: W,
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: K,
  GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: Z,
  INVITE_RESOLVE_SUCCESS: Q,
  GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: B,
  GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: B,
  GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: H,
  GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: Y,
  LOGOUT: X
})