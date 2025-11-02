/** Chunk was on 28532 **/
/** chunk id: 864133, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
    lastSeenInfos: {}
  },
  o = s;
class c extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    o = null != e ? e : s
  }
  getState() {
    return o
  }
  getGuildLastSeenInfo(e) {
    var t;
    return null != (t = o.lastSeenInfos[e]) ? t : null
  }
}
l(c, "displayName", "GuildTagChangedCoachmarkStore"), l(c, "persistKey", "GuildTagChangedCoachmarkStore");
let d = new c(Chunk570140.Z, {
  GUILD_TAG_CHANGED_COACHMARK_SEEN: function(e) {
    let {
      guildId: t,
      lastSeenInfo: n
    } = e;
    o.lastSeenInfos[t] = n
  },
  LOGOUT: function() {
    o = s
  }
})