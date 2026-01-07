/** Chunk was on 46746 **/
/** chunk id: 544753, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js");

function o() {
  let e = (0, n.e7)([l.Z, i.Z], () => i.Z.getChannel(l.Z.getVoiceChannelId())),
    t = null == e ? true : e.getGuildId();
  return (0, n.e7)([s.Z], () => {
    var e;
    return null != t ? null == (e = s.Z.getGuild(t)) ? true : e.premiumTier : null
  })
}