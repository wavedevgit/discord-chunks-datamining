/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  J_: () => i,
  _j: () => o,
  v6: () => a
});
var r = n(570140);

function i() {
  r.Z.dispatch({
    type: "VOICE_FILTER_LOAD_MODULE"
  })
}

function o(e) {
  r.Z.dispatch({
    type: "VOICE_FILTER_LOOPBACK_TOGGLE",
    enabled: e
  })
}

function a(e) {
  r.Z.dispatch({
    type: "VOICE_FILTER_REQUEST_SWITCH",
    newVoiceFilterId: e
  })
}