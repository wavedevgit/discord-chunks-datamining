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
      S(), g = Chunk242297._.getInstance();
      try {
        await g.initialize(), m = true
      } catch (e) {
        (0, Chunk932404.bs)(null, "module_initialization_failed", {
          error: module
        }), m = false, (0, Chunk932404.PV)(Chunk145597.UNSET_PID, module, {
          crashType: "native"
        })
      } finally {
        P.emitChange()
      }
    }
    return () => (null == y && (y = module()), y)
  })();

function v(e) {
  !__OVERLAY__ && f.iP && h !== e && (h = e, e && (0, l.setOutOfProcessSupport)(true))
}

function S() {
  !__OVERLAY__ && Chunk987650.iP && (b = null, E = false, _.verbose("Maybe Enable Overlay"), v(Chunk454991.v.oopEnabled))
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

function A(e) {
  let {
    isCrashedDisabled: t,
    error: n
  } = e;
  returntrue === t && (E = true), null != n && (b = n instanceof Error ? n.message : String(n)), true
}

function C() {
  return O(), false
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk353926.Z)
  }
  get isModuleLoading() {
    return null != y
  }
  get isOverlayEnabled() {
    return h
  }
  get isSupported() {
    return Chunk987650.iP
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
    CONNECTION_OPEN: C,
    EXPERIMENT_OVERRIDE_BUCKET: S,
    OVERLAY_SET_ENABLED: I,
    OVERLAY_V3_LOAD_NATIVE_MODULE: T,
    OVERLAY_CRASHED: A
  }),
  R = P