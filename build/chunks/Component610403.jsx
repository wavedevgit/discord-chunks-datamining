/** Chunk was on 384 **/
/** chunk id: 610403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725803 = require("./725803.js"),
  Chunk999382 = require("./999382.js"),
  Chunk352981 = require("./352981.js"),
  Chunk469351 = require("./469351.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js");

function g() {
  let e = (0, Chunk399606.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = (0, Chunk352981.y)(null == module ? true : module.id, "guild_product_settings"),
    {
      application: n,
      loading: g
    } = (0, Chunk725803.Z)(null == module ? true : module.id, Chunk674563.wW.GUILD_ROLE_SUBSCRIPTIONS),
    m = null != require && (null == module ? true : module.features.has(Chunk981631.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === true;
  return (0, Chunk54381.jsx)("main", {
    children: null == module || !exports || g ? (0, Chunk54381.jsx)(Chunk481060.$jN, {}) : (0, Chunk54381.jsx)(Chunk469351.t, {
      guildId: module.id,
      hasValidApplication: m
    })
  })
}