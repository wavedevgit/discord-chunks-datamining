/** Chunk was on 1272 **/
/** chunk id: 817520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk644542 = require("./644542.js"),
  Chunk923726 = require("./923726.js"),
  Chunk144507 = require("./144507.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
    n = (0, a.ss)(e),
    c = (0, a.Gp)(),
    u = (null == t ? true : t.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === true && (null == t ? true : t.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === false,
    d = (0, s.H2)(t);
  return u && c && d && l.jJ.trackExposure({
    guildId: e,
    location: "ca30d9_1"
  }), u && c && d && n
}