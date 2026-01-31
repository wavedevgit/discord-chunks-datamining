/** Chunk was on 17534 **/
/** chunk id: 220706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk746080 = require("./746080.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {},
  u = {};
class d extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(s.A), c = null != (t = null == e ? true : e.selectedResourceChannelIdByGuildId) ? t : {}
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
o(d, "displayName", "GuildOnboardingHomeNavigationStore"), o(d, "persistKey", "GuildOnboardingHomeNavigationStore");
let h = new d(Chunk73153.h, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null == n || t === a.VV.GUILD_HOME) return;
    let r = s.A.getChannel(t),
      l = c[n],
      i = u[n];
    (null == r ? true : r.isThread()) && (null == r ? true : r.parent_id) != null && [i, l].includes(null == r ? true : r.parent_id) || (t !== l && delete c[n], t !== i && delete u[n])
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