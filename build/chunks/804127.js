/** Chunk was on 73268 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => l,
  u: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk782568 = require("./782568.js"),
  Chunk49012 = require("./49012.js"),
  Chunk617136 = require("./617136.js"),
  Chunk272008 = require("./272008.js");

function c(e) {
  let {
    isClaimingReward: t,
    isFetchingRewardCode: n,
    questContent: a,
    quest: i,
    requiresPlatformSelection: o,
    rewardCode: c,
    selectedPlatformType: l,
    preview: d
  } = e, [u, f] = r.useState(false), [p, m] = r.useState(false), h = r.useCallback(async (e, t, n) => {
    try {
      m(true), await (0, s.QB)(e, t, n), f(false), m(false)
    } catch (e) {
      f(true), m(false)
    }
  }, []), C = r.useCallback(e => {
    try {
      (0, s.pf)(e)
    } catch (e) {
      f(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === d || null != c || u || t || p || n || o || (f(false), (null == (e = i.userStatus) ? true : e.claimedAt) == null && null != l ? h(i.id, l, a) : (null == (r = i.userStatus) ? true : r.claimedAt) != null && C(i.id))
  }, [h, C, u, t, p, n, a, i, o, c, l, d]), {
    claimCode: h,
    fetchCode: C,
    hasError: u,
    setHasError: f
  }
}

function l(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: s,
    hasError: c,
    onDismiss: l,
    quest: d,
    questContent: u,
    questContentCTA: f = o.jZ.GET_REWARD_CODE,
    questContentPosition: p,
    requiresPlatformSelection: m,
    selectedPlatformType: h,
    redemptionLink: C,
    sourceQuestContent: v
  } = e, _ = (0, o.O5)();
  return r.useCallback(() => {
    var e;
    m && null != h ? (n(d.id, h, u), _({
      questId: d.id,
      questContent: u,
      questContentCTA: f,
      questContentPosition: p,
      sourceQuestContent: v
    })) : c ? (null == (e = d.userStatus) ? true : e.claimedAt) != null ? s(d.id) : null != h && (n(d.id, h, u), _({
      questId: d.id,
      questContent: u,
      questContentCTA: f,
      questContentPosition: p,
      sourceQuestContent: v
    })) : (null != C && (_({
      questId: d.id,
      questContent: u,
      questContentCTA: o.jZ.REDEEM_REWARD,
      questContentPosition: p,
      sourceQuestContent: v
    }), (0, i.q)({
      href: C,
      onConfirm: () => {
        _({
          questId: d.id,
          questContent: u,
          questContentCTA: o.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: p,
          sourceQuestContent: v
        }), (0, a.Z)(C)
      }
    })), l())
  }, [n, s, c, l, d.id, null == (t = d.userStatus) ? true : t.claimedAt, u, f, p, m, h, _, C, v])
}