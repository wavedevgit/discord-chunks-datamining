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
  if (!(0, r.nI)()) return l._n.UNKNOWN;
  try {
    switch ((await f()).account.type.toLowerCase()) {
      case "unlimited":
      case "discord":
        return l._n.INSTALLED;
      case "team":
        return l._n.ZERO_TRUST;
      default:
        return l._n.EXISTING_INSTALLATION
    }
  } catch (e) {
    if (e instanceof Error && "Failed to locate warp-cli" === e.message || e instanceof Error && _(e.message)) return l._n.NOT_INSTALLED;
    if (e instanceof Object && "code" in e && "MissingRegistration" === e.code) return l._n.WAITING_FOR_TERMS;
    return i.default.track(u.rMx.PREMIUM_FEATURE_ERROR, {
      error_message: e instanceof Error ? e.message : JSON.stringify(e),
      error_source: s.D.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS
    }), a.Z.captureException(e instanceof Error ? e : Error(JSON.stringify(e)), {
      tags: {
        source: s.D.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS
      }
    }), l._n.ERROR
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
  await (0, c._)(true), await o.ZP.getDiscordUtils().installWarp()
}, _ = e => e.includes("Unexpected token") || e.includes("Cannot read properties of undefined") || e.includes("Unexpected end of JSON input")