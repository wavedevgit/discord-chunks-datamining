/** Chunk was on web.js **/
/** chunk id: 687829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./321073.js");
var Chunk439372 = require("./439372.js"),
  Chunk851581 = require("./851581.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk321034 = require("./321034.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js");

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
let p = 5 * Chunk927813.A.Millis.MINUTE;

function _() {
  return o.isPlatformEmbedded
}
async function h() {
  var e, t, n, r, a, s, o, c, u, d, f, p, _, h, m, g, E, y, b, O, v, A, I, S, T, C, N, R, w, P, D, x, L, j, M, k;
  let U = l.A.getMemoryUsageElectronProcessTypeDetails();
  if (null == U) return null;
  let G = {
      electron_process_memory_private: [null != (e = null == (b = U.unknown) ? true : b.wss_priv_kb) ? e : false, null != (t = null == (O = U.main) ? true : O.wss_priv_kb) ? t : false, null != (n = null == (v = U.renderer) ? true : v.wss_priv_kb) ? n : false, null != (r = null == (A = U.gpu) ? true : A.wss_priv_kb) ? r : false, null != (a = null == (I = U.crashpad) ? true : I.wss_priv_kb) ? a : false, null != (s = null == (S = U.utility) ? true : S.wss_priv_kb) ? s : false],
      electron_process_memory_private_and_shared: [null != (o = null == (T = U.unknown) ? true : T.wss_kb) ? o : false, null != (c = null == (C = U.main) ? true : C.wss_kb) ? c : false, null != (u = null == (N = U.renderer) ? true : N.wss_kb) ? u : false, null != (d = null == (R = U.gpu) ? true : R.wss_kb) ? d : false, null != (f = null == (w = U.crashpad) ? true : w.wss_kb) ? f : false, null != (p = null == (P = U.utility) ? true : P.wss_kb) ? p : false],
      electron_process_type_count: [null != (_ = null == (D = U.unknown) ? true : D.proc_count) ? _ : 0, null != (h = null == (x = U.main) ? true : x.proc_count) ? h : 0, null != (m = null == (L = U.renderer) ? true : L.proc_count) ? m : 0, null != (g = null == (j = U.gpu) ? true : j.proc_count) ? g : 0, null != (E = null == (M = U.crashpad) ? true : M.proc_count) ? E : 0, null != (y = null == (k = U.utility) ? true : k.proc_count) ? y : 0]
    },
    V = await (0, i.w)();
  return null != V && (null != V.cpu_memory && (G.system_memory_total = V.cpu_memory / 1024), null != V.cpu_memory_avail && (G.system_memory_available = V.cpu_memory_avail / 1024)), G
}

function m() {
  let e = l.A.getMemoryHeapStats(),
    t = l.A.getBlinkMemoryInfo(),
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
  if (!o.isPlatformEmbedded || !(0, o.isWindows)()) return i;
  try {
    if (await c.Ay.ensureModule("discord_media"), (null == (r = c.Ay.requireModule("discord_media")) ? true : r.getMemoryUsageBlob) == null) return i
  } catch (e) {
    return i
  }
  let a = [],
    s = [],
    l = await r.getMemoryUsageBlob(),
    u = new Set;
  for (let r of null != (e = null == l || null == (n = l[0]) || null == (t = n.data) ? true : t.gpus) ? e : [])
    if (!(!r.luid || 0 === r.luid || u.has(r.luid)))
      if (u.add(r.luid), null != r.memory ? a.push(r.memory / 1024) : a.push(false), null != r.memory_usage) {
        let e = 0;
        for (let t of r.memory_usage) t.memory_usage && (e += t.memory_usage / 1024);
        s.push(e)
      } else s.push(false);
  return {
    gpu_dedicated_memory: a,
    gpu_renderer_used_memory: s
  }
}
class E extends Chunk439372.A {
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
    a.default.track(u.HAw.DESKTOP_PERF_HEARTBEAT, t)
  }
  constructor(...e) {
    super(...e), d(this, "_heartbeatAnalyticsInterval", null), d(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let y = new E