/** Chunk was on web.js **/
/** chunk id: 915618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk723702 = require("./723702.js"),
  Chunk734066 = require("./734066.js"),
  Chunk731854 = require("./731854.js");

function o(e) {
  let {
    ignorePlatformRestriction: t
  } = i.L_.getCurrentConfig({
    location: "isClipsClientCapable"
  }, {
    autoTrackExposure: false
  });
  return t || r.isDesktop() && e.getMediaEngine().supports(a.O5.CLIPS)
}