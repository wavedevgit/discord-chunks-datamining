/** Chunk was on 1272 **/
/** chunk id: 537883, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk331114 = require("./331114.js"),
  Chunk356164 = require("./356164.js");
let c = [];

function u() {
  c = []
}
class d extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(o.Z, s.Z)
  }
  getVisibleTabs() {
    return c
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "GlobalDiscoveryServersSearchLayoutStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "GlobalDiscoveryServersSearchLayoutStore";
let p = new d(Chunk570140.Z, {
  CONNECTION_OPEN: u,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: u,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function(e) {
    let {
      query: t
    } = e, n = o.Z.getCounts(t);
    if (null == n) returnfalse;
    c = n
  }
})