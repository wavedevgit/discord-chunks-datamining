/** Chunk was on 67299 **/
/** chunk id: 645627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HJ: () => d,
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
    questContent: a,
    quest: o,
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
    true === c || null != l || d || t || m || n || (u(false), (null == (e = o.userStatus) ? true : e.claimedAt) == null ? p(o.id, s.pY.CROSS_PLATFORM, a) : (null == (r = o.userStatus) ? true : r.claimedAt) != null && C(o.id))
  }, [p, C, d, t, m, n, a, o, l, c]), {
    claimCode: p,
    fetchCode: C,
    hasError: d,
    setHasError: u
  }
}

function d(e) {
  let {
    quest: t,
    redemptionLink: n,
    questContent: i,
    questContentPosition: s,
    sourceQuestContent: c
  } = e, d = (0, o.Ut)();
  return r.useCallback(() => {
    null != n && (d({
      questId: t.id,
      questContent: i,
      questContentCTA: l.Cy.REDEEM_REWARD,
      questContentPosition: s,
      sourceQuestContent: c
    }), d({
      questId: t.id,
      questContent: i,
      questContentCTA: l.Cy.VISIT_REDEMPTION_LINK,
      questContentPosition: s,
      sourceQuestContent: c
    }), (0, a.A)(n))
  }, [t.id, i, s, c, d, n])
}