/** Chunk was on web.js **/
/** chunk id: 324067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
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

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = null,
  m = {},
  h = null;

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
  }), t[u.sH].forEach(r), t[u.Zb].forEach(r), (0, o.Z)(n._categories, n).forEach(b), m[e] = n, n
}

function O() {
  m = {}, null != _ && y(_)
}

function v(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  m[t] = true, _ === t && y(t)
}

function S(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  delete m[t]
}

function I(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) returnfalse;
  m[t] = true, _ === t && y(t)
}

function T(e) {
  let {
    channels: t
  } = e, n = false;
  for (let {
      guild_id: e
    }
    of t) null != e && (m[e] = true, n = true, _ === e && y(e));
  return n
}

function C(e) {
  let {
    guildId: t,
    user: n
  } = e;
  if (l.default.getId() !== n.id) returnfalse;
  m[t] = true, t === _ && y(t)
}

function A() {
  if (null == _) returnfalse;
  y(_)
}

function N(e) {
  let {
    guildId: t
  } = e;
  m[t] = true, t === _ && y(t)
}

function P(e, t) {
  if (h = t, null == e || null == e.getGuildId()) returnfalse;
  let n = e.getGuildId();
  return null != n && (m[n] = true, n === _ && y(n), true)
}

function R(e) {
  let {
    channelId: t
  } = e;
  return null == t && null != h ? P(c.Z.getChannel(h), null) : P(c.Z.getChannel(t), t)
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
    return l.default.getSessionId() !== r ? e : P(c.Z.getChannel(n), n) || e
  }, false)
}

function w(e) {
  let {
    guildId: t
  } = e;
  if (_ = null != t ? t : null, null == t || null != m[t]) returnfalse;
  y(t)
}

function x() {
  y(Chunk981631.I_8)
}

function L(e) {
  let t = m[e];
  return null != t ? t : y(e)
}
class j extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk984933.ZP, Chunk430824.Z, Chunk314897.default, Chunk592125.Z, Chunk853856.Z), this.syncWith([Chunk853856.Z], x)
  }
  getCategories(e) {
    return null != e ? L(e) : E
  }
}
p(j, "displayName", "GuildCategoryStore");
let M = new j(Chunk570140.Z, {
  CHANNEL_SELECT: w,
  CONNECTION_OPEN: O,
  OVERLAY_INITIALIZE: O,
  CACHE_LOADED_LAZY: O,
  GUILD_CREATE: v,
  GUILD_UPDATE: v,
  GUILD_DELETE: S,
  CHANNEL_CREATE: I,
  CHANNEL_DELETE: I,
  CHANNEL_UPDATES: T,
  GUILD_MEMBER_UPDATE: C,
  CURRENT_USER_UPDATE: A,
  GUILD_ROLE_CREATE: N,
  GUILD_ROLE_UPDATE: N,
  GUILD_ROLE_DELETE: N,
  IMPERSONATE_UPDATE: N,
  IMPERSONATE_STOP: N,
  VOICE_CHANNEL_SELECT: R,
  VOICE_STATE_UPDATES: D
})