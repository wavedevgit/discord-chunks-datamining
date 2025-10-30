/** Chunk was on web.js **/
/** chunk id: 509140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk579092 = require("./579092.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk145597 = require("./145597.js"),
  Chunk454991 = require("./454991.js"),
  Chunk932404 = require("./932404.js"),
  Chunk242297 = require("./242297.js"),
  Chunk987650 = require("./987650.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Chunk579092.Yd("OverlayV3NativeModuleStore"),
  h = false,
  m = false,
  g = null,
  E = false,
  b = new Set,
  y = (() => {
    let e = null;
    async function t() {
      v(), g = Chunk242297._.getInstance();
      try {
        await g.initialize(), h = true
      } catch (e) {
        (0, Chunk932404.bs)(null, "module_initialization_failed", {
          error: module
        }), h = false, (0, Chunk932404.PV)(Chunk145597.UNSET_PID, module, {
          crashType: "native"
        })
      } finally {
        N.emitChange()
      }
    }
    return () => (null == module && (e = exports()), module)
  })();

function O(e) {
  !__OVERLAY__ && f.iP && (m = e)
}

function v() {
  !__OVERLAY__ && Chunk987650.iP && (p.verbose("Maybe Enable Overlay"), O(Chunk454991.v.oopEnabled), (0, Chunk145597.setOutOfProcessSupport)(true))
}

function I(e) {
  let {
    oopEnabled: t
  } = e;
  O(t)
}

function S() {
  return y(), false
}

function T(e) {
  let {
    pid: t,
    isCrashedDisabled: n
  } = e;
  returntrue === n && (E = true), !!b.has(t) || true === E
}

function A() {
  return y(), false
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk353926.Z)
  }
  get isOverlayEnabled() {
    return m
  }
  get isSupported() {
    return Chunk987650.iP
  }
  get isModuleLoaded() {
    return h
  }
  get isCrashedDisabled() {
    return E
  }
  getNativeModule() {
    return g
  }
}
_(C, "displayName", "Overlay-v3-Native-Module-Store");
let N = new C(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    POST_CONNECTION_OPEN: A,
    EXPERIMENT_OVERRIDE_BUCKET: v,
    OVERLAY_SET_ENABLED: I,
    OVERLAY_V3_LOAD_NATIVE_MODULE: S,
    OVERLAY_CRASHED: T
  }),
  R = N