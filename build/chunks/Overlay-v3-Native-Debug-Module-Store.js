/** Chunk was on web.js **/
/** chunk id: 670785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
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

function h(e, t, n) {
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
  S = false;

function I(e) {
  return !a()(e, y)
}

function T(e) {
  let t = setTimeout(() => {
    P(t)
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

function C(e, t) {
  var n;
  if (null == b) return void g.error("Overlay module not found");
  let r = null != (n = null == b ? true : b.getLastAssociatedPID()) ? n : u.UNSET_PID;
  try {
    let n = T(e);
    I(e) && (0, d.bs)(r, "capture_zones_set", {
      source: t,
      capture_zones: n,
      rawZones: e
    }), b.setCaptureZones(n)
  } catch (e) {
    g.error("Error setting capture zones:", e)
  }
}

function A(e) {
  return Object.keys(v).filter(t => v[t] === e)
}

function N() {
  return O.length > 0 && 0 === y.length
}

function P(e) {
  let t = A(e);
  for (let n of (null != e && clearTimeout(e), t)) delete v[n];
  let n = O.filter(e => !t.includes(e.name));
  N() || (y = n, C(n, "timer_expired")), O = [...n]
}

function R(e, t) {
  if (!f.Z.isOverlayEnabled) {
    if (0 === y.length) return;
    w("overlay_disabled");
    return
  }
  C(e, t), y = e, O = [...e]
}

function w(e) {
  for (let e of Object.values(v)) null != e && clearTimeout(e);
  v = {}, y = [], O = [], C([], e)
}

function D() {
  0 !== y.length && (O = [...y], y = [], C([], "store_click_zones"))
}

function x() {
  y.length > 0 || C(y = [...O], "refresh_click_zones")
}

function L(e, t, n, r) {
  let i = c.Z.getWindow(m.$J);
  if (null == i) return;
  let a = Math.ceil(n * i.innerWidth),
    o = Math.ceil(r * i.innerHeight),
    s = new MouseEvent((0, p.oc)(t), {
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

function j(e) {
  return w("crashed"), true
}

function M(e) {
  let {
    zones: t
  } = e;
  return R(t, "set_click_zones"), true
}

function k() {
  return w("refresh_host_window"), true
}

function U() {
  return null == (b = Chunk509140.Z.getNativeModule()) || !!S || (S = true, b.setCaptureZoneCallback(L), true)
}

function G() {
  return b = null, true
}

function Z(e) {
  let {
    pid: t
  } = e;
  return 0 === t ? D() : x(), true
}
class F extends(r = Chunk442837.ZP.Store) {
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
h(F, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let B = new F(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: U,
  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: G,
  OVERLAY_SET_CLICK_ZONES: M,
  OVERLAY_FOCUSED: Z,
  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: k,
  OVERLAY_CRASHED: j
})