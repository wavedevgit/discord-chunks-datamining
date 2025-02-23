/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(570140);

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