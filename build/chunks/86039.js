/** Chunk was on 24921 **/
/** chunk id: 86039, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let {
    problem: t,
    channel: a,
    embeddedActivityLocation: l,
    feedback: d,
    activityApplication: c,
    analyticsData: r = {},
    location: o,
    rating: f = null
  } = e;
  i.default.track(n.HAw.ACTIVITY_REPORT_PROBLEM, {
    reason: t,
    guild_id: null == a ? true : a.getGuildId(),
    channel_id: null == a ? true : a.id,
    application_id: null == c ? true : c.id,
    application_name: null == c ? true : c.name,
    location: o,
    rating: f,
    feedback: d,
    embedded_activity_location_kind: l.kind,
    rtc_connection_id: r.rtc_connection_id,
    media_session_id: r.media_session_id
  })
}