/** Chunk was on 96861 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G$: () => c,
  In: () => l,
  uL: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk782568 = require("./782568.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js");

function s(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: n,
    questContent: a,
    quest: o,
    requiresPlatformSelection: s,
    rewardCode: l,
    selectedPlatformType: c,
    preview: u
  } = e, [d, m] = r.useState(false), [p, C] = r.useState(false), f = r.useCallback(async (e, t, n) => {
    try {
      C(true), await (0, i.QB)(e, t, n), m(false), C(false)
    } catch (e) {
      m(true), C(false)
    }
  }, []), h = r.useCallback(e => {
    try {
      (0, i.pf)(e)
    } catch (e) {
      m(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === u || null != l || d || t || p || n || s || (m(false), (null == (e = o.userStatus) ? true : e.claimedAt) == null && null != c ? f(o.id, c, a) : (null == (r = o.userStatus) ? true : r.claimedAt) != null && h(o.id))
  }, [f, h, d, t, p, n, a, o, s, l, c, u]), {
    claimCode: f,
    fetchCode: h,
    hasError: d,
    setHasError: m
  }
}

function l(e) {
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

function c(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: a,
    hasError: i,
    onDismiss: s,
    quest: c,
    questContent: u,
    questContentCTA: d = o.jZ.GET_REWARD_CODE,
    questContentPosition: m,
    requiresPlatformSelection: p,
    selectedPlatformType: C,
    redemptionLink: f,
    sourceQuestContent: h
  } = e, j = (0, o.O5)(), x = l(e);
  return r.useCallback(() => {
    var e;
    p && null != C ? (n(c.id, C, u), j({
      questId: c.id,
      questContent: u,
      questContentCTA: d,
      questContentPosition: m,
      sourceQuestContent: h
    })) : i ? (null == (e = c.userStatus) ? true : e.claimedAt) != null ? a(c.id) : null != C && (n(c.id, C, u), j({
      questId: c.id,
      questContent: u,
      questContentCTA: d,
      questContentPosition: m,
      sourceQuestContent: h
    })) : (null != f && x(), s())
  }, [n, a, i, s, c.id, null == (t = c.userStatus) ? true : t.claimedAt, u, d, m, p, C, j, f, h, x])
}