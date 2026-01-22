/** Chunk was on 97492 **/
/** chunk id: 33324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function v(e) {
  let t = (0, f.A)(e.id),
    n = (0, i.W)(e.id),
    v = (0, d.vz)(e.id),
    x = (0, l.r)(e),
    E = (0, m.jz)(e),
    _ = (0, A.kt)({
      location: "guild-action-rows"
    }),
    C = (0, c.d)(e.id),
    S = (0, r.bG)([s.h], () => s.h.getNewMemberActions(e.id), [e.id]),
    I = (0, u.A)(e.id),
    N = (0, o.jY)(e.id),
    T = (0, a.fw)(e.id),
    P = [],
    w = e.features.has(j.GuildFeatures.HUB),
    R = e.features.has(j.GuildFeatures.COMMUNITY),
    D = (0, y.w)(!(0, p.WW)(e.id)),
    M = e.features.has(j.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    L = (0, g.A)(e.id);
  (0, b.Ao)("useGuildActionRows");
  let G = (0, h.C$)(e.id, "useGuildActionRows"),
    k = e.features.has(j.GuildFeatures.GAME_SERVERS);
  return w && P.push(O.n.GUILD_HUB_HEADER_OPTIONS), !N && C && I && null != S && S.length > 0 ? P.push(O.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(O.n.GUILD_PREMIUM_PROGRESS_BAR), !w && C && P.push(O.n.GUILD_HOME), t && P.push(O.n.GUILD_SCHEDULED_EVENTS), !w && R && D && P.push(O.n.CHANNELS_AND_ROLES), v && P.push(O.n.GUILD_ROLE_SUBSCRIPTIONS), x && P.push(O.n.GUILD_SHOP), E && _ && P.push(O.n.GUILD_GAME_SHOP), (T && (R || M) || n && e.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && P.push(O.n.GUILD_MOD_DASH_MEMBER_SAFETY), L && P.push(O.n.GUILD_BOOSTS), G && k && P.push(O.n.GAME_SERVERS), P
}