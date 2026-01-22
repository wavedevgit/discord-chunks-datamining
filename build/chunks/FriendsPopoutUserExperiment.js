/** Chunk was on web.js **/
/** chunk id: 126904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c6: () => o,
  q: () => a,
  tR: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-03_friends_popout",
  label: "Friends Popout",
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
  defaultConfig: {
    enableTopNavButton: false,
    enableOverlayWidget: false
  },
  treatments: [{
    id: 1,
    label: "All Enabled",
    config: {
      enableTopNavButton: true,
      enableOverlayWidget: true
    }
  }, {
    id: 2,
    label: "Top Nav Only",
    config: {
      enableTopNavButton: true,
      enableOverlayWidget: false
    }
  }]
});

function s(e) {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  })
}

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}