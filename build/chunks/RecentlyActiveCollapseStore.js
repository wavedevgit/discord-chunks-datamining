/** Chunk was on 44411 **/
/** chunk id: 50827, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Set;
class a extends(i = Chunk311907.Ay.PersistedStore) {
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
let d = new a(Chunk73153.h, {
  SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
    let {
      guildId: t,
      collapsed: n
    } = e;
    n ? o.add(t) : o.delete(t)
  }
})