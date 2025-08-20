/** Chunk was on 61624 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c,
  u: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk782568 = require("./782568.js"),
  Chunk49012 = require("./49012.js"),
  Chunk617136 = require("./617136.js"),
  Chunk272008 = require("./272008.js");

function i(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: n,
    questContent: a,
    quest: o,
    requiresPlatformSelection: l,
    rewardCode: i,
    selectedPlatformType: c,
    preview: u
  } = e, [d, p] = r.useState(false), [m, f] = r.useState(false), b = r.useCallback(async (e, t, n) => {
    try {
      f(true), await (0, s.QB)(e, t, n), p(false), f(false)
    } catch (e) {
      p(true), f(false)
    }
  }, []), h = r.useCallback(e => {
    try {
      (0, s.pf)(e)
    } catch (e) {
      p(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === u || null != i || d || t || m || n || l || (p(false), (null == (e = o.userStatus) ? true : e.claimedAt) == null && null != c ? b(o.id, c, a) : (null == (r = o.userStatus) ? true : r.claimedAt) != null && h(o.id))
  }, [b, h, d, t, m, n, a, o, l, i, c, u]), {
    claimCode: b,
    fetchCode: h,
    hasError: d,
    setHasError: p
  }
}

function c(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: s,
    hasError: i,
    onDismiss: c,
    quest: u,
    questContent: d,
    questContentCTA: p = l.jZ.GET_REWARD_CODE,
    questContentPosition: m,
    requiresPlatformSelection: f,
    selectedPlatformType: b,
    redemptionLink: h,
    sourceQuestContent: g
  } = e, y = (0, l.O5)();
  return r.useCallback(() => {
    var e;
    f && null != b ? (n(u.id, b, d), y({
      questId: u.id,
      questContent: d,
      questContentCTA: p,
      questContentPosition: m,
      sourceQuestContent: g
    })) : i ? (null == (e = u.userStatus) ? true : e.claimedAt) != null ? s(u.id) : null != b && (n(u.id, b, d), y({
      questId: u.id,
      questContent: d,
      questContentCTA: p,
      questContentPosition: m,
      sourceQuestContent: g
    })) : (null != h && (y({
      questId: u.id,
      questContent: d,
      questContentCTA: l.jZ.REDEEM_REWARD,
      questContentPosition: m,
      sourceQuestContent: g
    }), (0, o.q)({
      href: h,
      onConfirm: () => {
        y({
          questId: u.id,
          questContent: d,
          questContentCTA: l.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: m,
          sourceQuestContent: g
        }), (0, a.Z)(h)
      }
    })), c())
  }, [n, s, i, c, u.id, null == (t = u.userStatus) ? true : t.claimedAt, d, p, m, f, b, y, h, g])
}