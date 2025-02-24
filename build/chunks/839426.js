/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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