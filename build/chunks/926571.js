/** Chunk was on web.js **/
/** chunk id: 926571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk954571 = require("./954571.js"),
  Chunk863922 = require("./863922.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let {
    summary: t,
    guildId: n,
    channelId: s,
    rating: o = null,
    problem: l = null,
    feedback: c = "",
    location: u
  } = e;
  (0, i.C7)(t, o), r.default.track(a.HAw.SUMMARIES_REPORT_PROBLEM, {
    reason: l,
    location: u,
    rating: o,
    feedback: c,
    participant_count: t.people.length,
    message_count: t.count,
    start_message_id: t.startId,
    guild_id: n,
    channel_id: s,
    summary_id: t.id,
    summary_source: t.source,
    summary_type: t.type
  })
}