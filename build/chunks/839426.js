/** Chunk was on web.js **/
/** chunk id: 839426, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");

function i(e) {
  let {
    channelId: t,
    applicationId: n,
    intent: i,
    inviterUserId: o,
    analyticsLocations: a,
    commandOrigin: s
  } = e;
  r.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
    channelId: t,
    applicationId: n,
    intent: i,
    inviterUserId: o,
    analyticsLocations: a,
    commandOrigin: s
  })
}