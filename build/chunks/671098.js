/** Chunk was on 18295 **/
/** chunk id: 671098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => o
});
var Chunk835913 = require("./835913.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
async function o(e, t) {
  await (0, l.PS)(e, e => (e.guildRecentsDismissedAt = r.E.fromDate(new Date), true), l.fy.INFREQUENT_USER_ACTION), i.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), a.default.track(s.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}