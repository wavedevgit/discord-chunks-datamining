/** Chunk was on web.js **/
/** chunk id: 894276, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E3: () => h,
  Re: () => l,
  fg: () => _,
  iZ: () => m
}), require("./953529.js"), require("./539854.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk668757 = require("./668757.js"),
  Chunk750179 = require("./750179.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = [],
  c = Symbol("unknown");
class u {
  getEnabledFeatureName() {
    let e = this.getCachedConfig();
    return true === e || e.treatmentId <= 0 ? null : "".concat(this.id, ":").concat(e.treatmentId)
  }
  getCachedConfig() {
    return this.cachedConfig === c && ((0, a.un)() ? this.cachedConfig = (0, a.Md)().getConfig(this.id) : this.cachedConfig = true), this.cachedConfig
  }
  setExperiment(e) {
    this.inner = e
  }
  getCurrentConfig() {
    return (i()(null != this.inner, "experiment must be set before calling getCurrentConfig"), "getCurrentConfig" in this.inner) ? this.inner.getCurrentConfig({
      location: "default"
    }) : this.inner.getConfig({
      location: "default"
    })
  }
  constructor(e, t) {
    s(this, "id", true), s(this, "inner", true), s(this, "cachedConfig", true), this.id = e, this.inner = null, this.cachedConfig = c, l.push(this)
  }
}
class d extends u {
  getLabel() {
    return this.label
  }
  getTreatments() {
    return [{
      treatmentId: 0
    }, {
      treatmentId: 1
    }]
  }
  getCachedEnabled() {
    let e = this.getCachedConfig();
    return null != e && 1 === e.treatmentId
  }
  constructor(e, t) {
    super(e), s(this, "label", true), this.label = t
  }
}
class f extends u {
  getCachedBridgedStoreMode() {
    let e = this.getCachedConfig(),
      t = (() => {
        var t;
        switch (null != (t = null == e ? true : e.treatmentId) ? t : false) {
          case 1:
            return "typescript-libdiscore-dual-read";
          case 2:
            return "libdiscore";
          default:
            return "typescript"
        }
      })();
    return (0, o.k)(t)
  }
  getEnabledFeatureName() {
    let e = this.getCachedBridgedStoreMode();
    return "typescript" === e ? null : "".concat(this.type, "Store[").concat(this.storeName, ",").concat(e, "]")
  }
  getLabel() {
    return "libdiscore '".concat(this.storeName, "' Migration")
  }
  getTreatments() {
    return [{
      treatmentId: 0
    }, {
      treatmentId: 1
    }, {
      treatmentId: 2
    }]
  }
  constructor(e, t, n, r) {
    super(e, r), s(this, "storeName", true), s(this, "type", true), this.storeName = t, this.type = n
  }
}
class p extends u {
  getLabel() {
    return "libdiscore Telemetry"
  }
  getTreatments() {
    return [{
      treatmentId: 0
    }, {
      treatmentId: 1
    }, {
      treatmentId: 2
    }, {
      treatmentId: 3
    }]
  }
  getMetricsSampleRate() {
    let e = this.getCachedConfig();
    switch (null == e ? true : e.treatmentId) {
      case 1:
        return .01;
      case 2:
        return .05;
      case 3:
        return 1;
      default:
        return 0
    }
  }
  didEmit() {
    this.emissionsCount++
  }
  shouldCollectMetrics() {
    let e = this.getMetricsSampleRate();
    return 0 !== e && (1 === e || !(this.emissionsCount >= this.MAX_EMISSIONS_PER_APP_LAUNCH) && Math.random() < e)
  }
  constructor(...e) {
    super(...e), s(this, "MAX_EMISSIONS_PER_APP_LAUNCH", 5), s(this, "emissionsCount", 0)
  }
}
let _ = new f("2025-09-libdiscore-rawguildemojistore", "RawGuildEmojiStore", "Kkv"),
  m = new f("2025-10-libdiscore-guildstickersstore", "GuildStickersStore", "Kkv");
new p("2025-09-libdiscore-telemetry");
let h = new d("2025-11-defer-load-late-lazy-cache", "Allow react to render before lazy cache is loaded")