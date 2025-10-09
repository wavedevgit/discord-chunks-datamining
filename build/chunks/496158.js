/** Chunk was on 35755 **/
/** chunk id: 496158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => r
});
var Chunk647438 = require("./647438.js"),
  Chunk430824 = require("./430824.js");

function r(e) {
  return i.useMemo(() => "contextless" === e.type ? {
    channel: true,
    guild: true
  } : {
    channel: e.channel,
    guild: l.Z.getGuild(e.channel.guild_id)
  }, [e])
}