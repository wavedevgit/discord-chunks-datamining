/** Chunk was on web.js **/
/** chunk id: 899699, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  R: () => c,
  m: () => u
}), require("./896048.js"), require("./65821.js");
var Chunk626584 = require("./626584.js"),
  Chunk837921 = require("./837921.js"),
  Chunk672396 = require("./672396.js");
let s = new Chunk626584.A("OverlayModuleUtils"),
  l = null;

function c() {
  function e(e) {
    for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (s.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => true);
    return e
  }
  async function t() {
    if (!o.OX) throw s.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
    try {
      return await a.Ay.ensureModule("discord_overlay2"), r = e(a.Ay.requireModule("discord_overlay2"))
    } catch (e) {
      s.error("failed ensuring discord_overlay2", e);
      return
    }
  }
  return null != r ? Promise.resolve(r) : (null == l && (l = t()), l)
}

function u() {
  if (null == r) try {
    r = a.Ay.requireModule("discord_overlay2")
  } catch (e) {
    s.error("failed ensuring discord_overlay2", e);
    return
  }
  return r
}