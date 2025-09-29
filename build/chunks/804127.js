/** Chunk was on 73268 **/
/** chunk id: 804127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G$: () => d,
  In: () => c,
  uL: () => l
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
  } = e, [u, p] = r.useState(false), [m, f] = r.useState(false), C = r.useCallback(async (e, t, n) => {
    try {
      f(true), await (0, s.QB)(e, t, n), p(false), f(false)
    } catch (e) {
      p(true), f(false)
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
    true === d || null != l || u || t || m || n || o || (p(false), (null == (e = i.userStatus) ? true : e.claimedAt) == null && null != c ? C(i.id, c, a) : (null == (r = i.userStatus) ? true : r.claimedAt) != null && h(i.id))
  }, [C, h, u, t, m, n, a, i, o, l, c, d]), {
    claimCode: C,
    fetchCode: h,
    hasError: u,
    setHasError: p
  }
}

function c(e) {
  let {
    quest: t,
    redemptionLink: n,
    questContent: s,
    questContentPosition: l,
    sourceQuestContent: c
  } = e, d = (0, o.O5)();
  return r.useCallback(() => {
    null != n && (d({
      questId: t.id,
      questContent: s,
      questContentCTA: o.jZ.REDEEM_REWARD,
      questContentPosition: l,
      sourceQuestContent: c
    }), (0, i.q)({
      href: n,
      onConfirm: () => {
        d({
          questId: t.id,
          questContent: s,
          questContentCTA: o.jZ.VISIT_REDEMPTION_LINK,
          questContentPosition: l,
          sourceQuestContent: c
        }), (0, a.Z)(n)
      }
    }))
  }, [t.id, s, l, c, d, n])
}

function d(e) {
  var t;
  let {
    claimCode: n,
    fetchCode: a,
    hasError: i,
    onDismiss: s,
    quest: l,
    questContent: d,
    questContentCTA: u = o.jZ.GET_REWARD_CODE,
    questContentPosition: p,
    requiresPlatformSelection: m,
    selectedPlatformType: f,
    redemptionLink: C,
    sourceQuestContent: h
  } = e, _ = (0, o.O5)(), v = c(e);
  return r.useCallback(() => {
    var e;
    m && null != f ? (n(l.id, f, d), _({
      questId: l.id,
      questContent: d,
      questContentCTA: u,
      questContentPosition: p,
      sourceQuestContent: h
    })) : i ? (null == (e = l.userStatus) ? true : e.claimedAt) != null ? a(l.id) : null != f && (n(l.id, f, d), _({
      questId: l.id,
      questContent: d,
      questContentCTA: u,
      questContentPosition: p,
      sourceQuestContent: h
    })) : (null != C && v(), s())
  }, [n, a, i, s, l.id, null == (t = l.userStatus) ? true : t.claimedAt, d, u, p, m, f, _, C, h, v])
}