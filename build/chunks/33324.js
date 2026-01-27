/** Chunk was on 41727 **/
/** chunk id: 33324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./321073.js");
var Chunk417597 = require("./417597.js"),
  Chunk41200 = require("./41200.js"),
  Chunk496767 = require("./496767.js"),
  Chunk134413 = require("./134413.js"),
  Chunk701785 = require("./701785.js"),
  Chunk101611 = require("./101611.js"),
  Chunk473529 = require("./473529.js"),
  Chunk978165 = require("./978165.js"),
  Chunk960253 = require("./960253.js"),
  Chunk18905 = require("./18905.js"),
  Chunk395504 = require("./395504.js"),
  Chunk488803 = require("./488803.js"),
  Chunk385160 = require("./385160.js"),
  Chunk363487 = require("./363487.js"),
  Chunk871123 = require("./871123.js"),
  Chunk916023 = require("./916023.js"),
  Chunk590877 = require("./590877.js"),
  Chunk281405 = require("./281405.js"),
  Chunk652215 = require("./652215.js");

function j(e) {
  let t = (0, p.A)(e.id),
    n = (0, i.W)(e.id),
    j = (0, d.vz)(e.id),
    v = (0, l.r)(e),
    x = (0, b.jz)(e),
    E = (0, A.kt)({
      location: "guild-action-rows"
    }),
    C = (0, c.d)(e.id),
    S = (0, r.bG)([a.h], () => a.h.getNewMemberActions(e.id), [e.id]),
    I = (0, u.A)(e.id),
    N = (0, o.jY)(e.id),
    T = (0, s.fw)(e.id),
    P = [],
    w = e.features.has(O.GuildFeatures.HUB),
    R = e.features.has(O.GuildFeatures.COMMUNITY),
    D = (0, y.w)(!(0, h.WW)(e.id)),
    M = e.features.has(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    L = (0, m.A)(e.id);
  (0, g.Ao)("useGuildActionRows");
  let k = (0, f.C$)(e.id, "useGuildActionRows"),
    G = e.features.has(O.GuildFeatures.GAME_SERVERS);
  return w && P.push(_.n.GUILD_HUB_HEADER_OPTIONS), !N && C && I && null != S && S.length > 0 ? P.push(_.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(_.n.GUILD_PREMIUM_PROGRESS_BAR), !w && C && P.push(_.n.GUILD_HOME), t && P.push(_.n.GUILD_SCHEDULED_EVENTS), !w && R && D && P.push(_.n.CHANNELS_AND_ROLES), j && P.push(_.n.GUILD_ROLE_SUBSCRIPTIONS), v && P.push(_.n.GUILD_SHOP), x && E && P.push(_.n.GUILD_GAME_SHOP), (T && (R || M) || n && e.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && P.push(_.n.GUILD_MOD_DASH_MEMBER_SAFETY), L && P.push(_.n.GUILD_BOOSTS), k && G && P.push(_.n.GAME_SERVERS), P
}