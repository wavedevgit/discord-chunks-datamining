/** Chunk was on 75708 **/
/** chunk id: 783739, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk975298 = require("./975298.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk724884 = require("./724884.jsx"),
  Chunk290799 = require("./290799.jsx"),
  Chunk362948 = require("./362948.jsx"),
  Chunk899667 = require("./899667.js"),
  Chunk165630 = require("./165630.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk314884 = require("./314884.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296533 = require("./296533.jsx"),
  Chunk901750 = require("./901750.js"),
  Chunk112863 = require("./112863.jsx"),
  Chunk701157 = require("./701157.jsx"),
  Chunk912152 = require("./912152.js"),
  Chunk615603 = require("./615603.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk551084 = require("./551084.js");

function S(e) {
  let {
    premiumSubscription: t
  } = e, n = (0, s.e7)([h.Z], () => h.Z.boostSlots), S = r.useMemo(() => Object.values(n), [n]), T = (0, s.e7)([g.default], () => g.default.getCurrentUser()), I = f.ZP.isPremium(T, O.p9.TIER_2), N = (0, s.e7)([m.Z], () => m.Z.affinities), y = (0, s.e7)([p.ZP], () => p.ZP.getFlattenedGuildIds()), A = N.length > 0 || y.length > 0, P = S.length > 0, R = r.useMemo(() => S.filter(e => null != e.premiumGuildSubscription), [S]), D = R.length > 0, Z = S.length > R.length, w = (0, s.e7)([u.Z], () => u.Z.getCurrentUserAppliedBoosts()), {
    fractionalState: k
  } = (0, a.Z)({
    forceFetch: true
  }), L = (null == t ? true : t.isPausedOrPausePending) === true && k === O.a$.NONE, M = (null == t ? true : t.isPausedOrPausePending) !== true && k === O.a$.NONE, B = I && k === O.a$.FP_SUB_PAUSED;
  return <div>{<l.oQ className={v.blockedPaymentsWarning} />}{<x.Z hasGuildBoostSlots={P} hasAppliedGuildBoosts={D} hasBoostPerk={B} canAddBoosts={M} />}{k === O.a$.NONE && <E.Z hasAppliedGuildBoosts={D} hasBoostPerk={B} hasGuildAffinitiesOrInGuild={A} subscriptionIsPausedOrPausePending={L} />}{!A && <_.Z />}{(null == t ? true : t.isPaused) && k !== O.a$.FP_SUB_PAUSED ? <b.r appliedGuildBoosts={w} premiumSubscription={t} /> : <b.Z guildBoostSlots={n} premiumSubscription={t} />}{<C.Z guildBoostSlots={S} fractionalPremiumState={k} />}{<j.Z canAddBoosts={D && M} canApplyBoosts={Z} />}{<d.Z className={v.tierComparisonTable} hideHeading={true} hideTier0={true} />}{<o.Z cardClassName={v.boosterRecognitionCard} />}{<c.Z className={v.faq} />}</div>
}