/** Chunk was on 96811 **/
/** chunk id: 420659, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk476697 = require("./476697.js");

function o(e) {
  let t = (0, n.bG)([a.default], () => a.default.getCurrentUser()),
    r = (0, n.bG)([i.A, l.A], () => l.A.getChannel(i.A.getVoiceChannelId())),
    o = null == r ? true : r.getGuildId(),
    d = (0, n.bG)([s.A], () => {
      var e;
      return null != o ? null == (e = s.A.getGuild(o)) ? true : e.premiumTier : null
    });
  return (0, c.A)(e, t, d)
}