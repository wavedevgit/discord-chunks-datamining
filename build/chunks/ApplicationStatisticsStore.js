/** Chunk was on 1272 **/
/** chunk id: 525395, original params: e,t,n (module,exports,require) **/
let r, i, l;
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var a, o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function u() {
  i = {}, r = {}, l = new Set
}
u();
class d extends(a = Chunk442837.ZP.Store) {
  getStatisticsForApplication(e) {
    return r[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = i[e];
    return !l.has(e) && (null == t || Date.now() - t > 36e5)
  }
}(o = "displayName") in d ? Object.defineProperty(d, o, {
  value: "ApplicationStatisticsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[o] = "ApplicationStatisticsStore";
let p = new d(Chunk570140.Z, {
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