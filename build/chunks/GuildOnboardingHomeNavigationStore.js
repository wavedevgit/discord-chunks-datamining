/** Chunk was on web.js **/
/** chunk id: 637271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk176505 = require("./176505.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {},
  u = {};

function d(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  if (null == n || t === s.oC.GUILD_HOME) return;
  let r = a.Z.getChannel(t),
    i = c[n],
    o = u[n];
  (null == r ? true : r.isThread()) && (null == r ? true : r.parent_id) != null && [o, i].includes(null == r ? true : r.parent_id) || (t !== i && delete c[n], t !== o && delete u[n])
}

function f(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  null == t ? delete u[n] : c[n] = t, delete u[n]
}

function _(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  delete c[n], u[n] = t
}
class p extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    c = null != (t = null == e ? true : e.selectedResourceChannelIdByGuildId) ? t : {}
  }
  getState() {
    return {
      selectedResourceChannelIdByGuildId: c
    }
  }
  getSelectedResourceChannelId(e) {
    return null == e ? null : c[e]
  }
  getHomeNavigationChannelId(e) {
    var t;
    return null == e ? null : null != (t = c[e]) ? t : u[e]
  }
}
l(p, "displayName", "GuildOnboardingHomeNavigationStore"), l(p, "persistKey", "GuildOnboardingHomeNavigationStore");
let h = new p(Chunk570140.Z, {
  CHANNEL_SELECT: d,
  SELECT_HOME_RESOURCE_CHANNEL: f,
  SELECT_NEW_MEMBER_ACTION_CHANNEL: _
})