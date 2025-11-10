/** Chunk was on 64982 **/
/** chunk id: 290719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk981631 = require("./981631.js");

function i(e) {
  let t = e.features.has(r.GuildFeatures.COMMUNITY);
  return !t && e.features.has(r.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) || t && !e.features.has(r.GuildFeatures.RAID_ALERTS_DISABLED)
}