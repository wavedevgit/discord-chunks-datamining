/** Chunk was on 91488 **/
/** chunk id: 761091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk639777 = require("./639777.js"),
  Chunk330791 = require("./330791.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js");

function O(e) {
  let t = (0, p.Z)(e.id),
    n = (0, l.W)(e.id),
    O = (0, d.j0)(e.id),
    _ = (0, i.u)(e),
    y = (0, c.g)(e.id),
    j = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
    v = (0, u.Z)(e.id),
    C = (0, s.PE)(e.id),
    x = (0, o.n2)(e.id),
    E = [],
    S = e.features.has(b.oNc.HUB),
    I = e.features.has(b.oNc.COMMUNITY),
    P = (0, g.lN)(!(0, f.r1)(e.id)),
    N = e.features.has(b.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    w = (0, h.Z)(e.id);
  return S && E.push(m.z.GUILD_HUB_HEADER_OPTIONS), !C && y && v && null != j && j.length > 0 ? E.push(m.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && E.push(m.z.GUILD_PREMIUM_PROGRESS_BAR), !S && y && E.push(m.z.GUILD_HOME), t && E.push(m.z.GUILD_SCHEDULED_EVENTS), !S && I && P && E.push(m.z.CHANNELS_AND_ROLES), O && E.push(m.z.GUILD_ROLE_SUBSCRIPTIONS), _ && E.push(m.z.GUILD_SHOP), (x && (I || N) || n && e.features.has(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && E.push(m.z.GUILD_MOD_DASH_MEMBER_SAFETY), w && E.push(m.z.GUILD_BOOSTS), E
}