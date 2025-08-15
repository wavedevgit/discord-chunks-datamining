/** Chunk was on 20166 **/
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
    questContent: o,
    quest: a,
    requiresPlatformSelection: s,
    rewardCode: l,
    selectedPlatformType: c,
    preview: d
  } = e, [u, p] = n.useState(false), [_, f] = n.useState(false), m = n.useCallback(async (e, t, r) => {
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
    true === d || null != l || u || t || _ || r || s || (p(false), (null == (e = a.userStatus) ? true : e.claimedAt) == null && null != c ? m(a.id, c, o) : (null == (n = a.userStatus) ? true : n.claimedAt) != null && C(a.id))
  }, [m, C, u, t, _, r, o, a, s, l, c, d]), {
    claimCode: m,
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
    questContentPosition: _,
    requiresPlatformSelection: f,
    selectedPlatformType: m,
    redemptionLink: C,
    sourceQuestContent: h
  } = e, b = (0, s.O5)();
  return n.useCallback(() => {
    var e;
    f && null != m ? (r(d.id, m, u), b({
      questId: d.id,
      questContent: u,
      questContentCTA: p,
      questContentPosition: _,
      sourceQuestContent: h
    })) : l ? (null == (e = d.userStatus) ? true : e.claimedAt) != null ? i(d.id) : null != m && (r(d.id, m, u), b({
      questId: d.id,
      questContent: u,
      questContentCTA: p,
      questContentPosition: _,
      sourceQuestContent: h
    })) : (null != C && (b({
      questId: d.id,
      questContent: u,
      questContentCTA: s.jZ.REDEEM_REWARD,
      questContentPosition: _,
      sourceQuestContent: h
    }), (0, a.q)({
      href: C,
      onConfirm: () => {
        b({
          questId: d.id,
          questContent: u,
          questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: _,
          sourceQuestContent: h
        }), (0, o.Z)(C)
      }
    })), c())
  }, [r, i, l, c, d.id, null == (t = d.userStatus) ? true : t.claimedAt, u, p, _, f, m, b, C, h])
}