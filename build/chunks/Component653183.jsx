/** Chunk was on web.js **/
/** chunk id: 653183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
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

function T(e) {
  let {
    premiumSubscription: t
  } = e, n = (0, a.bG)([m.A], () => m.A.boostSlots), T = i.useMemo(() => Object.values(n), [n]), C = (0, a.bG)([h.default], () => h.default.getCurrentUser()), N = g.Ay.isPremium(C, I.PremiumTypes.TIER_2), R = (0, a.bG)([p.A], () => p.A.affinities), w = (0, a.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()), P = R.length > 0 || w.length > 0, D = T.length > 0, x = i.useMemo(() => T.filter(e => null != e.premiumGuildSubscription), [T]), L = x.length > 0, j = T.length > x.length, M = (0, a.bG)([f.A], () => f.A.getCurrentUserAppliedBoosts()), {
    fractionalState: k
  } = (0, s.A)({
    forceFetch: true
  }), U = null == C ? true : C.isPremiumGroupMember(), G = (null == t ? true : t.isPausedOrPausePending) === true && k === I.xc.NONE, V = (null == t ? true : t.isPausedOrPausePending) !== true && k === I.xc.NONE && !U, F = N && k === I.xc.FP_SUB_PAUSED, B = k === I.xc.NONE && !U;
  return (0, r.jsxs)("div", {
    className: S.GO,
    children: [(0, r.jsx)(o.kb, {
      className: S.ek
    }), (0, r.jsx)(y.A, {
      hasGuildBoostSlots: D,
      hasAppliedGuildBoosts: L,
      hasBoostPerk: F,
      canAddBoosts: V
    }), B && (0, r.jsx)(v.A, {
      hasAppliedGuildBoosts: L,
      hasBoostPerk: F,
      hasGuildAffinitiesOrInGuild: P,
      subscriptionIsPausedOrPausePending: G
    }), U && (0, r.jsx)(d.A, {}), !P && (0, r.jsx)(b.A, {}), (null == t ? true : t.isPaused) && k !== I.xc.FP_SUB_PAUSED ? (0, r.jsx)(E.N, {
      appliedGuildBoosts: M,
      premiumSubscription: t
    }) : (0, r.jsx)(E.A, {
      guildBoostSlots: n,
      premiumSubscription: t
    }), (0, r.jsx)(A.A, {
      guildBoostSlots: T,
      fractionalPremiumState: k
    }), (0, r.jsx)(O.A, {
      canAddBoosts: L && V,
      canApplyBoosts: j
    }), (0, r.jsx)(u.A, {
      className: S.e4,
      hideHeading: true,
      hideTier0: true
    }), (0, r.jsx)(l.A, {
      cardClassName: S.KW
    }), (0, r.jsx)(c.A, {
      className: S.JL
    })]
  })
}