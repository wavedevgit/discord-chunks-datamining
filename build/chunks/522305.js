/** Chunk was on web.js **/
/** chunk id: 522305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => a
});
var Chunk308528 = require("./308528.js"),
  Chunk956549 = require("./956549.js");
async function a(e) {
  let {
    appId: t,
    botId: n,
    analyticsLocations: a,
    customId: s,
    referrerId: o,
    commandOrigin: l
  } = e, c = await r.A.openPrivateChannel({
    recipientIds: n
  });
  return await (0, i.A)({
    targetApplicationId: t,
    channelId: c,
    analyticsLocations: a,
    customId: s,
    referrerId: o,
    commandOrigin: l
  })
}