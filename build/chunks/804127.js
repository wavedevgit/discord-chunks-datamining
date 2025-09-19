/** Chunk was on 96861 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c,
  u: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk782568 = require("./782568.js"),
  Chunk49012 = require("./49012.js"),
  Chunk617136 = require("./617136.js"),
  Chunk272008 = require("./272008.js");

function l(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: n,
    questContent: r,
    quest: i,
    requiresPlatformSelection: s,
    rewardCode: l,
    selectedPlatformType: c,
    preview: d
  } = e, [u, f] = a.useState(false), [h, C] = a.useState(false), m = a.useCallback(async (e, t, n) => {
    try {
      C(true), await (0, o.QB)(e, t, n), f(false), C(false)
    } catch (e) {
      f(true), C(false)
    }
  }, []), p = a.useCallback(e => {
    try {
      (0, o.pf)(e)
    } catch (e) {
      f(true)
    }
  }, []);
  return a.useEffect(() => {
    var e, a;
    true === d || null != l || u || t || h || n || s || (f(false), (null == (e = i.userStatus) ? true : e.claimedAt) == null && null != c ? m(i.id, c, r) : (null == (a = i.userStatus) ? true : a.claimedAt) != null && p(i.id))
  }, [m, p, u, t, h, n, r, i, s, l, c, d]), {
    claimCode: m,
    fetchCode: p,
    hasError: u,
    setHasError: f
  }
}

function c(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: o,
    hasError: l,
    onDismiss: c,
    quest: d,
    questContent: u,
    questContentCTA: f = s.jZ.GET_REWARD_CODE,
    questContentPosition: h,
    requiresPlatformSelection: C,
    selectedPlatformType: m,
    redemptionLink: p,
    sourceQuestContent: v
  } = e, _ = (0, s.O5)();
  return a.useCallback(() => {
    var e;
    C && null != m ? (n(d.id, m, u), _({
      questId: d.id,
      questContent: u,
      questContentCTA: f,
      questContentPosition: h,
      sourceQuestContent: v
    })) : l ? (null == (e = d.userStatus) ? true : e.claimedAt) != null ? o(d.id) : null != m && (n(d.id, m, u), _({
      questId: d.id,
      questContent: u,
      questContentCTA: f,
      questContentPosition: h,
      sourceQuestContent: v
    })) : (null != p && (_({
      questId: d.id,
      questContent: u,
      questContentCTA: s.jZ.REDEEM_REWARD,
      questContentPosition: h,
      sourceQuestContent: v
    }), (0, i.q)({
      href: p,
      onConfirm: () => {
        _({
          questId: d.id,
          questContent: u,
          questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: h,
          sourceQuestContent: v
        }), (0, r.Z)(p)
      }
    })), c())
  }, [n, o, l, c, d.id, null == (t = d.userStatus) ? true : t.claimedAt, u, f, h, C, m, _, p, v])
}