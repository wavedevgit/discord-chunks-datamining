/** Chunk was on 35755 **/
/** chunk id: 496158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => r
});
var Chunk73800 = require("./73800.js"),
  Chunk430824 = require("./430824.js");

function r(e) {
  return l.useMemo(() => "contextless" === e.type ? {
    channel: true,
    guild: true
  } : {
    channel: e.channel,
    guild: i.Z.getGuild(e.channel.guild_id)
  }, [e])
}