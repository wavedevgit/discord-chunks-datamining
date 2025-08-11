/** Chunk was on 61643 **/
/** chunk id: 804127, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  G: () => c,
  u: () => i
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk782568 = require("./782568.js"),
  Chunk49012 = require("./49012.js"),
  Chunk617136 = require("./617136.js"),
  Chunk272008 = require("./272008.js");

function i(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: r,
    questContent: o,
    quest: a,
    requiresPlatformSelection: s,
    rewardCode: i,
    selectedPlatformType: c,
    preview: u
  } = e, [d, p] = n.useState(false), [m, f] = n.useState(false), b = n.useCallback(async (e, t, r) => {
    try {
      f(true), await (0, l.QB)(e, t, r), p(false), f(false)
    } catch (e) {
      p(true), f(false)
    }
  }, []), h = n.useCallback(e => {
    try {
      (0, l.pf)(e)
    } catch (e) {
      p(true)
    }
  }, []);
  return n.useEffect(() => {
    var e, n;
    true === u || null != i || d || t || m || r || s || (p(false), (null == (e = a.userStatus) ? true : e.claimedAt) == null && null != c ? b(a.id, c, o) : (null == (n = a.userStatus) ? true : n.claimedAt) != null && h(a.id))
  }, [b, h, d, t, m, r, o, a, s, i, c, u]), {
    claimCode: b,
    fetchCode: h,
    hasError: d,
    setHasError: p
  }
}

function c(e) {
  var t;
  let {
    claimCode: r,
    fetchCode: l,
    hasError: i,
    onDismiss: c,
    quest: u,
    questContent: d,
    questContentCTA: p = s.jZ.GET_REWARD_CODE,
    questContentPosition: m,
    requiresPlatformSelection: f,
    selectedPlatformType: b,
    redemptionLink: h,
    sourceQuestContent: y
  } = e, O = (0, s.O5)();
  return n.useCallback(() => {
    var e;
    f && null != b ? (r(u.id, b, d), O({
      questId: u.id,
      questContent: d,
      questContentCTA: p,
      questContentPosition: m,
      sourceQuestContent: y
    })) : i ? (null == (e = u.userStatus) ? true : e.claimedAt) != null ? l(u.id) : null != b && (r(u.id, b, d), O({
      questId: u.id,
      questContent: d,
      questContentCTA: p,
      questContentPosition: m,
      sourceQuestContent: y
    })) : (null != h && (O({
      questId: u.id,
      questContent: d,
      questContentCTA: s.jZ.REDEEM_REWARD,
      questContentPosition: m,
      sourceQuestContent: y
    }), (0, a.q)({
      href: h,
      onConfirm: () => {
        O({
          questId: u.id,
          questContent: d,
          questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: m,
          sourceQuestContent: y
        }), (0, o.Z)(h)
      }
    })), c())
  }, [r, l, i, c, u.id, null == (t = u.userStatus) ? true : t.claimedAt, d, p, m, f, b, O, h, y])
}