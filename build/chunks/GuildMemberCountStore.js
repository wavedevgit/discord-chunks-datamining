/** Chunk was on web.js **/
/** chunk id: 650774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let l = {},
  c = {};

function u(e) {
  let {
    guilds: t
  } = e;
  l = {}, t.forEach(e => {
    l[e.id] = e.member_count
  })
}

function d(e) {
  l = s({}, e.guildMemberCounts)
}

function f(e) {
  let {
    guild: t
  } = e;
  l[t.id] = t.member_count
}

function p(e) {
  let {
    guild: t
  } = e;
  if (null == l[t.id] && null == c[t.id]) returnfalse;
  delete l[t.id], delete c[t.id]
}

function _(e) {
  let {
    guildId: t,
    memberCount: n,
    onlineCount: r
  } = e, i = false;
  return l[t] !== n && (l[t] = n, i = true), c[t] !== r && (c[t] = r, i = true), i
}

function m(e) {
  let {
    invite: t
  } = e, {
    guild: n,
    approximate_presence_count: r
  } = t;
  if ((null == n ? true : n.id) == null || null == r) returnfalse;
  c[n.id] = r
}

function h(e) {
  let {
    guildId: t,
    count: n
  } = e;
  if (null == t || null == n) returnfalse;
  c[t] = n
}
class g extends(r = Chunk442837.ZP.Store) {
  getMemberCounts() {
    return l
  }
  getMemberCount(e) {
    return null != e ? l[e] : null
  }
  getOnlineCount(e) {
    return null != e ? c[e] : null
  }
}
a(g, "displayName", "GuildMemberCountStore");
let E = new g(Chunk570140.Z, {
  CONNECTION_OPEN: u,
  OVERLAY_INITIALIZE: d,
  GUILD_CREATE: f,
  GUILD_DELETE: p,
  GUILD_MEMBER_LIST_UPDATE: _,
  INVITE_ACCEPT_SUCCESS: m,
  INVITE_RESOLVE_SUCCESS: m,
  ONLINE_GUILD_MEMBER_COUNT_UPDATE: h
})