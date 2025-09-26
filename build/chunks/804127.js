/** Chunk was on 92912 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G$: () => d,
  In: () => c,
  uL: () => i
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
  let {
    quest: t,
    redemptionLink: n,
    questContent: s,
    questContentPosition: i,
    sourceQuestContent: c
  } = e, d = (0, l.O5)();
  return r.useCallback(() => {
    null != n && (d({
      questId: t.id,
      questContent: s,
      questContentCTA: l.jZ.REDEEM_REWARD,
      questContentPosition: i,
      sourceQuestContent: c
    }), (0, o.q)({
      href: n,
      onConfirm: () => {
        d({
          questId: t.id,
          questContent: s,
          questContentCTA: l.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: i,
          sourceQuestContent: c
        }), (0, a.Z)(n)
      }
    }))
  }, [t.id, s, i, c, d, n])
}

function d(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: a,
    hasError: o,
    onDismiss: s,
    quest: i,
    questContent: d,
    questContentCTA: u = l.jZ.GET_REWARD_CODE,
    questContentPosition: p,
    requiresPlatformSelection: m,
    selectedPlatformType: f,
    redemptionLink: b,
    sourceQuestContent: g
  } = e, h = (0, l.O5)(), w = c(e);
  return r.useCallback(() => {
    var e;
    m && null != f ? (n(i.id, f, d), h({
      questId: i.id,
      questContent: d,
      questContentCTA: u,
      questContentPosition: p,
      sourceQuestContent: g
    })) : o ? (null == (e = i.userStatus) ? true : e.claimedAt) != null ? a(i.id) : null != f && (n(i.id, f, d), h({
      questId: i.id,
      questContent: d,
      questContentCTA: u,
      questContentPosition: p,
      sourceQuestContent: g
    })) : (null != b && w(), s())
  }, [n, a, o, s, i.id, null == (t = i.userStatus) ? true : t.claimedAt, d, u, p, m, f, h, b, g, w])
}