/** Chunk was on web.js **/
/** chunk id: 275115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B
}), require("./896048.js");
var r, Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk311907 = require("./311907.js"),
  Chunk118356 = require("./118356.js"),
  Chunk73153 = require("./73153.js"),
  Chunk87001 = require("./87001.js"),
  Chunk9302 = require("./9302.js"),
  Chunk682763 = require("./682763.js"),
  Chunk680243 = require("./680243.js"),
  Chunk96175 = require("./96175.js"),
  Chunk672396 = require("./672396.js"),
  Chunk392164 = require("./392164.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = new Chunk118356.Vy("OverlayV3NativeClickZoneStore"),
  E = 3e4,
  b = null,
  y = [],
  O = [],
  A = {},
  v = false;

function S(e) {
  return !a()(e, y)
}

function I(e) {
  let t = setTimeout(() => {
    R(t)
  }, E);
  return e.map(e => {
    let n = {
        name: e.name,
        left: e.left,
        top: e.top,
        right: e.right,
        bottom: e.bottom
      },
      r = A[e.name];
    return null != r && clearTimeout(r), A[e.name] = t, n
  })
}

function T(e, t) {
  var n;
  if (null == b) return void g.error("Overlay module not found");
  let r = null != (n = null == b ? true : b.getLastAssociatedPID()) ? n : u.UNSET_PID;
  try {
    let n = I(e);
    S(e) && (0, d._r)(r, "capture_zones_set", {
      source: t,
      capture_zones: n,
      rawZones: e
    }), b.setCaptureZones(n)
  } catch (e) {
    g.error("Error setting capture zones:", e)
  }
}

function C(e) {
  return Object.keys(A).filter(t => A[t] === e)
}

function N() {
  return O.length > 0 && 0 === y.length
}

function R(e) {
  let t = C(e);
  for (let n of (null != e && clearTimeout(e), t)) delete A[n];
  let n = O.filter(e => !t.includes(e.name));
  N() || (y = n, T(n, "timer_expired")), O = [...n]
}

function w(e, t) {
  if (!f.A.isOverlayEnabled) {
    if (0 === y.length) return;
    P("overlay_disabled");
    return
  }
  T(e, t), y = e, O = [...e]
}

function P(e) {
  for (let e of Object.values(A)) null != e && clearTimeout(e);
  A = {}, y = [], O = [], T([], e)
}

function D() {
  0 !== y.length && (O = [...y], y = [], T([], "store_click_zones"))
}

function x() {
  y.length > 0 || T(y = [...O], "refresh_click_zones")
}

function L(e, t, n, r) {
  let i = c.A.getWindow(h.f);
  if (null == i) return;
  let a = Math.ceil(n * i.innerWidth),
    s = Math.ceil(r * i.innerHeight),
    o = new MouseEvent((0, p.Br)(t), {
      screenX: a,
      screenY: s,
      clientX: a,
      clientY: s,
      bubbles: true,
      view: i
    }),
    l = i.document.elementFromPoint(a, s);
  null != l && l.dispatchEvent(o)
}

function j(e) {
  return P("crashed"), true
}

function M(e) {
  let {
    zones: t
  } = e;
  return w(t, "set_click_zones"), true
}

function k() {
  return P("refresh_host_window"), true
}

function U() {
  return null == (b = f.A.getNativeModule()) || !!v || (v = true, b.setCaptureZoneCallback(L), true)
}

function G() {
  return b = null, true
}

function V(e) {
  let {
    pid: t
  } = e;
  return 0 === t ? D() : x(), true
}
class F extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.A, c.A)
  }
  getClickZones() {
    return y
  }
  getFocusLostStoredClickZones() {
    return O
  }
}
m(F, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let B = new F(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX ? {} : {
  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: U,
  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: G,
  OVERLAY_SET_CLICK_ZONES: M,
  OVERLAY_FOCUSED: V,
  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: k,
  OVERLAY_CRASHED: j
})