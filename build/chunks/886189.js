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
  if (null == o.Z.getWindow(l.$J)) return;
  c.warn("Waiting for previous overlay popout to be destroyed.");
  let t = new Promise(e => {
    setTimeout(() => {
      e()
    }, 5e3)
  });

  function n() {
    null == o.Z.getWindow(l.$J) && (null == e || e())
  }
  let r = new Promise(t => {
    e = t, o.Z.addChangeListener(n)
  });
  try {
    await Promise.race([t, r])
  } finally {
    o.Z.removeChangeListener(n)
  }
  null != o.Z.getWindow(l.$J) && c.error("Previous overlay popout was not destroyed after 5 seconds!")
}
let d = 1e3;
async function f() {
  let e, t = s.Z.isModuleLoaded,
    n = s.Z.getNativeModule();
  if (t && null != n) return await (0, i._v)(d), n;
  if (t && null == n) throw Error("Native module loaded but not found in store");
  let r = new Promise(e => {
    setTimeout(() => {
      e()
    }, 5e3)
  });

  function o() {
    null == e || e()
  }
  let l = new Promise(t => {
    e = t, a.Z.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", o), a.Z.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", o)
  });
  try {
    await Promise.race([r, l])
  } finally {
    a.Z.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", o), a.Z.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", o)
  }
  return s.Z.getNativeModule()
}