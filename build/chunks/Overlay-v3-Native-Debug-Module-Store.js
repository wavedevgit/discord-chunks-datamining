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
  Chunk69004 = require("./69004.js"),
  Chunk928518 = require("./928518.js"),
  Chunk145597 = require("./145597.js"),
  Chunk932404 = require("./932404.js"),
  Chunk509140 = require("./509140.js"),
  Chunk501787 = require("./501787.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Chunk579092.Yd("OverlayV3NativeClickZoneStore"),
  g = 3e4,
  E = null,
  b = [],
  y = [],
  O = {};

function v(e) {
  return !a()(e, b)
}

function I(e) {
  let t = setTimeout(() => {
    C(t)
  }, g);
  return e.map(e => (O[e.name] = t, {
    name: e.name,
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  }))
}

function T(e, t) {
  var n;
  let r = null != (n = null == E ? true : E.getLastAssociatedPID()) ? n : d.UNSET_PID;
  try {
    let n = I(e);
    v(e) && (0, f.Uk)(r, "capture_zones_set", {
      source: t,
      capture_zones: n,
      rawZones: e
    }), null == E || E.setCaptureZones(n)
  } catch (e) {
    m.error("Error setting capture zones:", e)
  }
}

function S(e) {
  return Object.keys(O).filter(t => O[t] === e)
}

function A() {
  return y.length > 0 && 0 === b.length
}

function C(e) {
  let t = S(e);
  for (let n of (null != e && clearTimeout(e), t)) delete O[n];
  let n = y.filter(e => !t.includes(e.name));
  A() || (b = n, T(n, "timer_expired")), y = [...n]
}

function N(e, t) {
  T(e, t), b = e, y = [...e]
}

function R(e) {
  for (let e of Object.values(O)) null != e && clearTimeout(e);
  O = {}, b = [], y = [], T([], e)
}

function P() {
  0 !== b.length && (y = [...b], b = [], T([], "store_click_zones"))
}

function w() {
  b.length > 0 || T(b = [...y], "refresh_click_zones")
}
let D = new Chunk69004.Z(100);

function L(e, t, n, r) {
  return "".concat(e, "-").concat(t, "-").concat(n, "-").concat(r)
}

function x(e, t, n, r) {
  let i = u.Z.getWindow(p.$J);
  if (null == i) return;
  let a = Math.ceil(n * i.innerWidth),
    o = Math.ceil(r * i.innerHeight),
    s = new MouseEvent(t, {
      screenX: a,
      screenY: o,
      clientX: a,
      clientY: o,
      bubbles: true,
      view: i
    }),
    l = i.document.elementFromPoint(a, o);
  if (null == l) return;
  let c = L(e, t, a, o);
  if (!D.has(c)) {
    var _;
    D.set(c, {
      eventType: t,
      event: s,
      node: l
    });
    let n = null != (_ = null == E ? true : E.getLastAssociatedPID()) ? _ : d.UNSET_PID;
    (0, f.Uk)(n, "new_click_zone_event", {
      zone: e,
      eventType: t,
      event: s,
      node: l
    })
  }
  l.dispatchEvent(s)
}

function M(e) {
  return R("crashed"), true
}

function k(e) {
  let {
    zones: t
  } = e;
  return N(t, "set_click_zones"), true
}

function j() {
  return R("refresh_host_window"), true
}

function U() {
  return null != (E = Chunk509140.Z.getNativeModule()) && E.setCaptureZoneCallback(x), true
}

function G() {
  return E = null, true
}

function B(e) {
  let {
    pid: t
  } = e;
  return 0 === t ? P() : w(), true
}
class Z extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk509140.Z)
  }
  getClickZones() {
    return b
  }
  getFocusLostStoredClickZones() {
    return y
  }
}
h(Z, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let F = new Z(Chunk570140.Z, __OVERLAY__ ? {} : {
  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: U,
  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: G,
  OVERLAY_SET_CLICK_ZONES: k,
  OVERLAY_FOCUSED: B,
  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: j,
  OVERLAY_CRASHED: M
})