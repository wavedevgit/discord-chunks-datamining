/** Chunk was on 25794 **/
/** chunk id: 768015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let {
    problem: t,
    channel: n,
    embeddedActivityLocation: o,
    feedback: l,
    activityApplication: c,
    analyticsData: r = {},
    location: _,
    rating: d = null
  } = e;
  i.default.track(a.rMx.ACTIVITY_REPORT_PROBLEM, {
    reason: t,
    guild_id: null == n ? true : n.getGuildId(),
    channel_id: null == n ? true : n.id,
    application_id: null == c ? true : c.id,
    application_name: null == c ? true : c.name,
    location: _,
    rating: d,
    feedback: l,
    embedded_activity_location_kind: o.kind,
    rtc_connection_id: r.rtc_connection_id,
    media_session_id: r.media_session_id
  })
}