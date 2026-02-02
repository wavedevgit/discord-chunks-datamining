/** Chunk was on web.js **/
/** chunk id: 548965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ML: () => l,
  P4: () => _,
  iQ: () => m,
  pd: () => h
}), require("./228524.js"), require("./321073.js"), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk306173 = require("./306173.js"),
  Chunk723426 = require("./723426.js");

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
    return this.cachedConfig === c && ((0, a.xd)() ? this.cachedConfig = (0, a.Ih)().getConfig(this.id) : this.cachedConfig = true), this.cachedConfig
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
    return null == e || false === e.treatmentId ? this.defaultValue : 1 === e.treatmentId
  }
  constructor(e, t, n = false) {
    super(e), s(this, "label", true), s(this, "defaultValue", true), this.label = t, this.defaultValue = n
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
    return (0, o.E)(t)
  }
  getEnabledFeatureName() {
    let e = this.getCachedBridgedStoreMode();
    return "typescript" === e ? null : "BridgedStore[".concat(this.storeName, ",").concat(e, "]")
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
  constructor(e, t, n) {
    super(e, n), s(this, "storeName", true), this.storeName = t
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
let _ = new f("2026-01-libdiscore-batch-store-refactor", "batch-store-refactor"),
  h = new p("2025-09-libdiscore-telemetry"),
  m = new d("2025-11-defer-load-late-lazy-cache", "Allow react to render before lazy cache is loaded")