/** Chunk was on 87665 **/
/** chunk id: 864133, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {
    lastSeenInfos: {}
  },
  s = o;
class c extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    s = null != e ? e : o
  }
  getState() {
    return s
  }
  getGuildLastSeenInfo(e) {
    var t;
    return null != (t = s.lastSeenInfos[e]) ? t : null
  }
}
i(c, "displayName", "GuildTagChangedCoachmarkStore"), i(c, "persistKey", "GuildTagChangedCoachmarkStore");
let d = new c(Chunk570140.Z, {
  GUILD_TAG_CHANGED_COACHMARK_SEEN: function(e) {
    let {
      guildId: t,
      lastSeenInfo: n
    } = e;
    s.lastSeenInfos[t] = n
  },
  LOGOUT: function() {
    s = o
  }
})