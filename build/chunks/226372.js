/** Chunk was on 46746 **/
/** chunk id: 226372, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk537413 = require("./537413.js");

function a(e) {
  let t = (0, n.e7)([o.default], () => o.default.getCurrentUser()),
    r = (0, n.e7)([l.Z, i.Z], () => i.Z.getChannel(l.Z.getVoiceChannelId())),
    a = null == r ? true : r.getGuildId(),
    d = (0, n.e7)([s.Z], () => {
      var e;
      return null != a ? null == (e = s.Z.getGuild(a)) ? true : e.premiumTier : null
    });
  return (0, c.Z)(e, t, d)
}