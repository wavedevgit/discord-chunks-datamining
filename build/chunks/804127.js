/** Chunk was on 92912 **/
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
    preview: d
  } = e, [u, p] = r.useState(false), [m, f] = r.useState(false), b = r.useCallback(async (e, t, n) => {
    try {
      f(true), await (0, s.QB)(e, t, n), p(false), f(false)
    } catch (e) {
      p(true), f(false)
    }
  }, []), g = r.useCallback(e => {
    try {
      (0, s.pf)(e)
    } catch (e) {
      p(true)
    }
  }, []);
  return r.useEffect(() => {
    var e, r;
    true === d || null != i || u || t || m || n || l || (p(false), (null == (e = o.userStatus) ? true : e.claimedAt) == null && null != c ? b(o.id, c, a) : (null == (r = o.userStatus) ? true : r.claimedAt) != null && g(o.id))
  }, [b, g, u, t, m, n, a, o, l, i, c, d]), {
    claimCode: b,
    fetchCode: g,
    hasError: u,
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
    quest: d,
    questContent: u,
    questContentCTA: p = l.jZ.GET_REWARD_CODE,
    questContentPosition: m,
    requiresPlatformSelection: f,
    selectedPlatformType: b,
    redemptionLink: g,
    sourceQuestContent: h
  } = e, w = (0, l.O5)();
  return r.useCallback(() => {
    var e;
    f && null != b ? (n(d.id, b, u), w({
      questId: d.id,
      questContent: u,
      questContentCTA: p,
      questContentPosition: m,
      sourceQuestContent: h
    })) : i ? (null == (e = d.userStatus) ? true : e.claimedAt) != null ? s(d.id) : null != b && (n(d.id, b, u), w({
      questId: d.id,
      questContent: u,
      questContentCTA: p,
      questContentPosition: m,
      sourceQuestContent: h
    })) : (null != g && (w({
      questId: d.id,
      questContent: u,
      questContentCTA: l.jZ.REDEEM_REWARD,
      questContentPosition: m,
      sourceQuestContent: h
    }), (0, o.q)({
      href: g,
      onConfirm: () => {
        w({
          questId: d.id,
          questContent: u,
          questContentCTA: l.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: m,
          sourceQuestContent: h
        }), (0, a.Z)(g)
      }
    })), c())
  }, [n, s, i, c, d.id, null == (t = d.userStatus) ? true : t.claimedAt, u, p, m, f, b, w, g, h])
}