/** Chunk was on web.js **/
/** chunk id: 998054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l,
  f: () => u
}), require("./415506.js");
var Chunk818710 = require("./818710.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk5900 = require("./5900.js"),
  Chunk60995 = require("./60995.js");
let l = async () => {
  if (!(0, Chunk818710.nI)()) return Chunk5900._n.UNKNOWN;
  try {
    switch ((await c()).account.type.toLowerCase()) {
      case "unlimited":
      case "discord":
        return Chunk5900._n.INSTALLED;
      case "team":
        return Chunk5900._n.ZERO_TRUST;
      default:
        return Chunk5900._n.EXISTING_INSTALLATION
    }
  } catch (e) {
    if (module instanceof Error) {
      if ("Failed to locate warp-cli" === module.message) return Chunk5900._n.NOT_INSTALLED;
      Chunk960048.Z.captureException(module, {
        tags: {
          source: "PRIVATE_BROWSING_PERK_INSTALLATION_STATUS"
        }
      })
    }
    if (module instanceof Object && "code" in module && "MissingRegistration" === module.code) return Chunk5900._n.WAITING_FOR_TERMS;
    return Chunk5900._n.ERROR
  }
}, c = () => new Promise(async (e, t) => {
  try {
    var n, r, i;
    let o = await (null === a.ZP || true === a.ZP || null == (i = a.ZP.getDiscordUtils) || null == (r = i.call(a.ZP)) || null == (n = r.runWarpCommand) ? true : n.call(r, "registration", "show"));
    if (null != o.error) return void t(o);
    e(o)
  } catch (e) {
    t(e)
  }
}), u = async () => {
  await (0, Chunk60995._)(true), await Chunk998502.ZP.getDiscordUtils().installWarp()
}