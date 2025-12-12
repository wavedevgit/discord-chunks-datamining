/** Chunk was on web.js **/
/** chunk id: 243730, original params: e,t,n (module,exports,re quire) **/
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
let s = 12e4,
  l = {},
  c = {};

function u(e) {
  let {
    guildId: t,
    roleMemberCount: n
  } = e;
  l[t] = n, c[t] = Date.now()
}

function d(e) {
  let {
    guildId: t,
    roleId: n,
    count: r
  } = e, i = l[t];
  if (null == i) returnfalse;
  i[n] = r
}

function f(e) {
  let {
    guildId: t,
    roleId: n,
    added: r
  } = e, i = l[t];
  if (null == i || null == i[n]) returnfalse;
  let o = Object.keys(r).length;
  i[n] += o
}

function p(e) {
  let {
    guildId: t,
    roleId: n
  } = e, r = l[t];
  if (null == r || null == r[n]) returnfalse;
  r[n] = r[n] + 1
}

function _(e) {
  let {
    guildId: t,
    roleId: n
  } = e, r = l[t];
  if (null == r || null == r[n]) returnfalse;
  r[n] = Math.max(r[n] - 1, 0)
}

function m(e) {
  let {
    guildId: t,
    role: n
  } = e;
  null == l[t] && (l[t] = {}), l[t][n.id] = 0
}

function h(e) {
  let {
    guild: t
  } = e;
  delete l[t.id], delete c[t.id]
}
class g extends(r = Chunk442837.ZP.Store) {
  getRoleMemberCount(e) {
    return null != e ? l[e] : null
  }
  shouldFetch(e) {
    if (null == e) returnfalse;
    let t = c[e];
    return null == t || Date.now() - t > s
  }
}
a(g, "displayName", "GuildRoleMemberCountStore");
let E = new g(Chunk570140.Z, {
  GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: u,
  GUILD_ROLE_MEMBER_COUNT_UPDATE: d,
  GUILD_ROLE_MEMBER_BULK_ADD: f,
  GUILD_ROLE_MEMBER_ADD: p,
  GUILD_ROLE_MEMBER_REMOVE: _,
  GUILD_ROLE_CREATE: m,
  GUILD_DELETE: h
})