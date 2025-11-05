/** Chunk was on 14953 **/
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
  return (0, r.e7)([l.Z, a.Z, s.Z], () => {
    let n = a.Z.getGuild(t);
    if (!((null == n ? true : n.features.has(o.GuildFeatures.WELCOME_SCREEN_ENABLED)) === true && n.features.has(o.GuildFeatures.COMMUNITY)) || n.features.has(o.GuildFeatures.GUILD_SERVER_GUIDE)) returnfalse;
    let r = l.Z.getChannel(e);
    return e === s.Z.getChannelId(t) && null != r && r.getGuildId() === n.id && (0, i.zi)(r.type)
  })
}