/** Chunk was on web.js **/
/** chunk id: 140828, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk379649 = require("./379649.js"),
  Chunk866960 = require("./866960.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
  return null != e ? Math.round(e) : t
}
class l {
  _initStats() {
    let e = {
      effectiveConnectionSpeedBuckets: {},
      connectionTypeBuckets: {}
    };
    return Object.values(Chunk981631.IWh).forEach(t => {
      e.connectionTypeBuckets[t] = 0
    }), Object.values(Chunk981631.IyS).forEach(t => {
      e.effectiveConnectionSpeedBuckets[t] = 0
    }), module
  }
  getStats() {
    let {
      _networkStats: e
    } = this;
    return {
      duration_connection_type_wifi: s(module.connectionTypeBuckets[Chunk981631.IWh.WIFI]),
      duration_connection_type_cellular: s(module.connectionTypeBuckets[Chunk981631.IWh.CELLULAR]),
      duration_connection_type_ethernet: s(module.connectionTypeBuckets[Chunk981631.IWh.ETHERNET]),
      duration_connection_type_bluetooth: s(module.connectionTypeBuckets[Chunk981631.IWh.BLUETOOTH]),
      duration_connection_type_other: s(module.connectionTypeBuckets[Chunk981631.IWh.OTHER]),
      duration_connection_type_unknown: s(module.connectionTypeBuckets[Chunk981631.IWh.UNKNOWN]),
      duration_connection_type_none: s(module.connectionTypeBuckets[Chunk981631.IWh.NONE]),
      duration_effective_connection_speed_2g: s(module.effectiveConnectionSpeedBuckets[Chunk981631.IyS.TWO_G]),
      duration_effective_connection_speed_3g: s(module.effectiveConnectionSpeedBuckets[Chunk981631.IyS.THREE_G]),
      duration_effective_connection_speed_4g: s(module.effectiveConnectionSpeedBuckets[Chunk981631.IyS.FOUR_G]),
      duration_effective_connection_speed_5g: s(module.effectiveConnectionSpeedBuckets[Chunk981631.IyS.FIVE_G]),
      duration_effective_connection_speed_unknown: s(module.effectiveConnectionSpeedBuckets[Chunk981631.IyS.UNKNOWN])
    }
  }
  incrementNetworkStats(e) {
    let t = (e - this._lastSampleTimestamp) / 1e3,
      n = i.Z.getEffectiveConnectionSpeed();
    n === o.IyS.SLOW_TWO_G && (n = o.IyS.TWO_G);
    let r = i.Z.getType();
    r === o.IWh.WIMAX && (r = o.IWh.WIFI), this._networkStats.effectiveConnectionSpeedBuckets[n] += t, this._networkStats.connectionTypeBuckets[r] += t, this._lastSampleTimestamp = e
  }
  constructor() {
    a(this, "_networkStats", true), a(this, "_lastSampleTimestamp", true), this._networkStats = this._initStats(), this._lastSampleTimestamp = (0, Chunk379649.zO)()
  }
}