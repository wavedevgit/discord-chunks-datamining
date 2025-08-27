/** Chunk was on web.js **/
/** chunk id: 915346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => a
});
var Chunk493683 = require("./493683.js"),
  Chunk122613 = require("./122613.js");
async function a(e) {
  let {
    appId: t,
    botId: n,
    analyticsLocations: a,
    customId: o,
    referrerId: s,
    commandOrigin: l
  } = e, c = await r.Z.openPrivateChannel({
    recipientIds: n
  });
  return await (0, i.Z)({
    targetApplicationId: t,
    channelId: c,
    analyticsLocations: a,
    customId: o,
    referrerId: s,
    commandOrigin: l
  })
}