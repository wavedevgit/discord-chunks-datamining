/** Chunk was on web.js **/
/** chunk id: 783739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk975298 = require("./975298.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk724884 = require("./724884.jsx"),
  Chunk290799 = require("./290799.jsx"),
  Chunk362948 = require("./362948.jsx"),
  Chunk691807 = require("./691807.jsx"),
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
  Chunk718212 = require("./718212.js");

function C(e) {
  let {
    premiumSubscription: t
  } = e, n = (0, a.e7)([h.Z], () => h.Z.boostSlots), C = i.useMemo(() => Object.values(n), [n]), A = (0, a.e7)([m.default], () => m.default.getCurrentUser()), N = g.ZP.isPremium(A, I.PremiumTypes.TIER_2), P = (0, a.e7)([p.Z], () => p.Z.affinities), R = (0, a.e7)([_.ZP], () => _.ZP.getFlattenedGuildIds()), w = P.length > 0 || R.length > 0, D = C.length > 0, x = i.useMemo(() => C.filter(e => null != e.premiumGuildSubscription), [C]), L = x.length > 0, j = C.length > x.length, M = (0, a.e7)([f.Z], () => f.Z.getCurrentUserAppliedBoosts()), {
    fractionalState: k
  } = (0, o.Z)({
    forceFetch: true
  }), U = null == A ? true : A.isPremiumGroupMember(), G = (null == t ? true : t.isPausedOrPausePending) === true && k === I.a$.NONE, Z = (null == t ? true : t.isPausedOrPausePending) !== true && k === I.a$.NONE && !U, F = N && k === I.a$.FP_SUB_PAUSED, B = k === I.a$.NONE && !U;
  return (0, r.jsxs)("div", {
    className: T.guildBoostingSettings,
    children: [(0, r.jsx)(s.oQ, {
      className: T.blockedPaymentsWarning
    }), (0, r.jsx)(b.Z, {
      hasGuildBoostSlots: D,
      hasAppliedGuildBoosts: L,
      hasBoostPerk: F,
      canAddBoosts: Z
    }), B && (0, r.jsx)(v.Z, {
      hasAppliedGuildBoosts: L,
      hasBoostPerk: F,
      hasGuildAffinitiesOrInGuild: w,
      subscriptionIsPausedOrPausePending: G
    }), U && (0, r.jsx)(d.Z, {}), !w && (0, r.jsx)(y.Z, {}), (null == t ? true : t.isPaused) && k !== I.a$.FP_SUB_PAUSED ? (0, r.jsx)(E.r, {
      appliedGuildBoosts: M,
      premiumSubscription: t
    }) : (0, r.jsx)(E.Z, {
      guildBoostSlots: n,
      premiumSubscription: t
    }), (0, r.jsx)(S.Z, {
      guildBoostSlots: C,
      fractionalPremiumState: k
    }), (0, r.jsx)(O.Z, {
      canAddBoosts: L && Z,
      canApplyBoosts: j
    }), (0, r.jsx)(u.Z, {
      className: T.tierComparisonTable,
      hideHeading: true,
      hideTier0: true
    }), (0, r.jsx)(l.Z, {
      cardClassName: T.boosterRecognitionCard
    }), (0, r.jsx)(c.Z, {
      className: T.faq
    })]
  })
}