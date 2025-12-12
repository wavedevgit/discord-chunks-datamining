/** Chunk was on web.js **/
/** chunk id: 936349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./35282.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js");

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
  f = +Chunk70956.Z.Millis.HOUR;

function p(e) {
  e.latencyRankedRegions.length > 0 && (d.lastGeoRankedOrder = e.geoRankedRegions, d.preferredRegions = e.latencyRankedRegions), d.lastTestTimestamp = Date.now()
}
class _ extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    d = null != e ? e : u
  }
  shouldIncludePreferredRegion() {
    return null != d.preferredRegions
  }
  getPreferredRegion() {
    var e, t;
    return null != (t = null == (e = d.preferredRegions) ? true : module[0]) ? exports : null
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
    return null === d.preferredRegions || !o().isEqual(e, null != (t = d.lastGeoRankedOrder) ? t : []) || Date.now() - (null != (n = d.lastTestTimestamp) ? n : 0) >= f
  }
}
c(_, "displayName", "RTCRegionStore"), c(_, "persistKey", "RTCRegionStore"), c(_, "migrations", [e => (e.preferredRegion ? e.preferredRegions = [e.preferredRegion] : e.preferredRegions = null, delete e.preferredRegion, e)]);
let m = new _(Chunk570140.Z, {
  RTC_LATENCY_TEST_COMPLETE: p
})