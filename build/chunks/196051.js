/** Chunk was on 31389 **/
n.d(t, {
  Bo: () => o,
  Ct: () => a,
  LA: () => r,
  NB: () => s,
  cP: () => i
});
var c = n(570140);

function i(e, t, n, i, r) {
  c.Z.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: i,
    onEnd: r
  })
}

function r(e, t) {
  c.Z.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function o(e, t) {
  c.Z.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function s() {
  c.Z.dispatch({
    type: "STOP_SPEAKING"
  })
}

function a(e) {
  c.Z.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}