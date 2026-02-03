/** Chunk was on 92869 **/
/** chunk id: 54570, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  AU: () => r,
  kC: () => i,
  kP: () => a,
  pr: () => l,
  zU: () => c
});
var Chunk73153 = require("./73153.js");

function r(e, t, n, r, a) {
  s.h.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: r,
    onEnd: a
  })
}

function a(e, t) {
  s.h.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function i(e, t) {
  s.h.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function l() {
  s.h.dispatch({
    type: "STOP_SPEAKING"
  })
}

function c(e) {
  s.h.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}