/** Chunk was on 30202 **/
/** chunk id: 864133, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {
    lastSeenInfos: {}
  },
  o = l;
class c extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    o = null != e ? e : l
  }
  getState() {
    return o
  }
  getGuildLastSeenInfo(e) {
    var t;
    return null != (t = o.lastSeenInfos[e]) ? t : null
  }
}
a(c, "displayName", "GuildTagChangedCoachmarkStore"), a(c, "persistKey", "GuildTagChangedCoachmarkStore");
let d = new c(Chunk570140.Z, {
  GUILD_TAG_CHANGED_COACHMARK_SEEN: function(e) {
    let {
      guildId: t,
      lastSeenInfo: n
    } = e;
    o.lastSeenInfos[t] = n
  },
  LOGOUT: function() {
    o = l
  }
})