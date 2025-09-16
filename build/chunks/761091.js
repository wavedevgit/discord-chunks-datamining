/** Chunk was on 11160 **/
/** chunk id: 761091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./539854.js");
var Chunk399606 = require("./399606.js"),
  Chunk897345 = require("./897345.js");
require("./265153.js");
var Chunk697379 = require("./697379.js"),
  Chunk241559 = require("./241559.js"),
  Chunk563534 = require("./563534.js"),
  Chunk655359 = require("./655359.js"),
  Chunk931261 = require("./931261.js"),
  Chunk460347 = require("./460347.js"),
  Chunk994592 = require("./994592.js"),
  Chunk265418 = require("./265418.js"),
  Chunk398758 = require("./398758.js"),
  Chunk634952 = require("./634952.js"),
  Chunk639777 = require("./639777.js"),
  Chunk330791 = require("./330791.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js");

function y(e) {
  let t = (0, p.Z)(e.id),
    n = (0, l.W)(e.id),
    y = (0, d.j0)(e.id),
    _ = (0, i.u)(e),
    j = (0, c.g)(e.id),
    v = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
    x = (0, u.Z)(e.id),
    C = (0, s.PE)(e.id),
    E = (0, o.n2)(e.id),
    S = [],
    P = e.features.has(O.oNc.HUB),
    I = e.features.has(O.oNc.COMMUNITY),
    N = (0, m.l)(!(0, f.r1)(e.id)),
    Z = e.features.has(O.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    w = (0, g.Z)(e.id),
    T = (0, h.A0)(e.id, "useGuildActionRows"),
    A = e.features.has(O.oNc.GAME_SERVER_HOSTING);
  return P && S.push(b.z.GUILD_HUB_HEADER_OPTIONS), !C && j && x && null != v && v.length > 0 ? S.push(b.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && S.push(b.z.GUILD_PREMIUM_PROGRESS_BAR), !P && j && S.push(b.z.GUILD_HOME), t && S.push(b.z.GUILD_SCHEDULED_EVENTS), !P && I && N && S.push(b.z.CHANNELS_AND_ROLES), y && S.push(b.z.GUILD_ROLE_SUBSCRIPTIONS), _ && S.push(b.z.GUILD_SHOP), (E && (I || Z) || n && e.features.has(O.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && S.push(b.z.GUILD_MOD_DASH_MEMBER_SAFETY), w && S.push(b.z.GUILD_BOOSTS), T && A && S.push(b.z.PORTKEY), S
}