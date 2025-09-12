/** Chunk was on web.js **/
/** chunk id: 905870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./642613.js"), require("./388685.js"), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk848479 = require("./848479.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 15 * Chunk70956.Z.Millis.MINUTE,
  f = 1310720,
  _ = 1835008,
  p = 4096,
  h = true,
  m = 12;

function g() {
  return Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)()
}
class E extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    g() && (clearInterval(this._checkInterval), this._checkInterval = null, Chunk848479.Z.disablePerfMemoryHooks())
  }
  handlePostConnectionOpen() {
    var e, t;
    if (!g()) return;
    let n = null == (e = (t = Chunk579806.Z.remoteApp).getReleaseChannel) ? true : module.call(exports);
    ("development" === require || "canary" === require) && (this._checkInterval = setInterval(() => {
      this.trackPerformanceStats()
    }, d))
  }
  trackPerformanceStats() {
    var e, t, n, r, i;
    let o = Chunk848479.Z.getMemoryUsageElectronProcessTypeDetails();
    if (null == Chunk70956) return;
    let s = null != (t = null == (e = Chunk70956.renderer) ? true : module.wss_priv_kb) ? exports : 0;
    if (!this._heapHooksInstalled && Chunk358085 > f && Chunk848479.Z.enablePerfMemoryHooks({
        allocationThresholdKB: m,
        enableCallStackTracking: h
      }) && (this._heapHooksInstalled = true), this._heapHooksInstalled) {
      if (Chunk358085 < _) return;
      let e = Chunk848479.Z.getPerfAttributedMemory();
      if (null == module) return;
      let t = [],
        o = [],
        u = [],
        d = [],
        f = Object.entries(module);
      for (let [e, a] of(f.sort((e, t) => {
          var n, r;
          let [, i] = e, [, a] = t;
          return (null != (n = null == a ? true : a.total_allocation_kb) ? n : 0) - (null != (r = null == i ? true : i.total_allocation_kb) ? r : 0)
        }), f.slice(0, 10))) null != Chunk626135 && (exports.push(module), Chunk70956.push(null != (n = Chunk626135.total_allocation_kb) ? require : 0), u.push(null != (r = Chunk626135.allocation_count) ? Chunk147913 : 0), d.push(null != (i = Chunk626135.module_version) ? Chunk579806 : ""));
      let m = Chunk848479.Z.getPerfAttributedMemoryStats(),
        g = null == m ? true : m.events_dropped,
        E = {
          module_name: exports,
          allocation_total_size_kb: Chunk70956,
          allocation_count: u,
          module_version: d,
          events_dropped: g
        };
      if (Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, E), h) {
        let e = f.slice(0, 3).map(e => e[0]),
          t = 3;
        for (let n of module.map(e => l.Z.getPerfAttributedMemoryCallstacks(e)).filter(e => null != e).flatMap(e => e).sort((e, t) => {
            var n, r;
            return (null != (n = t.total_alloc_kb) ? n : 0) - (null != (r = e.total_alloc_kb) ? r : 0)
          }).slice(0, exports).filter(e => {
            var t;
            return (null != (t = e.total_alloc_kb) ? t : 0) > p
          })) {
          let e = {
            module_name: require.module_name,
            callstack_allocation_total_size_kb: require.total_alloc_kb,
            callstack_frame_module_names: require.frame_module_names,
            callstack_frame_module_codeids: require.frame_module_codeids,
            callstack_frame_relative_offsets: require.frame_rel_offsets,
            events_dropped: g
          };
          Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK, module)
        }
      }
    }
  }
  constructor(...e) {
    super(...e), u(this, "_checkInterval", null), u(this, "_heapHooksInstalled", false), u(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let b = new E