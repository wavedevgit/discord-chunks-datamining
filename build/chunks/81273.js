/** Chunk was on 14721 **/
n.d(t, {
  Z: () => L
});
var r = n(200651),
  i = n(192379),
  a = n(512722),
  o = n.n(a),
  l = n(913527),
  s = n.n(l),
  c = n(442837),
  d = n(570140),
  u = n(821849),
  _ = n(131388),
  m = n(906732),
  f = n(305325),
  p = n(246364),
  g = n(937111),
  v = n(281956),
  h = n(41776),
  b = n(738737),
  y = n(509545),
  C = n(63063),
  x = n(817460),
  j = n(584825),
  I = n(697227),
  N = n(934826),
  O = n(896083),
  E = n(939872),
  S = n(265985),
  P = n(293810),
  w = n(981631),
  T = n(388032);
let L = (e, t, n, a) => {
  let l;
  let L = (0, c.e7)([h.Z], () => h.Z.isLurking(t)),
    k = (0, v.J)(t),
    Z = (0, c.e7)([g.Z], () => null != t ? g.Z.getRequest(t) : null),
    A = (null == Z ? void 0 : Z.applicationStatus) === p.wB.SUBMITTED,
    D = null == e ? void 0 : e.subscription_plans[0],
    W = null == D ? void 0 : D.id,
    M = (null == e ? void 0 : e.published) === !0,
    F = null == D ? void 0 : D.sku_id,
    R = (0, c.e7)([y.Z], () => null != W ? y.Z.get(W) : null),
    {
      activeSubscription: B,
      activeSubscriptionPlanFromStore: z
    } = (0, N.Z)(n),
    U = null == B || null != z,
    V = (0, j._k)(n, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    H = (0, I.V)(B),
    G = null != H,
    Y = (null == B ? void 0 : B.trialId) != null,
    {
      loading: q,
      getTrialPurchaseEligibility: X
    } = (0, O.F)(),
    K = (0, j.oC)(null == e ? void 0 : e.id),
    {
      analyticsLocations: J
    } = (0, m.ZP)(),
    Q = (null == B ? void 0 : B.paymentGateway) === w.gg$.APPLE_PARTNER,
    $ = !L && null != R && U && !A && !G && !Y && !Q;
  A ? l = T.NW.string(T.t.pQK5ho) : L && !k ? l = T.NW.string(T.t.pQK5ho) : H === W ? l = T.NW.formatToPlainString(T.t.UlBRTk, {
    changeDate: null != B ? s()(B.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : G ? l = T.NW.string(T.t.ePFYOT) : Y ? l = T.NW.string(T.t["0lPoT0"]) : Q && (l = T.NW.string(T.t.cEMaCg));
  let ee = (0, _.Z)(P.iP);
  i.useEffect(() => {
    M && null != F && d.Z.wait(() => {
      (0, u.GZ)(F)
    })
  }, [M, F]);
  let et = i.useCallback(async () => {
      let n, i;
      if (o()(null != e, "No subscription listing"), o()(null != D, "No subscription plan"), o()(M, "Cannot purchase this unpublished plan"), (null == K ? void 0 : K.active_trial) != null) {
        let r = await X(t, e.id, K.active_trial.id);
        if ((null == r ? void 0 : r.is_eligible) === !0) {
          var l;
          n = null == K ? void 0 : null === (l = K.active_trial) || void 0 === l ? void 0 : l.id
        } else i = T.NW.string(T.t.vuvsKy)
      }(0, b.Z)({
        activeSubscription: B,
        analyticsSubscriptionType: w.NYc.GUILD,
        trialId: n,
        trialFooterMessageOverride: (null == K ? void 0 : K.active_trial) != null ? T.NW.format(T.t.zyGyNj, {
          buttonText: T.NW.string(T.t.BEeXiY),
          interval: (0, x.iG)(D),
          days: 1,
          contactLink: w.EYA.CONTACT,
          cancelSubscriptionArticle: C.Z.getArticleURL(w.BhN.ROLE_SUBSCRIPTION_CANCEL),
          helpdeskArticle: C.Z.getArticleURL(w.BhN.ROLE_SUBSCRIPTION_TRIAL),
          paidServiceTermsArticle: C.Z.getArticleURL(w.BhN.PAID_TERMS),
          tierName: D.name
        }) : void 0,
        analyticsLocations: J,
        analyticsLocation: a,
        renderHeader: (n, i, a) => (0, r.jsx)(S.h, {
          onClose: i,
          listing: e,
          step: a,
          guildId: t
        }),
        initialPlanId: D.id,
        skuId: D.sku_id,
        planGroup: V,
        renderPurchaseConfirmation: (n, i) => ee ? (0, r.jsx)(E.m, {
          listing: e,
          onClose: i,
          guildId: t
        }) : (0, r.jsx)(S.x, {
          listing: e,
          onClose: i,
          guildId: t
        }),
        reviewWarningMessage: i
      })
    }, [M, e, D, B, V, t, J, a, X, K, ee]),
    en = i.useCallback(() => {
      (0, f.hk)(t)
    }, [t]);
  return {
    openModal: k ? en : et,
    canOpenModal: $,
    cannotOpenReason: l,
    isCheckingTrialEligibility: q
  }
}