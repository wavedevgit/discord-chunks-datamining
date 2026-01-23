/** Chunk was on web.js **/
/** chunk id: 321090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77729 = require("./77729.js"),
  Chunk626584 = require("./626584.js"),
  Chunk837921 = require("./837921.js"),
  Chunk41984 = require("./41984.js"),
  Chunk680243 = require("./680243.js"),
  Chunk672396 = require("./672396.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Chunk626584.A("OverlayV3NativeGPUBoostManager"),
  _ = new Set,
  h = false,
  m = false;

function g(e, t) {
  t ? _.add(e) : _.delete(e), O()
}

function E(e) {
  m = e, O()
}

function y() {
  _.clear(), O()
}

function b() {
  return !m && _.size > 0
}
async function O() {
  var e, t, n;
  try {
    let n = b();
    if (h === n || !d.OX) return;
    let r = await (null === s.A || true === s.A || null == (t = s.A.processUtils) || null == (e = t.getGpuProcessId) ? true : e.call(t));
    if (null == r) return;
    l.Ay.SetGPUBoostEnabledByPid(r, n) && (h = n), R.emitChange()
  } catch (e) {
    (null == (n = e.message) ? true : n.includes("IPC method called after context was released")) && y(), p.error("Error during GPU boost request flush:", e)
  }
}

function v(e) {
  g(e.reason, e.enabled)
}

function A(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  n === c.x7.DisabledGPUBoost && E(t), n === c.x7.ForceGPUBoost && g(c.y7.DEV_FORCED_GPU_BOOST, t)
}

function I() {
  y()
}

function S(e) {
  g(c.y7.OVERLAY_UNLOCKED, !e.locked)
}

function T() {
  l.Ay.IsHardwareAcceleratedGPUSchedulingEnabled() && g(c.y7.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, true), g(c.y7.OVERLAY_RENDERING, true)
}

function C() {
  y()
}
class N extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A)
  }
  getGPUBoostRequests() {
    return _
  }
  isGPUBoosted() {
    return h
  }
  getIsDisabledGPUBoost() {
    return m
  }
}
f(N, "displayName", "Overlay-v3-Native-GPU-Boost-Store");
let R = new N(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX ? {} : {
    OVERLAY_SET_GPU_BOOST_REQUESTED: v,
    OVERLAY_RENDER_DEBUG_MODE: A,
    OVERLAY_CRASHED: I,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: T,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: C,
    OVERLAY_SET_INPUT_LOCKED: S
  }),
  w = R