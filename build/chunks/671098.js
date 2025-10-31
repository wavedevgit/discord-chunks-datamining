/** Chunk was on 98206 **/
/** chunk id: 671098, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  n: () => l
});
var Chunk835913 = require("./835913.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
async function l(e, n) {
  await (0, a.PS)(e, e => (e.guildRecentsDismissedAt = r.E.fromDate(new Date), true), a.fy.INFREQUENT_USER_ACTION), i.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: n
  }), o.default.track(c.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}