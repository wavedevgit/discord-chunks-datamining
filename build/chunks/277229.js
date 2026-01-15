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
  return s.isPlatformEmbedded
}
async function h() {
  var e, t, n, r, a, o, s, c, u, d, f, p, _, h, m, g, E, b, y, O, v, S, I, T, C, A, N, P, w, R, D, x, L, j, M, k;
  let U = l.Z.getMemoryUsageElectronProcessTypeDetails();
  if (null == U) return null;
  let G = [null != (y = null == (e = U.unknown) ? true : e.wss_priv_kb) ? y : false, null != (O = null == (t = U.main) ? true : t.wss_priv_kb) ? O : false, null != (v = null == (n = U.renderer) ? true : n.wss_priv_kb) ? v : false, null != (S = null == (r = U.gpu) ? true : r.wss_priv_kb) ? S : false, null != (I = null == (a = U.crashpad) ? true : a.wss_priv_kb) ? I : false, null != (T = null == (o = U.utility) ? true : o.wss_priv_kb) ? T : false],
    Z = {
      electron_process_memory_private: G,
      electron_process_memory_private_and_shared: [null != (C = null == (s = U.unknown) ? true : s.wss_kb) ? C : false, null != (A = null == (c = U.main) ? true : c.wss_kb) ? A : false, null != (N = null == (u = U.renderer) ? true : u.wss_kb) ? N : false, null != (P = null == (d = U.gpu) ? true : d.wss_kb) ? P : false, null != (w = null == (f = U.crashpad) ? true : f.wss_kb) ? w : false, null != (R = null == (p = U.utility) ? true : p.wss_kb) ? R : false],
      electron_process_type_count: [null != (D = null == (_ = U.unknown) ? true : _.proc_count) ? D : 0, null != (x = null == (h = U.main) ? true : h.proc_count) ? x : 0, null != (L = null == (m = U.renderer) ? true : m.proc_count) ? L : 0, null != (j = null == (g = U.gpu) ? true : g.proc_count) ? j : 0, null != (M = null == (E = U.crashpad) ? true : E.proc_count) ? M : 0, null != (k = null == (b = U.utility) ? true : b.proc_count) ? k : 0]
    },
    F = await (0, i.q)();
  return null != F && (null != F.cpu_memory && (Z.system_memory_total = F.cpu_memory / 1024), null != F.cpu_memory_avail && (Z.system_memory_available = F.cpu_memory_avail / 1024)), Z
}

function m() {
  let e = l.Z.getMemoryHeapStats(),
    t = l.Z.getBlinkMemoryInfo(),
    n = null;
  null != e && (n = [e.totalHeapSize, e.totalHeapSizeExecutable, e.totalPhysicalSize, e.totalAvailableSize, e.usedHeapSize, e.heapSizeLimit, e.mallocedMemory, e.peakMallocedMemory]);
  let r = null;
  return null != t && (r = [t.allocated, t.total]), {
    v8_heap_stats: n,
    blink_memory_stats: r
  }
}
async function g() {
  var e, t, n;
  let r, i = {
    gpu_dedicated_memory: [],
    gpu_renderer_used_memory: []
  };
  if (!s.isPlatformEmbedded || !(0, s.isWindows)()) return i;
  try {
    if (await c.ZP.ensureModule("discord_media"), (null == (r = c.ZP.requireModule("discord_media")) ? true : r.getMemoryUsageBlob) == null) return i
  } catch (e) {
    return i
  }
  let a = [],
    o = [],
    l = await r.getMemoryUsageBlob(),
    u = new Set;
  for (let r of null != (n = null == l || null == (t = l[0]) || null == (e = t.data) ? true : e.gpus) ? n : [])
    if (!(!r.luid || 0 === r.luid || u.has(r.luid)))
      if (u.add(r.luid), null != r.memory ? a.push(r.memory / 1024) : a.push(false), null != r.memory_usage) {
        let e = 0;
        for (let t of r.memory_usage) t.memory_usage && (e += t.memory_usage / 1024);
        o.push(e)
      } else o.push(false);
  return {
    gpu_dedicated_memory: a,
    gpu_renderer_used_memory: o
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
    let e = await h();
    if (null == e) return;
    let t = f({}, e, m(), await g());
    a.default.track(u.rMx.DESKTOP_PERF_HEARTBEAT, t)
  }
  constructor(...e) {
    super(...e), d(this, "_heartbeatAnalyticsInterval", null), d(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let b = new E