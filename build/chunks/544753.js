/** Chunk was on 47863 **/
/** chunk id: 544753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js");

function s() {
  let e = (0, Chunk442837.e7)([Chunk944486.Z, Chunk592125.Z], () => Chunk592125.Z.getChannel(Chunk944486.Z.getVoiceChannelId())),
    t = null == module ? true : module.getGuildId();
  return (0, Chunk442837.e7)([Chunk430824.Z], () => {
    var e;
    return null != exports ? null == (e = Chunk430824.Z.getGuild(exports)) ? true : module.premiumTier : null
  })
}