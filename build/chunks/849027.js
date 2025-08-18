/** Chunk was on web.js **/
/** chunk id: 849027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk430198 = require("./430198.js"),
  Chunk897345 = require("./897345.js"),
  Chunk697379 = require("./697379.js"),
  Chunk241559 = require("./241559.js"),
  Chunk819553 = require("./819553.js"),
  Chunk931261 = require("./931261.js"),
  Chunk994592 = require("./994592.js"),
  Chunk653521 = require("./653521.js"),
  Chunk953252 = require("./953252.js"),
  Chunk911560 = require("./911560.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk754688 = require("./754688.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
async function y(e) {
  let {
    guildId: t,
    channelId: n
  } = e, y = h.Z.getGuild(t), O = p.Z.getUnsafeMutableRoles(t);
  if (null == y && t !== E.ME) returnfalse;
  if (null == n) returntrue;
  if ((0, b.AB)(n)) switch (n) {
    case b.oC.ROLE_SUBSCRIPTIONS:
      return (0, c.on)(t, O);
    case b.oC.SERVER_MONETIZATION_ONBOARDING:
      return null != y && (0, u.U)(y);
    case b.oC.GUILD_SHOP:
      return (0, i.r)(y, O);
    case b.oC.MEMBER_APPLICATIONS:
      return (0, a.v)(t);
    case b.oC.GUILD_HOME:
      return (0, l.s)(t);
    case b.oC.CHANNEL_BROWSER:
      return null != y && y.features.has(E.oNc.COMMUNITY);
    case b.oC.GUILD_ONBOARDING:
      return s.ZP.shouldShowOnboarding(t);
    case b.oC.CUSTOMIZE_COMMUNITY:
      return null != y && y.features.has(E.oNc.COMMUNITY);
    case b.oC.MEMBER_SAFETY:
      return (0, o.lv)(t);
    case b.oC.GUILD_BOOSTS:
      returntrue;
    case b.oC.REPORT_TO_MOD:
      return null != y && (0, d.Z)(y);
    default:
      (0, m.vE)(n)
  }
  let v = _.Z.getChannel(n);
  return (null != v || (await f.Z.loadThread(n), null != (v = _.Z.getChannel(n)))) && ((0, g.YO)(v) || r.Z.isChannelGatedAndVisible(t, n))
}