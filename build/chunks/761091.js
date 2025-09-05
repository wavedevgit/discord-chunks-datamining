/** Chunk was on 71832 **/
/** chunk id: 761091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk594174 = require("./594174.js"),
  Chunk330791 = require("./330791.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js");

function _(e) {
  let t = (0, p.Z)(e.id),
    n = (0, l.W)(e.id),
    _ = (0, d.j0)(e.id),
    v = (0, i.u)(e),
    j = (0, c.g)(e.id),
    x = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
    C = (0, u.Z)(e.id),
    E = (0, s.PE)(e.id),
    S = (0, o.n2)(e.id),
    P = [],
    I = e.features.has(y.oNc.HUB),
    N = e.features.has(y.oNc.COMMUNITY),
    Z = (0, b.lN)(!(0, f.r1)(e.id)),
    w = e.features.has(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    T = (0, g.Z)(e.id),
    A = (0, h.A0)(e.id, "useGuildActionRows"),
    R = e.features.has(y.oNc.GAME_SERVER_HOSTING),
    D = (0, r.e7)([m.default], () => {
      var e, t;
      return null != (t = null == (e = m.default.getCurrentUser()) ? true : e.isStaff()) && t
    });
  return I && P.push(O.z.GUILD_HUB_HEADER_OPTIONS), !E && j && C && null != x && x.length > 0 ? P.push(O.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(O.z.GUILD_PREMIUM_PROGRESS_BAR), !I && j && P.push(O.z.GUILD_HOME), t && P.push(O.z.GUILD_SCHEDULED_EVENTS), !I && N && Z && P.push(O.z.CHANNELS_AND_ROLES), _ && P.push(O.z.GUILD_ROLE_SUBSCRIPTIONS), v && P.push(O.z.GUILD_SHOP), (S && (N || w) || n && e.features.has(y.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && P.push(O.z.GUILD_MOD_DASH_MEMBER_SAFETY), T && P.push(O.z.GUILD_BOOSTS), A && (R || D) && P.push(O.z.PORTKEY), P
}