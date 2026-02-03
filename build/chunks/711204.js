/** Chunk was on 42160 **/
/** chunk id: 711204, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  r: () => m
});
var Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk290805 = require("./290805.js"),
  Chunk622397 = require("./622397.js");

function o(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let l = +Chunk927813.A.Millis.MINUTE;
class m {
  start(e, t) {
    var r, i;
    this.mode = e, this.sessionStartTime = t, this.peakMemory = null != (r = null == (i = e.getMemory()) ? true : i.usedJSHeapSize) ? r : 0, this.sampleAndSend(), this.sampleIntervalId = window.setInterval(() => {
      this.sampleAndSend()
    }, l)
  }
  stop() {
    null != this.sampleIntervalId && (clearInterval(this.sampleIntervalId), this.sampleIntervalId = null), this.mode = null
  }
  getPeakMemory() {
    return this.peakMemory
  }
  getCurrentMemory() {
    var e, t, r;
    return null != (e = null == (r = this.mode) || null == (t = r.getMemory()) ? true : t.usedJSHeapSize) ? e : 0
  }
  updatePeakMemory(e) {
    e > this.peakMemory && (this.peakMemory = e)
  }
  sampleAndSend() {
    if (null == this.mode) return;
    let e = this.mode.getMemory();
    if (null == e) return;
    this.updatePeakMemory(e.usedJSHeapSize);
    let t = this.mode.performanceNow() - this.sessionStartTime,
      r = {
        platform: (0, n.getNativePlatform)(),
        release_channel: null !== s.y && true !== s.y ? s.y : "unknown",
        uptime_bucket: (0, a.X)(t)
      },
      i = {
        type: "heap_snapshot_interval",
        session_id: this.mode.sessionId,
        commit_sha: this.mode.commitSha,
        branch_name: this.mode.branchName,
        commit_date: this.mode.commitDate,
        timestamp: new Date().toISOString(),
        build_number: "492532",
        built_at: "1770103152308",
        release_channel: null !== s.y && true !== s.y ? s.y : "unknown",
        tags: r,
        metrics: {
          js_heap_size_limit: e.jsHeapSizeLimit,
          total_js_heap_size: e.totalJSHeapSize,
          used_js_heap_size: e.usedJSHeapSize,
          peak_memory: this.peakMemory,
          delta_from_baseline: null != this.mode.baselineUsedMemory ? e.usedJSHeapSize - this.mode.baselineUsedMemory : true,
          baseline_memory: this.mode.baselineUsedMemory,
          timing: {
            collected_at: this.mode.performanceNow()
          }
        }
      };
    this.mode.sendToIngest(i)
  }
  constructor() {
    o(this, "mode", null), o(this, "sampleIntervalId", null), o(this, "sessionStartTime", 0), o(this, "peakMemory", 0)
  }
}