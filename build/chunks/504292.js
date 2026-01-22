/** Chunk was on web.js **/
/** chunk id: 504292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KM: () => i,
  OR: () => a,
  tB: () => s
});
var Chunk73153 = require("./73153.js");

function i(e) {
  r.h.dispatch({
    type: "VOICE_FILTER_LOOPBACK_TOGGLE",
    enabled: e
  })
}

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
  return r.h.dispatch({
    type: "VOICE_FILTER_REQUEST_SWITCH",
    newVoiceFilterId: e,
    analyticsContext: t
  })
}

function s() {
  r.h.dispatch({
    type: "VOICE_FILTER_PREFETCH"
  })
}