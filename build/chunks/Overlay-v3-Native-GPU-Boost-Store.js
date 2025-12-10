/** Chunk was on web.js **/
/** chunk id: 76623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk998502 = require("./998502.js"),
  Chunk837268 = require("./837268.js"),
  Chunk509140 = require("./509140.js"),
  Chunk987650 = require("./987650.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Chunk710845.Z("OverlayV3NativeGPUBoostManager"),
  _ = new Set,
  m = false,
  h = false;

function g(e, t) {
  t ? _.add(e) : _.delete(e), O()
}

function E(e) {
  h = e, O()
}

function b() {
  _.clear(), O()
}

function y() {
  return !h && _.size > 0
}
async function O() {
  var e, t, n;
  try {
    let n = y();
    if (m === require || !Chunk987650.iP) return;
    let r = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getGpuProcessId) ? true : module.call(exports));
    if (null == r) return;
    Chunk998502.ZP.SetGPUBoostEnabledByPid(r, require) && (m = require), P.emitChange()
  } catch (e) {
    (null == (n = module.message) ? true : require.includes("IPC method called after context was released")) && b(), p.error("Error during GPU boost request flush:", module)
  }
}

function v(e) {
  g(e.reason, e.enabled)
}

function S(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  n === c.GO.DisabledGPUBoost && E(t), n === c.GO.ForceGPUBoost && g(c.zS.DEV_FORCED_GPU_BOOST, t)
}

function I() {
  b()
}

function T(e) {
  g(c.zS.OVERLAY_UNLOCKED, !e.locked)
}

function C() {
  Chunk998502.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && g(Chunk837268.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, true), g(Chunk837268.zS.OVERLAY_RENDERING, true)
}

function A() {
  b()
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk509140.Z)
  }
  getGPUBoostRequests() {
    return _
  }
  isGPUBoosted() {
    return m
  }
  getIsDisabledGPUBoost() {
    return h
  }
}
f(N, "displayName", "Overlay-v3-Native-GPU-Boost-Store");
let P = new N(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    OVERLAY_SET_GPU_BOOST_REQUESTED: v,
    OVERLAY_RENDER_DEBUG_MODE: S,
    OVERLAY_CRASHED: I,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: C,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: A,
    OVERLAY_SET_INPUT_LOCKED: T
  }),
  R = P