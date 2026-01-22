/** Chunk was on 21738 **/
/** chunk id: 609276, original params: e,t,n (module,exports,require) **/
let r, i, l;
require.d(exports, {
  A: () => p
}), require("./896048.js");
var a, s, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function u() {
  i = {}, r = {}, l = new Set
}
u();
class d extends(a = Chunk311907.Ay.Store) {
  getStatisticsForApplication(e) {
    return r[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = i[e];
    return !l.has(e) && (null == t || Date.now() - t > 36e5)
  }
}(s = "displayName") in d ? Object.defineProperty(d, s, {
  value: "ApplicationStatisticsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[s] = "ApplicationStatisticsStore";
let p = new d(Chunk73153.h, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: t
    } = e;
    l.add(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e;
    l.delete(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t,
      applicationId: n
    } = e;
    i[n] = Date.now(), l.delete(n), r[n] = t
  },
  LOGOUT: u
})