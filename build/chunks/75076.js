/** Chunk was on web.js **/
/** chunk id: 75076, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => l,
  I: () => c
});
var Chunk738586 = require("./738586.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  let {
    featureEnabled: l,
    windowLength: c,
    allowedPoorFpsRatio: u,
    fpsThreshold: d,
    backoffTimeSec: f
  } = a.V.defaultConfig;
  s.default.track(o.HAw.VIDEO_TOGGLED, {
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