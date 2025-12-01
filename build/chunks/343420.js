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
    let A = Chunk848479.Z.getMemoryUsageElectronRenderer();
    null != A && (module.client_heartbeat_renderer_memory = A);
    let C = Chunk848479.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != C && (module.client_heartbeat_renderer_memory_used_heap = C);
    let N = Chunk848479.Z.getMemoryUsageElectronProcessTypeDetails();
    if (null != N) {
      var t, n, r, i, a, o, l, c, u, d, f, p, _, m, h, g, E, b, y, O, v, S, I, T;
      module.electron_process_memory_private = [null != (_ = null == (t = N.unknown) ? true : exports.wss_priv_kb) ? _ : false, null != (m = null == (n = N.main) ? true : require.wss_priv_kb) ? m : false, null != (h = null == (r = N.renderer) ? true : Chunk903772.wss_priv_kb) ? h : false, null != (g = null == (i = N.gpu) ? true : Chunk581567.wss_priv_kb) ? g : false, null != (E = null == (a = N.crashpad) ? true : Chunk594190.wss_priv_kb) ? E : false, null != (b = null == (o = N.utility) ? true : Chunk709706.wss_priv_kb) ? b : false], module.electron_process_memory_private_and_shared = [null != (y = null == (l = N.unknown) ? true : l.wss_kb) ? y : false, null != (O = null == (c = N.main) ? true : c.wss_kb) ? O : false, null != (v = null == (u = N.renderer) ? true : u.wss_kb) ? v : false, null != (S = null == (d = N.gpu) ? true : d.wss_kb) ? S : false, null != (I = null == (f = N.crashpad) ? true : f.wss_kb) ? I : false, null != (T = null == (p = N.utility) ? true : p.wss_kb) ? T : false]
    }
  }
  return module
}

function d() {
  let e = {};
  {
    let t = Chunk594190.ZP.getCurrentGameForAnalytics();
    null != exports && (module.client_heartbeat_current_game_id = exports.id, module.client_heartbeat_current_game_name = exports.name, module.client_heartbeat_current_game_executable = (0, Chunk581567.N6)(exports.exePath), module.client_heartbeat_current_game_distributor = exports.distributor, module.uses_client_mods = (0, Chunk903772.e)()), Chunk709706.Z.isNativeModuleLoaded() && (module.voice_filters_native_module_loaded = true)
  }
  return module
}

function f() {
  return c({}, u(), d())
}