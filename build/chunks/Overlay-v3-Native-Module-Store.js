/** Chunk was on web.js **/
/** chunk id: 509140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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
  g = false,
  E = null,
  b = false,
  y = new Set,
  O = (() => {
    let e = null;
    async function t() {
      E = Chunk242297._.getInstance();
      try {
        await E.initialize(), (0, Chunk932404.U9)(), h = true
      } catch (e) {
        (0, Chunk932404.Uk)(null, "module_load_failed", {
          error: module
        }), (0, Chunk932404.UK)(module), (0, Chunk932404.PV)(Chunk145597.UNSET_PID, module, {
          crashType: "native"
        }), h = false
      } finally {
        R.emitChange()
      }
    }
    return () => (null == module && (e = exports()), module)
  })();

function v(e) {
  if (!__OVERLAY__ && f.iP && (m = e, null == E)) return void O()
}

function I() {
  !__OVERLAY__ && Chunk987650.iP && (p.verbose("Maybe Enable Overlay"), v(Chunk454991.v.oopEnabled), (0, Chunk145597.setOutOfProcessSupport)(true))
}

function T(e) {
  let {
    oopEnabled: t
  } = e;
  v(t)
}

function S() {
  g = false
}

function A() {
  return O(), false
}

function C(e) {
  let {
    pid: t,
    isCrashedDisabled: n
  } = e;
  returntrue === n && (b = true), !!y.has(t) || true === b
}
class N extends(r = Chunk442837.ZP.Store) {
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
    return b
  }
  getNativeModule() {
    return E
  }
}
_(N, "displayName", "Overlay-v3-Native-Module-Store");
let R = new N(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
    LOGIN: S,
    LOGOUT: S,
    EXPERIMENT_OVERRIDE_BUCKET: I,
    OVERLAY_SET_ENABLED: T,
    OVERLAY_V3_LOAD_NATIVE_MODULE: A,
    OVERLAY_CRASHED: C
  }),
  P = R