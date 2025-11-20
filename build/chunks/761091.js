/** Chunk was on 65354 **/
/** chunk id: 761091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk699955 = require("./699955.js"),
  Chunk330791 = require("./330791.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js");

function v(e) {
  let t = (0, f.Z)(e.id),
    n = (0, l.W)(e.id),
    v = (0, d.j0)(e.id),
    j = (0, i.u)(e),
    x = (0, m.wK)(e),
    C = (0, b.c)({
      location: "guild-action-rows"
    }),
    E = (0, c.g)(e.id),
    S = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
    I = (0, u.Z)(e.id),
    P = (0, s.PE)(e.id),
    N = (0, o.n2)(e.id),
    Z = [],
    w = e.features.has(O.GuildFeatures.HUB),
    T = e.features.has(O.GuildFeatures.COMMUNITY),
    A = (0, _.l)(!(0, p.r1)(e.id)),
    R = e.features.has(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    D = (0, g.Z)(e.id),
    L = (0, h.BU)(e.id, "useGuildActionRows"),
    M = e.features.has(O.GuildFeatures.GAME_SERVERS);
  return w && Z.push(y.z.GUILD_HUB_HEADER_OPTIONS), !P && E && I && null != S && S.length > 0 ? Z.push(y.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && Z.push(y.z.GUILD_PREMIUM_PROGRESS_BAR), !w && E && Z.push(y.z.GUILD_HOME), t && Z.push(y.z.GUILD_SCHEDULED_EVENTS), !w && T && A && Z.push(y.z.CHANNELS_AND_ROLES), v && Z.push(y.z.GUILD_ROLE_SUBSCRIPTIONS), j && Z.push(y.z.GUILD_SHOP), x && C && Z.push(y.z.GUILD_GAME_SHOP), (N && (T || R) || n && e.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && Z.push(y.z.GUILD_MOD_DASH_MEMBER_SAFETY), D && Z.push(y.z.GUILD_BOOSTS), L && M && Z.push(y.z.GAME_SERVERS), Z
}