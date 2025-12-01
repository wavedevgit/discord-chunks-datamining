/** Chunk was on web.js **/
/** chunk id: 905870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
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
let p = 15 * Chunk70956.Z.Millis.MINUTE,
  _ = 3145728,
  m = 5242880,
  h = 4096,
  g = 12,
  E = true,
  b = true;

function y() {
  return Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)()
}
class O extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    y() && (clearInterval(this._checkInterval), this._checkInterval = null, Chunk848479.Z.disablePerfMemoryHooks())
  }
  handlePostConnectionOpen() {
    var e, t;
    if (!y()) return;
    let n = null == (e = (t = Chunk579806.Z.remoteApp).getReleaseChannel) ? true : module.call(exports);
    ("development" === require || "canary" === require) && (clearInterval(this._checkInterval), this._checkInterval = setInterval(async () => {
      await this.trackPerformanceStats()
    }, p))
  }
  async trackPerformanceStats() {
    var e, t, n, r, i;
    let s = Chunk848479.Z.getMemoryUsageElectronProcessTypeDetails();
    if (null == Chunk70956) return;
    let l = null != (t = null == (e = Chunk70956.renderer) ? true : module.wss_priv_kb) ? exports : 0;
    if (!this._heapHooksInstalled && Chunk358085 > _ && Chunk848479.Z.enablePerfMemoryHooks({
        allocationThresholdKB: g,
        enableCallStackTracking: E
      }) && (this._heapHooksInstalled = true), this._heapHooksInstalled) {
      if (Chunk358085 < m) return;
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
      let g = Chunk848479.Z.getPerfAttributedMemoryStats(),
        y = null == g ? true : g.events_dropped,
        O = {
          module_name: exports,
          allocation_total_size_kb: Chunk70956,
          allocation_count: f,
          module_version: p,
          events_dropped: y
        };
      if (Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, O), E) {
        let e = _.slice(0, 3).map(e => e[0]),
          t = 3;
        for (let n of module.map(e => c.Z.getPerfAttributedMemoryCallstacks(e)).filter(e => null != e).flatMap(e => e).sort((e, t) => {
            var n, r;
            return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0)
          }).slice(0, exports).filter(e => {
            var t;
            return (null != (t = e.total_alloc_kb) ? t : 0) > h
          })) {
          let e = {
            module_name: require.module_name,
            callstack_allocation_total_size_kb: require.total_alloc_kb,
            callstack_frame_module_names: require.frame_module_names,
            callstack_frame_module_codeids: require.frame_module_codeids,
            callstack_frame_relative_offsets: require.frame_rel_offsets,
            events_dropped: y
          };
          Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, module)
        }
      }
      b && this._pushedDeadlockMinidumpCount < 5 && (await Chunk998502.ZP.submitLiveCrashReport({
        message: "Desktop Memory Thread State",
        extra: {
          renderer_memory_kb: Chunk358085,
          gpu_brand: Chunk131951.Z.getGpuBrand()
        }
      }), this._pushedDeadlockMinidumpCount += 1)
    }
  }
  constructor(...e) {
    super(...e), f(this, "_checkInterval", null), f(this, "_heapHooksInstalled", false), f(this, "_pushedDeadlockMinidumpCount", 0), f(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let v = new O