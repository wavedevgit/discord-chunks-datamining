/** Chunk was on web.js **/
/** chunk id: 680089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk823379 = require("./823379.js"),
  Chunk592125 = require("./592125.js"),
  Chunk486472 = require("./486472.js"),
  Chunk984933 = require("./984933.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {},
  p = 0;

function _() {
  p += 1
}

function m(e) {
  if (null == f[e]) returnfalse;
  delete f[e]
}

function h(e) {
  let {
    id: t
  } = e;
  if (f[t]) returnfalse;
  f[t] = true
}

function g(e) {
  let {
    id: t
  } = e;
  return m(t)
}

function E(e) {
  for (let t of (e.userGuildSettings.partial || (f = {}), e.userGuildSettings.entries))
    if (null != t.channel_overrides)
      for (let e of t.channel_overrides) e.collapsed ? f[e.channel_id] = true : delete f[e.channel_id]
}

function b(e) {
  let {
    userGuildSettings: t
  } = e, n = new Set(t.map(e => e.guild_id).filter(a.lm));
  for (let e in f) {
    let t = s.Z.getChannel(e);
    null != t && null != t.guild_id && n.has(t.guild_id) && delete f[t.id]
  }
  for (let e of t)
    for (let t of e.channel_overrides) t.collapsed && (f[t.channel_id] = true)
}

function y(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return m(t)
}

function O(e) {
  let {
    guildId: t
  } = e;
  c.ZP.getChannels(t)[u.d4z.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    "null" !== t.id && (f[t.id] = true)
  })
}

function v(e) {
  let {
    guildId: t
  } = e;
  c.ZP.getChannels(t)[u.d4z.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    delete f[t.id]
  })
}
class S extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(s.Z, l.Z, c.ZP), this.removeChangeListener(_), this.addChangeListener(_), f = null != e ? e : {}
  }
  getState() {
    return f
  }
  isCollapsed(e) {
    return null != e && "null" !== e && !!f[e] && f[e]
  }
  getCollapsedCategories() {
    return f
  }
  get version() {
    return p
  }
}
d(S, "displayName", "CategoryCollapseStore"), d(S, "persistKey", "collapsedCategories");
let I = new S(Chunk570140.Z, {
  CONNECTION_OPEN: E,
  USER_GUILD_SETTINGS_FULL_UPDATE: b,
  CATEGORY_COLLAPSE: h,
  CATEGORY_EXPAND: g,
  CATEGORY_COLLAPSE_ALL: O,
  CATEGORY_EXPAND_ALL: v,
  CHANNEL_DELETE: y
})