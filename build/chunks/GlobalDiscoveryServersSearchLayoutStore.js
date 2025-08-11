/** Chunk was on 1272 **/
/** chunk id: 537883, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk331114 = require("./331114.js"),
  Chunk356164 = require("./356164.js");
let u = [];

function d() {
  u = []
}
class p extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk331114.Z, Chunk356164.Z)
  }
  getVisibleTabs() {
    return u
  }
}
i = "GlobalDiscoveryServersSearchLayoutStore", (r = "displayName") in p ? Object.defineProperty(p, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = i;
let h = new p(Chunk570140.Z, {
  CONNECTION_OPEN: d,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: d,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function(e) {
    let {
      query: t
    } = e, n = s.Z.getCounts(t);
    if (null == n) returnfalse;
    u = n
  }
})