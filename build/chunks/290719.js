/** Chunk was on 8106 **/
/** chunk id: 290719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk981631 = require("./981631.js");

function i(e) {
  let t = e.features.has(r.oNc.COMMUNITY);
  return !t && e.features.has(r.oNc.NON_COMMUNITY_RAID_ALERTS) || t && !e.features.has(r.oNc.RAID_ALERTS_DISABLED)
}