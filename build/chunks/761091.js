/** Chunk was on 81985 **/
/** chunk id: 761091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  let t = (0, p.Z)(e.id),
    n = (0, l.W)(e.id),
    x = (0, d.j0)(e.id),
    C = (0, i.u)(e),
    E = (0, b.wK)(e),
    S = (0, y.cZ)({
      location: "guild-action-rows"
    }),
    _ = (0, c.g)(e.id),
    I = (0, r.e7)([o.Z], () => o.Z.getNewMemberActions(e.id), [e.id]),
    P = (0, u.Z)(e.id),
    Z = (0, s.PE)(e.id),
    N = (0, a.n2)(e.id),
    T = [],
    A = e.features.has(j.GuildFeatures.HUB),
    w = e.features.has(j.GuildFeatures.COMMUNITY),
    R = (0, v.l)(!(0, f.r1)(e.id)),
    D = e.features.has(j.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    M = (0, m.Z)(e.id);
  (0, g.eg)("useGuildActionRows");
  let k = (0, h.BU)(e.id, "useGuildActionRows"),
    L = e.features.has(j.GuildFeatures.GAME_SERVERS);
  return A && T.push(O.z.GUILD_HUB_HEADER_OPTIONS), !Z && _ && P && null != I && I.length > 0 ? T.push(O.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && T.push(O.z.GUILD_PREMIUM_PROGRESS_BAR), !A && _ && T.push(O.z.GUILD_HOME), t && T.push(O.z.GUILD_SCHEDULED_EVENTS), !A && w && R && T.push(O.z.CHANNELS_AND_ROLES), x && T.push(O.z.GUILD_ROLE_SUBSCRIPTIONS), C && T.push(O.z.GUILD_SHOP), E && S && T.push(O.z.GUILD_GAME_SHOP), (N && (w || D) || n && e.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && T.push(O.z.GUILD_MOD_DASH_MEMBER_SAFETY), M && T.push(O.z.GUILD_BOOSTS), k && L && T.push(O.z.GAME_SERVERS), T
}