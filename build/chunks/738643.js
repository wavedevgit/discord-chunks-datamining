/** Chunk was on 81985 **/
/** chunk id: 738643, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  return (0, r.e7)([l.Z, a.Z, o.Z], () => {
    let n = a.Z.getGuild(t);
    if (!((null == n ? true : n.features.has(s.GuildFeatures.WELCOME_SCREEN_ENABLED)) === true && n.features.has(s.GuildFeatures.COMMUNITY)) || n.features.has(s.GuildFeatures.GUILD_SERVER_GUIDE)) returnfalse;
    let r = l.Z.getChannel(e);
    return e === o.Z.getChannelId(t) && null != r && r.getGuildId() === n.id && (0, i.zi)(r.type)
  })
}