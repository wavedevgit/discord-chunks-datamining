/** Chunk was on 97887 **/
/** chunk id: 709544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  return (0, r.bG)([i.A, s.A, a.A], () => {
    let n = s.A.getGuild(t);
    if (!((null == n ? true : n.features.has(o.GuildFeatures.WELCOME_SCREEN_ENABLED)) === true && n.features.has(o.GuildFeatures.COMMUNITY)) || n.features.has(o.GuildFeatures.GUILD_SERVER_GUIDE)) returnfalse;
    let r = i.A.getChannel(e);
    return e === a.A.getChannelId(t) && null != r && r.getGuildId() === n.id && (0, l.ke)(r.type)
  })
}