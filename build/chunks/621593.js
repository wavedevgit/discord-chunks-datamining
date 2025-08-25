/** Chunk was on web.js **/
/** chunk id: 621593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => i,
  U: () => o
});
var Chunk570140 = require("./570140.js");

function i(e, t) {
  r.Z.dispatch({
    type: "MEDIA_PLAYBACK_RATE_UPDATE",
    rate: e,
    playbackType: t
  })
}

function o(e, t, n) {
  r.Z.dispatch({
    type: "MEDIA_PLAYBACK_POSITION_UPDATE",
    cacheKey: e,
    position: t,
    duration: n
  })
}