/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(192379),
  i = n(399606),
  s = n(674180),
  a = n(594174),
  l = n(63063),
  o = n(223892),
  c = n(58259),
  A = n(158992),
  d = n(159361),
  u = n(377176),
  g = n(981631),
  f = n(388032);

function m(e) {
  let t;
  let n = (0, o.Ob)(e),
    m = null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
    p = null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE),
    h = (0, i.e7)([a.default], () => {
      let t = a.default.getCurrentUser();
      return (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    {
      error: C,
      loading: b,
      createEnableRequest: v,
      submittedRequest: x
    } = (0, c.Z)(null == e ? void 0 : e.id),
    {
      loading: N,
      error: j,
      refresh: E,
      eligibility: I
    } = (0, A.Z)(null == e ? void 0 : e.id),
    {
      isApplicationRejected: O,
      requestCooldownDuration: y
    } = (0, d.Z)(I),
    w = (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(g.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
    {
      isMonetizationReapplicationDisabled: P
    } = (0, s.eC)(null == e ? void 0 : e.id),
    B = x || (null == I ? void 0 : I.isApplicationPending) === !0,
    D = (null == I ? void 0 : I.canApply) === !0,
    T = f.NW.format(f.t.aJUdOj, {
      faqUrl: l.Z.getArticleURL(g.BhN.CREATOR_FAQ)
    });
  O && P ? t = !0 === m ? f.NW.format(f.t["0o1Q+v"], {
    communityGuidelineUrl: g.EYA.GUIDELINES
  }) : f.NW.format(f.t.b6h59v, {
    communityGuidelineUrl: g.EYA.GUIDELINES
  }) : O && null != y && (t = f.NW.format(f.t.TvX209, {
    requestCooldownDuration: y,
    creatorRevenuePolicyUrl: l.Z.getArticleURL(g.BhN.CREATOR_POLICY)
  }));
  let S = n && h && !1 === p,
    L = n && !1 === m,
    R = (0, u.f)(),
    Q = O && D && h ? f.NW.format(f.t.wbVIUF, {}) : void 0;
  return r.useEffect(() => {
    S && E()
  }, [E, S]), {
    resubmittingEnableRequest: b,
    resubmissionError: C,
    isGuildOwner: h,
    createEnableRequest: v,
    resubmittedRequest: x,
    eligibilityLoading: N,
    eligibilityError: j,
    refreshEligibility: E,
    eligibility: I,
    eligibleForMonetization: D,
    isApplicationPending: B,
    hasPreviousApplicationRejection: O,
    requestRejectedNoticeText: t,
    reapplyNoticeText: Q,
    showAcceptTermsFlow: L,
    wasRejectedInV1: L && (w || O),
    requirementsFinePrintText: T,
    acceptTermsCheckboxText: R
  }
}