/** Chunk was on web.js **/
/** chunk id: 798379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Set;

function l(e) {
  let {
    guildId: t,
    collapsed: n
  } = e;
  n ? s.add(t) : s.delete(t)
}
class c extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    s.clear(), null == e || e.guilds.forEach(e => s.add(e))
  }
  isCollapsed(e) {
    return s.has(e)
  }
  getState() {
    return {
      guilds: s
    }
  }
}
o(c, "displayName", "RecentlyActiveCollapseStore"), o(c, "persistKey", "RecentlyActiveCollapseStore");
let u = new c(Chunk570140.Z, {
  SET_RECENTLY_ACTIVE_COLLAPSED: l
})