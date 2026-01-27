/** Chunk was on web.js **/
/** chunk id: 767599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AU: () => c,
  DH: () => u,
  lj: () => l,
  xb: () => f
}), require("./747238.js");
var Chunk319060 = require("./319060.js"),
  Chunk155718 = require("./155718.js"),
  Chunk225098 = require("./225098.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let l = 0;

function c() {
  return {
    id: l,
    name: s.intl.string(s.t.E407b7)
  }
}

function u(e) {
  let {
    itemId: t,
    hash: n,
    containerWidth: i = parseFloat(r.A.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH)
  } = e;
  return (0, a.D)({
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
    case i.LZ.MEDIA_PROXY:
      var t;
      let n = null != (t = e.proxy_url) ? t : e.url;
      return {
        type: o.geh.IMG, width: 0, height: 0, src: n
      };
    case i.LZ.YOUTUBE:
      let r = d(e.url);
      if (null != r) return {
        type: o.geh.YOUTUBE_VIDEO,
        youtubeVideoId: r
      }
  }
  return console.warn("Unsupported carousel item", e), null
}