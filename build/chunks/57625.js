/** Chunk was on web.js **/
/** chunk id: 57625, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => i,
  d: () => a
});
var Chunk73153 = require("./73153.js");

function i(e, t) {
  r.h.dispatch({
    type: "MEDIA_PLAYBACK_RATE_UPDATE",
    rate: e,
    playbackType: t
  })
}

function a(e, t, n) {
  r.h.dispatch({
    type: "MEDIA_PLAYBACK_POSITION_UPDATE",
    cacheKey: e,
    position: t,
    duration: n
  })
}