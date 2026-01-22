/** Chunk was on 67299 **/
/** chunk id: 645627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HJ: () => o,
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
    preview: o
  } = e, [d, u] = r.useState(false), [f, m] = r.useState(false), x = r.useCallback(async (e, t, n) => {
    try {
      m(true), await (0, i.Oq)(e, t, n), u(false), m(false)
    } catch (e) {
      u(true), m(false)
    }
  }, []), h = r.useCallback(e => {
    try {
      (0, i.jh)(e)
    } catch (e) {
      u(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === o || null != l || d || t || f || n || (u(false), (null == (e = s.userStatus) ? true : e.claimedAt) == null ? x(s.id, c.pY.CROSS_PLATFORM, a) : (null == (r = s.userStatus) ? true : r.claimedAt) != null && h(s.id))
  }, [x, h, d, t, f, n, a, s, l, o]), {
    claimCode: x,
    fetchCode: h,
    hasError: d,
    setHasError: u
  }
}

function o(e) {
  let {
    quest: t,
    redemptionLink: n,
    questContent: i,
    questContentPosition: c,
    sourceQuestContent: l
  } = e, o = (0, s.Ut)();
  return r.useCallback(() => {
    null != n && (o({
      questId: t.id,
      questContent: i,
      questContentCTA: s.Cy.REDEEM_REWARD,
      questContentPosition: c,
      sourceQuestContent: l
    }), o({
      questId: t.id,
      questContent: i,
      questContentCTA: s.Cy.VISIT_REDEMPTION_LINK,
      questContentPosition: c,
      sourceQuestContent: l
    }), (0, a.A)(n))
  }, [t.id, i, c, l, o, n])
}