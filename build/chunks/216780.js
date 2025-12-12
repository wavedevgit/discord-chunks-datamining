/** Chunk was on web.js **/
/** chunk id: 216780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $_: () => u,
  KQ: () => c,
  MU: () => l,
  RF: () => f
}), require("./35282.js");
var Chunk477690 = require("./477690.js"),
  Chunk911969 = require("./911969.js"),
  Chunk472401 = require("./472401.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let l = 0;

function c() {
  return {
    id: l,
    name: Chunk388032.intl.string(Chunk388032.t.E407b7)
  }
}

function u(e) {
  let {
    itemId: t,
    hash: n,
    containerWidth: i = parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH)
  } = e;
  return (0, o.$)({
    itemId: t,
    hash: n,
    containerWidth: i
  })
}
let d = e => {
  if (null == e) return null;
  let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
  return null != t ? t[1] : null
};

function f(e) {
  switch (e.type) {
    case i.ee.MEDIA_PROXY:
      var t;
      let n = null != (t = e.proxy_url) ? t : e.url;
      return {
        type: a.s9s.IMG, width: 0, height: 0, src: n
      };
    case i.ee.YOUTUBE:
      let r = d(e.url);
      if (null != r) return {
        type: a.s9s.YOUTUBE_VIDEO,
        youtubeVideoId: r
      }
  }
  return console.warn("Unsupported carousel item", e), null
}