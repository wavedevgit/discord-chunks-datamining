/** Chunk was on web.js **/
/** chunk id: 743498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _j: () => i,
  jG: () => a,
  v6: () => o
});
var Chunk570140 = require("./570140.js");

function i(e) {
  r.Z.dispatch({
    type: "VOICE_FILTER_LOOPBACK_TOGGLE",
    enabled: e
  })
}

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
  return r.Z.dispatch({
    type: "VOICE_FILTER_REQUEST_SWITCH",
    newVoiceFilterId: e,
    analyticsContext: t
  })
}

function a() {
  Chunk570140.Z.dispatch({
    type: "VOICE_FILTER_PREFETCH"
  })
}