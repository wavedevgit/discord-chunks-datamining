/** Chunk was on 67299 **/
/** chunk id: 645627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HJ: () => c,
  Ln: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk975807 = require("./975807.js"),
  Chunk829219 = require("./829219.js"),
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js");

function l(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: n,
    questContent: a,
    quest: s,
    rewardCode: l,
    preview: c
  } = e, [d, u] = r.useState(false), [m, f] = r.useState(false), p = r.useCallback(async (e, t, n) => {
    try {
      f(true), await (0, i.Oq)(e, t, n), u(false), f(false)
    } catch (e) {
      u(true), f(false)
    }
  }, []), C = r.useCallback(e => {
    try {
      (0, i.jh)(e)
    } catch (e) {
      u(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === c || null != l || d || t || m || n || (u(false), (null == (e = s.userStatus) ? true : e.claimedAt) == null ? p(s.id, o.pY.CROSS_PLATFORM, a) : (null == (r = s.userStatus) ? true : r.claimedAt) != null && C(s.id))
  }, [p, C, d, t, m, n, a, s, l, c]), {
    claimCode: p,
    fetchCode: C,
    hasError: d,
    setHasError: u
  }
}

function c(e) {
  let {
    quest: t,
    redemptionLink: n,
    questContent: i,
    questContentPosition: o,
    sourceQuestContent: l
  } = e, c = (0, s.Ut)();
  return r.useCallback(() => {
    null != n && (c({
      questId: t.id,
      questContent: i,
      questContentCTA: s.Cy.REDEEM_REWARD,
      questContentPosition: o,
      sourceQuestContent: l
    }), c({
      questId: t.id,
      questContent: i,
      questContentCTA: s.Cy.VISIT_REDEMPTION_LINK,
      questContentPosition: o,
      sourceQuestContent: l
    }), (0, a.A)(n))
  }, [t.id, i, o, l, c, n])
}