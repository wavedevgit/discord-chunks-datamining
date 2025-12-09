/** Chunk was on 46467 **/
/** chunk id: 761091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  let t = (0, f.Z)(e.id),
    n = (0, l.W)(e.id),
    j = (0, d.j0)(e.id),
    x = (0, i.u)(e),
    C = (0, b.wK)(e),
    E = (0, _.cZ)({
      location: "guild-action-rows"
    }),
    S = (0, c.g)(e.id),
    I = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
    P = (0, u.Z)(e.id),
    N = (0, s.PE)(e.id),
    Z = (0, o.n2)(e.id),
    w = [],
    T = e.features.has(v.GuildFeatures.HUB),
    A = e.features.has(v.GuildFeatures.COMMUNITY),
    R = (0, y.l)(!(0, h.r1)(e.id)),
    D = e.features.has(v.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    L = (0, m.Z)(e.id);
  (0, g.e)(e.id, "useGuildActionRows", true);
  let M = (0, p.BU)(e.id, "useGuildActionRows"),
    k = e.features.has(v.GuildFeatures.GAME_SERVERS);
  return T && w.push(O.z.GUILD_HUB_HEADER_OPTIONS), !N && S && P && null != I && I.length > 0 ? w.push(O.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && w.push(O.z.GUILD_PREMIUM_PROGRESS_BAR), !T && S && w.push(O.z.GUILD_HOME), t && w.push(O.z.GUILD_SCHEDULED_EVENTS), !T && A && R && w.push(O.z.CHANNELS_AND_ROLES), j && w.push(O.z.GUILD_ROLE_SUBSCRIPTIONS), x && w.push(O.z.GUILD_SHOP), C && E && w.push(O.z.GUILD_GAME_SHOP), (Z && (A || D) || n && e.features.has(v.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && w.push(O.z.GUILD_MOD_DASH_MEMBER_SAFETY), L && w.push(O.z.GUILD_BOOSTS), M && k && w.push(O.z.GAME_SERVERS), w
}