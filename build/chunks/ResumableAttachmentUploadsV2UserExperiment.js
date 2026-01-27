/** Chunk was on web.js **/
/** chunk id: 445215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => o
});
var Chunk600975 = require("./600975.js"),
  Chunk332628 = require("./332628.js");
let a = (0, Chunk600975.C)({
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

function o(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i.i.getCurrentConfig({
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