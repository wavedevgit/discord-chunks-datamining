/** Chunk was on web.js **/
/** chunk id: 121489, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _O: () => o,
  dP: () => s,
  wQ: () => a
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function a(e, t, n, a) {
  r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
    message_id: e,
    total_duration_secs: t,
    start_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: a
  })
}

function s(e, t, n, a, s) {
  r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
    message_id: e,
    total_duration_secs: t,
    end_duration_secs: Math.min(null != t ? t : n, n),
    sender_user_id: a,
    duration_listening_secs: s
  })
}

function o(e, t) {
  r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
    message_id: e,
    error_message: t
  })
}