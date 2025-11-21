/** Chunk was on web.js **/
/** chunk id: 849027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk430198 = require("./430198.js"),
  Chunk897345 = require("./897345.js"),
  Chunk697379 = require("./697379.js"),
  Chunk241559 = require("./241559.js"),
  Chunk819553 = require("./819553.js"),
  Chunk931261 = require("./931261.js"),
  Chunk994592 = require("./994592.js"),
  Chunk444230 = require("./444230.js"),
  Chunk755458 = require("./755458.js"),
  Chunk953252 = require("./953252.js"),
  Chunk164670 = require("./164670.js"),
  Chunk911560 = require("./911560.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk754688 = require("./754688.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
async function v(e) {
  let {
    guildId: t,
    channelId: n
  } = e, v = g.Z.getGuild(t), I = m.Z.getUnsafeMutableRoles(t);
  if (null == v && t !== y.ME && n !== O.oC.GAME_SHOP) returnfalse;
  if (null == n) returntrue;
  if ((0, O.AB)(n)) switch (n) {
    case O.oC.ROLE_SUBSCRIPTIONS:
      return (0, c.on)(t, I);
    case O.oC.SERVER_MONETIZATION_ONBOARDING:
      return null != v && (0, u.U)(v);
    case O.oC.GAME_SHOP:
      return (0, _.wK)(null != v ? v : {
        id: t
      });
    case O.oC.GUILD_SHOP:
      return (0, i.r)(v, I);
    case O.oC.MEMBER_APPLICATIONS:
      return (0, a.v)(t);
    case O.oC.GUILD_HOME:
      return (0, l.s)(t);
    case O.oC.CHANNEL_BROWSER:
      return null != v && v.features.has(y.GuildFeatures.COMMUNITY);
    case O.oC.GUILD_ONBOARDING:
      return s.ZP.shouldShowOnboarding(t);
    case O.oC.CUSTOMIZE_COMMUNITY:
      return null != v && v.features.has(y.GuildFeatures.COMMUNITY);
    case O.oC.MEMBER_SAFETY:
      return (0, o.lv)(t);
    case O.oC.GUILD_BOOSTS:
      returntrue;
    case O.oC.REPORT_TO_MOD:
      return null != v && (0, f.Z)(v);
    case O.oC.GAME_SERVERS:
      return (0, d.v$)(t, "isAccessibleChannelOrThreadPath") && null != v && v.features.has(y.GuildFeatures.GAME_SERVERS);
    default:
      (0, E.vE)(n)
  }
  let T = h.Z.getChannel(n);
  return (null != T || (await p.Z.loadThread(n), null != (T = h.Z.getChannel(n)))) && ((0, b.YO)(T) || r.Z.isChannelGatedAndVisible(t, n))
}