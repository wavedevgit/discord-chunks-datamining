/** Chunk was on web.js **/
/** chunk id: 680243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./65821.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk118356 = require("./118356.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk9302 = require("./9302.js"),
  Chunk211753 = require("./211753.js"),
  Chunk682763 = require("./682763.js"),
  Chunk327194 = require("./327194.js"),
  Chunk672396 = require("./672396.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Chunk118356.Vy("OverlayV3NativeModuleStore"),
  h = false,
  m = false,
  g = null,
  E = false,
  y = null,
  b = null,
  O = (() => {
    async function e() {
      A(), g = d.P.getInstance();
      try {
        await g.initialize(), h = true
      } catch (e) {
        (0, u._r)(null, "module_initialization_failed", {
          error: e
        }), h = false, (0, u.mD)(l.UNSET_PID, e, {
          crashType: "native"
        })
      } finally {
        w.emitChange()
      }
    }
    return () => (null == b && (b = e()), b)
  })();

function v(e) {
  __OVERLAY__ || !f.OX || m !== e && (m = e, e && (0, l.setOutOfProcessSupport)(true))
}

function A() {
  !__OVERLAY__ && f.OX && (y = null, E = false, _.verbose("Maybe Enable Overlay"), v(c.x.oopEnabled))
}

function I(e) {
  let {
    oopEnabled: t
  } = e;
  y = null, v(t)
}

function S() {
  return y = null, O(), false
}

function T(e) {
  let {
    isCrashedDisabled: t,
    error: n
  } = e;
  returntrue === t && (E = true), null != n && (y = n instanceof Error ? n.message : String(n)), true
}

function C() {
  return O(), false
}
class N extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A)
  }
  get isModuleLoading() {
    return null != b
  }
  get isOverlayEnabled() {
    return m
  }
  get isSupported() {
    return f.OX
  }
  get isModuleLoaded() {
    return h
  }
  get isCrashedDisabled() {
    return E
  }
  get errorMessage() {
    return y
  }
  getNativeModule() {
    return g
  }
}
p(N, "displayName", "Overlay-v3-Native-Module-Store");
let w = new N(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX ? {} : {
    CONNECTION_OPEN: C,
    EXPERIMENT_OVERRIDE_BUCKET: A,
    OVERLAY_SET_ENABLED: I,
    OVERLAY_V3_LOAD_NATIVE_MODULE: S,
    OVERLAY_CRASHED: T
  }),
  R = w