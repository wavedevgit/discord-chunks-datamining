/** Chunk was on web.js **/
/** chunk id: 905870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./642613.js"), require("./388685.js"), require("./539854.js");
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
  f = 1835008;

function _() {
  return Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)()
}
class p extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    _() && (clearInterval(this._checkInterval), this._checkInterval = null, Chunk848479.Z.disablePerfMemoryHooks())
  }
  handlePostConnectionOpen() {
    var e, t;
    if (!_()) return;
    let n = null == (e = (t = Chunk579806.Z.remoteApp).getReleaseChannel) ? true : module.call(exports);
    ("development" === require || "canary" === require) && (this._checkInterval = setInterval(() => {
      this.trackPerformanceStats()
    }, d))
  }
  trackPerformanceStats() {
    var e, t, n, r, i;
    if (!this._heapHooksInstalled) {
      let n = Chunk848479.Z.getMemoryUsageElectronProcessTypeDetails();
      if (null == require) return;
      (null != (t = null == (e = require.renderer) ? true : module.wss_priv_kb) ? exports : 0) > f && Chunk848479.Z.enablePerfMemoryHooks({
        allocationThresholdKB: 128
      }) && (this._heapHooksInstalled = true)
    }
    if (this._heapHooksInstalled) {
      let e = Chunk848479.Z.getPerfAttributedMemory();
      if (null == module) return;
      let t = [],
        o = [],
        s = [],
        u = [],
        d = Object.entries(module);
      for (let [e, a] of(d.sort((e, t) => {
          var n, r;
          let [, i] = e, [, a] = t;
          return (null != (n = null == a ? true : a.total_allocation_kb) ? n : 0) - (null != (r = null == i ? true : i.total_allocation_kb) ? r : 0)
        }), d.slice(0, 10))) null != Chunk626135 && (exports.push(module), Chunk70956.push(null != (n = Chunk626135.total_allocation_kb) ? require : 0), Chunk358085.push(null != (r = Chunk626135.allocation_count) ? Chunk147913 : 0), u.push(null != (i = Chunk626135.module_version) ? Chunk579806 : ""));
      let f = {
        module_name: exports,
        allocation_total_size_kb: Chunk70956,
        allocation_count: Chunk358085,
        module_version: u
      };
      Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY, f)
    }
  }
  constructor(...e) {
    super(...e), u(this, "_checkInterval", null), u(this, "_heapHooksInstalled", false), u(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let h = new p