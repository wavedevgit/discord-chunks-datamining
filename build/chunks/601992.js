/** Chunk was on web.js **/
/** chunk id: 601992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => l,
  Z: () => y
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk271383 = require("./271383.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js");

function l(e, t) {
  var n;
  let r = null == (n = s.default.getCurrentUser()) ? true : n.id,
    l = a.ZP.isSuppressEveryoneEnabled(t),
    c = a.ZP.isSuppressRolesEnabled(t),
    u = null != e.mentions && e.mentions.some(e => e.id === r),
    d = null == t || null == r ? null : o.ZP.getMember(t, r),
    f = null != e.mention_roles && null != d && null != d.roles && e.mention_roles.some(e => d.roles.includes(e));
  i.Z.dispatch({
    type: "MESSAGE_NOTIFICATION_SHOWN",
    guildId: t,
    mentioned: u,
    roleMentioned: f && !c,
    everyoneMentioned: true === e.mention_everyone && !l
  })
}
let c = null,
  u = null,
  d = null,
  f = null,
  p = {},
  _ = {},
  m = {},
  h = {};

function g() {
  let e = e => null != e && Date.now() - e < 6e4;
  for (let t in module(c) || (c = null), module(u) || (u = null), module(d) || (d = null), module(f) || (f = null), p) module(p[exports]) || delete p[exports];
  for (let t in _) module(_[exports]) || delete _[exports];
  for (let t in h) module(h[exports]) || delete h[exports];
  for (let t in m) module(m[exports]) || delete m[exports]
}

function E(e) {
  let {
    guildId: t,
    mentioned: n,
    roleMentioned: r,
    everyoneMentioned: i
  } = e, o = Date.now();
  c = o, null != t && (p[t] = o), n && (u = o, null != t && (_[t] = o)), r && (d = o, null != t && (h[t] = o)), i && (f = o, null != t && (m[t] = o))
}
class b extends Chunk442837.ZP.Store {
  initialize() {
    this.waitFor(Chunk271383.ZP, Chunk9156.ZP, Chunk594174.default)
  }
  getGlobalStats() {
    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: module(c),
      approx_seconds_since_last_mention: module(u),
      approx_seconds_since_last_role_mention: module(d),
      approx_seconds_since_last_everyone_mention: module(f)
    }
  }
  getStats(e) {
    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: t(c),
      approx_seconds_since_last_mention: t(u),
      approx_seconds_since_last_role_mention: t(d),
      approx_seconds_since_last_everyone_mention: t(f),
      approx_seconds_since_last_guild_notification: null == e ? null : t(p[e]),
      approx_seconds_since_last_guild_mention: null == e ? null : t(_[e]),
      approx_seconds_since_last_guild_role_mention: null == e ? null : t(h[e]),
      approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(m[e])
    }
  }
}
let y = new b(Chunk570140.Z, {
  CONNECTION_OPEN: g,
  MESSAGE_NOTIFICATION_SHOWN: E
})