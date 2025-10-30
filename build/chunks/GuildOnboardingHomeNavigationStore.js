/** Chunk was on 13873 **/
/** chunk id: 637271, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk176505 = require("./176505.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {},
  u = {};
class d extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(a.Z), c = null != (t = null == e ? true : e.selectedResourceChannelIdByGuildId) ? t : {}
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
s(d, "displayName", "GuildOnboardingHomeNavigationStore"), s(d, "persistKey", "GuildOnboardingHomeNavigationStore");
let p = new d(Chunk570140.Z, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null == n || t === o.oC.GUILD_HOME) return;
    let r = a.Z.getChannel(t),
      i = c[n],
      l = u[n];
    (null == r ? true : r.isThread()) && (null == r ? true : r.parent_id) != null && [l, i].includes(null == r ? true : r.parent_id) || (t !== i && delete c[n], t !== l && delete u[n])
  },
  SELECT_HOME_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    null == t ? delete u[n] : c[n] = t, delete u[n]
  },
  SELECT_NEW_MEMBER_ACTION_CHANNEL: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    delete c[n], u[n] = t
  }
})