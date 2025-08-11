/** Chunk was on web.js **/
/** chunk id: 58737, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk504876 = require("./504876.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-05_video_keyboard_scrubbing",
  label: "Video keyboard scrubbing with arrow keys",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Control - No keyboard scrubbing",
    config: {
      enabled: false
    }
  }, {
    id: 2,
    label: "Keyboard scrubbing - 5 second increment",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i.Y.getCurrentConfig({
    location: t
  });
  return o.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  })
}