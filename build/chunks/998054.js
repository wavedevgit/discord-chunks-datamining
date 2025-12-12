/** Chunk was on web.js **/
/** chunk id: 998054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => d,
  f: () => p
}), require("./415506.js"), require("./49124.js");
var Chunk818710 = require("./818710.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk60995 = require("./60995.js"),
  Chunk981631 = require("./981631.js");
let d = async () => {
  if (!(0, Chunk818710.nI)()) return Chunk5900._n.UNKNOWN;
  try {
    switch ((await f()).account.type.toLowerCase()) {
      case "unlimited":
      case "discord":
        return Chunk5900._n.INSTALLED;
      case "team":
        return Chunk5900._n.ZERO_TRUST;
      default:
        return Chunk5900._n.EXISTING_INSTALLATION
    }
  } catch (e) {
    if (module instanceof Error && "Failed to locate warp-cli" === module.message || module instanceof Error && _(module.message)) return Chunk5900._n.NOT_INSTALLED;
    if (module instanceof Object && "code" in module && "MissingRegistration" === module.code) return Chunk5900._n.WAITING_FOR_TERMS;
    return Chunk626135.default.track(Chunk981631.rMx.PREMIUM_FEATURE_ERROR, {
      error_message: module instanceof Error ? module.message : JSON.stringify(module),
      error_source: Chunk323183.D.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS
    }), Chunk960048.Z.captureException(module instanceof Error ? module : Error(JSON.stringify(module)), {
      tags: {
        source: Chunk323183.D.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS
      }
    }), Chunk5900._n.ERROR
  }
}, f = () => new Promise(async (e, t) => {
  try {
    var n, r, i;
    let a = await (null === o.ZP || true === o.ZP || null == (i = o.ZP.getDiscordUtils) || null == (r = i.call(o.ZP)) || null == (n = r.runWarpCommand) ? true : n.call(r, "registration", "show"));
    if (null != a.error) return void t(a);
    e(a)
  } catch (e) {
    t(e)
  }
}), p = async () => {
  await (0, Chunk60995._)(true), await Chunk998502.ZP.getDiscordUtils().installWarp()
}, _ = e => e.includes("Unexpected token") || e.includes("Cannot read properties of undefined") || e.includes("Unexpected end of JSON input")