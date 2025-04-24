/** Chunk was on 21607 **/
i.d(t, {
  EW: () => r,
  Np: () => l,
  tb: () => a
});
var n = i(626135),
  o = i(981631);

function a(e, t, i, a) {
  n.default.track(o.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
    message_id: e,
    total_duration_secs: t,
    start_duration_secs: Math.min(null != t ? t : i, i),
    sender_user_id: a
  })
}

function r(e, t, i, a, r) {
  n.default.track(o.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
    message_id: e,
    total_duration_secs: t,
    end_duration_secs: Math.min(null != t ? t : i, i),
    sender_user_id: a,
    duration_listening_secs: r
  })
}

function l(e, t) {
  n.default.track(o.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
    message_id: e,
    error_message: t
  })
}