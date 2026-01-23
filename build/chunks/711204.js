/** Chunk was on 42160 **/
/** chunk id: 711204, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  r: () => m
});
var Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk290805 = require("./290805.js"),
  Chunk622397 = require("./622397.js");

function o(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
let l = +Chunk927813.A.Millis.MINUTE;
class m {
  start(e, t) {
    var i, r;
    this.mode = e, this.sessionStartTime = t, this.peakMemory = null != (i = null == (r = e.getMemory()) ? true : r.usedJSHeapSize) ? i : 0, this.sampleAndSend(), this.sampleIntervalId = window.setInterval(() => {
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
    return null != (e = null == (i = this.mode) || null == (t = i.getMemory()) ? true : t.usedJSHeapSize) ? e : 0
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
        platform: (0, n.getNativePlatform)(),
        release_channel: null !== s.y && true !== s.y ? s.y : "unknown",
        uptime_bucket: (0, a.X)(t)
      },
      r = {
        type: "heap_snapshot_interval",
        session_id: this.mode.sessionId,
        commit_sha: this.mode.commitSha,
        branch_name: this.mode.branchName,
        commit_date: this.mode.commitDate,
        timestamp: new Date().toISOString(),
        build_number: "488649",
        built_at: "1769185458219",
        release_channel: null !== s.y && true !== s.y ? s.y : "unknown",
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
    this.mode.sendToIngest(r)
  }
  constructor() {
    o(this, "mode", null), o(this, "sampleIntervalId", null), o(this, "sessionStartTime", 0), o(this, "peakMemory", 0)
  }
}