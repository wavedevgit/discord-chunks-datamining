/** Chunk was on 43694 **/
/** chunk id: 519320, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  EW: () => r,
  Np: () => c,
  tb: () => i
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function i(e, t, a, i) {
  o.default.track(n.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
    message_id: e,
    total_duration_secs: t,
    start_duration_secs: Math.min(null != t ? t : a, a),
    sender_user_id: i
  })
}

function r(e, t, a, i, r) {
  o.default.track(n.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
    message_id: e,
    total_duration_secs: t,
    end_duration_secs: Math.min(null != t ? t : a, a),
    sender_user_id: i,
    duration_listening_secs: r
  })
}

function c(e, t) {
  o.default.track(n.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
    message_id: e,
    error_message: t
  })
}