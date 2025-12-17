/** Chunk was on web.js **/
/** chunk id: 894276, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E3: () => E,
  Re: () => u,
  fg: () => h,
  iZ: () => g
}), require("./953529.js"), require("./539854.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk668757 = require("./668757.js"),
  Chunk579092 = require("./579092.js"),
  Chunk750179 = require("./750179.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Chunk579092.Yd("LibdiscoreExperiments"),
  u = [],
  d = Symbol("unknown");
class f {
  getEnabledFeatureName() {
    let e = this.getCachedConfig();
    return true === module || module.treatmentId <= 0 ? null : "".concat(this.id, ":").concat(module.treatmentId)
  }
  getCachedConfig() {
    if (this.cachedConfig === d)
      if ((0, Chunk668757.X6)()) try {
        this.cachedConfig = (0, Chunk668757.Md)().getConfig(this.id)
      } catch (e) {
        this.cachedConfig = true, c.error("Error getting experiment config", module)
      } else this.cachedConfig = true;
    return this.cachedConfig
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
    l(this, "id", true), l(this, "inner", true), l(this, "cachedConfig", true), this.id = e, this.inner = null, this.cachedConfig = d, u.push(this)
  }
}
class p extends f {
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
    return null != module && 1 === module.treatmentId
  }
  constructor(e, t) {
    super(e), l(this, "label", true), this.label = t
  }
}
class _ extends f {
  getCachedBridgedStoreMode() {
    let e = this.getCachedConfig(),
      t = (() => {
        var t;
        switch (null != (t = null == module ? true : module.treatmentId) ? exports : false) {
          case 1:
            return "typescript-libdiscore-dual-read";
          case 2:
            return "libdiscore";
          default:
            return "typescript"
        }
      })();
    return (0, Chunk750179.k)(exports)
  }
  getEnabledFeatureName() {
    let e = this.getCachedBridgedStoreMode();
    return "typescript" === module ? null : "".concat(this.type, "Store[").concat(this.storeName, ",").concat(module, "]")
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
    super(e, r), l(this, "storeName", true), l(this, "type", true), this.storeName = t, this.type = n
  }
}
class m extends f {
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
    switch (null == module ? true : module.treatmentId) {
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
    return 0 !== module && (1 === module || !(this.emissionsCount >= this.MAX_EMISSIONS_PER_APP_LAUNCH) && Math.random() < module)
  }
  constructor(...e) {
    super(...e), l(this, "MAX_EMISSIONS_PER_APP_LAUNCH", 5), l(this, "emissionsCount", 0)
  }
}
let h = new _("2025-09-libdiscore-rawguildemojistore", "RawGuildEmojiStore", "Kkv"),
  g = new _("2025-10-libdiscore-guildstickersstore", "GuildStickersStore", "Kkv");
new m("2025-09-libdiscore-telemetry");
let E = new p("2025-11-defer-load-late-lazy-cache", "Allow react to render before lazy cache is loaded")