/** Chunk was on 73268 **/
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
    preview: d
  } = e, [u, p] = r.useState(false), [f, m] = r.useState(false), C = r.useCallback(async (e, t, n) => {
    try {
      m(true), await (0, s.QB)(e, t, n), p(false), m(false)
    } catch (e) {
      p(true), m(false)
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
    true === d || null != l || u || t || f || n || o || (p(false), (null == (e = i.userStatus) ? true : e.claimedAt) == null && null != c ? C(i.id, c, a) : (null == (r = i.userStatus) ? true : r.claimedAt) != null && h(i.id))
  }, [C, h, u, t, f, n, a, i, o, l, c, d]), {
    claimCode: C,
    fetchCode: h,
    hasError: u,
    setHasError: p
  }
}

function c(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: s,
    hasError: l,
    onDismiss: c,
    quest: d,
    questContent: u,
    questContentCTA: p = o.jZ.GET_REWARD_CODE,
    questContentPosition: f,
    requiresPlatformSelection: m,
    selectedPlatformType: C,
    redemptionLink: h,
    sourceQuestContent: _
  } = e, g = (0, o.O5)();
  return r.useCallback(() => {
    var e;
    m && null != C ? (n(d.id, C, u), g({
      questId: d.id,
      questContent: u,
      questContentCTA: p,
      questContentPosition: f,
      sourceQuestContent: _
    })) : l ? (null == (e = d.userStatus) ? true : e.claimedAt) != null ? s(d.id) : null != C && (n(d.id, C, u), g({
      questId: d.id,
      questContent: u,
      questContentCTA: p,
      questContentPosition: f,
      sourceQuestContent: _
    })) : (null != h && (g({
      questId: d.id,
      questContent: u,
      questContentCTA: o.jZ.REDEEM_REWARD,
      questContentPosition: f,
      sourceQuestContent: _
    }), (0, i.q)({
      href: h,
      onConfirm: () => {
        g({
          questId: d.id,
          questContent: u,
          questContentCTA: o.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: f,
          sourceQuestContent: _
        }), (0, a.Z)(h)
      }
    })), c())
  }, [n, s, l, c, d.id, null == (t = d.userStatus) ? true : t.claimedAt, u, p, f, m, C, g, h, _])
}