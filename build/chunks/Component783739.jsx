/** Chunk was on web.js **/
/** chunk id: 783739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function S(e) {
  let {
    premiumSubscription: t
  } = e, n = (0, a.e7)([h.Z], () => h.Z.boostSlots), S = i.useMemo(() => Object.values(n), [n]), A = (0, a.e7)([p.default], () => p.default.getCurrentUser()), C = m.ZP.isPremium(A, I.PremiumTypes.TIER_2), N = (0, a.e7)([f.Z], () => f.Z.affinities), R = (0, a.e7)([_.ZP], () => _.ZP.getFlattenedGuildIds()), P = N.length > 0 || R.length > 0, D = S.length > 0, w = i.useMemo(() => S.filter(e => null != e.premiumGuildSubscription), [S]), x = w.length > 0, L = S.length > w.length, M = (0, a.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()), {
    fractionalState: k
  } = (0, o.Z)({
    forceFetch: true
  }), j = (null == t ? true : t.isPausedOrPausePending) === true && k === I.a$.NONE, U = (null == t ? true : t.isPausedOrPausePending) !== true && k === I.a$.NONE, G = C && k === I.a$.FP_SUB_PAUSED;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.oQ, {
      className: T.blockedPaymentsWarning
    }), (0, r.jsx)(E.Z, {
      hasGuildBoostSlots: D,
      hasAppliedGuildBoosts: x,
      hasBoostPerk: G,
      canAddBoosts: U
    }), k === I.a$.NONE && (0, r.jsx)(O.Z, {
      hasAppliedGuildBoosts: x,
      hasBoostPerk: G,
      hasGuildAffinitiesOrInGuild: P,
      subscriptionIsPausedOrPausePending: j
    }), !P && (0, r.jsx)(b.Z, {}), (null == t ? true : t.isPaused) && k !== I.a$.FP_SUB_PAUSED ? (0, r.jsx)(g.r, {
      appliedGuildBoosts: M,
      premiumSubscription: t
    }) : (0, r.jsx)(g.Z, {
      guildBoostSlots: n,
      premiumSubscription: t
    }), (0, r.jsx)(v.Z, {
      guildBoostSlots: S,
      fractionalPremiumState: k
    }), (0, r.jsx)(y.Z, {
      canAddBoosts: x && U,
      canApplyBoosts: L
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