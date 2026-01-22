/** Chunk was on 21738 **/
/** chunk id: 929163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk175650 = require("./175650.js"),
  Chunk567305 = require("./567305.js"),
  Chunk555325 = require("./555325.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let t = (0, r.bG)([i.A], () => i.A.getGuild(e)),
    n = (0, a._Y)(e),
    c = (0, a.a0)(),
    u = (null == t ? true : t.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === true && (null == t ? true : t.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === false,
    d = (0, s.X9)(t);
  return u && c && d && l.ok.trackExposure({
    guildId: e,
    location: "ca30d9_1"
  }), u && c && d && n
}