/** Chunk was on 78376 **/
/** chunk id: 54570, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AU: () => i,
  kC: () => s,
  kP: () => l,
  pr: () => a,
  zU: () => o
});
var Chunk73153 = require("./73153.js");

function i(e, t, n, i, l) {
  r.h.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: i,
    onEnd: l
  })
}

function l(e, t) {
  r.h.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function s(e, t) {
  r.h.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function a() {
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