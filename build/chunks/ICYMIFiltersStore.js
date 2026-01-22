/** Chunk was on 21738 **/
/** chunk id: 116127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk335934 = require("./335934.js"),
  Chunk596720 = require("./596720.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {};
class u extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    c = null != e ? e : {}
  }
  filterStaffContent() {
    returntrue === c.filterStaffContent
  }
  onlyShowRecentGeneratedCandidates() {
    return !!(0, a.o$)("processRawItems", false).contentGenerationEnabled && true === c.onlyShowRecentGeneratedCandidates
  }
  getDoubleTapBehavior() {
    var e;
    return null != (e = c.doubleTapBehavior) ? e : s.Ai.DEFAULT
  }
  getState() {
    return c
  }
  getUserAgnosticState() {
    return c
  }
}
o(u, "displayName", "ICYMIFiltersStore"), o(u, "persistKey", "ICYMIFiltersStore");
let d = new u(Chunk73153.h, {
  SET_ICYMI_FILTERS: function(e) {
    c = e.filters
  }
})