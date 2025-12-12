/** Chunk was on 96760 **/
/** chunk id: 768015, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(t) {
  let {
    problem: e,
    channel: a,
    embeddedActivityLocation: c,
    feedback: o,
    activityApplication: d,
    analyticsData: l = {},
    location: r,
    rating: b = null
  } = t;
  n.default.track(i.rMx.ACTIVITY_REPORT_PROBLEM, {
    reason: e,
    guild_id: null == a ? true : a.getGuildId(),
    channel_id: null == a ? true : a.id,
    application_id: null == d ? true : d.id,
    application_name: null == d ? true : d.name,
    location: r,
    rating: b,
    feedback: o,
    embedded_activity_location_kind: c.kind,
    rtc_connection_id: l.rtc_connection_id,
    media_session_id: l.media_session_id
  })
}