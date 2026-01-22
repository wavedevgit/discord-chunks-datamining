/** Chunk was on web.js **/
/** chunk id: 873985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./747238.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {
    preferredRegions: null,
    lastTestTimestamp: null,
    lastGeoRankedOrder: null
  },
  d = u,
  f = +Chunk927813.A.Millis.HOUR;

function p(e) {
  e.latencyRankedRegions.length > 0 && (d.lastGeoRankedOrder = e.geoRankedRegions, d.preferredRegions = e.latencyRankedRegions), d.lastTestTimestamp = Date.now()
}
class _ extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    d = null != e ? e : u
  }
  shouldIncludePreferredRegion() {
    return null != d.preferredRegions
  }
  getPreferredRegion() {
    var e, t;
    return null != (e = null == (t = d.preferredRegions) ? true : t[0]) ? e : null
  }
  getPreferredRegions() {
    return d.preferredRegions
  }
  getRegion(e) {
    if (null != e) return e.substr(0, e.search(/\d/))
  }
  getUserAgnosticState() {
    return d
  }
  shouldPerformLatencyTest(e) {
    var t, n;
    return null === d.preferredRegions || !a().isEqual(e, null != (t = d.lastGeoRankedOrder) ? t : []) || Date.now() - (null != (n = d.lastTestTimestamp) ? n : 0) >= f
  }
}
c(_, "displayName", "RTCRegionStore"), c(_, "persistKey", "RTCRegionStore"), c(_, "migrations", [e => (e.preferredRegion ? e.preferredRegions = [e.preferredRegion] : e.preferredRegions = null, delete e.preferredRegion, e)]);
let h = new _(Chunk73153.h, {
  RTC_LATENCY_TEST_COMPLETE: p
})