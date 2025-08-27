/** Chunk was on web.js **/
/** chunk id: 482798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cq: () => o,
  Ht: () => a,
  XU: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-03_friends_popout",
  label: "Friends Popout",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
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

function o(e) {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  })
}

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  })
}