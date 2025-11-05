/** Chunk was on 1272 **/
/** chunk id: 769917, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk518929 = require("./518929.js"),
  Chunk797394 = require("./797394.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {};
class u extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    c = null != e ? e : {}
  }
  filterStaffContent() {
    returntrue === c.filterStaffContent
  }
  onlyShowRecentGeneratedCandidates() {
    return !!(0, Chunk518929.q3)("processRawItems", false).contentGenerationEnabled && true === c.onlyShowRecentGeneratedCandidates
  }
  getDoubleTapBehavior() {
    var e;
    return null != (e = c.doubleTapBehavior) ? module : Chunk797394.m.DEFAULT
  }
  getState() {
    return c
  }
  getUserAgnosticState() {
    return c
  }
}
o(u, "displayName", "ICYMIFiltersStore"), o(u, "persistKey", "ICYMIFiltersStore");
let d = new u(Chunk570140.Z, {
  SET_ICYMI_FILTERS: function(e) {
    c = e.filters
  }
})