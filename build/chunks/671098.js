/** Chunk was on 58510 **/
/** chunk id: 671098, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  n: () => r
});
var Chunk835913 = require("./835913.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
async function r(e, t) {
  await (0, l.PS)(e, e => (e.guildRecentsDismissedAt = i.E.fromDate(new Date), true), l.fy.INFREQUENT_USER_ACTION), a.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), o.default.track(c.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}