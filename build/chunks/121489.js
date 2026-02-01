/** Chunk was on 14787 **/
/** chunk id: 121489, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  _O: () => l,
  dP: () => o,
  wQ: () => r
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function r(e, t, i, r) {
  n.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
    message_id: e,
    total_duration_secs: t,
    start_duration_secs: Math.min(null != t ? t : i, i),
    sender_user_id: r
  })
}

function o(e, t, i, r, o) {
  n.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
    message_id: e,
    total_duration_secs: t,
    end_duration_secs: Math.min(null != t ? t : i, i),
    sender_user_id: r,
    duration_listening_secs: o
  })
}

function l(e, t) {
  n.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
    message_id: e,
    error_message: t
  })
}