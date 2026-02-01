/** Chunk was on 88474 **/
/** chunk id: 54570, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AU: () => l,
  kC: () => a,
  kP: () => i,
  pr: () => s,
  zU: () => o
});
var Chunk73153 = require("./73153.js");

function l(e, t, n, l, i) {
  r.h.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: l,
    onEnd: i
  })
}

function i(e, t) {
  r.h.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function a(e, t) {
  r.h.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function s() {
  r.h.dispatch({
    type: "STOP_SPEAKING"
  })
}

function o(e) {
  r.h.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}