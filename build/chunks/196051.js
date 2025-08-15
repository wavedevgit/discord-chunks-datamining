/** Chunk was on 48091 **/
/** chunk id: 196051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bo: () => a,
  Ct: () => o,
  LA: () => l,
  NB: () => s,
  cP: () => i
});
var Chunk570140 = require("./570140.js");

function i(e, t, n, i, l) {
  r.Z.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: i,
    onEnd: l
  })
}

function l(e, t) {
  r.Z.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function a(e, t) {
  r.Z.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function s() {
  Chunk570140.Z.dispatch({
    type: "STOP_SPEAKING"
  })
}

function o(e) {
  r.Z.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}