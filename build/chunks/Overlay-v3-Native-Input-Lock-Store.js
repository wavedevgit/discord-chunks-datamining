/** Chunk was on web.js **/
/** chunk id: 322155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk610394 = require("./610394.js"),
  Chunk932404 = require("./932404.js"),
  Chunk509140 = require("./509140.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Set,
  p = null,
  h = null,
  m = null;

function g(e) {
  var t;
  if (null == h) returnfalse;
  let n = null != (t = null == h ? true : h.isCrashedDisabled) && t;
  return !!e || !n
}

function E(e) {
  if (e && null != m) {
    let e = Date.now() - m;
    o.Z.track(d.rMx.OVERLAY_LOCKED, {
      unlocked_duration: e
    }), m = null
  } else e || null != m || (m = Date.now(), o.Z.track(d.rMx.OVERLAY_UNLOCKED))
}

function b(e, t) {
  E(e), e ? _.delete(t) : _.add(t), _ = new Set(_)
}

function y(e, t) {
  return !!g(e) && null != h && (b(e, t), h.setInteractionEnabled(!e), L.emitChange(), true)
}

function O(e, t) {
  return !!g(e) && (b(e, t), null == p || (clearTimeout(p), p = null, !e)) && (e ? y(e, t) : p = setTimeout(() => {
    y(e, t), v()
  }, 100), true)
}

function v() {
  null != p && (clearTimeout(p), p = null)
}

function I() {
  v(), _.clear(), _ = new Set, m = null
}

function T() {
  return h = Chunk509140.Z.getNativeModule(), I(), true
}

function S() {
  return h = null, I(), true
}

function A(e) {
  let {
    locked: t,
    pid: n
  } = e;
  return (0, l.PY)(n, "setInputLocked called", {
    locked: t
  }), O(t, n), true
}

function C(e) {
  let {
    region: t
  } = e, n = s.Z.getFocusedPID();
  return (0, l.PY)(null != n ? n : null, "activate_region", {
    region: t
  }), null != n && O(false, n), true
}

function N() {
  let e = Chunk610394.Z.getFocusedPID();
  return (0, Chunk932404.PY)(null != module ? module : null, "deactivate_all_regions"), null != module && y(true, module), true
}

function R() {
  return I(), true
}

function P(e) {
  let {
    lastAssociatedPID: t
  } = e;
  return null != t && y(true, t), true
}

function D() {
  I(), null == h || h.setInteractionEnabled(false)
}
class w extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk509140.Z)
  }
  isInputLocked(e) {
    return !_.has(e)
  }
}
f(w, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let L = new w(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: T,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: S,
    OVERLAY_SET_INPUT_LOCKED: A,
    OVERLAY_ACTIVATE_REGION: C,
    OVERLAY_DEACTIVATE_ALL_REGIONS: N,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: D,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: R,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: P
  }),
  x = L