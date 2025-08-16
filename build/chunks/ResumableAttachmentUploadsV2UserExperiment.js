/** Chunk was on web.js **/
/** chunk id: 481981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk480218 = require("./480218.js");
let a = (0, Chunk818083.B)({
  id: "2025-08_resumable_attachment_uploads_v2",
  kind: "user",
  label: "Resumable mobile attachment uploads",
  defaultConfig: {
    enableResumableUploads: false
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enableResumableUploads: false
    }
  }, {
    id: 1,
    label: "Resumable Uploads Enabled",
    config: {
      enableResumableUploads: true
    }
  }]
});

function o(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i._.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return a.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  })
}