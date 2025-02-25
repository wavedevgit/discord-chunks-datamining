/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => j
}), n(653041), n(47120);
var r, i = n(442837),
  o = n(570140),
  a = n(740504),
  s = n(853856),
  l = n(314897),
  c = n(592125),
  u = n(984933),
  d = n(430824),
  f = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = null,
  h = {},
  g = null;

function m() {
  return {
    _categories: [],
    null: []
  }
}
let E = m();

function v(e, t) {
  e.index = t
}

function b(e) {
  let t = u.ZP.getChannels(e),
    n = m(),
    r = e => {
      var t;
      let {
        channel: r
      } = e;
      (null !== (t = n[null != r.parent_id ? r.parent_id : "null"]) && void 0 !== t ? t : n.null).push({
        channel: r,
        index: -1
      })
    };
  return t[f.d4z.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    n._categories.push({
      channel: t,
      index: -1
    }), n[t.id] = []
  }), t[u.sH].forEach(r), t[u.Zb].forEach(r), (0, a.Z)(n._categories, n).forEach(v), h[e] = n, n
}

function y() {
  h = {}, null != p && b(p)
}

function O(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  h[t] = void 0, p === t && b(t)
}

function S(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  delete h[t]
}

function I(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) return !1;
  h[t] = void 0, p === t && b(t)
}

function T(e) {
  let {
    channels: t
  } = e, n = !1;
  for (let {
      guild_id: e
    }
    of t) null != e && (h[e] = void 0, n = !0, p === e && b(e));
  return n
}

function N(e) {
  let {
    guildId: t,
    user: n
  } = e;
  if (l.default.getId() !== n.id) return !1;
  h[t] = void 0, t === p && b(t)
}

function A() {
  if (null == p) return !1;
  b(p)
}

function C(e) {
  let {
    guildId: t
  } = e;
  h[t] = void 0, t === p && b(t)
}

function R(e, t) {
  if (g = t, null == e || null == e.getGuildId()) return !1;
  let n = e.getGuildId();
  return null != n && (h[n] = void 0, n === p && b(n), !0)
}

function P(e) {
  let {
    channelId: t
  } = e;
  return null == t && null != g ? R(c.Z.getChannel(g), null) : R(c.Z.getChannel(t), t)
}

function D(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      channelId: n,
      sessionId: r
    } = t;
    return l.default.getSessionId() !== r ? e : R(c.Z.getChannel(n), n) || e
  }, !1)
}

function w(e) {
  let {
    guildId: t
  } = e;
  if (p = null != t ? t : null, null == t || null != h[t]) return !1;
  b(t)
}

function L() {
  b(f.I_8)
}

function x(e) {
  let t = h[e];
  return null != t ? t : b(e)
}
class M extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(u.ZP, d.Z, l.default, c.Z, s.Z), this.syncWith([s.Z], L)
  }
  getCategories(e) {
    return null != e ? x(e) : E
  }
}
_(M, "displayName", "GuildCategoryStore");
let j = new M(o.Z, {
  CHANNEL_SELECT: w,
  CONNECTION_OPEN: y,
  OVERLAY_INITIALIZE: y,
  CACHE_LOADED_LAZY: y,
  GUILD_CREATE: O,
  GUILD_UPDATE: O,
  GUILD_DELETE: S,
  CHANNEL_CREATE: I,
  CHANNEL_DELETE: I,
  CHANNEL_UPDATES: T,
  GUILD_MEMBER_UPDATE: N,
  CURRENT_USER_UPDATE: A,
  GUILD_ROLE_CREATE: C,
  GUILD_ROLE_UPDATE: C,
  GUILD_ROLE_DELETE: C,
  IMPERSONATE_UPDATE: C,
  IMPERSONATE_STOP: C,
  VOICE_CHANNEL_SELECT: P,
  VOICE_STATE_UPDATES: D
})