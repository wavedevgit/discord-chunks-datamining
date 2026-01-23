/** Chunk was on web.js **/
/** chunk id: 150129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk717125 = require("./717125.js"),
  Chunk41200 = require("./41200.js"),
  Chunk496767 = require("./496767.js"),
  Chunk134413 = require("./134413.js"),
  Chunk713125 = require("./713125.js"),
  Chunk473529 = require("./473529.js"),
  Chunk960253 = require("./960253.js"),
  Chunk154325 = require("./154325.js"),
  Chunk488803 = require("./488803.js"),
  Chunk56595 = require("./56595.js"),
  Chunk871123 = require("./871123.js"),
  Chunk353202 = require("./353202.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk403362 = require("./403362.js"),
  Chunk376943 = require("./376943.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");
async function v(e) {
  let {
    guildId: t,
    channelId: n
  } = e, v = g.A.getGuild(t), A = m.A.getUnsafeMutableRoles(t);
  if (null == v && t !== b.ME && n !== O.VV.GAME_SHOP) returnfalse;
  if (null == n) returntrue;
  if ((0, O.jq)(n)) switch (n) {
    case O.VV.ROLE_SUBSCRIPTIONS:
      return (0, c.l8)(t, A);
    case O.VV.SERVER_MONETIZATION_ONBOARDING:
      return null != v && (0, u.t)(v);
    case O.VV.GAME_SHOP:
      return (0, p.jz)(null != v ? v : {
        id: t
      });
    case O.VV.GUILD_SHOP:
      return (0, i.K)(v, A);
    case O.VV.MEMBER_APPLICATIONS:
      return (0, a.h)(t);
    case O.VV.GUILD_HOME:
      return (0, l.K)(t);
    case O.VV.CHANNEL_BROWSER:
      return null != v && v.features.has(b.GuildFeatures.COMMUNITY);
    case O.VV.GUILD_ONBOARDING:
      return o.Ay.shouldShowOnboarding(t);
    case O.VV.CUSTOMIZE_COMMUNITY:
      return null != v && v.features.has(b.GuildFeatures.COMMUNITY);
    case O.VV.MEMBER_SAFETY:
      return (0, s.Ml)(t);
    case O.VV.GUILD_BOOSTS:
      returntrue;
    case O.VV.REPORT_TO_MOD:
      return null != v && (0, f.A)(v);
    case O.VV.GAME_SERVERS:
      return (0, d.TS)(t, "isAccessibleChannelOrThreadPath") && null != v && v.features.has(b.GuildFeatures.GAME_SERVERS);
    default:
      (0, E.xb)(n)
  }
  let I = h.A.getChannel(n);
  return (null != I || (await _.A.loadThread(n), null != (I = h.A.getChannel(n)))) && ((0, y.nc)(I) || r.A.isChannelGatedAndVisible(t, n))
}