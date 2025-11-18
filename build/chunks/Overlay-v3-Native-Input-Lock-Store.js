/** Chunk was on web.js **/
/** chunk id: 322155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk145597 = require("./145597.js"),
  Chunk610394 = require("./610394.js"),
  Chunk932404 = require("./932404.js"),
  Chunk509140 = require("./509140.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Set,
  h = null,
  m = null,
  g = null;

function E(e) {
  var t;
  if (d.y3) returntrue;
  if (null == m) returnfalse;
  let n = null != (t = null == m ? true : m.isCrashedDisabled) && t;
  return !!e || !n
}

function b(e) {
  if (e && null != g) {
    let e = Date.now() - g;
    o.Z.track(f.rMx.OVERLAY_LOCKED, {
      unlocked_duration: e
    }), g = null
  } else e || null != g || (g = Date.now(), o.Z.track(f.rMx.OVERLAY_UNLOCKED))
}

function y(e, t) {
  b(e), e ? p.delete(t) : p.add(t), p = new Set(p)
}

function O(e, t) {
  return !!E(e) && (y(e, t), null == m || m.setInteractionEnabled(!e), x.emitChange(), true)
}

function v(e, t) {
  return !!E(e) && (y(e, t), null == h || (clearTimeout(h), h = null, !e)) && (e ? O(e, t) : h = setTimeout(() => {
    O(e, t), I()
  }, 100), true)
}

function I() {
  null != h && (clearTimeout(h), h = null)
}

function T() {
  I(), p.clear(), p = new Set, g = null
}

function S() {
  return m = Chunk509140.Z.getNativeModule(), T(), true
}

function A() {
  return m = null, T(), true
}

function C(e) {
  let {
    locked: t,
    pid: n
  } = e;
  return (0, c.PY)(n, "setInputLocked called", {
    locked: t
  }), v(t, n), true
}

function N(e) {
  let {
    region: t
  } = e, n = l.Z.getFocusedPID();
  return (0, c.PY)(null != n ? n : null, "activate_region", {
    region: t
  }), null != n && v(false, n), true
}

function R() {
  let e = Chunk610394.Z.getFocusedPID();
  return (0, Chunk932404.PY)(null != module ? module : null, "deactivate_all_regions"), null != module && O(true, module), true
}

function P() {
  return T(), true
}

function D(e) {
  let {
    lastAssociatedPID: t
  } = e;
  return null != t && O(true, t), true
}

function w() {
  T(), null == m || m.setInteractionEnabled(false)
}
class L extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk509140.Z)
  }
  isInputLocked(e) {
    return null == e || e === s.UNSET_PID || false === p.has(e)
  }
}
_(L, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let x = new L(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {
    OVERLAY_SET_INPUT_LOCKED: C
  } : {
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: S,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: A,
    OVERLAY_SET_INPUT_LOCKED: C,
    OVERLAY_ACTIVATE_REGION: N,
    OVERLAY_DEACTIVATE_ALL_REGIONS: R,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: w,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: P,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: D
  }),
  M = x