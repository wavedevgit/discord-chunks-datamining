/** Chunk was on 44669 **/
/** chunk id: 33324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./321073.js");
var Chunk417597 = require("./417597.js"),
  Chunk41200 = require("./41200.js"),
  Chunk903223 = require("./903223.js"),
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

function _(e) {
  let t = (0, h.A)(e.id),
    n = (0, s.W)(e.id),
    _ = (0, p.vz)(e.id),
    v = (0, l.r)(e),
    E = (0, A.jz)(e),
    C = (0, y.kt)({
      location: "guild-action-rows"
    }),
    S = (0, u.d)(e.id),
    I = (0, r.bG)([o.h], () => o.h.getNewMemberActions(e.id), [e.id]),
    N = (0, d.A)(e.id),
    T = (0, c.jY)(e.id),
    P = (0, a.fw)(e.id),
    w = [],
    R = e.features.has(x.GuildFeatures.HUB),
    D = e.features.has(x.GuildFeatures.COMMUNITY),
    L = (0, O.w)(!(0, g.WW)(e.id)),
    M = e.features.has(x.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    G = (0, b.A)(e.id);
  (0, m.Ao)("useGuildActionRows");
  let k = (0, f.C$)(e.id, "useGuildActionRows"),
    U = e.features.has(x.GuildFeatures.GAME_SERVERS),
    V = (0, i.ws)(e, {
      location: "guild-action-rows"
    });
  return R && w.push(j.n.GUILD_HUB_HEADER_OPTIONS), !T && S && N && null != I && I.length > 0 ? w.push(j.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : V && w.push(j.n.GUILD_PREMIUM_PROGRESS_BAR), !R && S && w.push(j.n.GUILD_HOME), t && w.push(j.n.GUILD_SCHEDULED_EVENTS), !R && D && L && w.push(j.n.CHANNELS_AND_ROLES), _ && w.push(j.n.GUILD_ROLE_SUBSCRIPTIONS), v && w.push(j.n.GUILD_SHOP), E && C && w.push(j.n.GUILD_GAME_SHOP), (P && (D || M) || n && e.features.has(x.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && w.push(j.n.GUILD_MOD_DASH_MEMBER_SAFETY), G && w.push(j.n.GUILD_BOOSTS), k && U && w.push(j.n.GAME_SERVERS), w
}