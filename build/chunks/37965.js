/** Chunk was on web.js **/
/** chunk id: 37965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => a,
  Z: () => i
});
var Chunk73153 = require("./73153.js");

function i(e, t, n, i) {
  r.h.dispatch({
    type: "VIDEO_STREAM_READY_TIMEOUT",
    videoStreamId: e,
    mediaContext: n,
    userId: t,
    streamKey: i
  })
}

function a(e, t) {
  r.h.dispatch({
    type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT",
    mediaContext: e,
    userId: t
  })
}