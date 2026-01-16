/** Chunk was on 24516 **/
/** chunk id: 717156, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  q: () => m
});
var Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk747268 = require("./747268.js"),
  Chunk939073 = require("./939073.js");

function o(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
let l = +Chunk70956.Z.Millis.MINUTE;
class m {
  start(e, t) {
    var i, n;
    this.mode = e, this.sessionStartTime = t, this.peakMemory = null != (n = null == (i = e.getMemory()) ? true : i.usedJSHeapSize) ? n : 0, this.sampleAndSend(), this.sampleIntervalId = window.setInterval(() => {
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
    var e, t, i;
    return null != (i = null == (t = this.mode) || null == (e = t.getMemory()) ? true : e.usedJSHeapSize) ? i : 0
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
      i = {
        platform: (0, r.getNativePlatform)(),
        release_channel: null !== s.Z && true !== s.Z ? s.Z : "unknown",
        uptime_bucket: (0, a.l)(t)
      },
      n = {
        type: "heap_snapshot_interval",
        session_id: this.mode.sessionId,
        commit_sha: this.mode.commitSha,
        branch_name: this.mode.branchName,
        commit_date: this.mode.commitDate,
        timestamp: new Date().toISOString(),
        build_number: "486810",
        built_at: "1768594500618",
        release_channel: null !== s.Z && true !== s.Z ? s.Z : "unknown",
        tags: i,
        metrics: {
          js_heap_size_limit: e.jsHeapSizeLimit,
          total_js_heap_size: e.totalJSHeapSize,
          used_js_heap_size: e.usedJSHeapSize,
          peak_memory: this.peakMemory,
          delta_from_baseline: null != this.mode.baselineUsedMemory ? e.usedJSHeapSize - this.mode.baselineUsedMemory : true,
          baseline_memory: this.mode.baselineUsedMemory
        }
      };
    this.mode.sendToIngest(n)
  }
  constructor() {
    o(this, "mode", null), o(this, "sampleIntervalId", null), o(this, "sessionStartTime", 0), o(this, "peakMemory", 0)
  }
}