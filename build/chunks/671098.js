/** Chunk was on 14054 **/
/** chunk id: 671098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => s
});
var Chunk835913 = require("./835913.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
async function s(e, t) {
  await (0, r.PS)(e, e => (e.guildRecentsDismissedAt = l.E.fromDate(new Date), true), r.fy.INFREQUENT_USER_ACTION), i.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), a.default.track(o.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}