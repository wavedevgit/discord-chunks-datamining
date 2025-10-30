/** Chunk was on web.js **/
/** chunk id: 324067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./539854.js"), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk740504 = require("./740504.js"),
  Chunk853856 = require("./853856.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = null,
  h = {},
  m = null;

function g() {
  return {
    _categories: [],
    null: []
  }
}
let E = g();

function b(e, t) {
  e.index = t
}

function y(e) {
  let t = u.ZP.getChannels(e),
    n = g(),
    r = e => {
      var t;
      let {
        channel: r
      } = e;
      (null != (t = n[null != r.parent_id ? r.parent_id : "null"]) ? t : n.null).push({
        channel: r,
        index: false
      })
    };
  return t[f.d4z.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    n._categories.push({
      channel: t,
      index: false
    }), n[t.id] = []
  }), t[u.sH].forEach(r), t[u.Zb].forEach(r), (0, o.Z)(n._categories, n).forEach(b), h[e] = n, n
}

function O() {
  h = {}, null != p && y(p)
}

function v(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  h[t] = true, p === t && y(t)
}

function I(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  delete h[t]
}

function S(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) returnfalse;
  h[t] = true, p === t && y(t)
}

function T(e) {
  let {
    channels: t
  } = e, n = false;
  for (let {
      guild_id: e
    }
    of t) null != e && (h[e] = true, n = true, p === e && y(e));
  return n
}

function A(e) {
  let {
    guildId: t,
    user: n
  } = e;
  if (l.default.getId() !== n.id) returnfalse;
  h[t] = true, t === p && y(t)
}

function C() {
  if (null == p) returnfalse;
  y(p)
}

function N(e) {
  let {
    guildId: t
  } = e;
  h[t] = true, t === p && y(t)
}

function R(e, t) {
  if (m = t, null == e || null == e.getGuildId()) returnfalse;
  let n = e.getGuildId();
  return null != n && (h[n] = true, n === p && y(n), true)
}

function P(e) {
  let {
    channelId: t
  } = e;
  return null == t && null != m ? R(c.Z.getChannel(m), null) : R(c.Z.getChannel(t), t)
}

function w(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      channelId: n,
      sessionId: r
    } = t;
    return l.default.getSessionId() !== r ? e : R(c.Z.getChannel(n), n) || e
  }, false)
}

function D(e) {
  let {
    guildId: t
  } = e;
  if (p = null != t ? t : null, null == t || null != h[t]) returnfalse;
  y(t)
}

function L() {
  y(Chunk981631.I_8)
}

function x(e) {
  let t = h[e];
  return null != t ? t : y(e)
}
class M extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk984933.ZP, Chunk430824.Z, Chunk314897.default, Chunk592125.Z, Chunk853856.Z), this.syncWith([Chunk853856.Z], L)
  }
  getCategories(e) {
    return null != e ? x(e) : E
  }
}
_(M, "displayName", "GuildCategoryStore");
let k = new M(Chunk570140.Z, {
  CHANNEL_SELECT: D,
  CONNECTION_OPEN: O,
  OVERLAY_INITIALIZE: O,
  CACHE_LOADED_LAZY: O,
  GUILD_CREATE: v,
  GUILD_UPDATE: v,
  GUILD_DELETE: I,
  CHANNEL_CREATE: S,
  CHANNEL_DELETE: S,
  CHANNEL_UPDATES: T,
  GUILD_MEMBER_UPDATE: A,
  CURRENT_USER_UPDATE: C,
  GUILD_ROLE_CREATE: N,
  GUILD_ROLE_UPDATE: N,
  GUILD_ROLE_DELETE: N,
  IMPERSONATE_UPDATE: N,
  IMPERSONATE_STOP: N,
  VOICE_CHANNEL_SELECT: P,
  VOICE_STATE_UPDATES: w
})