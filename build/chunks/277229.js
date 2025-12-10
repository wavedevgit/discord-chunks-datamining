/** Chunk was on web.js **/
/** chunk id: 277229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk147913 = require("./147913.js"),
  Chunk704806 = require("./704806.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk848479 = require("./848479.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = 5 * Chunk70956.Z.Millis.MINUTE;

function _() {
  return Chunk358085.isPlatformEmbedded
}
async function m() {
  var e, t, n, r, a, o, s, c, u, d, f, p, _, m, h, g, E, b, y, O, v, S, I, T, C, A, N, P, R, w, D, x, L, j, M, k;
  let U = Chunk848479.Z.getMemoryUsageElectronProcessTypeDetails();
  if (null == U) return null;
  let G = [null != (y = null == (e = U.unknown) ? true : module.wss_priv_kb) ? y : false, null != (O = null == (t = U.main) ? true : exports.wss_priv_kb) ? O : false, null != (v = null == (n = U.renderer) ? true : require.wss_priv_kb) ? v : false, null != (S = null == (r = U.gpu) ? true : Chunk147913.wss_priv_kb) ? S : false, null != (I = null == (a = U.crashpad) ? true : Chunk626135.wss_priv_kb) ? I : false, null != (T = null == (o = U.utility) ? true : Chunk70956.wss_priv_kb) ? T : false],
    Z = {
      electron_process_memory_private: G,
      electron_process_memory_private_and_shared: [null != (C = null == (s = U.unknown) ? true : Chunk358085.wss_kb) ? C : false, null != (A = null == (c = U.main) ? true : Chunk998502.wss_kb) ? A : false, null != (N = null == (u = U.renderer) ? true : Chunk981631.wss_kb) ? N : false, null != (P = null == (d = U.gpu) ? true : d.wss_kb) ? P : false, null != (R = null == (f = U.crashpad) ? true : f.wss_kb) ? R : false, null != (w = null == (p = U.utility) ? true : p.wss_kb) ? w : false],
      electron_process_type_count: [null != (D = null == (_ = U.unknown) ? true : _.proc_count) ? D : 0, null != (x = null == (m = U.main) ? true : m.proc_count) ? x : 0, null != (L = null == (h = U.renderer) ? true : h.proc_count) ? L : 0, null != (j = null == (g = U.gpu) ? true : g.proc_count) ? j : 0, null != (M = null == (E = U.crashpad) ? true : E.proc_count) ? M : 0, null != (k = null == (b = U.utility) ? true : b.proc_count) ? k : 0]
    },
    B = await (0, Chunk704806.q)();
  return null != B && (null != B.cpu_memory && (Z.system_memory_total = B.cpu_memory / 1024), null != B.cpu_memory_avail && (Z.system_memory_available = B.cpu_memory_avail / 1024)), Z
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
async function g() {
  var e, t, n;
  let r = Chunk998502.ZP.requireModule("discord_media");
  if (!(null == Chunk147913 ? true : Chunk147913.getMemoryUsageBlob)) return {
    gpu_dedicated_memory: [],
    gpu_renderer_used_memory: []
  };
  let i = [],
    a = [],
    o = await Chunk147913.getMemoryUsageBlob(),
    s = new Set;
  for (let r of null != (n = null == Chunk70956 || null == (t = Chunk70956[0]) || null == (e = exports.data) ? true : module.gpus) ? require : [])
    if (!(!Chunk147913.luid || 0 === Chunk147913.luid || Chunk358085.has(Chunk147913.luid)))
      if (Chunk358085.add(Chunk147913.luid), null != Chunk147913.memory ? Chunk704806.push(Chunk147913.memory / 1024) : Chunk704806.push(false), null != Chunk147913.memory_usage) {
        let e = 0;
        for (let t of Chunk147913.memory_usage) exports.memory_usage && (e += exports.memory_usage / 1024);
        Chunk626135.push(module)
      } else Chunk626135.push(false);
  return {
    gpu_dedicated_memory: Chunk704806,
    gpu_renderer_used_memory: Chunk626135
  }
}
class E extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    _() && (clearInterval(this._heartbeatAnalyticsInterval), this._heartbeatAnalyticsInterval = null)
  }
  handlePostConnectionOpen() {
    _() && (clearInterval(this._heartbeatAnalyticsInterval), this._heartbeatAnalyticsInterval = setInterval(async () => {
      await this.trackPerfAnalytics()
    }, p))
  }
  async trackPerfAnalytics() {
    let e = await m();
    if (null == module) return;
    let t = f({}, module, h(), await g());
    Chunk626135.default.track(Chunk981631.rMx.DESKTOP_PERF_HEARTBEAT, exports)
  }
  constructor(...e) {
    super(...e), d(this, "_heartbeatAnalyticsInterval", null), d(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let b = new E