/** Chunk was on web.js **/
/** chunk id: 720293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CC: () => l,
  O: () => a,
  n1: () => i,
  z0: () => o
});
var Chunk475595 = require("./475595.js"),
  i = function(e) {
    return e.VIDEO = "video", e.VIDEO_LOW_RES = "videoLowRes", e.VIDEO_HLS = "videoHls", e
  }({}),
  a = function(e) {
    return e.VIDEO = "url", e.THUMBNAIL = "thumbnail", e.CAPTION = "caption", e.TRANSCRIPT = "transcript", e
  }({});

function o(e, t, n, i) {
  let a = e.config.taskConfigV2.tasks[t];
  if (null == a) return null;
  let o = a.assets[n];
  if (null == o) return null;
  let s = o[i];
  if (null == s) return null;
  let l = (0, r.Dm)(s);
  if (null == l) return null;
  let c = (0, r.Q2)(e.id, s),
    u = r.N0.includes(l);
  return {
    url: c,
    mimetype: l,
    isAnimated: u
  }
}
let s = {
  video: "video_player_video",
  videoLowRes: "video_player_video_low_res",
  videoHls: "video_player_video_hls"
};

function l(e) {
  return null == e ? null : s[e]
}