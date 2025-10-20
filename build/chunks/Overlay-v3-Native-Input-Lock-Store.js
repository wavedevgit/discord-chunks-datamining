/** Chunk was on web.js **/
/** chunk id: 322155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk610394 = require("./610394.js"),
  Chunk932404 = require("./932404.js"),
  Chunk509140 = require("./509140.js"),
  Chunk987650 = require("./987650.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Set,
  f = null,
  _ = null;

function p(e) {
  var t;
  if (null == _) returnfalse;
  let n = null != (t = null == _ ? true : _.isCrashedDisabled) && t;
  return !!e || !n
}

function h(e, t) {
  e ? d.delete(t) : d.add(t), d = new Set(d)
}

function m(e, t) {
  return !!p(e) && null != _ && (h(e, t), _.setInteractionEnabled(!e), R.emitChange(), true)
}

function g(e, t) {
  return !!p(e) && (h(e, t), null == f || (clearTimeout(f), f = null, !e)) && (e ? m(e, t) : f = setTimeout(() => {
    m(e, t), E()
  }, 100), true)
}

function E() {
  null != f && (clearTimeout(f), f = null)
}

function b() {
  E(), d.clear(), d = new Set
}

function y() {
  return _ = Chunk509140.Z.getNativeModule(), b(), true
}

function O() {
  return _ = null, b(), true
}

function v(e) {
  let {
    locked: t,
    pid: n
  } = e;
  return (0, s.hF)(n, "setInputLocked called", {
    locked: t
  }), g(t, n), true
}

function I(e) {
  let {
    region: t
  } = e, n = o.Z.getFocusedPID();
  return (0, s.hF)(null != n ? n : null, "activate_region", {
    region: t
  }), null != n && m(false, n), true
}

function T() {
  let e = Chunk610394.Z.getFocusedPID();
  return (0, Chunk932404.hF)(null != module ? module : null, "deactivate_all_regions"), null != module && m(true, module), true
}

function S() {
  return b(), true
}

function A(e) {
  let {
    lastAssociatedPID: t
  } = e;
  return null != t && m(true, t), true
}

function C() {
  b(), null == _ || _.setInteractionEnabled(false)
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk509140.Z)
  }
  isInputLocked(e) {
    return !d.has(e)
  }
}
u(N, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let R = new N(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: y,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: O,
    OVERLAY_SET_INPUT_LOCKED: v,
    OVERLAY_ACTIVATE_REGION: I,
    OVERLAY_DEACTIVATE_ALL_REGIONS: T,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: C,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: S,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: A
  }),
  P = R