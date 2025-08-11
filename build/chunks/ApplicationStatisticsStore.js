/** Chunk was on 1272 **/
/** chunk id: 525395, original params: e,t,n (module,exports,require) **/
let r, i, l;
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var a, o, s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function d() {
  i = {}, r = {}, l = new Set
}
d();
class p extends(a = Chunk442837.ZP.Store) {
  getStatisticsForApplication(e) {
    return r[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = i[e];
    return !l.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
s = "ApplicationStatisticsStore", (o = "displayName") in p ? Object.defineProperty(p, o, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : p[o] = s;
let h = new p(Chunk570140.Z, {
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
  LOGOUT: d
})