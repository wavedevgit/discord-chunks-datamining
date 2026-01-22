/** Chunk was on web.js **/
/** chunk id: 499954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk729426 = require("./729426.js"),
  Chunk321034 = require("./321034.js"),
  Chunk687658 = require("./687658.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  getStats() {
    let e = this.cpuHistogram.getReport(),
      t = this.memoryHistogram.getReport(),
      n = i.A.getCumulativeCPUUsage(),
      r = null == this.startCPU || null == n ? true : (n.usage - this.startCPU.usage) * 100 / ((n.sampleTime - this.startCPU.sampleTime) / 1e3);
    return {
      client_performance_cpu_percentile25: e.percentiles[25],
      client_performance_cpu_percentile50: e.percentiles[50],
      client_performance_cpu_percentile75: e.percentiles[75],
      client_performance_cpu_percentile90: e.percentiles[90],
      client_performance_cpu_percentile95: e.percentiles[95],
      client_performance_cpu_mean: null != r ? r : e.mean,
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
    let e = i.A.getCumulativeCPUUsage(),
      t = i.A.getCurrentMemoryUsageKB();
    if (null != e) {
      let t = true;
      if (null != this.lastCPU) {
        let n = e.sampleTime - this.lastCPU.sampleTime;
        if (n >= 1) {
          let t = (e.usage - this.lastCPU.usage) / (n / 1e3) * 100;
          this.cpuHistogram.addSample(t, n)
        } else t = false
      }
      t && (this.lastCPU = e)
    } else {
      let e = i.A.getCurrentCPUUsagePercent();
      null != e && this.cpuHistogram.addSample(e)
    }
    null != t && this.memoryHistogram.addSample(t)
  }
  async getCurrentBattery() {
    try {
      let {
        batteryLevel: e
      } = await (0, r.S9)({
        fallback: false
      });
      return e
    } catch (e) {
      return null
    }
  }
  async setLastBattery() {
    this.lastBattery = await this.getCurrentBattery()
  }
  async getBatteryLevelStats() {
    let e = await this.getCurrentBattery();
    return null == this.lastBattery || null == e ? {
      startBattery: this.lastBattery,
      currentBattery: e,
      batteryUsageRounded: null
    } : {
      startBattery: this.lastBattery,
      currentBattery: e,
      batteryUsageRounded: Math.round((e - this.lastBattery) * 1e3) / 1e3
    }
  }
  constructor() {
    s(this, "cpuHistogram", new a.d), s(this, "memoryHistogram", new a.d), s(this, "startCPU", i.A.getCumulativeCPUUsage()), s(this, "lastCPU", this.startCPU), s(this, "lastBattery", null)
  }
}