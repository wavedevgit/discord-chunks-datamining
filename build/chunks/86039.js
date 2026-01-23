/** Chunk was on 24921 **/
/** chunk id: 86039, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function a(t) {
  let {
    problem: e,
    channel: i,
    embeddedActivityLocation: a,
    feedback: o,
    activityApplication: c,
    analyticsData: r = {},
    location: _,
    rating: d = null
  } = t;
  n.default.track(l.HAw.ACTIVITY_REPORT_PROBLEM, {
    reason: e,
    guild_id: null == i ? true : i.getGuildId(),
    channel_id: null == i ? true : i.id,
    application_id: null == c ? true : c.id,
    application_name: null == c ? true : c.name,
    location: _,
    rating: d,
    feedback: o,
    embedded_activity_location_kind: a.kind,
    rtc_connection_id: r.rtc_connection_id,
    media_session_id: r.media_session_id
  })
}