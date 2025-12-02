/** Chunk was on web.js **/
/** chunk id: 905870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./642613.js"), require("./388685.js"), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk848479 = require("./848479.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 1048576,
  _ = 15 * Chunk70956.Z.Millis.MINUTE,
  m = 3 * p,
  h = 5 * p,
  g = 4096,
  E = 12,
  b = true,
  y = true,
  O = 15 * Chunk70956.Z.Millis.MINUTE,
  v = +p,
  S = 1.5 * p,
  I = 256,
  T = 12,
  A = true;

function C() {
  return Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)()
}
class N extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    C() && (clearInterval(this._checkIntervalNativeHeap), this._checkIntervalNativeHeap = null, clearInterval(this._checkIntervalPA), this._checkIntervalPA = null, Chunk848479.Z.disablePerfMemoryHooks(), Chunk848479.Z.disablePAMemoryProfiler())
  }
  handlePostConnectionOpen() {
    var e, t;
    if (!C()) return;
    let n = null == (e = (t = Chunk579806.Z.remoteApp).getReleaseChannel) ? true : module.call(exports);
    ("development" === require || "canary" === require) && (clearInterval(this._checkIntervalNativeHeap), this._checkIntervalNativeHeap = setInterval(async () => {
      await this.trackNativeHeapPerformanceStats()
    }, _), clearInterval(this._checkIntervalPA), this._checkIntervalPA = setInterval(async () => {
      await this.trackPartitionAllocPerformanceStats()
    }, O))
  }
  async trackNativeHeapPerformanceStats() {
    var e, t, n, r, i;
    let s = Chunk848479.Z.getMemoryUsageElectronProcessTypeDetails();
    if (null == Chunk70956) return;
    let l = null != (t = null == (e = Chunk70956.renderer) ? true : module.wss_priv_kb) ? exports : 0;
    if (!this._nativeHeapHooksInstalled && Chunk358085 > m && Chunk848479.Z.enablePerfMemoryHooks({
        allocationThresholdKB: E,
        enableCallStackTracking: b
      }) && (this._nativeHeapHooksInstalled = true), this._nativeHeapHooksInstalled) {
      if (Chunk358085 < h) return;
      let e = Chunk848479.Z.getPerfAttributedMemory();
      if (null == module) return;
      let t = [],
        s = [],
        f = [],
        p = [],
        _ = Object.entries(module);
      for (let [e, a] of(_.sort((e, t) => {
          var n, r;
          let [, i] = e, [, a] = t;
          return (null != (n = null == a ? true : a.total_allocation_kb) ? n : 0) - (null != (r = null == i ? true : i.total_allocation_kb) ? r : 0)
        }), _.slice(0, 10))) null != Chunk131951 && (exports.push(module), Chunk70956.push(null != (n = Chunk131951.total_allocation_kb) ? require : 0), f.push(null != (r = Chunk131951.allocation_count) ? Chunk147913 : 0), p.push(null != (i = Chunk131951.module_version) ? Chunk579806 : ""));
      let m = Chunk848479.Z.getPerfAttributedMemoryStats(),
        E = null == m ? true : m.events_dropped,
        O = {
          memory_type: "native_heap",
          module_name: exports,
          allocation_total_size_kb: Chunk70956,
          allocation_count: f,
          module_version: p,
          events_dropped: E
        };
      if (Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, O), b) {
        let e = _.slice(0, 3).map(e => e[0]),
          t = 3;
        for (let n of module.map(e => c.Z.getPerfAttributedMemoryCallstacks(e)).filter(e => null != e).flatMap(e => e).sort((e, t) => {
            var n, r;
            return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0)
          }).slice(0, exports).filter(e => {
            var t;
            return (null != (t = e.total_alloc_kb) ? t : 0) > g
          })) {
          let e = {
            memory_type: "native_heap",
            module_name: require.module_name,
            callstack_allocation_total_size_kb: require.total_alloc_kb,
            callstack_frame_module_names: require.frame_module_names,
            callstack_frame_module_codeids: require.frame_module_codeids,
            callstack_frame_relative_offsets: require.frame_rel_offsets,
            events_dropped: E
          };
          Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, module)
        }
      }
      y && this._pushedNativeDeadlockMinidumpCount < 5 && (await Chunk998502.ZP.submitLiveCrashReport({
        message: "Desktop Memory Thread State",
        extra: {
          renderer_memory_kb: Chunk358085,
          gpu_brand: Chunk131951.Z.getGpuBrand()
        }
      }), this._pushedNativeDeadlockMinidumpCount += 1)
    }
  }
  trackPartitionAllocPerformanceStats() {
    var e, t, n;
    let r = Chunk848479.Z.getPartitionAllocatorStats();
    if (null == Chunk147913) return;
    let i = null != (e = Chunk147913.total_alloc_kb) ? module : 0;
    if (!this._paHeapHooksInstalled && Chunk579806 > v) {
      let e = Chunk848479.Z.enablePAMemoryProfiler({
        allocationThresholdKB: T,
        enableCallStackTracking: A
      });
      null != module && module && (this._paHeapHooksInstalled = true)
    }
    if (this._paHeapHooksInstalled) {
      if (Chunk579806 < S) return;
      let e = Chunk848479.Z.getPerfAttributedPAMemory();
      if (null == module) return;
      let r = [],
        a = [],
        s = [],
        l = [],
        u = Object.entries(module);
      for (let [e, i] of(Chunk998502.sort((e, t) => {
          var n, r;
          let [, i] = e, [, a] = t;
          return (null != (n = null == a ? true : a.total_allocation_kb) ? n : 0) - (null != (r = null == i ? true : i.total_allocation_kb) ? r : 0)
        }), Chunk998502.slice(0, 10))) null != Chunk579806 && (Chunk147913.push(module), Chunk131951.push(null != (t = Chunk579806.total_allocation_kb) ? exports : 0), Chunk70956.push(null != (n = Chunk579806.allocation_count) ? require : 0), Chunk358085.push(""));
      let f = {
        memory_type: "part_alloc",
        module_name: Chunk147913,
        allocation_total_size_kb: Chunk131951,
        allocation_count: Chunk70956,
        module_version: Chunk358085,
        events_dropped: true
      };
      if (Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, f), A) {
        let e = Chunk998502.slice(0, 3).map(e => e[0]),
          t = 3;
        for (let n of module.map(e => c.Z.getPerfAttributedPAMemoryCallstacks({
            typeName: e
          })).filter(e => null != e).flatMap(e => e).sort((e, t) => {
            var n, r;
            return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0)
          }).slice(0, exports).filter(e => {
            var t;
            return (null != (t = e.total_alloc_kb) ? t : 0) > I
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
    super(...e), f(this, "_checkIntervalNativeHeap", null), f(this, "_checkIntervalPA", null), f(this, "_nativeHeapHooksInstalled", false), f(this, "_paHeapHooksInstalled", false), f(this, "_pushedNativeDeadlockMinidumpCount", 0), f(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let P = new N