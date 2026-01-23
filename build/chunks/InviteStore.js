/** Chunk was on web.js **/
/** chunk id: 299091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./938796.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk21599 = require("./21599.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = new Map,
  p = new Map,
  _ = {},
  h = new Map;

function m(e, t) {
  var n;
  e = null != e ? e : "";
  let r = (0, s.y$)(e),
    i = f.get(e),
    a = null != i ? c({
      state: o.elq.RESOLVING
    }, i) : {
      state: o.elq.RESOLVING,
      code: r.baseCode
    };
  t(a), (f = new Map(f)).set(e, a), (null == (n = a.guild) ? true : n.id) != null && (_ = d(c({}, _), {
    [a.guild.id]: e
  }))
}

function g(e) {
  let {
    code: t
  } = e, n = (0, s.y$)(t);
  (f = new Map(f)).set(t, {
    code: n.baseCode,
    state: o.elq.RESOLVING
  })
}

function E(e) {
  return m(e.code, t => {
    var n, r;
    t.state = o.elq.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null != (n = e.invite.approximate_member_count) ? n : null, t.approximate_presence_count = null != (r = e.invite.approximate_presence_count) ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags, t.is_nickname_changeable = e.invite.is_nickname_changeable, t.profile = e.invite.profile, t.roles = e.invite.roles
  })
}

function y(e) {
  return m(e.invite.code, t => {
    var n, r;
    t.state = o.elq.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null != (n = e.invite.approximate_member_count) ? n : null, t.approximate_presence_count = null != (r = e.invite.approximate_presence_count) ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.is_nickname_changeable = e.invite.is_nickname_changeable, t.profile = e.invite.profile, t.roles = e.invite.roles
  })
}

function b(e) {
  return m(e.invite.code, t => {
    t.state = o.elq.RESOLVED, t.inviter = e.invite.inviter
  })
}

function O(e) {
  e.invites.forEach(e => m(e.code, e => {
    e.state = o.elq.EXPIRED
  }))
}

function v(e) {
  return m(e.code, t => {
    t.state = "banned" in e && e.banned ? o.elq.BANNED : o.elq.EXPIRED
  })
}

function A(e) {
  return m(e.code, e => {
    e.state = o.elq.ACCEPTING
  })
}

function I(e) {
  return m(e.code, t => {
    t.state = o.elq.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = c({}, t.channel, e.invite.channel)
  })
}

function S(e) {
  return p.set(e.code, e.error), m(e.code, e => {
    e.state = o.elq.ERROR
  })
}

function T(e) {
  return m(e.code, e => {
    e.state = o.elq.APP_OPENING
  })
}

function C(e) {
  return m(e.code, e => {
    e.state = o.elq.APP_OPENED
  })
}

function N(e) {
  return m(e.code, e => {
    e.state = o.elq.APP_NOT_OPENED
  })
}

function R(e) {
  (h = new Map(h)).set(e.code, e.friendMemberIds)
}

function w(e) {
  if (!h.has(e.code)) returnfalse;
  (h = new Map(h)).delete(e.code)
}
class P extends(r = Chunk311907.Ay.Store) {
  getInvite(e) {
    return f.get(e)
  }
  getInviteError(e) {
    return p.get(e)
  }
  getInvites() {
    return f
  }
  getInviteKeyForGuildId(e) {
    return _[e]
  }
  getFriendMemberIds(e) {
    return h.get(e)
  }
}
l(P, "displayName", "InviteStore");
let D = new P(Chunk73153.h, {
  INVITE_RESOLVE: g,
  INVITE_RESOLVE_SUCCESS: E,
  INVITE_RESOLVE_FAILURE: v,
  INSTANT_INVITE_REVOKE_SUCCESS: v,
  FRIEND_INVITE_CREATE_SUCCESS: b,
  FRIEND_INVITE_REVOKE_SUCCESS: O,
  INSTANT_INVITE_CREATE_SUCCESS: y,
  INVITE_ACCEPT: A,
  INVITE_ACCEPT_SUCCESS: I,
  INVITE_ACCEPT_FAILURE: S,
  INVITE_APP_OPENING: T,
  INVITE_APP_OPENED: C,
  INVITE_APP_NOT_OPENED: N,
  INVITE_FRIEND_MEMBERS_FETCH_SUCCESS: R,
  INVITE_FRIEND_MEMBERS_FETCH_FAILURE: w
})