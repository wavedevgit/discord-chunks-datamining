/** Chunk was on 47841 **/
/** chunk id: 978956, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk652215 = require("./652215.js");

function i(e) {
  let t = e.features.has(r.GuildFeatures.COMMUNITY);
  return !t && e.features.has(r.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) || t && !e.features.has(r.GuildFeatures.RAID_ALERTS_DISABLED)
}