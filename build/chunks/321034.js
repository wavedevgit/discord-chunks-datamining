/** Chunk was on web.js **/
/** chunk id: 321034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk77729 = require("./77729.js"),
  Chunk626584 = require("./626584.js"),
  Chunk832213 = require("./832213.js"),
  Chunk837921 = require("./837921.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Chunk626584.A("ProcessUtilsElectron");
class c extends Chunk832213.D {
  setupReportingTimer() {
    var e, t;
    let n = null === r.A || true === r.A || null == (e = r.A.processUtils) ? true : e.setMemoryInformation;
    if (null == n) return void l.log("setMemoryInformation not available.");

    function i(e) {
      return Math.ceil(e / 1024)
    }(null == (t = performance.memory) ? true : t.usedJSHeapSize) == null && l.error("usedJSHeapSize is not available."), setInterval(() => {
      var e, t, r;
      let a = null != (e = null == (r = performance.memory) ? true : r.usedJSHeapSize) ? e : 0;
      n({
        memoryUsageKB: null != (t = this.lastMemoryUsageKB) ? t : 0,
        usedJSHeapSizeKB: i(a)
      })
    }, 1e4)
  }
  getProcessUptime() {
    var e, t;
    return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getProcessUptime) ? true : e.call(t)
  }
  getCurrentCPUUsagePercent() {
    var e, t;
    return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getCurrentCPUUsagePercent) ? true : e.call(t)
  }
  getCumulativeCPUUsage() {
    var e, t;
    return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getCumulativeCPUUsage) ? true : e.call(t)
  }
  getCurrentMemoryUsageKB() {
    let e = c.getCurrentMemoryUsageKBCore();
    return this.lastMemoryUsageKB = e, e
  }
  static getCurrentMemoryUsageKBCore() {
    try {
      let e = s.Ay.getDiscordMemoryUsage();
      if (null == e) return 0;
      let t = Object.values(e).reduce((e, t) => e + t, 0);
      return Math.ceil(t / 1024)
    } catch (e) {
      return 0
    }
  }
  getMemoryUsageDetails() {
    return s.Ay.getDiscordMemoryUsage()
  }
  getMemoryUsageElectronRenderer() {
    try {
      return s.Ay.getDiscordMemoryUsageElectronRenderer()
    } catch (e) {
      return null
    }
  }
  getMemoryPrivateUsageElectronRenderer() {
    try {
      return s.Ay.getDiscordMemoryPrivateUsageElectronRenderer()
    } catch (e) {
      return null
    }
  }
  getMemoryUsageElectronRendererUsedHeapSize() {
    var e, t;
    return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getUsedHeapSize) ? true : e.call(t)
  }
  getMemoryHeapStats() {
    var e, t;
    return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getHeapStats) ? true : e.call(t)
  }
  getBlinkMemoryInfo() {
    var e, t;
    return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getBlinkMemoryInfo) ? true : e.call(t)
  }
  getMemoryUsageElectronProcessTypeDetails() {
    try {
      return s.Ay.getDiscordMemoryUsageElectronProcessTypeDetails()
    } catch (e) {
      return null
    }
  }
  enablePerfMemoryHooks(e) {
    try {
      return s.Ay.enablePerfMemoryHooks(e)
    } catch (e) {
      return null
    }
  }
  disablePerfMemoryHooks() {
    try {
      return s.Ay.disablePerfMemoryHooks()
    } catch (e) {
      return null
    }
  }
  getPerfAttributedMemory() {
    try {
      return s.Ay.getPerfAttributedMemory()
    } catch (e) {
      return null
    }
  }
  getPerfAttributedMemoryCallstacks(e) {
    try {
      return s.Ay.getPerfAttributedMemoryCallstacks(e)
    } catch (e) {
      return null
    }
  }
  getPerfAttributedMemoryStats() {
    try {
      return s.Ay.getPerfAttributedMemoryStats()
    } catch (e) {
      return null
    }
  }
  enablePAMemoryProfiler(e) {
    try {
      var t;
      let n = null === r.A || true === r.A || null == (t = r.A.processUtils) ? true : t.enablePAMemoryProfiler;
      if (true === n) return null;
      return n(e), true
    } catch (e) {
      return null
    }
  }
  disablePAMemoryProfiler() {
    try {
      var e;
      let t = null === r.A || true === r.A || null == (e = r.A.processUtils) ? true : e.disablePAMemoryProfiler;
      if (true === t) return null;
      return t(), true
    } catch (e) {
      return null
    }
  }
  getPerfAttributedPAMemory() {
    try {
      var e, t;
      return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getPerfAttributedPAMemory) ? true : e.call(t)
    } catch (e) {
      return null
    }
  }
  getPerfAttributedPAMemoryCallstacks(e) {
    try {
      var t, n;
      return null === r.A || true === r.A || null == (n = r.A.processUtils) || null == (t = n.getPerfAttributedPAMemoryCallstacks) ? true : t.call(n, e)
    } catch (e) {
      return null
    }
  }
  getPartitionAllocatorStats() {
    try {
      var e, t;
      return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getPartitionAllocatorStats) ? true : e.call(t)
    } catch (e) {
      return null
    }
  }
  enableProfilingV8Heap(e) {
    try {
      var t, n;
      return null === r.A || true === r.A || null == (n = r.A.processUtils) || null == (t = n.enableProfilingV8Heap) ? true : t.call(n, e)
    } catch (e) {
      return
    }
  }
  disableProfilingV8Heap() {
    try {
      var e, t;
      return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.disableProfilingV8Heap) ? true : e.call(t)
    } catch (e) {
      return
    }
  }
  getProfilerV8MemoryCallstacks() {
    try {
      var e, t;
      return null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getProfilerV8MemoryCallstacks) ? true : e.call(t)
    } catch (e) {
      return null
    }
  }
  constructor() {
    var e, t;
    super(), o(this, "lastMemoryUsageKB", true), this.cpuCoreCount = null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getCPUCoreCount) ? true : e.call(t), this.setupReportingTimer()
  }
}
let u = new c