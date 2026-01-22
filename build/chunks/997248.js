/** Chunk was on 96811 **/
/** chunk id: 997248, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js");

function a() {
  let e = (0, n.bG)([i.A, l.A], () => l.A.getChannel(i.A.getVoiceChannelId())),
    t = null == e ? true : e.getGuildId();
  return (0, n.bG)([s.A], () => {
    var e;
    return null != t ? null == (e = s.A.getGuild(t)) ? true : e.premiumTier : null
  })
}