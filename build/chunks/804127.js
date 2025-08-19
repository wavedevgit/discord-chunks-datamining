/** Chunk was on 89035 **/
/** chunk id: 804127, original params: e,t,r (module,exports,require) **/
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
    isFetchingRewardCode: r,
    questContent: a,
    quest: o,
    requiresPlatformSelection: s,
    rewardCode: l,
    selectedPlatformType: c,
    preview: d
  } = e, [u, p] = n.useState(false), [m, f] = n.useState(false), h = n.useCallback(async (e, t, r) => {
    try {
      f(true), await (0, i.QB)(e, t, r), p(false), f(false)
    } catch (e) {
      p(true), f(false)
    }
  }, []), C = n.useCallback(e => {
    try {
      (0, i.pf)(e)
    } catch (e) {
      p(true)
    }
  }, []);
  return n.useEffect(() => {
    var e, n;
    true === d || null != l || u || t || m || r || s || (p(false), (null == (e = o.userStatus) ? true : e.claimedAt) == null && null != c ? h(o.id, c, a) : (null == (n = o.userStatus) ? true : n.claimedAt) != null && C(o.id))
  }, [h, C, u, t, m, r, a, o, s, l, c, d]), {
    claimCode: h,
    fetchCode: C,
    hasError: u,
    setHasError: p
  }
}

function c(e) {
  var t;
  let {
    claimCode: r,
    fetchCode: i,
    hasError: l,
    onDismiss: c,
    quest: d,
    questContent: u,
    questContentCTA: p = s.jZ.GET_REWARD_CODE,
    questContentPosition: m,
    requiresPlatformSelection: f,
    selectedPlatformType: h,
    redemptionLink: C,
    sourceQuestContent: _
  } = e, b = (0, s.O5)();
  return n.useCallback(() => {
    var e;
    f && null != h ? (r(d.id, h, u), b({
      questId: d.id,
      questContent: u,
      questContentCTA: p,
      questContentPosition: m,
      sourceQuestContent: _
    })) : l ? (null == (e = d.userStatus) ? true : e.claimedAt) != null ? i(d.id) : null != h && (r(d.id, h, u), b({
      questId: d.id,
      questContent: u,
      questContentCTA: p,
      questContentPosition: m,
      sourceQuestContent: _
    })) : (null != C && (b({
      questId: d.id,
      questContent: u,
      questContentCTA: s.jZ.REDEEM_REWARD,
      questContentPosition: m,
      sourceQuestContent: _
    }), (0, o.q)({
      href: C,
      onConfirm: () => {
        b({
          questId: d.id,
          questContent: u,
          questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: m,
          sourceQuestContent: _
        }), (0, a.Z)(C)
      }
    })), c())
  }, [r, i, l, c, d.id, null == (t = d.userStatus) ? true : t.claimedAt, u, p, m, f, h, b, C, _])
}