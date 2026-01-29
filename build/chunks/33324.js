/** Chunk was on 1113 **/
/** chunk id: 33324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function x(e) {
  let t = (0, h.A)(e.id),
    n = (0, i.W)(e.id),
    x = (0, d.vz)(e.id),
    j = (0, l.r)(e),
    v = (0, b.jz)(e),
    E = (0, A.kt)({
      location: "guild-action-rows"
    }),
    C = (0, c.d)(e.id),
    S = (0, r.bG)([a.h], () => a.h.getNewMemberActions(e.id), [e.id]),
    I = (0, u.A)(e.id),
    N = (0, o.jY)(e.id),
    T = (0, s.fw)(e.id),
    P = [],
    w = e.features.has(_.GuildFeatures.HUB),
    R = e.features.has(_.GuildFeatures.COMMUNITY),
    D = (0, y.w)(!(0, p.WW)(e.id)),
    L = e.features.has(_.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    M = (0, m.A)(e.id);
  (0, f.Ao)("useGuildActionRows");
  let k = (0, g.C$)(e.id, "useGuildActionRows"),
    G = e.features.has(_.GuildFeatures.GAME_SERVERS);
  return w && P.push(O.n.GUILD_HUB_HEADER_OPTIONS), !N && C && I && null != S && S.length > 0 ? P.push(O.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(O.n.GUILD_PREMIUM_PROGRESS_BAR), !w && C && P.push(O.n.GUILD_HOME), t && P.push(O.n.GUILD_SCHEDULED_EVENTS), !w && R && D && P.push(O.n.CHANNELS_AND_ROLES), x && P.push(O.n.GUILD_ROLE_SUBSCRIPTIONS), j && P.push(O.n.GUILD_SHOP), v && E && P.push(O.n.GUILD_GAME_SHOP), (T && (R || L) || n && e.features.has(_.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && P.push(O.n.GUILD_MOD_DASH_MEMBER_SAFETY), M && P.push(O.n.GUILD_BOOSTS), k && G && P.push(O.n.GAME_SERVERS), P
}