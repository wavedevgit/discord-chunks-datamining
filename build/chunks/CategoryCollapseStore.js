/** Chunk was on web.js **/
/** chunk id: 924985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk403362 = require("./403362.js"),
  Chunk734057 = require("./734057.js"),
  Chunk919638 = require("./919638.js"),
  Chunk808728 = require("./808728.js"),
  Chunk652215 = require("./652215.js");

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

function h(e) {
  if (null == f[e]) returnfalse;
  delete f[e]
}

function m(e) {
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
  return h(t)
}

function E(e) {
  for (let t of (e.userGuildSettings.partial || (f = {}), e.userGuildSettings.entries))
    if (null != t.channel_overrides)
      for (let e of t.channel_overrides) e.collapsed ? f[e.channel_id] = true : delete f[e.channel_id]
}

function y(e) {
  let {
    userGuildSettings: t
  } = e, n = new Set(t.map(e => e.guild_id).filter(s.Vq));
  for (let e in f) {
    let t = o.A.getChannel(e);
    null != t && null != t.guild_id && n.has(t.guild_id) && delete f[t.id]
  }
  for (let e of t)
    for (let t of e.channel_overrides) t.collapsed && (f[t.channel_id] = true)
}

function b(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return h(t)
}

function O(e) {
  let {
    guildId: t
  } = e;
  c.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach(e => {
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
  c.Ay.getChannels(t)[u.rbe.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    delete f[t.id]
  })
}
class A extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(o.A, l.A, c.Ay), this.removeChangeListener(_), this.addChangeListener(_), f = null != e ? e : {}
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
d(A, "displayName", "CategoryCollapseStore"), d(A, "persistKey", "collapsedCategories");
let I = new A(Chunk73153.h, {
  CONNECTION_OPEN: E,
  USER_GUILD_SETTINGS_FULL_UPDATE: y,
  CATEGORY_COLLAPSE: m,
  CATEGORY_EXPAND: g,
  CATEGORY_COLLAPSE_ALL: O,
  CATEGORY_EXPAND_ALL: v,
  CHANNEL_DELETE: b
})