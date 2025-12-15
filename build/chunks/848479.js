/** Chunk was on web.js **/
/** chunk id: 848479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk77450 = require("./77450.js"),
  Chunk998502 = require("./998502.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Chunk710845.Z("ProcessUtilsElectron");
class c extends Chunk77450.h {
  setupReportingTimer() {
    var e, t;
    let n = null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.processUtils) ? true : module.setMemoryInformation;
    if (null == require) return void l.log("setMemoryInformation not available.");

    function i(e) {
      return Math.ceil(e / 1024)
    }(null == (t = performance.memory) ? true : exports.usedJSHeapSize) == null && l.error("usedJSHeapSize is not available."), setInterval(() => {
      var e, t, r;
      let a = null != (t = null == (e = performance.memory) ? true : module.usedJSHeapSize) ? exports : 0;
      require({
        memoryUsageKB: null != (r = this.lastMemoryUsageKB) ? Chunk579806 : 0,
        usedJSHeapSizeKB: Chunk710845(Chunk77450)
      })
    }, 1e4)
  }
  getProcessUptime() {
    var e, t;
    return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getProcessUptime) ? true : module.call(exports)
  }
  getCurrentCPUUsagePercent() {
    var e, t;
    return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getCurrentCPUUsagePercent) ? true : module.call(exports)
  }
  getCumulativeCPUUsage() {
    var e, t;
    return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getCumulativeCPUUsage) ? true : module.call(exports)
  }
  getCurrentMemoryUsageKB() {
    let e = c.getCurrentMemoryUsageKBCore();
    return this.lastMemoryUsageKB = module, module
  }
  static getCurrentMemoryUsageKBCore() {
    try {
      let e = Chunk998502.ZP.getDiscordMemoryUsage();
      if (null == module) return 0;
      let t = Object.values(module).reduce((e, t) => e + t, 0);
      return Math.ceil(exports / 1024)
    } catch (e) {
      return 0
    }
  }
  getMemoryUsageDetails() {
    return Chunk998502.ZP.getDiscordMemoryUsage()
  }
  getMemoryUsageElectronRenderer() {
    try {
      return Chunk998502.ZP.getDiscordMemoryUsageElectronRenderer()
    } catch (e) {
      return null
    }
  }
  getMemoryPrivateUsageElectronRenderer() {
    try {
      return Chunk998502.ZP.getDiscordMemoryPrivateUsageElectronRenderer()
    } catch (e) {
      return null
    }
  }
  getMemoryUsageElectronRendererUsedHeapSize() {
    var e, t;
    return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getUsedHeapSize) ? true : module.call(exports)
  }
  getMemoryHeapStats() {
    var e, t;
    return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getHeapStats) ? true : module.call(exports)
  }
  getBlinkMemoryInfo() {
    var e, t;
    return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getBlinkMemoryInfo) ? true : module.call(exports)
  }
  getMemoryUsageElectronProcessTypeDetails() {
    try {
      return Chunk998502.ZP.getDiscordMemoryUsageElectronProcessTypeDetails()
    } catch (e) {
      return null
    }
  }
  enablePerfMemoryHooks(e) {
    try {
      return o.ZP.enablePerfMemoryHooks(e)
    } catch (e) {
      return null
    }
  }
  disablePerfMemoryHooks() {
    try {
      return Chunk998502.ZP.disablePerfMemoryHooks()
    } catch (e) {
      return null
    }
  }
  getPerfAttributedMemory() {
    try {
      return Chunk998502.ZP.getPerfAttributedMemory()
    } catch (e) {
      return null
    }
  }
  getPerfAttributedMemoryCallstacks(e) {
    try {
      return o.ZP.getPerfAttributedMemoryCallstacks(e)
    } catch (e) {
      return null
    }
  }
  getPerfAttributedMemoryStats() {
    try {
      return Chunk998502.ZP.getPerfAttributedMemoryStats()
    } catch (e) {
      return null
    }
  }
  enablePAMemoryProfiler(e) {
    try {
      var t;
      let n = null === r.Z || true === r.Z || null == (t = r.Z.processUtils) ? true : t.enablePAMemoryProfiler;
      if (true === n) return null;
      return n(e), true
    } catch (e) {
      return null
    }
  }
  disablePAMemoryProfiler() {
    try {
      var e;
      let t = null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.processUtils) ? true : module.disablePAMemoryProfiler;
      if (true === exports) return null;
      return exports(), true
    } catch (e) {
      return null
    }
  }
  getPerfAttributedPAMemory() {
    try {
      var e, t;
      return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getPerfAttributedPAMemory) ? true : module.call(exports)
    } catch (e) {
      return null
    }
  }
  getPerfAttributedPAMemoryCallstacks(e) {
    try {
      var t, n;
      return null === r.Z || true === r.Z || null == (n = r.Z.processUtils) || null == (t = n.getPerfAttributedPAMemoryCallstacks) ? true : t.call(n, e)
    } catch (e) {
      return null
    }
  }
  getPartitionAllocatorStats() {
    try {
      var e, t;
      return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getPartitionAllocatorStats) ? true : module.call(exports)
    } catch (e) {
      return null
    }
  }
  enableProfilingV8Heap(e) {
    try {
      var t, n;
      return null === r.Z || true === r.Z || null == (n = r.Z.processUtils) || null == (t = n.enableProfilingV8Heap) ? true : t.call(n, e)
    } catch (e) {
      return
    }
  }
  disableProfilingV8Heap() {
    try {
      var e, t;
      return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.disableProfilingV8Heap) ? true : module.call(exports)
    } catch (e) {
      return
    }
  }
  getProfilerV8MemoryCallstacks() {
    try {
      var e, t;
      return null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getProfilerV8MemoryCallstacks) ? true : module.call(exports)
    } catch (e) {
      return null
    }
  }
  constructor() {
    var e, t;
    super(), s(this, "lastMemoryUsageKB", true), this.cpuCoreCount = null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getCPUCoreCount) ? true : module.call(exports), this.setupReportingTimer()
  }
}
let u = new c