/** Chunk was on web.js **/
/** chunk id: 670785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var r, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk579092 = require("./579092.js"),
  Chunk570140 = require("./570140.js"),
  Chunk522474 = require("./522474.js"),
  Chunk145597 = require("./145597.js"),
  Chunk932404 = require("./932404.js"),
  Chunk509140 = require("./509140.js"),
  Chunk575140 = require("./575140.js"),
  Chunk987650 = require("./987650.js"),
  Chunk501787 = require("./501787.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = new Chunk579092.Yd("OverlayV3NativeClickZoneStore"),
  E = 3e4,
  b = null,
  y = [],
  O = [],
  v = {},
  I = false;

function T(e) {
  return !a()(e, y)
}

function S(e) {
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
      r = v[e.name];
    return null != r && clearTimeout(r), v[e.name] = t, n
  })
}

function A(e, t) {
  var n;
  if (null == b) return void g.error("Overlay module not found");
  let r = null != (n = null == b ? true : b.getLastAssociatedPID()) ? n : u.UNSET_PID;
  try {
    let n = S(e);
    T(e) && (0, d.bs)(r, "capture_zones_set", {
      source: t,
      capture_zones: n,
      rawZones: e
    }), b.setCaptureZones(n)
  } catch (e) {
    g.error("Error setting capture zones:", e)
  }
}

function C(e) {
  return Object.keys(v).filter(t => v[t] === e)
}

function N() {
  return O.length > 0 && 0 === y.length
}

function R(e) {
  let t = C(e);
  for (let n of (null != e && clearTimeout(e), t)) delete v[n];
  let n = O.filter(e => !t.includes(e.name));
  N() || (y = n, A(n, "timer_expired")), O = [...n]
}

function P(e, t) {
  if (!f.Z.isOverlayEnabled) {
    if (0 === y.length) return;
    D("overlay_disabled");
    return
  }
  A(e, t), y = e, O = [...e]
}

function D(e) {
  for (let e of Object.values(v)) null != e && clearTimeout(e);
  v = {}, y = [], O = [], A([], e)
}

function w() {
  0 !== y.length && (O = [...y], y = [], A([], "store_click_zones"))
}

function x() {
  y.length > 0 || A(y = [...O], "refresh_click_zones")
}

function L(e, t, n, r) {
  let i = c.Z.getWindow(h.$J);
  if (null == i) return;
  let a = Math.ceil(n * i.innerWidth),
    o = Math.ceil(r * i.innerHeight),
    s = new MouseEvent((0, _.oc)(t), {
      screenX: a,
      screenY: o,
      clientX: a,
      clientY: o,
      bubbles: true,
      view: i
    }),
    l = i.document.elementFromPoint(a, o);
  null != l && l.dispatchEvent(s)
}

function M(e) {
  return D("crashed"), true
}

function j(e) {
  let {
    zones: t
  } = e;
  return P(t, "set_click_zones"), true
}

function k() {
  return D("refresh_host_window"), true
}

function U() {
  return null == (b = Chunk509140.Z.getNativeModule()) || !!I || (I = true, b.setCaptureZoneCallback(L), true)
}

function G() {
  return b = null, true
}

function B(e) {
  let {
    pid: t
  } = e;
  return 0 === t ? w() : x(), true
}
class Z extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk509140.Z, Chunk522474.Z)
  }
  getClickZones() {
    return y
  }
  getFocusLostStoredClickZones() {
    return O
  }
}
m(Z, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let F = new Z(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: U,
  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: G,
  OVERLAY_SET_CLICK_ZONES: j,
  OVERLAY_FOCUSED: B,
  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: k,
  OVERLAY_CRASHED: M
})