/** Chunk was on 87557 **/
/** chunk id: 334165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var a, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function i(e, t, n) {
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
class c extends(a = Chunk311907.Ay.PersistedStore) {
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
i(c, "displayName", "GuildTagChangedCoachmarkStore"), i(c, "persistKey", "GuildTagChangedCoachmarkStore");
let d = new c(Chunk73153.h, {
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