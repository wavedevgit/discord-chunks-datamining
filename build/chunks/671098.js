/** Chunk was on 87137 **/
/** chunk id: 671098, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  n: () => B
});
var Chunk835913 = require("./835913.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
async function B(A, t) {
  await (0, v.PS)(A, A => (A.guildRecentsDismissedAt = r.E.fromDate(new Date), true), v.fy.INFREQUENT_USER_ACTION), g.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: A,
    channelIds: t
  }), n.default.track(f.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}