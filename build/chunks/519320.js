/** Chunk was on 59458 **/
a.d(t, {
  EW: () => r,
  Np: () => c,
  tb: () => i
});
var o = a(626135),
  n = a(981631);

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