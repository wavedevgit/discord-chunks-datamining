/** Chunk was on web.js **/
/** chunk id: 222506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk684013 = require("./684013.js"),
  Chunk9302 = require("./9302.js"),
  Chunk395011 = require("./395011.js"),
  Chunk682763 = require("./682763.js"),
  Chunk680243 = require("./680243.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Set,
  h = null,
  m = null,
  g = null;

function E(e) {
  var t;
  if (d.ed) returntrue;
  if (null == m) returnfalse;
  let n = null != (t = null == m ? true : m.isCrashedDisabled) && t;
  return !!e || !n
}

function b(e) {
  if (e && null != g) {
    let e = Date.now() - g;
    s.A.track(f.HAw.OVERLAY_LOCKED, {
      unlocked_duration: e
    }), g = null
  } else e || null != g || (g = Date.now(), s.A.track(f.HAw.OVERLAY_UNLOCKED))
}

function y(e, t) {
  b(e), e ? _.delete(t) : _.add(t), _ = new Set(_)
}

function O(e, t) {
  return !!E(e) && (y(e, t), null == m || m.setInteractionEnabled(!e), L.emitChange(), true)
}

function A(e, t) {
  return !!E(e) && (y(e, t), null == h || (clearTimeout(h), h = null, !e)) && (e ? O(e, t) : h = setTimeout(() => {
    O(e, t), v()
  }, 100), true)
}

function v() {
  null != h && (clearTimeout(h), h = null)
}

function S() {
  v(), _.clear(), _ = new Set, g = null
}

function I() {
  return m = u.A.getNativeModule(), S(), true
}

function T() {
  return m = null, S(), true
}

function C(e) {
  let {
    locked: t,
    pid: n
  } = e;
  return (0, c.dK)(n, "setInputLocked called", {
    locked: t
  }), A(t, n), true
}

function N(e) {
  let {
    region: t
  } = e, n = l.A.getFocusedPID();
  return (0, c.dK)(null != n ? n : null, "activate_region", {
    region: t
  }), null != n && A(false, n), true
}

function R() {
  let e = l.A.getFocusedPID();
  return (0, c.dK)(null != e ? e : null, "deactivate_all_regions"), null != e && O(true, e), true
}

function w() {
  return S(), true
}

function P(e) {
  let {
    lastAssociatedPID: t
  } = e;
  return null != t && O(true, t), true
}

function D() {
  S(), null == m || m.setInteractionEnabled(false)
}
class x extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A)
  }
  isInputLocked(e) {
    return null == e || e === o.UNSET_PID || false === _.has(e)
  }
}
p(x, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let L = new x(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX ? {
    OVERLAY_SET_INPUT_LOCKED: C
  } : {
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: I,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: T,
    OVERLAY_SET_INPUT_LOCKED: C,
    OVERLAY_ACTIVATE_REGION: N,
    OVERLAY_DEACTIVATE_ALL_REGIONS: R,
    OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: D,
    OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: w,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: P
  }),
  j = L