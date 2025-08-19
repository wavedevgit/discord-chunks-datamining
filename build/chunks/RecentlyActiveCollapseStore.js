/** Chunk was on 31930 **/
/** chunk id: 798379, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Set;
class a extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    o.clear(), null == e || e.guilds.forEach(e => o.add(e))
  }
  isCollapsed(e) {
    return o.has(e)
  }
  getState() {
    return {
      guilds: o
    }
  }
}
l(a, "displayName", "RecentlyActiveCollapseStore"), l(a, "persistKey", "RecentlyActiveCollapseStore");
let c = new a(Chunk570140.Z, {
  SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
    let {
      guildId: t,
      collapsed: n
    } = e;
    n ? o.add(t) : o.delete(t)
  }
})