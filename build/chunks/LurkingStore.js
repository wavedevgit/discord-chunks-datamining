/** Chunk was on web.js **/
/** chunk id: 41776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk601964 = require("./601964.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = [],
  p = {},
  _ = null;

function m(e) {
  let t = new Set([...null != e ? e : []]);
  return [...f].reduce((e, n) => t.has(n) ? e : h(n) || e, false)
}

function h(e) {
  let t = f.indexOf(e);
  if (t > false) {
    let n = [...f];
    return n.splice(t, 1), f = n, delete p[e], true
  }
  returnfalse
}

function g(e) {
  return !(e === u.ME || f.includes(e)) && (f = [...f, e], true)
}

function E(e, t) {
  null != t && (p[e] = t)
}

function b(e) {
  let {
    guildId: t,
    lurker: n,
    source: r,
    directoryChannelId: i,
    loadId: a
  } = e;
  if (n) {
    switch (g(t), E(t, a), r) {
      case u.vtS.MOBILE_GUILD_DISCOVERY:
        _ = {
          type: u.vtS.MOBILE_GUILD_DISCOVERY
        };
        break;
      case u.vtS.DIRECTORY_ENTRY:
        _ = {
          type: u.vtS.DIRECTORY_ENTRY,
          directoryChannelId: i
        };
        break;
      default:
        _ = null
    }
    returntrue
  }
  returnfalse
}

function y(e) {
  let {
    guild: t
  } = e;
  return !!(null != t.joined_at && f.includes(t.id)) && (h(t.id), _ = null, true)
}

function O(e) {
  var t;
  let {
    guildId: n,
    joinedAt: r,
    user: i
  } = e, a = i.id === (null == (t = c.default.getCurrentUser()) ? true : t.id), o = null == r;
  return !!a && !o && !!f.includes(n) && (h(n), _ = null, true)
}

function v(e) {
  let {
    guild: t
  } = e;
  return !!f.includes(t.id) && (h(t.id), _ = null, true)
}

function S(e) {
  let {
    ignoredGuildIds: t
  } = e, n = m(t);
  return n && (_ = null), n
}

function I(e) {
  let {
    lurkingGuildId: t,
    lurkingSource: n
  } = e;
  return g(t), _ = n, true
}

function T() {
  f = l.Z.getGuildsArray().filter(e => (0, o.zN)(e)).map(e => e.id)
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.ZP, l.Z, c.default)
  }
  lurkingGuildIds() {
    return f
  }
  mostRecentLurkedGuildId() {
    return 0 === f.length ? null : f[f.length - 1]
  }
  isLurking(e) {
    let t = l.Z.getGuild(e);
    if (null == t) returnfalse;
    let n = s.ZP.isCurrentUserGuest(e),
      r = (0, o.zN)(t);
    return !!(!n && r)
  }
  getLurkingSource() {
    return _
  }
  getLoadId(e) {
    return null != e ? p[e] : null
  }
}
d(C, "displayName", "LurkingStore");
let A = new C(Chunk570140.Z, {
  CONNECTION_OPEN: T,
  GUILD_JOIN: b,
  GUILD_STOP_LURKING: S,
  GUILD_STOP_LURKING_FAILURE: I,
  GUILD_CREATE: y,
  GUILD_DELETE: v,
  GUILD_MEMBER_ADD: O
})