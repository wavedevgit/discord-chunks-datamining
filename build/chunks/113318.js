/** Chunk was on 48091 **/
/** chunk id: 113318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk201895 = require("./201895.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js"),
  Chunk66999 = require("./66999.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  let n = (0, r.e7)([s.Z], () => s.Z.getChannel(t)),
    {
      needSubscriptionToAccess: u
    } = (0, c.Z)(null == n ? true : n.id);
  if (null == n || u) return null;
  let m = n.isGuildVocal();
  return {
    navigateToChannel: () => {
      m ? l.Z.handleVoiceConnect({
        channel: n,
        connected: o.Z.isInChannel(n.id),
        needSubscriptionToAccess: false,
        routeDirectlyToChannel: true
      }) : (0, a.uL)(d.Z5c.CHANNEL(e, n.id))
    },
    ariaLabel: (0, i.ZP)({
      channel: n
    })
  }
}