/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(848479),
  i = n(909766);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class a {
  getStats() {
    let e = this.cpuHistogram.getReport(),
      t = this.memoryHistogram.getReport(),
      n = r.Z.getCumulativeCPUUsage(),
      i = null == this.startCPU || null == n ? void 0 : (n.usage - this.startCPU.usage) * 100 / ((n.sampleTime - this.startCPU.sampleTime) / 1e3);
    return {
      client_performance_cpu_percentile25: e.percentiles[25],
      client_performance_cpu_percentile50: e.percentiles[50],
      client_performance_cpu_percentile75: e.percentiles[75],
      client_performance_cpu_percentile90: e.percentiles[90],
      client_performance_cpu_percentile95: e.percentiles[95],
      client_performance_cpu_mean: null != i ? i : e.mean,
      client_performance_memory_percentile25: t.percentiles[25],
      client_performance_memory_percentile50: t.percentiles[50],
      client_performance_memory_percentile75: t.percentiles[75],
      client_performance_memory_percentile90: t.percentiles[90],
      client_performance_memory_percentile95: t.percentiles[95],
      client_performance_memory_min: t.min,
      client_performance_memory_max: t.max,
      client_performance_memory_mean: t.mean
    }
  }
  takeSample() {
    let e = r.Z.getCumulativeCPUUsage(),
      t = r.Z.getCurrentMemoryUsageKB();
    if (null != e) {
      let t = !0;
      if (null != this.lastCPU) {
        let n = e.sampleTime - this.lastCPU.sampleTime;
        if (n >= 1) {
          let t = (e.usage - this.lastCPU.usage) / (n / 1e3) * 100;
          this.cpuHistogram.addSample(t, n)
        } else t = !1
      }
      t && (this.lastCPU = e)
    } else {
      let e = r.Z.getCurrentCPUUsagePercent();
      null != e && this.cpuHistogram.addSample(e)
    }
    null != t && this.memoryHistogram.addSample(t)
  }
  constructor() {
    o(this, "cpuHistogram", new i.b), o(this, "memoryHistogram", new i.b), o(this, "startCPU", r.Z.getCumulativeCPUUsage()), o(this, "lastCPU", this.startCPU)
  }
}