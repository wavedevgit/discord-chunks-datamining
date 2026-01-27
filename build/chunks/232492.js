/** Chunk was on web.js **/
/** chunk id: 232492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk963027 = require("./963027.js"),
  Chunk262763 = require("./262763.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk977997 = require("./977997.js"),
  Chunk721592 = require("./721592.js"),
  Chunk652215 = require("./652215.js");

function d(e, t) {
  let n = (0, r.bG)([s.A], () => s.A.getChannel(t)),
    {
      needSubscriptionToAccess: d
    } = (0, c.A)(null == n ? true : n.id);
  if (null == n || d) return null;
  let f = n.isGuildVocal();
  return {
    navigateToChannel: () => {
      f ? a.A.handleVoiceConnect({
        channel: n,
        connected: l.A.isInChannel(n.id),
        needSubscriptionToAccess: false,
        routeDirectlyToChannel: true
      }) : (0, o.pX)(u.BVt.CHANNEL(e, n.id))
    },
    ariaLabel: (0, i.Ay)({
      channel: n
    })
  }
}