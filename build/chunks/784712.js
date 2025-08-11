/** Chunk was on web.js **/
/** chunk id: 784712, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk626135 = require("./626135.js"),
  Chunk479313 = require("./479313.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  let {
    summary: t,
    guildId: n,
    channelId: a,
    rating: s = null,
    problem: l = null,
    feedback: c = "",
    location: u
  } = e;
  (0, i.U$)(t, s), r.default.track(o.rMx.SUMMARIES_REPORT_PROBLEM, {
    reason: l,
    location: u,
    rating: s,
    feedback: c,
    participant_count: t.people.length,
    message_count: t.count,
    start_message_id: t.startId,
    guild_id: n,
    channel_id: a,
    summary_id: t.id,
    summary_source: t.source,
    summary_type: t.type
  })
}