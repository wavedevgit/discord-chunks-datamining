/** Chunk was on web.js **/
/** chunk id: 873186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk480218 = require("./480218.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_resumable_attachment_uploads",
    label: "Resumable attachment uploads",
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
  }),
  s = (0, Chunk427164.le)({
    name: "2025-07-resumable-attachment-uploads",
    kind: "user",
    defaultConfig: {
      enableResumableUploads: false
    },
    variations: {
      0: {
        enableResumableUploads: false
      },
      1: {
        enableResumableUploads: true
      }
    }
  });

function l(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = o._.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n || s.getConfig({
    location: t
  }), a.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  })
}