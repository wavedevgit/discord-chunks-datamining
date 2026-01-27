/** Chunk was on web.js **/
/** chunk id: 105530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => s,
  eY: () => o,
  zF: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk977997 = require("./977997.js"),
  a = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", e[e.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", e[e.ON_STAGE = 3] = "ON_STAGE", e
  }({});

function o(e) {
  return null == e ? 0 : e.suppress && null != e.requestToSpeakTimestamp ? 1 : e.suppress || null == e.requestToSpeakTimestamp ? 3 * (!e.suppress && null == e.requestToSpeakTimestamp) : 2
}

function s(e, t) {
  return (0, r.bG)([i.A], () => null == e || null == t ? 0 : o(i.A.getVoiceStateForChannel(t, e)), [e, t])
}