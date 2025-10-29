/** Chunk was on 62006 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G$: () => c,
  In: () => l,
  uL: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk782568 = require("./782568.js"),
  Chunk617136 = require("./617136.js"),
  Chunk272008 = require("./272008.js");

function s(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: n,
    questContent: a,
    quest: i,
    requiresPlatformSelection: s,
    rewardCode: l,
    selectedPlatformType: c,
    preview: u
  } = e, [d, p] = r.useState(false), [m, C] = r.useState(false), f = r.useCallback(async (e, t, n) => {
    try {
      C(true), await (0, o.QB)(e, t, n), p(false), C(false)
    } catch (e) {
      p(true), C(false)
    }
  }, []), b = r.useCallback(e => {
    try {
      (0, o.pf)(e)
    } catch (e) {
      p(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === u || null != l || d || t || m || n || s || (p(false), (null == (e = i.userStatus) ? true : e.claimedAt) == null && null != c ? f(i.id, c, a) : (null == (r = i.userStatus) ? true : r.claimedAt) != null && b(i.id))
  }, [f, b, d, t, m, n, a, i, s, l, c, u]), {
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
    questContent: o,
    questContentPosition: s,
    sourceQuestContent: l
  } = e, c = (0, i.O5)();
  return r.useCallback(() => {
    null != n && (c({
      questId: t.id,
      questContent: o,
      questContentCTA: i.jZ.REDEEM_REWARD,
      questContentPosition: s,
      sourceQuestContent: l
    }), c({
      questId: t.id,
      questContent: o,
      questContentCTA: i.jZ.VISIT_REDEMPTION_LINK,
      questContentPosition: s,
      sourceQuestContent: l
    }), (0, a.Z)(n))
  }, [t.id, o, s, l, c, n])
}

function c(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: a,
    hasError: o,
    onDismiss: s,
    quest: c,
    questContent: u,
    questContentCTA: d = i.jZ.GET_REWARD_CODE,
    questContentPosition: p,
    requiresPlatformSelection: m,
    selectedPlatformType: C,
    redemptionLink: f,
    sourceQuestContent: b
  } = e, h = (0, i.O5)(), _ = l(e);
  return r.useCallback(() => {
    var e;
    m && null != C ? (n(c.id, C, u), h({
      questId: c.id,
      questContent: u,
      questContentCTA: d,
      questContentPosition: p,
      sourceQuestContent: b
    })) : o ? (null == (e = c.userStatus) ? true : e.claimedAt) != null ? a(c.id) : null != C && (n(c.id, C, u), h({
      questId: c.id,
      questContent: u,
      questContentCTA: d,
      questContentPosition: p,
      sourceQuestContent: b
    })) : (null != f && _(), s())
  }, [n, a, o, s, c.id, null == (t = c.userStatus) ? true : t.claimedAt, u, d, p, m, C, h, f, b, _])
}