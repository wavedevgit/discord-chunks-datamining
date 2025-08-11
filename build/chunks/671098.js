/** Chunk was on 39991 **/
/** chunk id: 671098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => c
});
var Chunk835913 = require("./835913.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
async function c(e, t) {
  await (0, o.PS)(e, e => (e.guildRecentsDismissedAt = i.E.fromDate(new Date), true), o.fy.INFREQUENT_USER_ACTION), r.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), a.default.track(l.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}