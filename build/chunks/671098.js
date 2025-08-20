/** Chunk was on 7318 **/
/** chunk id: 671098, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  n: () => a
});
var Chunk835913 = require("./835913.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
async function a(A, e) {
  await (0, l.PS)(A, A => (A.guildRecentsDismissedAt = n.E.fromDate(new Date), true), l.fy.INFREQUENT_USER_ACTION), r.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: A,
    channelIds: e
  }), i.default.track(s.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}