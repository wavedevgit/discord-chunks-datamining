/** Chunk was on web.js **/
/** chunk id: 41776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  _ = {},
  p = null;

function h(e) {
  let t = new Set([...null != e ? e : []]);
  return [...f].reduce((e, n) => t.has(n) ? e : m(n) || e, false)
}

function m(e) {
  let t = f.indexOf(e);
  if (t > false) {
    let n = [...f];
    return n.splice(t, 1), f = n, delete _[e], true
  }
  returnfalse
}

function g(e) {
  return !(e === u.ME || f.includes(e)) && (f = [...f, e], true)
}

function E(e, t) {
  null != t && (_[e] = t)
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
        p = {
          type: u.vtS.MOBILE_GUILD_DISCOVERY
        };
        break;
      case u.vtS.DIRECTORY_ENTRY:
        p = {
          type: u.vtS.DIRECTORY_ENTRY,
          directoryChannelId: i
        };
        break;
      default:
        p = null
    }
    returntrue
  }
  returnfalse
}

function y(e) {
  let {
    guild: t
  } = e;
  return !!(null != t.joined_at && f.includes(t.id)) && (m(t.id), p = null, true)
}

function O(e) {
  var t;
  let {
    guildId: n,
    joinedAt: r,
    user: i
  } = e, a = i.id === (null == (t = c.default.getCurrentUser()) ? true : t.id), o = null == r;
  return !!a && !o && !!f.includes(n) && (m(n), p = null, true)
}

function v(e) {
  let {
    guild: t
  } = e;
  return !!f.includes(t.id) && (m(t.id), p = null, true)
}

function I(e) {
  let {
    ignoredGuildIds: t
  } = e, n = h(t);
  return n && (p = null), n
}

function S(e) {
  let {
    lurkingGuildId: t,
    lurkingSource: n
  } = e;
  return g(t), p = n, true
}

function T() {
  f = Chunk430824.Z.getGuildsArray().filter(e => (0, o.zN)(e)).map(e => e.id)
}
class A extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk271383.ZP, Chunk430824.Z, Chunk594174.default)
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
    return p
  }
  getLoadId(e) {
    return null != e ? _[e] : null
  }
}
d(A, "displayName", "LurkingStore");
let C = new A(Chunk570140.Z, {
  CONNECTION_OPEN: T,
  GUILD_JOIN: b,
  GUILD_STOP_LURKING: I,
  GUILD_STOP_LURKING_FAILURE: S,
  GUILD_CREATE: y,
  GUILD_DELETE: v,
  GUILD_MEMBER_ADD: O
})