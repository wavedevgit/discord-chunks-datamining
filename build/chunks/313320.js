/** Chunk was on 42160 **/
/** chunk id: 313320, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  d: () => p
}), require("./896048.js"), require("./65821.js"), require("./321073.js");
var Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk723702 = require("./723702.js"),
  Chunk290805 = require("./290805.js"),
  Chunk381505 = require("./381505.js"),
  Chunk622397 = require("./622397.js");

function m(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
let d = new Chunk626584.A("MeticulousActionTracker"),
  h = "meticulous-start",
  c = "meticulous-end",
  u = new Set(["APP_STATE_UPDATE", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "SESSION_START", "RESET_SOCKET", "CHANNEL_SELECT", "GUILD_SELECT", "OVERLAY_INITIALIZE", "CALL_CREATE", "LOAD_MESSAGES_SUCCESS", "SEARCH_START", "SEARCH_FINISH", "CLEAR_CACHES", "WRITE_CACHES", "PUSH_NOTIFICATION_CLICK", "UPLOAD_FAIL"]);
class p {
  start(e, t) {
    this.mode = e, this.sessionStartTime = t, this.setupDispatcherSubscription(), this.setupPerformanceObserver(), this.startFlushInterval()
  }
  stop() {
    null != this.flushIntervalId && (clearInterval(this.flushIntervalId), this.flushIntervalId = null), null != this.observer && (this.observer.disconnect(), this.observer = null), this.actionHandlers.forEach((e, t) => {
      r.h.unsubscribe(t, e)
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
      release_channel: null !== a.y && true !== a.y ? a.y : "unknown",
      uptime_bucket: (0, l.X)(e)
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
      build_number: "488154",
      built_at: "1769103406901",
      release_channel: null !== a.y && true !== a.y ? a.y : "unknown",
      tags: this.getTags(),
      metrics: {
        entries: e,
        report_time_memory: null != t ? (0, o.c)(t) : true,
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
    null != this.mode && (this.interceptorAdded || (r.h.addInterceptor(e => {
      if (null != this.mode && u.has(e.type)) {
        var t;
        let i = ++this.dispatchCounter,
          r = this.mode.getMemory(),
          n = null != (t = this.pendingDispatches.get(e.type)) ? t : [];
        n.push(i), this.pendingDispatches.set(e.type, n), this.mode.mark("".concat(h, "-").concat(e.type, "-").concat(i), {
          detail: {
            memory: r
          }
        })
      }
      returnfalse
    }), this.interceptorAdded = true), u.forEach(e => {
      if (this.actionHandlers.has(e)) return;
      let t = () => {
        let t = this.pendingDispatches.get(e),
          i = null == t ? true : t.shift();
        if (null == i) return void d.warn("No pending dispatch ID for action: ".concat(e));
        let r = () => {
          var t, r;
          let n = null == (t = this.mode) ? true : t.getMemory();
          null == (r = this.mode) || r.mark("".concat(c, "-").concat(e, "-").concat(i), {
            detail: {
              memory: n,
              actionType: e,
              dispatchId: i
            }
          })
        };
        requestAnimationFrame(() => {
          requestAnimationFrame(r)
        })
      };
      r.h.subscribe(e, t), this.actionHandlers.set(e, t)
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
      var t, i, r, n, s;
      let a = null == (t = e.detail) ? true : t.actionType,
        l = null == (i = e.detail) ? true : i.dispatchId;
      if (null == a || null == l) {
        d.warn("End mark missing actionType or dispatchId:", e.name), performance.clearMarks(e.name);
        return
      }
      let m = "".concat(h, "-").concat(a, "-").concat(l),
        c = performance.getEntriesByName(m);
      if (0 === c.length) {
        d.warn("Missing start mark for action: ".concat(m)), performance.clearMarks(e.name);
        return
      }
      let u = c[0],
        p = null == (r = u.detail) ? true : r.memory,
        S = null == (n = e.detail) ? true : n.memory,
        f = null == (s = this.mode) ? true : s.baselineUsedMemory,
        v = (null == S ? true : S.usedJSHeapSize) != null && null != f ? S.usedJSHeapSize - f : true;
      this.collectedEntries.push({
        name: a,
        start_time: u.startTime,
        end_time: e.startTime,
        start_memory: null != p ? (0, o.c)(p) : true,
        end_memory: null != S ? (0, o.c)(S) : true,
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