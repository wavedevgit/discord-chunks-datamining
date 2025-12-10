/** Chunk was on web.js **/
/** chunk id: 905870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./642613.js"), require("./388685.js"), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk268146 = require("./268146.js"),
  Chunk433517 = require("./433517.js"),
  Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js"),
  Chunk703558 = require("./703558.js"),
  Chunk517100 = require("./517100.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk848479 = require("./848479.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk4087 = require("./4087.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 1048576,
  O = 15 * Chunk70956.Z.Millis.MINUTE,
  v = 2 * y,
  S = 3 * y,
  I = 4096,
  T = 12,
  C = true,
  A = true,
  N = 15 * Chunk70956.Z.Millis.MINUTE,
  P = +y,
  R = 1.5 * y,
  w = 256,
  D = 12,
  x = true,
  L = 4 * y,
  j = 30 * Chunk70956.Z.Millis.MINUTE,
  M = 8 * y,
  k = 60 * Chunk70956.Z.Millis.MINUTE,
  U = "lastMemoryUsageRestart",
  G = +Chunk70956.Z.Millis.DAY;

function Z() {
  return Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)()
}
class B extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    Z() && (clearInterval(this._checkIntervalNativeHeap), this._checkIntervalNativeHeap = null, clearInterval(this._checkIntervalPA), this._checkIntervalPA = null, Chunk848479.Z.disablePerfMemoryHooks(), Chunk848479.Z.disablePAMemoryProfiler())
  }
  handlePostConnectionOpen() {
    var e, t;
    if (!Z()) return;
    let n = null == (e = (t = Chunk579806.Z.remoteApp).getReleaseChannel) ? true : module.call(exports);
    ("development" === require || "canary" === require) && (clearInterval(this._checkIntervalNativeHeap), this._checkIntervalNativeHeap = setInterval(async () => {
      await this.trackNativeHeapPerformanceStats()
    }, O), clearInterval(this._checkIntervalPA), this._checkIntervalPA = setInterval(async () => {
      await this.trackPartitionAllocPerformanceStats()
    }, N))
  }
  async trackNativeHeapPerformanceStats() {
    var e, t, n, a, o;
    let f = Chunk848479.Z.getMemoryUsageElectronProcessTypeDetails();
    if (null == Chunk70956) return;
    let p = null != (t = null == (e = Chunk70956.renderer) ? true : module.wss_priv_kb) ? exports : 0;
    if (!this._nativeHeapHooksInstalled && Chunk358085 > v && Chunk848479.Z.enablePerfMemoryHooks({
        allocationThresholdKB: T,
        enableCallStackTracking: C
      }) && (this._nativeHeapHooksInstalled = true), this._nativeHeapHooksInstalled) {
      if (Chunk358085 < S) return;
      let e = Chunk848479.Z.getPerfAttributedMemory();
      if (null == module) return;
      let t = [],
        r = [],
        i = [],
        s = [],
        l = Object.entries(module);
      for (let [e, c] of(Chunk517100.sort((e, t) => {
          var n, r;
          let [, i] = e, [, a] = t;
          return (null != (n = null == a ? true : a.total_allocation_kb) ? n : 0) - (null != (r = null == i ? true : i.total_allocation_kb) ? r : 0)
        }), Chunk517100.slice(0, 10))) null != Chunk131951 && (exports.push(module), Chunk268146.push(null != (n = Chunk131951.total_allocation_kb) ? require : 0), Chunk433517.push(null != (a = Chunk131951.allocation_count) ? Chunk147913 : 0), Chunk703558.push(null != (o = Chunk131951.module_version) ? Chunk579806 : ""));
      let u = Chunk848479.Z.getPerfAttributedMemoryStats(),
        f = null == Chunk19780 ? true : Chunk19780.events_dropped,
        m = {
          memory_type: "native_heap",
          module_name: exports,
          allocation_total_size_kb: Chunk268146,
          allocation_count: Chunk433517,
          module_version: Chunk703558,
          events_dropped: Chunk70956
        };
      if (Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, Chunk960048), C) {
        let e = Chunk517100.slice(0, 3).map(e => e[0]),
          t = 3;
        for (let n of module.map(e => _.Z.getPerfAttributedMemoryCallstacks(e)).filter(e => null != e).flatMap(e => e).sort((e, t) => {
            var n, r;
            return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0)
          }).slice(0, exports).filter(e => {
            var t;
            return (null != (t = e.total_alloc_kb) ? t : 0) > I
          })) {
          let e = {
            memory_type: "native_heap",
            module_name: require.module_name,
            callstack_allocation_total_size_kb: require.total_alloc_kb,
            callstack_frame_module_names: require.frame_module_names,
            callstack_frame_module_codeids: require.frame_module_codeids,
            callstack_frame_relative_offsets: require.frame_rel_offsets,
            events_dropped: Chunk70956
          };
          Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, module)
        }
      }
      A && this._pushedNativeDeadlockMinidumpCount < 5 && (await Chunk998502.ZP.submitLiveCrashReport({
        message: "Desktop Memory Thread State",
        extra: {
          renderer_memory_kb: Chunk358085,
          gpu_brand: Chunk131951.Z.getGpuBrand()
        }
      }), this._pushedNativeDeadlockMinidumpCount += 1)
    }
    if (Chunk358085 >= L) {
      let e = performance.now() - this._startupTime;
      if (module < k) return;
      let t = Chunk433517.K.get(U);
      if (null != exports && exports.timestamp >= Date.now() - G) return;
      let n = true,
        {
          enable: a,
          enableForce: o
        } = Chunk4087.Z.getConfig({
          location: "DesktopPerfAnalyticsManager"
        });
      if (!Chunk147913) return;
      if (Chunk358085 < M || !Chunk579806) {
        let e = Chunk517100.Z.getIdleSince();
        if (null == module || module > Date.now() - j || null != Chunk19780.Z.getRTCConnection()) return
      } else n = false;
      Chunk703558.Z.persist(), Chunk433517.K.set(U, {
        timeSinceStartup: module,
        timestamp: Date.now()
      }), Chunk998502.ZP.setCrashInformation(Chunk268146.X4.IntentionalCrashReason, "excessive-memory-usage".concat(require ? "-forced" : "")), Chunk960048.Z.addBreadcrumb({
        category: "excessive-memory-usage-restart",
        message: "Restarting due to excessive renderer memory usage: ".concat(Chunk358085, "kB")
      }), Chunk998502.ZP.crash(3)
    }
  }
  trackPartitionAllocPerformanceStats() {
    var e, t, n;
    let r = Chunk848479.Z.getMemoryHeapStats();
    if (null == Chunk268146) return;
    let i = null != (e = Chunk268146.usedHeapSize) ? module : 0;
    if (!this._paHeapHooksInstalled && Chunk433517 > P) {
      let e = Chunk848479.Z.enablePAMemoryProfiler({
        allocationThresholdKB: D,
        enableCallStackTracking: x
      });
      null != module && module && (this._paHeapHooksInstalled = true)
    }
    if (this._paHeapHooksInstalled) {
      if (Chunk433517 < R) return;
      let e = Chunk848479.Z.getPerfAttributedPAMemory();
      if (null == module) return;
      let r = [],
        a = [],
        o = [],
        s = [],
        l = Object.entries(module);
      for (let [e, i] of(Chunk517100.sort((e, t) => {
          var n, r;
          let [, i] = e, [, a] = t;
          return (null != (n = null == a ? true : a.total_allocation_kb) ? n : 0) - (null != (r = null == i ? true : i.total_allocation_kb) ? r : 0)
        }), Chunk517100.slice(0, 10))) null != Chunk433517 && (Chunk268146.push(module), Chunk147913.push(null != (t = Chunk433517.total_allocation_kb) ? exports : 0), Chunk579806.push(null != (n = Chunk433517.allocation_count) ? require : 0), Chunk703558.push(""));
      let c = {
        memory_type: "part_alloc",
        module_name: Chunk268146,
        allocation_total_size_kb: Chunk147913,
        allocation_count: Chunk579806,
        module_version: Chunk703558,
        events_dropped: true
      };
      if (Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, Chunk131951), x) {
        let e = Chunk517100.slice(0, 3).map(e => e[0]),
          t = 3;
        for (let n of module.map(e => _.Z.getPerfAttributedPAMemoryCallstacks({
            typeName: e
          })).filter(e => null != e).flatMap(e => e).sort((e, t) => {
            var n, r;
            return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0)
          }).slice(0, exports).filter(e => {
            var t;
            return (null != (t = e.total_alloc_kb) ? t : 0) > w
          })) {
          let e = {
            memory_type: "part_alloc",
            module_name: require.type_name,
            callstack_allocation_total_size_kb: require.total_alloc_kb,
            callstack_frame_module_names: require.frame_module_names,
            callstack_frame_module_codeids: require.frame_module_codeids,
            callstack_frame_relative_offsets: require.frame_rel_offsets,
            events_dropped: true
          };
          Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, module)
        }
      }
    }
  }
  constructor(...e) {
    super(...e), b(this, "_checkIntervalNativeHeap", null), b(this, "_checkIntervalPA", null), b(this, "_nativeHeapHooksInstalled", false), b(this, "_paHeapHooksInstalled", false), b(this, "_pushedNativeDeadlockMinidumpCount", 0), b(this, "_startupTime", performance.now()), b(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let F = new B