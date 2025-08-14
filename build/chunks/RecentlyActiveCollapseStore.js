/** Chunk was on 62117 **/
/** chunk id: 798379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = new Set;
class d extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    a.clear(), null == e || e.guilds.forEach(e => a.add(e))
  }
  isCollapsed(e) {
    return a.has(e)
  }
  getState() {
    return {
      guilds: a
    }
  }
}
r(d, "displayName", "RecentlyActiveCollapseStore"), r(d, "persistKey", "RecentlyActiveCollapseStore");
let o = new d(Chunk570140.Z, {
  SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
    let {
      guildId: t,
      collapsed: n
    } = e;
    n ? a.add(t) : a.delete(t)
  }
})