/** Chunk was on 8102 **/
/** chunk id: 172337, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk496675 = require("./496675.js"),
  Chunk923726 = require("./923726.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let u = {
  title: () => Chunk388032.intl.string(Chunk388032.t.aTFQKi),
  description: () => Chunk388032.intl.string(Chunk388032.t.oTbFQk),
  canCreateGuild: false,
  useIsGuildSupported: () => (0, Chunk442837.e7)([Chunk353926.Z, Chunk496675.Z], () => e => e.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && !e.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && r.Z.can(o.Plq.ADMINISTRATOR, e) && (0, a.$F)() && (0, a.hQ)(e.id), [])
}