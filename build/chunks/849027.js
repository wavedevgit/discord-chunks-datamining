/** Chunk was on web.js **/
/** chunk id: 849027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk430198 = require("./430198.js"),
  Chunk897345 = require("./897345.js"),
  Chunk697379 = require("./697379.js"),
  Chunk241559 = require("./241559.js"),
  Chunk819553 = require("./819553.js"),
  Chunk931261 = require("./931261.js"),
  Chunk994592 = require("./994592.js"),
  Chunk132535 = require("./132535.js"),
  Chunk634952 = require("./634952.js"),
  Chunk953252 = require("./953252.js"),
  Chunk911560 = require("./911560.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk754688 = require("./754688.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
async function O(e) {
  let {
    guildId: t,
    channelId: n
  } = e, O = m.Z.getGuild(t), v = h.Z.getUnsafeMutableRoles(t);
  if (null == O && t !== b.ME) returnfalse;
  if (null == n) returntrue;
  if ((0, y.AB)(n)) switch (n) {
    case y.oC.ROLE_SUBSCRIPTIONS:
      return (0, c.on)(t, v);
    case y.oC.SERVER_MONETIZATION_ONBOARDING:
      return null != O && (0, u.U)(O);
    case y.oC.GUILD_SHOP:
      return (0, i.r)(O, v);
    case y.oC.MEMBER_APPLICATIONS:
      return (0, a.v)(t);
    case y.oC.GUILD_HOME:
      return (0, l.s)(t);
    case y.oC.CHANNEL_BROWSER:
      return null != O && O.features.has(b.oNc.COMMUNITY);
    case y.oC.GUILD_ONBOARDING:
      return s.ZP.shouldShowOnboarding(t);
    case y.oC.CUSTOMIZE_COMMUNITY:
      return null != O && O.features.has(b.oNc.COMMUNITY);
    case y.oC.MEMBER_SAFETY:
      return (0, o.lv)(t);
    case y.oC.GUILD_BOOSTS:
      returntrue;
    case y.oC.REPORT_TO_MOD:
      return null != O && (0, f.Z)(O);
    case y.oC.PORTKEY:
      return (0, d.ZO)(t, "isAccessibleChannelOrThreadPath") && null != O && O.features.has(b.oNc.GAME_SERVERS);
    default:
      (0, g.vE)(n)
  }
  let I = p.Z.getChannel(n);
  return (null != I || (await _.Z.loadThread(n), null != (I = p.Z.getChannel(n)))) && ((0, E.YO)(I) || r.Z.isChannelGatedAndVisible(t, n))
}