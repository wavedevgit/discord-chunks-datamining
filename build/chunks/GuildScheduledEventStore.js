/** Chunk was on web.js **/
/** chunk id: 924301, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BQ: () => ee,
  Ld: () => $,
  Z2: () => et,
  ZP: () => er,
  bN: () => g,
  xt: () => J
}), require("./539854.js"), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk709054 = require("./709054.js"),
  Chunk765305 = require("./765305.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
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
let b = e => {
    let {
      guild_id: t,
      entity_id: n,
      channel_id: r
    } = e, i = [t];
    return null != n && i.push(n), i.push(g.GUILD_EVENT(t)), null != r && i.push(g.CHANNEL_EVENT(r)), J(e) && (i.push(g.EVENT_ACTIVE), i.push(g.GUILD_EVENT_ACTIVE(t)), null != r && i.push(g.CHANNEL_EVENT_ACTIVE(r))), $(e) && (i.push(g.EVENT_UPCOMING), i.push(g.GUILD_EVENT_UPCOMING(t)), null != r && i.push(g.CHANNEL_EVENT_UPCOMING(r))), i
  },
  y = new Chunk759174.h(b, E),
  O = 0,
  v = [],
  I = "SERIES",
  S = {},
  T = {};

function A(e) {
  y.set(e.id, e), O += 1
}

function C(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  y.delete(e), delete S[e], t && delete T[e], O += 1
}

function N(e) {
  return null != e ? e : I
}

function R(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = e.guild_scheduled_event_id;
  null == S[r] && (S[r] = {});
  let i = N(e.guild_scheduled_event_exception_id);
  null == S[r][i] && (S[r][i] = {}), S[r][i][e.user_id] = e, t && D(e), n && (O += 1)
}

function P(e) {
  var t, n, r, i;
  let a = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    o = N(e.guild_scheduled_event_exception_id),
    s = (null == (n = S[e.guild_scheduled_event_id]) || null == (t = n[o]) ? true : t[e.user_id]) != null,
    l = e.user_id === c.default.getId();
  (s || !l) && (null == (i = S[e.guild_scheduled_event_id]) || null == (r = i[o]) || delete r[e.user_id], L(e), a && (O += 1))
}

function w(e, t, n) {
  let r = N(t);
  null == T[e] && (T[e] = {}), T[e][r] = n
}

function D(e) {
  var t, n;
  let r = N(e.guild_scheduled_event_exception_id),
    i = (null != (n = null == (t = T[e.guild_scheduled_event_id]) ? true : t[r]) ? n : 0) + (null != e.guild_scheduled_event_exception_id && e.response === f.gv.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === f.gv.INTERESTED ? 1 : false);
  w(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i)
}

function L(e) {
  var t, n;
  let r = N(e.guild_scheduled_event_exception_id),
    i = (null != (n = null == (t = T[e.guild_scheduled_event_id]) ? true : t[r]) ? n : 0) + (null != e.guild_scheduled_event_exception_id && e.response === f.gv.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === f.gv.INTERESTED ? false : 1);
  w(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i)
}

function x(e) {
  let {
    guilds: t
  } = e;
  return y.clear(), O = 0, S = {}, T = {}, v.forEach(A), t.forEach(e => e.guild_scheduled_events.forEach(e => A(e))), true
}

function M(e) {
  let {
    guildScheduledEvent: t
  } = e;
  A(t)
}

function k(e) {
  let {
    guildId: t,
    guildScheduledEvents: n
  } = e, r = y.values(g.GUILD_EVENT(t), true).map(e => e.id), i = n.map(e => e.id);
  for (let e of (a().difference(r, i).forEach(e => {
      C(e)
    }), n)) A(e);
  returntrue
}

function j(e) {
  let {
    guild: t
  } = e;
  return G(t.id, false), t.guild_scheduled_events.forEach(e => A(e)), true
}

function U(e) {
  let {
    guild: t
  } = e;
  return G(t.id, true), true
}

function G(e, t) {
  y.values(g.GUILD_EVENT(e)).forEach(e => C(e.id, t))
}

function B(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return A(t), true
}

function Z(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return C(t.id), true
}

function F(e) {
  let {
    eventException: t
  } = e, n = y.get(t.event_id);
  if (null == n) returnfalse;
  let r = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
    i = [...n.guild_scheduled_event_exceptions];
  return r < 0 ? i.push(t) : i[r] = t, A(m(p({}, n), {
    guild_scheduled_event_exceptions: i
  })), true
}

function V(e) {
  let {
    eventException: t
  } = e, n = y.get(t.event_id);
  if (null == n) returnfalse;
  let r = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
  return A(m(p({}, n), {
    guild_scheduled_event_exceptions: r
  })), true
}

function H(e) {
  let {
    eventId: t
  } = e, n = y.get(t);
  return null != n && (A(m(p({}, n), {
    guild_scheduled_event_exceptions: []
  })), true)
}

function Y(e) {
  let {
    guildScheduledEventUsers: t
  } = e;
  return t.forEach(e => R(e, false, false)), O += 1, true
}

function W(e) {
  let {
    guildScheduledEventUsers: t
  } = e;
  return t.forEach(e => R(e, false, false)), O += 1, true
}

function K(e) {
  var t, n;
  let {
    userId: r,
    guildEventId: i,
    guildId: a,
    guildEventExceptionId: o,
    response: s
  } = e, l = N(o), c = null == (n = S[i]) || null == (t = n[l]) ? true : t[r];
  null != c && P(c, false);
  let d = u.ZP.getMember(a, r);
  return R({
    user_id: r,
    guild_scheduled_event_id: i,
    member: null != d ? d : true,
    guild_scheduled_event_exception_id: o,
    response: s
  }), true
}

function z(e) {
  let {
    userId: t,
    guildEventId: n,
    guildEventExceptionId: r,
    response: i
  } = e;
  P({
    user_id: t,
    guild_scheduled_event_id: n,
    guild_scheduled_event_exception_id: r,
    response: i
  })
}

function q(e) {
  let {
    eventId: t,
    counts: n
  } = e;
  w(t, null, n.eventCount), d.default.forEachKey(n.recurrenceCounts, e => {
    w(t, e, n.eventCount - n.recurrenceCounts[e])
  })
}

function X() {
  return y.clear(), true
}

function Q(e) {
  let {
    invite: t
  } = e, n = t.guild_scheduled_event;
  return null != n && (A(n), true)
}

function J(e) {
  return null != e && (null == e ? true : e.status) === f.p1.ACTIVE
}

function $(e) {
  return !f.$I.has(e.status)
}

function ee(e, t) {
  return new Date(e.scheduled_start_time).getTime() < Date.now() + 1e3 * t
}

function et(e) {
  return null != e && f.$I.has(e.status)
}
class en extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk271383.ZP)
  }
  getGuildScheduledEvent(e) {
    var t;
    return null == e ? null : null != (t = y.get(e)) ? t : null
  }
  getGuildEventCountByIndex(e) {
    return y.size(e)
  }
  getGuildScheduledEventsForGuild(e) {
    return null == e ? [] : y.values(e)
  }
  getGuildScheduledEventsByIndex(e) {
    return y.values(e)
  }
  getRsvpVersion() {
    return O
  }
  getRsvp(e, t, n) {
    var r, i;
    if (null == e) return null;
    let a = N(t);
    return null == (i = S[e]) || null == (r = i[a]) ? true : r[n]
  }
  isInterestedInEventRecurrence(e, t) {
    let n = c.default.getId(),
      r = this.getRsvp(e, null, n),
      i = this.getRsvp(e, t, n),
      a = (null == r ? true : r.response) === f.gv.INTERESTED,
      o = (null == i ? true : i.response) === f.gv.INTERESTED,
      s = (null == i ? true : i.response) === f.gv.UNINTERESTED;
    return a && !s || o
  }
  getUserCount(e, t) {
    var n, r, i, a;
    if (null == e) return 0;
    let o = null != (i = null == (n = T[e]) ? true : n[I]) ? i : 0;
    return null == t ? o : o - (null != (a = null == (r = T[e]) ? true : r[t]) ? a : 0)
  }
  hasUserCount(e, t) {
    var n;
    let r = N(t);
    return (null == (n = T[e]) ? true : n[r]) != null
  }
  isActive(e) {
    return null != e && J(y.get(e))
  }
  getActiveEventByChannel(e) {
    if (null != e) return this.getGuildScheduledEventsByIndex(g.CHANNEL_EVENT_ACTIVE(e))[0]
  }
  getUsersForGuildEvent(e, t) {
    var n, r;
    if (null == e) return {};
    let i = N(t);
    return null != (r = null == (n = S[e]) ? true : n[i]) ? r : {}
  }
}
_(en, "displayName", "GuildScheduledEventStore");
let er = new en(Chunk570140.Z, {
  CONNECTION_OPEN: x,
  GUILD_CREATE: j,
  GUILD_DELETE: U,
  FETCH_GUILD_EVENT: M,
  FETCH_GUILD_EVENTS_FOR_GUILD: k,
  GUILD_SCHEDULED_EVENT_CREATE: B,
  GUILD_SCHEDULED_EVENT_UPDATE: B,
  GUILD_SCHEDULED_EVENT_DELETE: Z,
  GUILD_SCHEDULED_EVENT_USER_ADD: K,
  GUILD_SCHEDULED_EVENT_USER_REMOVE: z,
  GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: Y,
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: W,
  GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: q,
  INVITE_RESOLVE_SUCCESS: Q,
  GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: F,
  GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: F,
  GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: V,
  GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: H,
  LOGOUT: X
})