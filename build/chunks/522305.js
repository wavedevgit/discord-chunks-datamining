/** Chunk was on web.js **/
/** chunk id: 522305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => o
});
var Chunk308528 = require("./308528.js"),
  Chunk956549 = require("./956549.js"),
  Chunk859007 = require("./859007.js");
async function o(e) {
  let {
    appId: t,
    botId: n,
    analyticsLocations: o,
    customId: s,
    referrerId: l,
    commandOrigin: c
  } = e;
  if ((0, a.y)({
      applicationId: t
    })) return Promise.resolve(true);
  let u = await r.A.openPrivateChannel({
    recipientIds: n
  });
  return await (0, i.A)({
    targetApplicationId: t,
    channelId: u,
    analyticsLocations: o,
    customId: s,
    referrerId: l,
    commandOrigin: c
  })
}