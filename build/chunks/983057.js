/** Chunk was on web.js **/
/** chunk id: 983057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk73153 = require("./73153.js");

function i(e) {
  let {
    channelId: t,
    applicationId: n,
    intent: i,
    inviterUserId: a,
    analyticsLocations: s,
    commandOrigin: o
  } = e;
  r.h.dispatch({
    type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
    channelId: t,
    applicationId: n,
    intent: i,
    inviterUserId: a,
    analyticsLocations: s,
    commandOrigin: o
  })
}