/** Chunk was on 2827 **/
/** chunk id: 653183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk531260 = require("./531260.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk449280 = require("./449280.jsx"),
  Chunk406245 = require("./406245.jsx"),
  Chunk836275 = require("./836275.jsx"),
  Chunk338548 = require("./338548.jsx"),
  Chunk859241 = require("./859241.js"),
  Chunk197305 = require("./197305.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk178368 = require("./178368.js"),
  Chunk927578 = require("./927578.js"),
  Chunk530240 = require("./530240.jsx"),
  Chunk564152 = require("./564152.jsx"),
  Chunk76740 = require("./76740.jsx"),
  Chunk21316 = require("./21316.jsx"),
  Chunk237267 = require("./237267.jsx"),
  Chunk240626 = require("./240626.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk637676 = require("./637676.js");

function I(e) {
  let {
    premiumSubscription: t
  } = e, n = (0, l.bG)([A.A], () => A.A.boostSlots), I = i.useMemo(() => Object.values(n), [n]), y = (0, l.bG)([g.default], () => g.default.getCurrentUser()), N = f.Ay.isPremium(y, S.PremiumTypes.TIER_2), j = (0, l.bG)([p.A], () => p.A.affinities), v = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()), P = j.length > 0 || v.length > 0, R = I.length > 0, D = i.useMemo(() => I.filter(e => null != e.premiumGuildSubscription), [I]), L = D.length > 0, w = I.length > D.length, M = (0, l.bG)([_.A], () => _.A.getCurrentUserAppliedBoosts()), {
    fractionalState: G
  } = (0, s.A)({
    forceFetch: true
  }), U = null == y ? true : y.isPremiumGroupMember(), k = (null == t ? true : t.isPausedOrPausePending) === true && G === S.xc.NONE, B = (null == t ? true : t.isPausedOrPausePending) !== true && G === S.xc.NONE && !U, H = N && G === S.xc.FP_SUB_PAUSED, V = G === S.xc.NONE && !U;
  return (0, r.jsxs)("div", {
    className: T.GO,
    children: [(0, r.jsx)(a.kb, {
      className: T.ek
    }), (0, r.jsx)(h.A, {
      hasGuildBoostSlots: R,
      hasAppliedGuildBoosts: L,
      hasBoostPerk: H,
      canAddBoosts: B
    }), V && (0, r.jsx)(C.A, {
      hasAppliedGuildBoosts: L,
      hasBoostPerk: H,
      hasGuildAffinitiesOrInGuild: P,
      subscriptionIsPausedOrPausePending: k
    }), U && (0, r.jsx)(u.A, {}), !P && (0, r.jsx)(E.A, {}), (null == t ? true : t.isPaused) && G !== S.xc.FP_SUB_PAUSED ? (0, r.jsx)(b.N, {
      appliedGuildBoosts: M,
      premiumSubscription: t
    }) : (0, r.jsx)(b.A, {
      guildBoostSlots: n,
      premiumSubscription: t
    }), (0, r.jsx)(x.A, {
      guildBoostSlots: I,
      fractionalPremiumState: G
    }), (0, r.jsx)(O.A, {
      canAddBoosts: L && B,
      canApplyBoosts: w
    }), (0, r.jsx)(d.A, {
      className: T.e4,
      hideHeading: true,
      hideTier0: true
    }), (0, r.jsx)(o.A, {
      cardClassName: T.KW
    }), (0, r.jsx)(c.A, {
      className: T.JL
    })]
  })
}