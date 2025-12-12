/** Chunk was on web.js **/
/** chunk id: 814454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk221292 = require("./221292.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  let {
    analyticsLocations: t,
    activityType: n,
    applicationId: a,
    voiceChannelId: s
  } = e;
  i.default.track(o.rMx.ACTIVITY_STATUS_ICON_TOOLTIP_SHOWN, {
    location_stack: t,
    activity_type: (0, r.te)(n),
    activity_application_id: a,
    voice_channel_id: s
  })
}