/** Chunk was on web.js **/
/** chunk id: 779618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk358085 = require("./358085.js"),
  Chunk924557 = require("./924557.js"),
  Chunk65154 = require("./65154.js");

function o(e) {
  let {
    ignorePlatformRestriction: t
  } = i.NV.getCurrentConfig({
    location: "isClipsClientCapable"
  }, {
    autoTrackExposure: false
  });
  return t || r.isDesktop() && e.getMediaEngine().supports(a.AN.CLIPS)
}