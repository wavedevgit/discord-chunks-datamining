/** Chunk was on 62006 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G$: () => c,
  In: () => l,
  uL: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
  } = e, [d, p] = r.useState(false), [m, C] = r.useState(false), f = r.useCallback(async (e, t, n) => {
    try {
      C(true), await (0, i.QB)(e, t, n), p(false), C(false)
    } catch (e) {
      p(true), C(false)
    }
  }, []), b = r.useCallback(e => {
    try {
      (0, i.pf)(e)
    } catch (e) {
      p(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === u || null != l || d || t || m || n || s || (p(false), (null == (e = o.userStatus) ? true : e.claimedAt) == null && null != c ? f(o.id, c, a) : (null == (r = o.userStatus) ? true : r.claimedAt) != null && b(o.id))
  }, [f, b, d, t, m, n, a, o, s, l, c, u]), {
    claimCode: f,
    fetchCode: b,
    hasError: d,
    setHasError: p
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
    questContentPosition: p,
    requiresPlatformSelection: m,
    selectedPlatformType: C,
    redemptionLink: f,
    sourceQuestContent: b
  } = e, h = (0, o.O5)(), _ = l(e);
  return r.useCallback(() => {
    var e;
    m && null != C ? (n(c.id, C, u), h({
      questId: c.id,
      questContent: u,
      questContentCTA: d,
      questContentPosition: p,
      sourceQuestContent: b
    })) : i ? (null == (e = c.userStatus) ? true : e.claimedAt) != null ? a(c.id) : null != C && (n(c.id, C, u), h({
      questId: c.id,
      questContent: u,
      questContentCTA: d,
      questContentPosition: p,
      sourceQuestContent: b
    })) : (null != f && _(), s())
  }, [n, a, i, s, c.id, null == (t = c.userStatus) ? true : t.claimedAt, u, d, p, m, C, h, f, b, _])
}