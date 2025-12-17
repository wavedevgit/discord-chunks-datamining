/** Chunk was on 67000 **/
/** chunk id: 761091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./539854.js");
var Chunk399606 = require("./399606.js"),
  Chunk897345 = require("./897345.js"),
  Chunk697379 = require("./697379.js"),
  Chunk241559 = require("./241559.js"),
  Chunk563534 = require("./563534.js"),
  Chunk655359 = require("./655359.js"),
  Chunk931261 = require("./931261.js"),
  Chunk460347 = require("./460347.js"),
  Chunk994592 = require("./994592.js"),
  Chunk265418 = require("./265418.js"),
  Chunk398758 = require("./398758.js"),
  Chunk755458 = require("./755458.js"),
  Chunk13439 = require("./13439.js"),
  Chunk639777 = require("./639777.js"),
  Chunk164670 = require("./164670.js"),
  Chunk699955 = require("./699955.js"),
  Chunk330791 = require("./330791.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js");

function C(e) {
  let t = (0, f.Z)(e.id),
    n = (0, l.W)(e.id),
    C = (0, d.j0)(e.id),
    x = (0, i.u)(e),
    E = (0, m.wK)(e),
    S = (0, y.cZ)({
      location: "guild-action-rows"
    }),
    I = (0, c.g)(e.id),
    _ = (0, r.e7)([o.Z], () => o.Z.getNewMemberActions(e.id), [e.id]),
    P = (0, u.Z)(e.id),
    N = (0, s.PE)(e.id),
    Z = (0, a.n2)(e.id),
    w = [],
    T = e.features.has(j.GuildFeatures.HUB),
    A = e.features.has(j.GuildFeatures.COMMUNITY),
    R = (0, O.l)(!(0, h.r1)(e.id)),
    D = e.features.has(j.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    M = (0, b.Z)(e.id);
  (0, g.e)(e.id, "useGuildActionRows", true);
  let L = (0, p.BU)(e.id, "useGuildActionRows"),
    k = e.features.has(j.GuildFeatures.GAME_SERVERS);
  return T && w.push(v.z.GUILD_HUB_HEADER_OPTIONS), !N && I && P && null != _ && _.length > 0 ? w.push(v.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && w.push(v.z.GUILD_PREMIUM_PROGRESS_BAR), !T && I && w.push(v.z.GUILD_HOME), t && w.push(v.z.GUILD_SCHEDULED_EVENTS), !T && A && R && w.push(v.z.CHANNELS_AND_ROLES), C && w.push(v.z.GUILD_ROLE_SUBSCRIPTIONS), x && w.push(v.z.GUILD_SHOP), E && S && w.push(v.z.GUILD_GAME_SHOP), (Z && (A || D) || n && e.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && w.push(v.z.GUILD_MOD_DASH_MEMBER_SAFETY), M && w.push(v.z.GUILD_BOOSTS), L && k && w.push(v.z.GAME_SERVERS), w
}