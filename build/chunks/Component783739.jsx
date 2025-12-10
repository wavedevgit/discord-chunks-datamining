/** Chunk was on web.js **/
/** chunk id: 783739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk901750 = require("./901750.jsx"),
  Chunk112863 = require("./112863.jsx"),
  Chunk701157 = require("./701157.jsx"),
  Chunk912152 = require("./912152.jsx"),
  Chunk615603 = require("./615603.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk28616 = require("./28616.js");

function T(e) {
  let {
    premiumSubscription: t
  } = e, n = (0, a.e7)([m.Z], () => m.Z.boostSlots), T = i.useMemo(() => Object.values(n), [n]), C = (0, a.e7)([_.default], () => _.default.getCurrentUser()), A = h.ZP.isPremium(C, S.PremiumTypes.TIER_2), N = (0, a.e7)([f.Z], () => f.Z.affinities), P = (0, a.e7)([p.ZP], () => p.ZP.getFlattenedGuildIds()), R = N.length > 0 || P.length > 0, D = T.length > 0, w = i.useMemo(() => T.filter(e => null != e.premiumGuildSubscription), [T]), x = w.length > 0, L = T.length > w.length, j = (0, a.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()), {
    fractionalState: M
  } = (0, o.Z)({
    forceFetch: true
  }), k = (null == t ? true : t.isPausedOrPausePending) === true && M === S.a$.NONE, U = (null == t ? true : t.isPausedOrPausePending) !== true && M === S.a$.NONE, G = A && M === S.a$.FP_SUB_PAUSED;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.oQ, {
      className: I.blockedPaymentsWarning
    }), (0, r.jsx)(E.Z, {
      hasGuildBoostSlots: D,
      hasAppliedGuildBoosts: x,
      hasBoostPerk: G,
      canAddBoosts: U
    }), M === S.a$.NONE && (0, r.jsx)(O.Z, {
      hasAppliedGuildBoosts: x,
      hasBoostPerk: G,
      hasGuildAffinitiesOrInGuild: R,
      subscriptionIsPausedOrPausePending: k
    }), !R && (0, r.jsx)(b.Z, {}), (null == t ? true : t.isPaused) && M !== S.a$.FP_SUB_PAUSED ? (0, r.jsx)(g.r, {
      appliedGuildBoosts: j,
      premiumSubscription: t
    }) : (0, r.jsx)(g.Z, {
      guildBoostSlots: n,
      premiumSubscription: t
    }), (0, r.jsx)(v.Z, {
      guildBoostSlots: T,
      fractionalPremiumState: M
    }), (0, r.jsx)(y.Z, {
      canAddBoosts: x && U,
      canApplyBoosts: L
    }), (0, r.jsx)(u.Z, {
      className: I.tierComparisonTable,
      hideHeading: true,
      hideTier0: true
    }), (0, r.jsx)(l.Z, {
      cardClassName: I.boosterRecognitionCard
    }), (0, r.jsx)(c.Z, {
      className: I.faq
    })]
  })
}