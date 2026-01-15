/** Chunk was on web.js **/
/** chunk id: 937111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w,
  j: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk881952 = require("./881952.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = null,
  d = {},
  f = false,
  p = {},
  _ = {};

function h(e) {
  return {
    joinRequestId: e.join_request_id,
    guildId: e.guild_id,
    userId: e.user_id,
    user: e.user,
    createdAt: e.created_at,
    formResponses: e.form_responses,
    rejectionReason: e.rejection_reason,
    applicationStatus: e.application_status,
    actionedAt: e.actioned_at,
    actionedByUser: e.actioned_by_user,
    lastSeen: e.last_seen,
    interviewChannelId: e.interview_channel_id
  }
}

function m(e) {
  delete d[e], u === e && (u = null)
}

function g(e) {
  let {
    guildJoinRequests: t
  } = e;
  f = false, p = {}, d = {}, t.forEach(e => {
    let {
      guild_id: t
    } = e;
    null != t && (d[t] = h(e))
  })
}

function E(e) {
  let {
    request: t,
    guildId: n
  } = e;
  if (null == t) return void m(n);
  let r = h(t);
  (0, l.d3)(r) ? m(n): d[n] = r
}

function b(e) {
  let {
    guildId: t,
    request: n
  } = e;
  if (null == n) return;
  let r = h(n),
    i = o.default.getCurrentUser();
  if (null != i && r.userId !== i.id) returnfalse;
  (0, l.d3)(r) ? m(t): d[t] = r
}

function y(e) {
  let {
    guildId: t
  } = e;
  m(t)
}

function O(e) {
  let {
    guild: t
  } = e;
  m(t.id)
}

function v(e) {
  let {
    invite: t
  } = e, {
    guild: n,
    join_request: r
  } = t;
  if (null != n && null != r) {
    let {
      guild_id: e
    } = r;
    d[e] = h(r);
    let {
      id: t,
      name: i,
      icon: a,
      features: o,
      splash: s
    } = n;
    p[t] = {
      id: t,
      name: i,
      icon: a,
      features: null != o ? o : [],
      splash: s
    }
  }
}

function S(e) {
  let {
    guilds: t
  } = e;
  f = true, t.forEach(e => {
    let {
      id: t,
      name: n,
      features: r,
      icon: i,
      splash: a
    } = e;
    p[t] = {
      id: t,
      name: n,
      features: r,
      icon: i,
      splash: a
    }
  })
}

function I(e) {
  let {
    guildId: t,
    cooldown: n
  } = e;
  _[t] = null != n ? n : 0
}

function T(e) {
  let {
    form: t,
    guildId: n
  } = e;
  if ((null == t ? true : t.guild) != null) {
    let {
      id: e,
      name: r,
      icon: i,
      features: a,
      splash: o
    } = t.guild;
    p[n] = {
      id: e,
      name: r,
      icon: i,
      features: null != a ? a : [],
      splash: o
    }
  }
}

function C(e) {
  let {
    guildId: t
  } = e;
  m(t)
}

function A(e) {
  let {
    guildId: t
  } = e;
  u = t
}

function N() {
  u = null
}
class P extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(o.default)
  }
  getRequest(e) {
    return d[e]
  }
  computeGuildIds() {
    return Object.values(d).map(e => null == e ? true : e.guildId).filter(e => null != e)
  }
  getJoinRequestGuild(e) {
    return null != p[e] ? (0, s.yS)(p[e]) : null
  }
  get hasFetchedRequestToJoinGuilds() {
    return f
  }
  hasJoinRequestCoackmark() {
    return null != u
  }
  getCooldown(e) {
    return _[e]
  }
}
c(P, "displayName", "UserGuildJoinRequestStore");
let w = new P(Chunk570140.Z, {
  CONNECTION_OPEN: g,
  GUILD_JOIN_REQUEST_UPDATE: b,
  GUILD_JOIN_REQUEST_CREATE: b,
  GUILD_JOIN_REQUEST_DELETE: y,
  USER_GUILD_JOIN_REQUEST_UPDATE: E,
  GUILD_DELETE: O,
  USER_JOIN_REQUEST_GUILDS_FETCH: S,
  MEMBER_VERIFICATION_FORM_UPDATE: T,
  INVITE_ACCEPT_SUCCESS: v,
  ACK_APPROVED_GUILD_JOIN_REQUEST: C,
  USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: A,
  USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: N,
  USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: I
})