/** Chunk was on web.js **/
/** chunk id: 886189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => f,
  s: () => u
}), require("./388685.js"), require("./415506.js");
var Chunk579092 = require("./579092.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk522474 = require("./522474.js"),
  Chunk509140 = require("./509140.js"),
  Chunk501787 = require("./501787.js");
let c = new Chunk579092.Yd("OverlayV3NativeModuleUtils");
async function u() {
  let e;
  if (null == Chunk522474.Z.getWindow(Chunk501787.$J)) return;
  c.warn("Waiting for previous overlay popout to be destroyed.");
  let t = new Promise(e => {
    setTimeout(() => {
      e()
    }, 5e3)
  });

  function n() {
    null == Chunk522474.Z.getWindow(Chunk501787.$J) && (null == module || module())
  }
  let r = new Promise(t => {
    e = t, a.Z.addChangeListener(n)
  });
  try {
    await Promise.race([exports, Chunk579092])
  } finally {
    Chunk522474.Z.removeChangeListener(require)
  }
  null != Chunk522474.Z.getWindow(Chunk501787.$J) && c.error("Previous overlay popout was not destroyed after 5 seconds!")
}
let d = 1e3;
async function f() {
  let e, t = Chunk509140.Z.isModuleLoaded,
    n = Chunk509140.Z.getNativeModule();
  if (exports && null != require) return await (0, Chunk379649._v)(d), require;
  if (exports && null == require) throw Error("Native module loaded but not found in store");
  let r = new Promise(e => {
    setTimeout(() => {
      e()
    }, 5e3)
  });

  function a() {
    null == module || module()
  }
  let l = new Promise(t => {
    e = t, o.Z.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a), o.Z.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a)
  });
  try {
    await Promise.race([Chunk579092, Chunk501787])
  } finally {
    Chunk570140.Z.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", Chunk522474), Chunk570140.Z.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", Chunk522474)
  }
  return Chunk509140.Z.getNativeModule()
}