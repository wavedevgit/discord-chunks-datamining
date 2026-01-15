/** Chunk was on 24516 **/
/** chunk id: 87169, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  n: () => p
}), require("./388685.js"), require("./415506.js"), require("./539854.js");
var Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk358085 = require("./358085.js"),
  Chunk747268 = require("./747268.js"),
  Chunk860102 = require("./860102.js"),
  Chunk939073 = require("./939073.js");

function m(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
let d = new Chunk710845.Z("MeticulousActionTracker"),
  u = "meticulous-start",
  c = "meticulous-end",
  h = new Set(["APP_STATE_UPDATE", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "SESSION_START", "RESET_SOCKET", "CHANNEL_SELECT", "GUILD_SELECT", "OVERLAY_INITIALIZE", "CALL_CREATE", "LOAD_MESSAGES_SUCCESS", "SEARCH_START", "SEARCH_FINISH", "CLEAR_CACHES", "WRITE_CACHES", "PUSH_NOTIFICATION_CLICK", "UPLOAD_FAIL"]);
class p {
  start(e, t) {
    this.mode = e, this.sessionStartTime = t, this.setupDispatcherSubscription(), this.setupPerformanceObserver(), this.startFlushInterval()
  }
  stop() {
    null != this.flushIntervalId && (clearInterval(this.flushIntervalId), this.flushIntervalId = null), null != this.observer && (this.observer.disconnect(), this.observer = null), this.actionHandlers.forEach((e, t) => {
      n.Z.unsubscribe(t, e)
    }), this.actionHandlers.clear(), this.pendingDispatches.clear(), this.collectedEntries = [], this.mode = null
  }
  async flush() {
    if (null == this.mode || 0 === this.collectedEntries.length) return;
    let e = this.collectEntries(),
      t = this.buildReport(e);
    await this.mode.sendToIngest(t)
  }
  collectEntries() {
    let e = [...this.collectedEntries];
    return this.collectedEntries = [], e
  }
  getTags() {
    if (null == this.mode) throw Error("Cannot get tags without mode");
    let e = this.mode.performanceNow() - this.sessionStartTime;
    return {
      platform: (0, s.getNativePlatform)(),
      release_channel: null !== a.Z && true !== a.Z ? a.Z : "unknown",
      uptime_bucket: (0, l.l)(e)
    }
  }
  buildReport(e) {
    if (null == this.mode) throw Error("Cannot build report without mode");
    let t = this.mode.getMemory(),
      i = this.mode.baselineUsedMemory;
    return {
      type: "heap_snapshot_action",
      session_id: this.mode.sessionId,
      commit_sha: this.mode.commitSha,
      branch_name: this.mode.branchName,
      commit_date: this.mode.commitDate,
      timestamp: new Date().toISOString(),
      build_number: "486115",
      built_at: "1768497003444",
      release_channel: null !== a.Z && true !== a.Z ? a.Z : "unknown",
      tags: this.getTags(),
      metrics: {
        entries: e,
        report_time_memory: null != t ? (0, o.D)(t) : true,
        delta_from_baseline: null != i && (null == t ? true : t.usedJSHeapSize) != null ? t.usedJSHeapSize - i : true,
        baseline_memory: i,
        timing: {
          collected_at: this.mode.performanceNow()
        }
      }
    }
  }
  startFlushInterval() {
    this.flushIntervalId = window.setInterval(() => {
      this.flush()
    }, 1e4)
  }
  setupDispatcherSubscription() {
    null != this.mode && (this.interceptorAdded || (n.Z.addInterceptor(e => {
      if (null != this.mode && h.has(e.type)) {
        var t;
        let i = ++this.dispatchCounter,
          n = this.mode.getMemory(),
          r = null != (t = this.pendingDispatches.get(e.type)) ? t : [];
        r.push(i), this.pendingDispatches.set(e.type, r), this.mode.mark("".concat(u, "-").concat(e.type, "-").concat(i), {
          detail: {
            memory: n
          }
        })
      }
      returnfalse
    }), this.interceptorAdded = true), h.forEach(e => {
      if (this.actionHandlers.has(e)) return;
      let t = () => {
        let t = this.pendingDispatches.get(e),
          i = null == t ? true : t.shift();
        if (null == i) return void d.warn("No pending dispatch ID for action: ".concat(e));
        let n = () => {
          var t, n;
          let r = null == (t = this.mode) ? true : t.getMemory();
          null == (n = this.mode) || n.mark("".concat(c, "-").concat(e, "-").concat(i), {
            detail: {
              memory: r,
              actionType: e,
              dispatchId: i
            }
          })
        };
        requestAnimationFrame(() => {
          requestAnimationFrame(n)
        })
      };
      n.Z.subscribe(e, t), this.actionHandlers.set(e, t)
    }))
  }
  setupPerformanceObserver() {
    if (null != this.mode) try {
      this.observer = new this.mode.PerformanceObserver(e => {
        for (let t of e.getEntries()) "mark" === t.entryType && false !== t.name.indexOf(c) && this.collectEntry(t);
        this.collectedEntries.length >= 100 && this.flush()
      }), this.observer.observe({
        type: "mark",
        buffered: true
      })
    } catch (e) {
      d.warn("Failed to set up PerformanceObserver:", e)
    }
  }
  collectEntry(e) {
    try {
      var t, i, n, r, s;
      let a = null == (t = e.detail) ? true : t.actionType,
        l = null == (i = e.detail) ? true : i.dispatchId;
      if (null == a || null == l) {
        d.warn("End mark missing actionType or dispatchId:", e.name), performance.clearMarks(e.name);
        return
      }
      let m = "".concat(u, "-").concat(a, "-").concat(l),
        c = performance.getEntriesByName(m);
      if (0 === c.length) {
        d.warn("Missing start mark for action: ".concat(m)), performance.clearMarks(e.name);
        return
      }
      let h = c[0],
        p = null == (n = h.detail) ? true : n.memory,
        f = null == (r = e.detail) ? true : r.memory,
        S = null == (s = this.mode) ? true : s.baselineUsedMemory,
        v = (null == f ? true : f.usedJSHeapSize) != null && null != S ? f.usedJSHeapSize - S : true;
      this.collectedEntries.push({
        name: a,
        start_time: h.startTime,
        end_time: e.startTime,
        start_memory: null != p ? (0, o.D)(p) : true,
        end_memory: null != f ? (0, o.D)(f) : true,
        memory_delta_from_baseline: v
      }), performance.clearMarks(m), performance.clearMarks(e.name)
    } catch (e) {
      d.warn("Failed to collect performance entry information:", e)
    }
  }
  constructor() {
    m(this, "mode", null), m(this, "observer", null), m(this, "collectedEntries", []), m(this, "flushIntervalId", null), m(this, "sessionStartTime", 0), m(this, "interceptorAdded", false), m(this, "actionHandlers", new Map), m(this, "dispatchCounter", 0), m(this, "pendingDispatches", new Map)
  }
}