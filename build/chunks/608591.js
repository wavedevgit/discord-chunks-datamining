/** Chunk was on web.js **/
/** chunk id: 608591, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return {
    url: e.url,
    width: e.width,
    height: e.height,
    thumbnail: e.thumbnail,
    caption: e.caption,
    transcript: e.transcript
  }
}

function i(e) {
  let t = {
    video: r(e.video)
  };
  return null != e.video_low_res && (t.videoLowRes = r(e.video_low_res)), null != e.video_hls && (t.videoHls = r(e.video_hls)), t
}

function o(e) {
  return {
    videoTitle: e.video_title
  }
}

function a(e) {
  let t = {
    video: r(e.video)
  };
  return null != e.video_low_res && (t.videoLowRes = r(e.video_low_res)), null != e.video_hls && (t.videoHls = r(e.video_hls)), t
}

function s(e) {
  return {
    videoTitle: e.video_title
  }
}
require.d(exports, {
  I9: () => o,
  _c: () => i,
  c1: () => a,
  jZ: () => s
})