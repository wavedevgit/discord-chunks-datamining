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
    l = o.ZP.isSuppressEveryoneEnabled(t),
    c = o.ZP.isSuppressRolesEnabled(t),
    u = null != e.mentions && e.mentions.some(e => e.id === r),
    d = null == t || null == r ? null : a.ZP.getMember(t, r),
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
  for (let t in e(c) || (c = null), e(u) || (u = null), e(d) || (d = null), e(f) || (f = null), p) e(p[t]) || delete p[t];
  for (let t in _) e(_[t]) || delete _[t];
  for (let t in h) e(h[t]) || delete h[t];
  for (let t in m) e(m[t]) || delete m[t]
}

function E(e) {
  let {
    guildId: t,
    mentioned: n,
    roleMentioned: r,
    everyoneMentioned: i
  } = e, a = Date.now();
  c = a, null != t && (p[t] = a), n && (u = a, null != t && (_[t] = a)), r && (d = a, null != t && (h[t] = a)), i && (f = a, null != t && (m[t] = a))
}
class b extends Chunk442837.ZP.Store {
  initialize() {
    this.waitFor(a.ZP, o.ZP, s.default)
  }
  getGlobalStats() {
    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: e(c),
      approx_seconds_since_last_mention: e(u),
      approx_seconds_since_last_role_mention: e(d),
      approx_seconds_since_last_everyone_mention: e(f)
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