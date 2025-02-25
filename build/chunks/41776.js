/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => A
}), n(47120);
var r, i = n(442837),
  o = n(570140),
  a = n(271383),
  s = n(430824),
  l = n(594174),
  c = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = [],
  f = {},
  _ = null,
  p = null;

function h(e) {
  let t = new Set([...null != e ? e : []]);
  return [...d].reduce((e, n) => t.has(n) ? e : g(n) || e, !1)
}

function g(e) {
  let t = d.indexOf(e);
  if (t > -1) {
    let n = [...d];
    return n.splice(t, 1), d = n, delete f[e], !0
  }
  return !1
}

function m(e) {
  return !(e === c.ME || d.includes(e)) && (d = [...d, e], !0)
}

function E(e, t) {
  null != t && (f[e] = t)
}

function v(e) {
  let {
    guildId: t,
    lurker: n,
    source: r,
    directoryChannelId: i,
    loadId: o
  } = e;
  if (n) {
    switch (m(t), E(t, o), r) {
      case c.vtS.MOBILE_GUILD_DISCOVERY:
        p = {
          type: c.vtS.MOBILE_GUILD_DISCOVERY
        };
        break;
      case c.vtS.DIRECTORY_ENTRY:
        p = {
          type: c.vtS.DIRECTORY_ENTRY,
          directoryChannelId: i
        };
        break;
      default:
        p = null
    }
    return !0
  }
  return !1
}

function b(e) {
  let {
    guild: t
  } = e;
  return !!(null != t.joined_at && d.includes(t.id)) && (g(t.id), _ = null, p = null, !0)
}

function y(e) {
  var t;
  let {
    guildId: n,
    joinedAt: r,
    user: i
  } = e, o = i.id === (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id), a = null == r;
  return !!(o && !a && d.includes(n)) && (g(n), _ = null, p = null, !0)
}

function O(e) {
  let {
    guild: t
  } = e;
  return !!d.includes(t.id) && (g(t.id), _ = null, p = null, !0)
}

function S(e) {
  let {
    ignoredGuildIds: t
  } = e, n = h(t);
  return n && (_ = null, p = null), n
}

function I(e) {
  let {
    lurkingGuildId: t,
    lurkingSource: n
  } = e;
  return m(t), p = n, !0
}

function T() {
  d = Object.values(s.Z.getGuilds()).reduce((e, t) => t.isLurker() ? [...e, t.id] : e, [])
}
class N extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(s.Z, l.default)
  }
  setHistorySnapshot(e) {
    _ = e
  }
  getHistorySnapshot() {
    return _
  }
  lurkingGuildIds() {
    return d
  }
  mostRecentLurkedGuildId() {
    return 0 === d.length ? null : d[d.length - 1]
  }
  isLurking(e) {
    var t;
    let n = a.ZP.isCurrentUserGuest(e),
      r = null === (t = s.Z.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
    return !!(!n && r)
  }
  getLurkingSource() {
    return p
  }
  getLoadId(e) {
    return null != e ? f[e] : null
  }
}
u(N, "displayName", "LurkingStore");
let A = new N(o.Z, {
  CONNECTION_OPEN: T,
  GUILD_JOIN: v,
  GUILD_STOP_LURKING: S,
  GUILD_STOP_LURKING_FAILURE: I,
  GUILD_CREATE: b,
  GUILD_DELETE: O,
  GUILD_MEMBER_ADD: y
})