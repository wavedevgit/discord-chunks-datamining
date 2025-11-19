/** Chunk was on web.js **/
/** chunk id: 277229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk704806 = require("./704806.js"),
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

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = 5 * Chunk70956.Z.Millis.MINUTE;

function _() {
  return Chunk358085.isPlatformEmbedded
}
async function p() {
  var e, t, n, r, a, o, s, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S, A, C, N, R, P, D, w, L, x, M, k, j;
  let U = Chunk848479.Z.getMemoryUsageElectronProcessTypeDetails();
  if (null == U) return null;
  let G = [null != (y = null == (e = U.unknown) ? true : module.wss_priv_kb) ? y : false, null != (O = null == (t = U.main) ? true : exports.wss_priv_kb) ? O : false, null != (v = null == (n = U.renderer) ? true : require.wss_priv_kb) ? v : false, null != (I = null == (r = U.gpu) ? true : Chunk147913.wss_priv_kb) ? I : false, null != (T = null == (a = U.crashpad) ? true : Chunk626135.wss_priv_kb) ? T : false, null != (S = null == (o = U.utility) ? true : Chunk70956.wss_priv_kb) ? S : false],
    B = {
      electron_process_memory_private: G,
      electron_process_memory_private_and_shared: [null != (A = null == (s = U.unknown) ? true : Chunk358085.wss_kb) ? A : false, null != (C = null == (c = U.main) ? true : Chunk981631.wss_kb) ? C : false, null != (N = null == (u = U.renderer) ? true : u.wss_kb) ? N : false, null != (R = null == (d = U.gpu) ? true : d.wss_kb) ? R : false, null != (P = null == (f = U.crashpad) ? true : f.wss_kb) ? P : false, null != (D = null == (_ = U.utility) ? true : _.wss_kb) ? D : false],
      electron_process_type_count: [null != (w = null == (p = U.unknown) ? true : p.proc_count) ? w : 0, null != (L = null == (h = U.main) ? true : h.proc_count) ? L : 0, null != (x = null == (m = U.renderer) ? true : m.proc_count) ? x : 0, null != (M = null == (g = U.gpu) ? true : g.proc_count) ? M : 0, null != (k = null == (E = U.crashpad) ? true : E.proc_count) ? k : 0, null != (j = null == (b = U.utility) ? true : b.proc_count) ? j : 0]
    },
    Z = await (0, Chunk704806.q)();
  return null != Z && (null != Z.cpu_memory && (B.system_memory_total = Z.cpu_memory / 1024), null != Z.cpu_memory_avail && (B.system_memory_available = Z.cpu_memory_avail / 1024)), B
}

function h() {
  let e = Chunk848479.Z.getMemoryHeapStats(),
    t = Chunk848479.Z.getBlinkMemoryInfo(),
    n = null;
  null != module && (n = [module.totalHeapSize, module.totalHeapSizeExecutable, module.totalPhysicalSize, module.totalAvailableSize, module.usedHeapSize, module.heapSizeLimit, module.mallocedMemory, module.peakMallocedMemory]);
  let r = null;
  return null != exports && (r = [exports.allocated, exports.total]), {
    v8_heap_stats: require,
    blink_memory_stats: Chunk147913
  }
}
class m extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    _() && (clearInterval(this._heartbeatAnalyticsInterval), this._heartbeatAnalyticsInterval = null)
  }
  handlePostConnectionOpen() {
    _() && (clearInterval(this._heartbeatAnalyticsInterval), this._heartbeatAnalyticsInterval = setInterval(async () => {
      await this.trackPerfAnalytics()
    }, f))
  }
  async trackPerfAnalytics() {
    let e = await p();
    if (null == module) return;
    let t = d({}, module, h());
    Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_HEARTBEAT, exports)
  }
  constructor(...e) {
    super(...e), u(this, "_heartbeatAnalyticsInterval", null), u(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let g = new m