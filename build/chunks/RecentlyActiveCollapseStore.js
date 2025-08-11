/** Chunk was on 4192 **/
/** chunk id: 798379, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
let u = new Set;
class s extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    u.clear(), null == e || e.guilds.forEach(e => u.add(e))
  }
  isCollapsed(e) {
    return u.has(e)
  }
  getState() {
    return {
      guilds: u
    }
  }
}
a(s, "displayName", "RecentlyActiveCollapseStore"), a(s, "persistKey", "RecentlyActiveCollapseStore");
let o = new s(Chunk570140.Z, {
  SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
    let {
      guildId: n,
      collapsed: t
    } = e;
    t ? u.add(n) : u.delete(n)
  }
})