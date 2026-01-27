/** Chunk was on 67299 **/
/** chunk id: 645627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HJ: () => u,
  Ln: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk975807 = require("./975807.js"),
  Chunk829219 = require("./829219.js"),
  Chunk341915 = require("./341915.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js");

function c(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: n,
    questContent: s,
    quest: o,
    rewardCode: l,
    preview: c
  } = e, [u, d] = r.useState(false), [m, p] = r.useState(false), f = r.useCallback(async (e, t, n) => {
    try {
      p(true), await (0, i.Oq)(e, t, n), d(false), p(false)
    } catch (e) {
      d(true), p(false)
    }
  }, []), C = r.useCallback(e => {
    try {
      (0, i.jh)(e)
    } catch (e) {
      d(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === c || null != l || u || t || m || n || (d(false), (null == (e = o.userStatus) ? true : e.claimedAt) == null ? f(o.id, a.pY.CROSS_PLATFORM, s) : (null == (r = o.userStatus) ? true : r.claimedAt) != null && C(o.id))
  }, [f, C, u, t, m, n, s, o, l, c]), {
    claimCode: f,
    fetchCode: C,
    hasError: u,
    setHasError: d
  }
}

function u(e) {
  let {
    quest: t,
    redemptionLink: n,
    questContent: i,
    questContentPosition: a,
    sourceQuestContent: c
  } = e, u = (0, o.Ut)();
  return r.useCallback(() => {
    null != n && (u({
      questId: t.id,
      questContent: i,
      questContentCTA: l.Cy.REDEEM_REWARD,
      questContentPosition: a,
      sourceQuestContent: c
    }), u({
      questId: t.id,
      questContent: i,
      questContentCTA: l.Cy.VISIT_REDEMPTION_LINK,
      questContentPosition: a,
      sourceQuestContent: c
    }), (0, s.A)(n))
  }, [t.id, i, a, c, u, n])
}