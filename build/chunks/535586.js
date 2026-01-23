/** Chunk was on web.js **/
/** chunk id: 535586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b,
  n: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk696451 = require("./696451.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js");

function l(e, t) {
  var n;
  let r = null == (n = o.default.getCurrentUser()) ? true : n.id,
    l = s.Ay.isSuppressEveryoneEnabled(t),
    c = s.Ay.isSuppressRolesEnabled(t),
    u = null != e.mentions && e.mentions.some(e => e.id === r),
    d = null == t || null == r ? null : a.Ay.getMember(t, r),
    f = null != e.mention_roles && null != d && null != d.roles && e.mention_roles.some(e => d.roles.includes(e));
  i.h.dispatch({
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
  h = {},
  m = {};

function g() {
  let e = e => null != e && Date.now() - e < 6e4;
  for (let t in e(c) || (c = null), e(u) || (u = null), e(d) || (d = null), e(f) || (f = null), p) e(p[t]) || delete p[t];
  for (let t in _) e(_[t]) || delete _[t];
  for (let t in m) e(m[t]) || delete m[t];
  for (let t in h) e(h[t]) || delete h[t]
}

function E(e) {
  let {
    guildId: t,
    mentioned: n,
    roleMentioned: r,
    everyoneMentioned: i
  } = e, a = Date.now();
  c = a, null != t && (p[t] = a), n && (u = a, null != t && (_[t] = a)), r && (d = a, null != t && (m[t] = a)), i && (f = a, null != t && (h[t] = a))
}
class y extends Chunk311907.Ay.Store {
  initialize() {
    this.waitFor(a.Ay, s.Ay, o.default)
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
      approx_seconds_since_last_guild_role_mention: null == e ? null : t(m[e]),
      approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e])
    }
  }
}
let b = new y(Chunk73153.h, {
  CONNECTION_OPEN: g,
  MESSAGE_NOTIFICATION_SHOWN: E
})