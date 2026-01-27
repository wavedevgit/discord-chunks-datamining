/** Chunk was on web.js **/
/** chunk id: 311849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => z
}), require("./638769.js"), require("./896048.js"), require("./321073.js"), require("./114821.js"), require("./339614.js");
var Chunk141931 = require("./141931.js"),
  Chunk506774 = require("./506774.js"),
  Chunk439372 = require("./439372.js"),
  Chunk77729 = require("./77729.js"),
  Chunk31717 = require("./31717.js"),
  Chunk885576 = require("./885576.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk321034 = require("./321034.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js"),
  Chunk664335 = require("./664335.js"),
  Chunk652215 = require("./652215.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = 1048576,
  O = 15 * Chunk927813.A.Millis.MINUTE,
  v = 2 * b,
  A = 3 * b,
  I = 4096,
  S = 12,
  T = true,
  C = true,
  N = 15 * Chunk927813.A.Millis.MINUTE,
  w = +b,
  R = 1.5 * b,
  P = 256,
  D = 12,
  L = true,
  x = 15 * Chunk927813.A.Millis.MINUTE,
  M = .75 * b,
  j = +b,
  k = 64,
  U = 4 * b,
  G = 30 * Chunk927813.A.Millis.MINUTE,
  F = 8 * b,
  V = 60 * Chunk927813.A.Millis.MINUTE,
  B = "lastMemoryUsageRestart",
  H = +Chunk927813.A.Millis.DAY,
  Y = +Chunk927813.A.Millis.MINUTE;

function W() {
  return p.isPlatformEmbedded && (0, p.isWindows)()
}
class K extends Chunk439372.A {
  _initialize() {}
  _terminate() {
    W() && (clearInterval(this._checkIntervalNativeHeap), this._checkIntervalNativeHeap = null, clearInterval(this._checkIntervalPA), this._checkIntervalPA = null, clearInterval(this._checkIntervalV8), this._checkIntervalV8 = null, _.A.disablePerfMemoryHooks(), _.A.disablePAMemoryProfiler(), _.A.disableProfilingV8Heap())
  }
  handlePostConnectionOpen() {
    var e, t;
    if (!W()) return;
    let n = null == (e = (t = o.A.remoteApp).getReleaseChannel) ? true : e.call(t);
    "development" !== n && "canary" !== n && (this._supportedNativeChannel = false), clearInterval(this._checkIntervalNativeHeap), this._checkIntervalNativeHeap = setInterval(async () => {
      await this.trackNativeHeapPerformanceStats()
    }, O), this._supportedNativeChannel && (clearInterval(this._checkIntervalPA), this._checkIntervalPA = setInterval(async () => {
      await this.trackPartitionAllocPerformanceStats()
    }, N), clearInterval(this._checkIntervalV8), this._checkIntervalV8 = setInterval(async () => {
      await this.trackV8HeapAlloc()
    }, x))
  }
  async trackNativeHeapPerformanceStats() {
    var e, t;
    let n = _.A.getMemoryUsageElectronProcessTypeDetails();
    if (null == n) return;
    let r = null != (e = null == (t = n.renderer) ? true : t.wss_priv_kb) ? e : 0;
    !this._nativeHeapHooksInstalled && this._supportedNativeChannel && r > v && _.A.enablePerfMemoryHooks({
      allocationThresholdKB: S,
      enableCallStackTracking: T
    }) && (this._nativeHeapHooksInstalled = true), this._nativeHeapHooksInstalled && await this.trackNativeHeapHookStats(r), this.doRestartIfNeeded(r)
  }
  async trackNativeHeapHookStats(e) {
    var t, n, r, i, a, o;
    if (e < A) return;
    let s = _.A.getPerfAttributedMemory();
    if (null == s) return;
    let l = [],
      u = [],
      f = [],
      p = [],
      h = Object.entries(s);
    for (let [e, i] of(h.sort((e, t) => {
        var n, r;
        let [, i] = e, [, a] = t;
        return (null != (n = null == a ? true : a.total_allocation_kb) ? n : 0) - (null != (r = null == i ? true : i.total_allocation_kb) ? r : 0)
      }), h.slice(0, 10))) null != i && (l.push(e), u.push(null != (t = i.total_allocation_kb) ? t : 0), f.push(null != (n = i.allocation_count) ? n : 0), p.push(null != (r = i.module_version) ? r : ""));
    let g = _.A.getPerfAttributedMemoryStats(),
      y = null == g ? true : g.events_dropped,
      b = {
        memory_type: "native_heap",
        module_name: l,
        allocation_total_size_kb: u,
        allocation_count: f,
        module_version: p,
        events_dropped: y
      };
    if (d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, b), T) {
      let e = h.slice(0, 3).map(e => e[0]),
        t = 3;
      for (let n of e.map(e => _.A.getPerfAttributedMemoryCallstacks(e)).filter(e => null != e).flatMap(e => e).sort((e, t) => {
          var n, r;
          return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0)
        }).slice(0, t).filter(e => {
          var t;
          return (null != (t = e.total_alloc_kb) ? t : 0) > I
        })) {
        let e = {
          memory_type: "native_heap",
          module_name: n.module_name,
          callstack_allocation_total_size_kb: n.total_alloc_kb,
          callstack_frame_module_names: n.frame_module_names,
          callstack_frame_module_codeids: n.frame_module_codeids,
          callstack_frame_relative_offsets: n.frame_rel_offsets,
          events_dropped: y
        };
        d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e)
      }
    }
    if (C && this._pushedNativeDeadlockMinidumpCount < 5) {
      let t = _.A.getMemoryHeapStats(),
        n = null != (i = null == t ? true : t.usedHeapSize) ? i : false,
        r = null != (a = null == t ? true : t.totalAvailableSize) ? a : false,
        s = null != (o = null == t ? true : t.peakMallocedMemory) ? o : false;
      await m.Ay.submitLiveCrashReport({
        message: "Desktop Memory Thread State",
        extra: {
          renderer_memory_kb: e,
          gpu_brand: c.A.getGpuBrand(),
          used_v8_heap_kb: n,
          avail_size_kb: r,
          peak_malloc_kb: s
        }
      }), this._pushedNativeDeadlockMinidumpCount += 1
    }
  }
  doRestartIfNeeded(e) {
    if (e < U) return;
    let t = performance.now() - this._startupTime;
    if (t < V) return;
    let n = i.w.get(B);
    if (null != n && n.timestamp >= Date.now() - H) return;
    let {
      enable: a,
      enableForce: o
    } = g.A.getConfig({
      location: "DesktopPerfAnalyticsManager"
    });
    a && setTimeout(() => {
      let n = true;
      if (e < F || !o) {
        let e = l.A.getIdleSince();
        if (null == e || e > Date.now() - G || null != u.A.getRTCConnection()) return
      } else n = false;
      s.A.persist(), i.w.set(B, {
        timeSinceStartup: t,
        timestamp: Date.now()
      }), m.Ay.setCrashInformation(r.du.IntentionalCrashReason, "excessive-memory-usage".concat(n ? "-forced" : "")), h.A.addBreadcrumb({
        category: "excessive-memory-usage-restart",
        message: "Restarting due to excessive renderer memory usage: ".concat(e, "kB")
      }), m.Ay.crash(3)
    }, Y)
  }
  trackPartitionAllocPerformanceStats() {
    var e, t, n;
    let r = _.A.getPartitionAllocatorStats();
    if (null == r) return;
    let i = null != (e = r.total_alloc_kb) ? e : 0;
    if (!this._paHeapHooksInstalled && i > w) {
      let e = _.A.enablePAMemoryProfiler({
        allocationThresholdKB: D,
        enableCallStackTracking: L
      });
      null != e && e && (this._paHeapHooksInstalled = true)
    }
    if (this._paHeapHooksInstalled) {
      if (i < R) return;
      let e = _.A.getPerfAttributedPAMemory();
      if (null == e) return;
      let r = [],
        a = [],
        o = [],
        s = [],
        l = Object.entries(e);
      for (let [e, i] of(l.sort((e, t) => {
          var n, r;
          let [, i] = e, [, a] = t;
          return (null != (n = null == a ? true : a.total_allocation_kb) ? n : 0) - (null != (r = null == i ? true : i.total_allocation_kb) ? r : 0)
        }), l.slice(0, 10))) null != i && (r.push(e), a.push(null != (t = i.total_allocation_kb) ? t : 0), o.push(null != (n = i.allocation_count) ? n : 0), s.push(""));
      let c = {
        memory_type: "part_alloc",
        module_name: r,
        allocation_total_size_kb: a,
        allocation_count: o,
        module_version: s,
        events_dropped: true
      };
      if (d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, c), L) {
        let e = l.slice(0, 3).map(e => e[0]),
          t = 3;
        for (let n of e.map(e => _.A.getPerfAttributedPAMemoryCallstacks({
            typeName: e
          })).filter(e => null != e).flatMap(e => e).sort((e, t) => {
            var n, r;
            return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0)
          }).slice(0, t).filter(e => {
            var t;
            return (null != (t = e.total_alloc_kb) ? t : 0) > P
          })) {
          let e = {
            memory_type: "part_alloc",
            module_name: n.type_name,
            callstack_allocation_total_size_kb: n.total_alloc_kb,
            callstack_frame_module_names: n.frame_module_names,
            callstack_frame_module_codeids: n.frame_module_codeids,
            callstack_frame_relative_offsets: n.frame_rel_offsets,
            events_dropped: true
          };
          d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, e)
        }
      }
    }
  }
  trackV8HeapAlloc() {
    var e, t, n, r, i, a, o, s, l;
    let c = _.A.getMemoryHeapStats();
    if (null == c) return;
    let u = null != (e = c.usedHeapSize) ? e : 0;
    if (!this._v8ProfilerRunning && u >= M && (_.A.enableProfilingV8Heap({
        allocationThresholdKB: k,
        sampleIntervalBytes: 65536,
        stackDepth: 64
      }), this._v8ProfilerRunning = true), this._v8ProfilerRunning) {
      if (u < j) return;
      let e = _.A.getProfilerV8MemoryCallstacks();
      if (null != e) {
        let c = 3,
          u = e.map(e => {
            var t, n;
            return {
              callstack: e,
              totalSize: null != (t = null == (n = e.frame_alloc_size) ? true : n.reduce((e, t) => e + t, 0)) ? t : 0
            }
          });
        for (let e of (u.sort((e, t) => t.totalSize - e.totalSize), u.slice(0, c).map(e => e.callstack))) {
          let c = null != (t = null == (r = e.frame_script_name) ? true : r.length) ? t : 0;
          if (null == c || c !== (null == (i = e.frame_name) ? true : i.length) || c !== (null == (a = e.frame_line) ? true : a.length) || c !== (null == (o = e.frame_col) ? true : o.length)) continue;
          let u = {
            memory_type: "v8_heap",
            callstack_allocation_total_size_kb: Math.floor((null != (n = null == (s = e.frame_alloc_size) ? true : s.reduce((e, t) => e + t, 0)) ? n : 0) / 1024),
            callstack_frame_module_names: null == (l = e.frame_script_name) ? true : l.map((t, n) => {
              var r, i, a, o, s, l;
              let c = null != (r = null == (o = e.frame_name) ? true : o[n]) ? r : "",
                u = null != (i = null == (s = e.frame_line) ? true : s[n]) ? i : 0,
                d = null != (a = null == (l = e.frame_col) ? true : l[n]) ? a : 0;
              return c.length > 0 ? "at ".concat(c, " (").concat(t, ":").concat(u, ":").concat(d, ")") : "at ".concat(t, ":").concat(u, ":").concat(d)
            })
          };
          d.default.track(E.HAw.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, u)
        }
      }
    }
  }
  constructor(...e) {
    super(...e), y(this, "_checkIntervalNativeHeap", null), y(this, "_checkIntervalPA", null), y(this, "_checkIntervalV8", null), y(this, "_nativeHeapHooksInstalled", false), y(this, "_paHeapHooksInstalled", false), y(this, "_v8ProfilerRunning", false), y(this, "_pushedNativeDeadlockMinidumpCount", 0), y(this, "_startupTime", performance.now()), y(this, "_supportedNativeChannel", true), y(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let z = new K