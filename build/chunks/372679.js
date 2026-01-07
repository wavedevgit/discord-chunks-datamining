/** Chunk was on web.js **/
/** chunk id: 372679, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  K: () => c,
  M: () => u
}), require("./388685.js"), require("./415506.js");
var Chunk710845 = require("./710845.js"),
  Chunk998502 = require("./998502.js"),
  Chunk987650 = require("./987650.js");
let s = new Chunk710845.Z("OverlayModuleUtils"),
  l = null;

function c() {
  function e(e) {
    for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (s.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => true);
    return e
  }
  async function t() {
    if (!o.iP) throw s.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
    try {
      return await a.ZP.ensureModule("discord_overlay2"), r = e(a.ZP.requireModule("discord_overlay2"))
    } catch (e) {
      s.error("failed ensuring discord_overlay2", e);
      return
    }
  }
  return null != r ? Promise.resolve(r) : (null == l && (l = t()), l)
}

function u() {
  if (null == r) try {
    r = a.ZP.requireModule("discord_overlay2")
  } catch (e) {
    s.error("failed ensuring discord_overlay2", e);
    return
  }
  return r
}