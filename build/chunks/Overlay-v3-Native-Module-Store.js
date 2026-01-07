/** Chunk was on web.js **/
/** chunk id: 509140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./415506.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk579092 = require("./579092.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk145597 = require("./145597.js"),
  Chunk454991 = require("./454991.js"),
  Chunk932404 = require("./932404.js"),
  Chunk242297 = require("./242297.js"),
  Chunk987650 = require("./987650.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Chunk579092.Yd("OverlayV3NativeModuleStore"),
  m = false,
  h = false,
  g = null,
  E = false,
  b = null,
  y = null,
  O = (() => {
    async function e() {
      S(), g = d._.getInstance();
      try {
        await g.initialize(), m = true
      } catch (e) {
        (0, u.bs)(null, "module_initialization_failed", {
          error: e
        }), m = false, (0, u.PV)(l.UNSET_PID, e, {
          crashType: "native"
        })
      } finally {
        P.emitChange()
      }
    }
    return () => (null == y && (y = e()), y)
  })();

function v(e) {
  !__OVERLAY__ && f.iP && h !== e && (h = e, e && (0, l.setOutOfProcessSupport)(true))
}

function S() {
  !__OVERLAY__ && f.iP && (b = null, E = false, _.verbose("Maybe Enable Overlay"), v(c.v.oopEnabled))
}

function I(e) {
  let {
    oopEnabled: t
  } = e;
  b = null, v(t)
}

function T() {
  return b = null, O(), false
}

function C(e) {
  let {
    isCrashedDisabled: t,
    error: n
  } = e;
  returntrue === t && (E = true), null != n && (b = n instanceof Error ? n.message : String(n)), true
}

function A() {
  return O(), false
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.Z)
  }
  get isModuleLoading() {
    return null != y
  }
  get isOverlayEnabled() {
    return h
  }
  get isSupported() {
    return f.iP
  }
  get isModuleLoaded() {
    return m
  }
  get isCrashedDisabled() {
    return E
  }
  get errorMessage() {
    return b
  }
  getNativeModule() {
    return g
  }
}
p(N, "displayName", "Overlay-v3-Native-Module-Store");
let P = new N(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    CONNECTION_OPEN: A,
    EXPERIMENT_OVERRIDE_BUCKET: S,
    OVERLAY_SET_ENABLED: I,
    OVERLAY_V3_LOAD_NATIVE_MODULE: T,
    OVERLAY_CRASHED: C
  }),
  R = P