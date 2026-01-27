/** Chunk was on web.js **/
/** chunk id: 905555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => u,
  N: () => f
}), require("./896048.js"), require("./65821.js");
var Chunk118356 = require("./118356.js"),
  Chunk499979 = require("./499979.js"),
  Chunk73153 = require("./73153.js"),
  Chunk87001 = require("./87001.js"),
  Chunk680243 = require("./680243.js"),
  Chunk392164 = require("./392164.js");
let c = new Chunk118356.Vy("OverlayV3NativeModuleUtils");
async function u() {
  let e;
  if (null == o.A.getWindow(l.f)) return;
  c.warn("Waiting for previous overlay popout to be destroyed.");
  let t = new Promise(e => {
    setTimeout(() => {
      e()
    }, 5e3)
  });

  function n() {
    null == o.A.getWindow(l.f) && (null == e || e())
  }
  let r = new Promise(t => {
    e = t, o.A.addChangeListener(n)
  });
  try {
    await Promise.race([t, r])
  } finally {
    o.A.removeChangeListener(n)
  }
  null != o.A.getWindow(l.f) && c.error("Previous overlay popout was not destroyed after 5 seconds!")
}
let d = 1e3;
async function f() {
  let e, t = s.A.isModuleLoaded,
    n = s.A.getNativeModule();
  if (t && null != n) return await (0, i.yy)(d), n;
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
    e = t, a.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", o), a.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", o)
  });
  try {
    await Promise.race([r, l])
  } finally {
    a.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", o), a.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", o)
  }
  return s.A.getNativeModule()
}