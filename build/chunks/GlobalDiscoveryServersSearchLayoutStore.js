/** Chunk was on 21738 **/
/** chunk id: 499118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk823448 = require("./823448.js"),
  Chunk351022 = require("./351022.js");
let c = [];

function u() {
  c = []
}
class d extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A, o.A)
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
let p = new d(Chunk73153.h, {
  CONNECTION_OPEN: u,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: u,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function(e) {
    let {
      query: t
    } = e, n = s.A.getCounts(t);
    if (null == n) returnfalse;
    c = n
  }
})