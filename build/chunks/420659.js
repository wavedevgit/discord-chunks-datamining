/** Chunk was on 96811 **/
/** chunk id: 420659, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk476697 = require("./476697.js");

function c(e) {
  let t = (0, n.bG)([a.default], () => a.default.getCurrentUser()),
    r = (0, n.bG)([s.A, i.A], () => i.A.getChannel(s.A.getVoiceChannelId())),
    c = null == r ? true : r.getGuildId(),
    d = (0, n.bG)([l.A], () => {
      var e;
      return null != c ? null == (e = l.A.getGuild(c)) ? true : e.premiumTier : null
    });
  return (0, o.A)(e, t, d)
}