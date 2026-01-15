/** Chunk was on web.js **/
/** chunk id: 343420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => f
});
var Chunk903772 = require("./903772.js"),
  Chunk581567 = require("./581567.js"),
  Chunk594190 = require("./594190.js"),
  Chunk709706 = require("./709706.js"),
  Chunk848479 = require("./848479.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u() {
  let e = {};
  {
    let C = s.Z.getMemoryUsageElectronRenderer();
    null != C && (e.client_heartbeat_renderer_memory = C);
    let A = s.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != A && (e.client_heartbeat_renderer_memory_used_heap = A);
    let N = s.Z.getMemoryUsageElectronProcessTypeDetails();
    if (null != N) {
      var t, n, r, i, a, o, l, c, u, d, f, p, _, h, m, g, E, b, y, O, v, S, I, T;
      e.electron_process_memory_private = [null != (_ = null == (t = N.unknown) ? true : t.wss_priv_kb) ? _ : false, null != (h = null == (n = N.main) ? true : n.wss_priv_kb) ? h : false, null != (m = null == (r = N.renderer) ? true : r.wss_priv_kb) ? m : false, null != (g = null == (i = N.gpu) ? true : i.wss_priv_kb) ? g : false, null != (E = null == (a = N.crashpad) ? true : a.wss_priv_kb) ? E : false, null != (b = null == (o = N.utility) ? true : o.wss_priv_kb) ? b : false], e.electron_process_memory_private_and_shared = [null != (y = null == (l = N.unknown) ? true : l.wss_kb) ? y : false, null != (O = null == (c = N.main) ? true : c.wss_kb) ? O : false, null != (v = null == (u = N.renderer) ? true : u.wss_kb) ? v : false, null != (S = null == (d = N.gpu) ? true : d.wss_kb) ? S : false, null != (I = null == (f = N.crashpad) ? true : f.wss_kb) ? I : false, null != (T = null == (p = N.utility) ? true : p.wss_kb) ? T : false]
    }
  }
  return e
}

function d() {
  let e = {};
  {
    let t = a.ZP.getCurrentGameForAnalytics();
    null != t && (e.client_heartbeat_current_game_id = t.id, e.client_heartbeat_current_game_name = t.name, e.client_heartbeat_current_game_executable = (0, i.N6)(t.exePath), e.client_heartbeat_current_game_distributor = t.distributor, e.uses_client_mods = (0, r.e)()), o.Z.isNativeModuleLoaded() && (e.voice_filters_native_module_loaded = true)
  }
  return e
}

function f() {
  return c({}, u(), d())
}