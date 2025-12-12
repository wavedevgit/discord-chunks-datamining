/** Chunk was on web.js **/
/** chunk id: 338336, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => l,
  r: () => c
});
var Chunk824096 = require("./824096.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  let {
    featureEnabled: l,
    windowLength: c,
    allowedPoorFpsRatio: u,
    fpsThreshold: d,
    backoffTimeSec: f
  } = a.y.defaultConfig;
  o.default.track(s.rMx.VIDEO_TOGGLED, {
    video_toggle_reason: t,
    toggled_user_id: e,
    rtc_connection_id: null == r ? true : r(),
    media_session_id: null == i ? true : i(),
    video_health_manager_window_length: l ? c : null,
    video_health_manager_poor_fps_ratio: l ? u : null,
    video_health_manager_fps_threshold: l ? d : null,
    is_video_shown: n,
    video_health_manager_backoff_time_seconds: l ? f : null
  })
}

function c(e, t) {
  r = e, i = t
}