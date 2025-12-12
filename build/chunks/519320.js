/** Chunk was on web.js **/
/** chunk id: 519320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EW: () => a,
  Np: () => s,
  tb: () => o
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n, o) {
  r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
    message_id: e,
    total_duration_secs: t,
    start_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: o
  })
}

function a(e, t, n, o, a) {
  r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
    message_id: e,
    total_duration_secs: t,
    end_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: o,
    duration_listening_secs: a
  })
}

function s(e, t) {
  r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
    message_id: e,
    error_message: t
  })
}