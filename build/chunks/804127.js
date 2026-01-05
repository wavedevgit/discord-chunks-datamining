/** Chunk was on 66547 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  In: () => c,
  uL: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk782568 = require("./782568.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js");

function l(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: n,
    questContent: a,
    quest: o,
    rewardCode: l,
    preview: c
  } = e, [d, u] = r.useState(false), [m, p] = r.useState(false), f = r.useCallback(async (e, t, n) => {
    try {
      p(true), await (0, i.QB)(e, t, n), u(false), p(false)
    } catch (e) {
      u(true), p(false)
    }
  }, []), C = r.useCallback(e => {
    try {
      (0, i.pf)(e)
    } catch (e) {
      u(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === c || null != l || d || t || m || n || (u(false), (null == (e = o.userStatus) ? true : e.claimedAt) == null ? f(o.id, s.y$.CROSS_PLATFORM, a) : (null == (r = o.userStatus) ? true : r.claimedAt) != null && C(o.id))
  }, [f, C, d, t, m, n, a, o, l, c]), {
    claimCode: f,
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
    questContentPosition: s,
    sourceQuestContent: l
  } = e, c = (0, o.O5)();
  return r.useCallback(() => {
    null != n && (c({
      questId: t.id,
      questContent: i,
      questContentCTA: o.jZ.REDEEM_REWARD,
      questContentPosition: s,
      sourceQuestContent: l
    }), c({
      questId: t.id,
      questContent: i,
      questContentCTA: o.jZ.VISIT_REDEMPTION_LINK,
      questContentPosition: s,
      sourceQuestContent: l
    }), (0, a.Z)(n))
  }, [t.id, i, s, l, c, n])
}