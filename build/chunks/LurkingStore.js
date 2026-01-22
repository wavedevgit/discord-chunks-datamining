/** Chunk was on web.js **/
/** chunk id: 857071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk260509 = require("./260509.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

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

function h(e) {
  let t = new Set([...null != e ? e : []]);
  return [...f].reduce((e, n) => t.has(n) ? e : m(n) || e, false)
}

function m(e) {
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
      case u.Q4z.MOBILE_GUILD_DISCOVERY:
        _ = {
          type: u.Q4z.MOBILE_GUILD_DISCOVERY
        };
        break;
      case u.Q4z.DIRECTORY_ENTRY:
        _ = {
          type: u.Q4z.DIRECTORY_ENTRY,
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
  return !!(null != t.joined_at && f.includes(t.id)) && (m(t.id), _ = null, true)
}

function O(e) {
  var t;
  let {
    guildId: n,
    joinedAt: r,
    user: i
  } = e, a = i.id === (null == (t = c.default.getCurrentUser()) ? true : t.id), s = null == r;
  return !!a && !s && !!f.includes(n) && (m(n), _ = null, true)
}

function A(e) {
  let {
    guild: t
  } = e;
  return !!f.includes(t.id) && (m(t.id), _ = null, true)
}

function v(e) {
  let {
    ignoredGuildIds: t
  } = e, n = h(t);
  return n && (_ = null), n
}

function S(e) {
  let {
    lurkingGuildId: t,
    lurkingSource: n
  } = e;
  return g(t), _ = n, true
}

function I() {
  f = l.A.getGuildsArray().filter(e => (0, s.DG)(e)).map(e => e.id)
}
class T extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.Ay, l.A, c.default)
  }
  lurkingGuildIds() {
    return f
  }
  mostRecentLurkedGuildId() {
    return 0 === f.length ? null : f[f.length - 1]
  }
  isLurking(e) {
    let t = l.A.getGuild(e);
    if (null == t) returnfalse;
    let n = o.Ay.isCurrentUserGuest(e),
      r = (0, s.DG)(t);
    return !!(!n && r)
  }
  getLurkingSource() {
    return _
  }
  getLoadId(e) {
    return null != e ? p[e] : null
  }
}
d(T, "displayName", "LurkingStore");
let C = new T(Chunk73153.h, {
  CONNECTION_OPEN: I,
  GUILD_JOIN: b,
  GUILD_STOP_LURKING: v,
  GUILD_STOP_LURKING_FAILURE: S,
  GUILD_CREATE: y,
  GUILD_DELETE: A,
  GUILD_MEMBER_ADD: O
})