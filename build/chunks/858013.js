/** Chunk was on web.js **/
/** chunk id: 858013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => d,
  u: () => p
}), require("./65821.js"), require("./457529.js");
var Chunk574381 = require("./574381.js"),
  Chunk954571 = require("./954571.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js"),
  Chunk156186 = require("./156186.js"),
  Chunk602450 = require("./602450.js"),
  Chunk587093 = require("./587093.js"),
  Chunk652215 = require("./652215.js");
let d = async () => {
  if (!(0, r.xl)()) return l.Lk.UNKNOWN;
  try {
    switch ((await f()).account.type.toLowerCase()) {
      case "unlimited":
      case "discord":
        return l.Lk.INSTALLED;
      case "team":
        return l.Lk.ZERO_TRUST;
      default:
        return l.Lk.EXISTING_INSTALLATION
    }
  } catch (e) {
    if (e instanceof Error && "Failed to locate warp-cli" === e.message || e instanceof Error && _(e.message)) return l.Lk.NOT_INSTALLED;
    if (e instanceof Object && "code" in e && "MissingRegistration" === e.code) return l.Lk.WAITING_FOR_TERMS;
    return i.default.track(u.HAw.PREMIUM_FEATURE_ERROR, {
      error_message: e instanceof Error ? e.message : JSON.stringify(e),
      error_source: o.q.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS
    }), a.A.captureException(e instanceof Error ? e : Error(JSON.stringify(e)), {
      tags: {
        source: o.q.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS
      }
    }), l.Lk.ERROR
  }
}, f = () => new Promise(async (e, t) => {
  try {
    var n, r, i;
    let a = await (null === s.Ay || true === s.Ay || null == (i = s.Ay.getDiscordUtils) || null == (r = i.call(s.Ay)) || null == (n = r.runWarpCommand) ? true : n.call(r, "registration", "show"));
    if (null != a.error) return void t(a);
    e(a)
  } catch (e) {
    t(e)
  }
}), p = async () => {
  await (0, c.K)(true), await s.Ay.getDiscordUtils().installWarp()
}, _ = e => e.includes("Unexpected token") || e.includes("Cannot read properties of undefined") || e.includes("Unexpected end of JSON input")