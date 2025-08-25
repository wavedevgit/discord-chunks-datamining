/** Chunk was on web.js **/
/** chunk id: 179654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk934458 = require("./934458.js"),
  Chunk848479 = require("./848479.js"),
  Chunk909766 = require("./909766.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s {
  getStats() {
    let e = this.cpuHistogram.getReport(),
      t = this.memoryHistogram.getReport(),
      n = Chunk848479.Z.getCumulativeCPUUsage(),
      r = null == this.startCPU || null == require ? true : (require.usage - this.startCPU.usage) * 100 / ((require.sampleTime - this.startCPU.sampleTime) / 1e3);
    return {
      client_performance_cpu_percentile25: module.percentiles[25],
      client_performance_cpu_percentile50: module.percentiles[50],
      client_performance_cpu_percentile75: module.percentiles[75],
      client_performance_cpu_percentile90: module.percentiles[90],
      client_performance_cpu_percentile95: module.percentiles[95],
      client_performance_cpu_mean: null != Chunk934458 ? Chunk934458 : module.mean,
      client_performance_memory_percentile25: exports.percentiles[25],
      client_performance_memory_percentile50: exports.percentiles[50],
      client_performance_memory_percentile75: exports.percentiles[75],
      client_performance_memory_percentile90: exports.percentiles[90],
      client_performance_memory_percentile95: exports.percentiles[95],
      client_performance_memory_min: exports.min,
      client_performance_memory_max: exports.max,
      client_performance_memory_mean: exports.mean
    }
  }
  takeSample() {
    let e = Chunk848479.Z.getCumulativeCPUUsage(),
      t = Chunk848479.Z.getCurrentMemoryUsageKB();
    if (null != module) {
      let t = true;
      if (null != this.lastCPU) {
        let n = module.sampleTime - this.lastCPU.sampleTime;
        if (require >= 1) {
          let t = (module.usage - this.lastCPU.usage) / (require / 1e3) * 100;
          this.cpuHistogram.addSample(exports, require)
        } else t = false
      }
      exports && (this.lastCPU = module)
    } else {
      let e = Chunk848479.Z.getCurrentCPUUsagePercent();
      null != module && this.cpuHistogram.addSample(module)
    }
    null != exports && this.memoryHistogram.addSample(exports)
  }
  async getCurrentBattery() {
    try {
      let {
        batteryLevel: e
      } = await (0, Chunk934458._N)({
        fallback: false
      });
      return module
    } catch (e) {
      return null
    }
  }
  async setLastBattery() {
    this.lastBattery = await this.getCurrentBattery()
  }
  async getBatteryLevelStats() {
    let e = await this.getCurrentBattery();
    return null == this.lastBattery || null == module ? {
      startBattery: this.lastBattery,
      currentBattery: module,
      batteryUsageRounded: null
    } : {
      startBattery: this.lastBattery,
      currentBattery: module,
      batteryUsageRounded: Math.round((module - this.lastBattery) * 1e3) / 1e3
    }
  }
  constructor() {
    a(this, "cpuHistogram", new Chunk909766.b), a(this, "memoryHistogram", new Chunk909766.b), a(this, "startCPU", Chunk848479.Z.getCumulativeCPUUsage()), a(this, "lastCPU", this.startCPU), a(this, "lastBattery", null)
  }
}