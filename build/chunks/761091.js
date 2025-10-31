/** Chunk was on 56710 **/
/** chunk id: 761091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk639777 = require("./639777.js"),
  Chunk164670 = require("./164670.js"),
  Chunk330791 = require("./330791.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js");

function y(e) {
  let t = (0, p.Z)(e.id),
    n = (0, l.W)(e.id),
    y = (0, d.j0)(e.id),
    v = (0, i.u)(e),
    j = (0, m.wK)(e),
    C = (0, c.g)(e.id),
    x = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
    E = (0, u.Z)(e.id),
    S = (0, s.PE)(e.id),
    I = (0, o.n2)(e.id),
    P = [],
    N = e.features.has(O.GuildFeatures.HUB),
    Z = e.features.has(O.GuildFeatures.COMMUNITY),
    T = (0, b.l)(!(0, h.r1)(e.id)),
    w = e.features.has(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    A = (0, g.Z)(e.id),
    R = (0, f.BU)(e.id, "useGuildActionRows"),
    D = e.features.has(O.GuildFeatures.GAME_SERVERS);
  return N && P.push(_.z.GUILD_HUB_HEADER_OPTIONS), !S && C && E && null != x && x.length > 0 ? P.push(_.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(_.z.GUILD_PREMIUM_PROGRESS_BAR), !N && C && P.push(_.z.GUILD_HOME), t && P.push(_.z.GUILD_SCHEDULED_EVENTS), !N && Z && T && P.push(_.z.CHANNELS_AND_ROLES), y && P.push(_.z.GUILD_ROLE_SUBSCRIPTIONS), v && P.push(_.z.GUILD_SHOP), j && P.push(_.z.GUILD_GAME_SHOP), (I && (Z || w) || n && e.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && P.push(_.z.GUILD_MOD_DASH_MEMBER_SAFETY), A && P.push(_.z.GUILD_BOOSTS), R && D && P.push(_.z.GAME_SERVERS), P
}