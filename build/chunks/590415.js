/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  ZP: () => s,
  gf: () => a,
  xO: () => o
});
var r = n(442837),
  i = n(979651),
  o = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", e[e.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", e[e.ON_STAGE = 3] = "ON_STAGE", e
  }({});

function a(e) {
  return null == e ? 0 : e.suppress && null != e.requestToSpeakTimestamp ? 1 : e.suppress || null == e.requestToSpeakTimestamp ? e.suppress || null != e.requestToSpeakTimestamp ? 0 : 3 : 2
}

function s(e, t) {
  return (0, r.e7)([i.Z], () => null == e || null == t ? 0 : a(i.Z.getVoiceStateForChannel(t, e)), [e, t])
}