/** Chunk was on web.js **/
/** chunk id: 616005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => f
});
var Chunk70298 = require("./70298.js"),
  Chunk973522 = require("./973522.js"),
  Chunk15285 = require("./15285.js"),
  Chunk971778 = require("./971778.js"),
  Chunk321034 = require("./321034.js");

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
    let T = o.A.getMemoryUsageElectronRenderer();
    null != T && (e.client_heartbeat_renderer_memory = T);
    let C = o.A.getMemoryUsageElectronRendererUsedHeapSize();
    null != C && (e.client_heartbeat_renderer_memory_used_heap = C);
    let N = o.A.getMemoryUsageElectronProcessTypeDetails();
    if (null != N) {
      var t, n, r, i, a, s, l, c, u, d, f, p, _, h, m, g, E, b, y, O, A, v, S, I;
      e.electron_process_memory_private = [null != (t = null == (_ = N.unknown) ? true : _.wss_priv_kb) ? t : false, null != (n = null == (h = N.main) ? true : h.wss_priv_kb) ? n : false, null != (r = null == (m = N.renderer) ? true : m.wss_priv_kb) ? r : false, null != (i = null == (g = N.gpu) ? true : g.wss_priv_kb) ? i : false, null != (a = null == (E = N.crashpad) ? true : E.wss_priv_kb) ? a : false, null != (s = null == (b = N.utility) ? true : b.wss_priv_kb) ? s : false], e.electron_process_memory_private_and_shared = [null != (l = null == (y = N.unknown) ? true : y.wss_kb) ? l : false, null != (c = null == (O = N.main) ? true : O.wss_kb) ? c : false, null != (u = null == (A = N.renderer) ? true : A.wss_kb) ? u : false, null != (d = null == (v = N.gpu) ? true : v.wss_kb) ? d : false, null != (f = null == (S = N.crashpad) ? true : S.wss_kb) ? f : false, null != (p = null == (I = N.utility) ? true : I.wss_kb) ? p : false]
    }
  }
  return e
}

function d() {
  let e = {};
  {
    let t = a.Ay.getCurrentGameForAnalytics();
    null != t && (e.client_heartbeat_current_game_id = t.id, e.client_heartbeat_current_game_name = t.name, e.client_heartbeat_current_game_executable = (0, i.Ic)(t.exePath), e.client_heartbeat_current_game_distributor = t.distributor, e.uses_client_mods = (0, r.b)()), s.A.isNativeModuleLoaded() && (e.voice_filters_native_module_loaded = true)
  }
  return e
}

function f() {
  return c({}, u(), d())
}