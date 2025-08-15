/** Chunk was on web.js **/
/** chunk id: 849027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk430198 = require("./430198.js"),
  Chunk897345 = require("./897345.js"),
  Chunk697379 = require("./697379.js"),
  Chunk241559 = require("./241559.js"),
  Chunk819553 = require("./819553.js"),
  Chunk931261 = require("./931261.js"),
  Chunk994592 = require("./994592.js"),
  Chunk953252 = require("./953252.js"),
  Chunk911560 = require("./911560.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk754688 = require("./754688.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
async function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e, b = p.Z.getGuild(t), y = _.Z.getUnsafeMutableRoles(t);
  if (null == b && t !== g.ME) returnfalse;
  if (null == n) returntrue;
  if ((0, E.AB)(n)) switch (n) {
    case E.oC.ROLE_SUBSCRIPTIONS:
      return (0, c.on)(t, y);
    case E.oC.GUILD_SHOP:
      return (0, i.r)(b, y);
    case E.oC.MEMBER_APPLICATIONS:
      return (0, a.v)(t);
    case E.oC.GUILD_HOME:
      return (0, l.s)(t);
    case E.oC.CHANNEL_BROWSER:
      return null != b && b.features.has(g.oNc.COMMUNITY);
    case E.oC.GUILD_ONBOARDING:
      return s.ZP.shouldShowOnboarding(t);
    case E.oC.CUSTOMIZE_COMMUNITY:
      return null != b && b.features.has(g.oNc.COMMUNITY);
    case E.oC.MEMBER_SAFETY:
      return (0, o.lv)(t);
    case E.oC.GUILD_BOOSTS:
      returntrue;
    case E.oC.REPORT_TO_MOD:
      return null != b && (0, u.Z)(b);
    default:
      (0, h.vE)(n)
  }
  let O = f.Z.getChannel(n);
  return (null != O || (await d.Z.loadThread(n), null != (O = f.Z.getChannel(n)))) && ((0, m.YO)(O) || r.Z.isChannelGatedAndVisible(t, n))
}