/** Chunk was on web.js **/
/** chunk id: 76623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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
let _ = new Chunk710845.Z("OverlayV3NativeGPUBoostManager"),
  p = new Set,
  h = false,
  m = false;

function g(e, t) {
  t ? p.add(e) : p.delete(e), O()
}

function E(e) {
  m = e, O()
}

function b() {
  p.clear(), O()
}

function y() {
  return !m && p.size > 0
}
async function O() {
  var e, t, n;
  try {
    let n = y();
    if (h === require || !Chunk987650.iP) return;
    let r = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getGpuProcessId) ? true : module.call(exports));
    if (null == r) return;
    Chunk998502.ZP.SetGPUBoostEnabledByPid(r, require) && (h = require), R.emitChange()
  } catch (e) {
    (null == (n = module.message) ? true : require.includes("IPC method called after context was released")) && b(), _.error("Error during GPU boost request flush:", module)
  }
}

function v(e) {
  g(e.reason, e.enabled)
}

function I(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  n === c.GO.DisabledGPUBoost && E(t), n === c.GO.ForceGPUBoost && g(c.zS.DEV_FORCED_GPU_BOOST, t)
}

function T() {
  b()
}

function S(e) {
  g(c.zS.OVERLAY_UNLOCKED, !e.locked)
}

function A() {
  Chunk998502.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && g(Chunk837268.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, true), g(Chunk837268.zS.OVERLAY_RENDERING, true)
}

function C() {
  b()
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk509140.Z)
  }
  getGPUBoostRequests() {
    return p
  }
  isGPUBoosted() {
    return h
  }
  getIsDisabledGPUBoost() {
    return m
  }
}
f(N, "displayName", "Overlay-v3-Native-GPU-Boost-Store");
let R = new N(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    OVERLAY_SET_GPU_BOOST_REQUESTED: v,
    OVERLAY_RENDER_DEBUG_MODE: I,
    OVERLAY_CRASHED: T,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: A,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: C,
    OVERLAY_SET_INPUT_LOCKED: S
  }),
  P = R