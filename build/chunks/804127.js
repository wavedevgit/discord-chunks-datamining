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
    questContent: a,
    quest: i,
    requiresPlatformSelection: o,
    rewardCode: l,
    selectedPlatformType: c,
    preview: u
  } = e, [d, f] = r.useState(false), [m, p] = r.useState(false), C = r.useCallback(async (e, t, n) => {
    try {
      p(true), await (0, s.QB)(e, t, n), f(false), p(false)
    } catch (e) {
      f(true), p(false)
    }
  }, []), h = r.useCallback(e => {
    try {
      (0, s.pf)(e)
    } catch (e) {
      f(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === u || null != l || d || t || m || n || o || (f(false), (null == (e = i.userStatus) ? true : e.claimedAt) == null && null != c ? C(i.id, c, a) : (null == (r = i.userStatus) ? true : r.claimedAt) != null && h(i.id))
  }, [C, h, d, t, m, n, a, i, o, l, c, u]), {
    claimCode: C,
    fetchCode: h,
    hasError: d,
    setHasError: f
  }
}

function c(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: s,
    hasError: l,
    onDismiss: c,
    quest: u,
    questContent: d,
    questContentCTA: f = o.jZ.GET_REWARD_CODE,
    questContentPosition: m,
    requiresPlatformSelection: p,
    selectedPlatformType: C,
    redemptionLink: h,
    sourceQuestContent: v
  } = e, j = (0, o.O5)();
  return r.useCallback(() => {
    var e;
    p && null != C ? (n(u.id, C, d), j({
      questId: u.id,
      questContent: d,
      questContentCTA: f,
      questContentPosition: m,
      sourceQuestContent: v
    })) : l ? (null == (e = u.userStatus) ? true : e.claimedAt) != null ? s(u.id) : null != C && (n(u.id, C, d), j({
      questId: u.id,
      questContent: d,
      questContentCTA: f,
      questContentPosition: m,
      sourceQuestContent: v
    })) : (null != h && (j({
      questId: u.id,
      questContent: d,
      questContentCTA: o.jZ.REDEEM_REWARD,
      questContentPosition: m,
      sourceQuestContent: v
    }), (0, i.q)({
      href: h,
      onConfirm: () => {
        j({
          questId: u.id,
          questContent: d,
          questContentCTA: o.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: m,
          sourceQuestContent: v
        }), (0, a.Z)(h)
      }
    })), c())
  }, [n, s, l, c, u.id, null == (t = u.userStatus) ? true : t.claimedAt, d, f, m, p, C, j, h, v])
}