/** Chunk was on web.js **/
/** chunk id: 481981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk480218 = require("./480218.js");
let o = (0, Chunk818083.B)({
  id: "2025-08_resumable_attachment_uploads_v2",
  kind: "user",
  label: "Resumable attachment uploads v2",
  defaultConfig: {
    enableNewRetry: false,
    enableResumption: false
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enableNewRetry: false,
      enableResumption: false
    }
  }, {
    id: 1,
    label: "New Retry No Resumption",
    config: {
      enableNewRetry: true,
      enableResumption: false
    }
  }, {
    id: 2,
    label: "New Retry With Resumption",
    config: {
      enableNewRetry: true,
      enableResumption: true
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i._.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return o.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  })
}