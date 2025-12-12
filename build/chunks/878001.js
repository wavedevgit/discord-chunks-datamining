/** Chunk was on web.js **/
/** chunk id: 878001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => i,
  w: () => o
});
var Chunk570140 = require("./570140.js");

function i(e, t, n, i) {
  r.Z.dispatch({
    type: "VIDEO_STREAM_READY_TIMEOUT",
    videoStreamId: e,
    mediaContext: n,
    userId: t,
    streamKey: i
  })
}

function o(e, t) {
  r.Z.dispatch({
    type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT",
    mediaContext: e,
    userId: t
  })
}