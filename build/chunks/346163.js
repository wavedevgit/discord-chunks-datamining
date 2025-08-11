/** Chunk was on 22988 **/
/** chunk id: 346163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk674180 = require("./674180.js"),
  Chunk601964 = require("./601964.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk223892 = require("./223892.js"),
  Chunk58259 = require("./58259.js"),
  Chunk158992 = require("./158992.js"),
  Chunk159361 = require("./159361.js"),
  Chunk377176 = require("./377176.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let t, n = (0, c.Ob)(e),
    f = null == e ? true : e.features.has(p.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
    b = null == e ? true : e.features.has(p.oNc.CREATOR_MONETIZABLE),
    x = (0, i.e7)([s.default], () => {
      let t = s.default.getCurrentUser();
      return null != e && (0, a.eM)(e, t)
    }),
    {
      error: j,
      loading: v,
      createEnableRequest: _,
      submittedRequest: O
    } = (0, d.Z)(null == e ? true : e.id),
    {
      loading: y,
      error: C,
      refresh: N,
      eligibility: I
    } = (0, u.Z)(null == e ? true : e.id),
    {
      isApplicationRejected: E,
      requestCooldownDuration: S
    } = (0, m.Z)(I),
    T = (null == e ? true : e.features.has(p.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === true || (null == e ? true : e.features.has(p.oNc.CREATOR_MONETIZABLE_DISABLED)) === true,
    {
      isMonetizationReapplicationDisabled: P
    } = (0, l.eC)(null == e ? true : e.id),
    w = O || (null == I ? true : I.isApplicationPending) === true,
    R = (null == I ? true : I.canApply) === true,
    Z = h.intl.format(h.t.aJUdOj, {
      faqUrl: o.Z.getArticleURL(p.BhN.CREATOR_FAQ)
    });
  E && P ? t = true === f ? h.intl.format(h.t["0o1Q+v"], {
    communityGuidelineUrl: p.EYA.GUIDELINES
  }) : h.intl.format(h.t.b6h59v, {
    communityGuidelineUrl: p.EYA.GUIDELINES
  }) : E && null != S && (t = h.intl.format(h.t.TvX209, {
    requestCooldownDuration: S,
    creatorRevenuePolicyUrl: o.Z.getArticleURL(p.BhN.CREATOR_POLICY)
  }));
  let D = n && x && false === b,
    A = n && false === f,
    k = (0, g.f)(),
    L = E && R && x ? h.intl.format(h.t.wbVIUF, {}) : true;
  return r.useEffect(() => {
    D && N()
  }, [N, D]), {
    resubmittingEnableRequest: v,
    resubmissionError: j,
    isGuildOwner: x,
    createEnableRequest: _,
    resubmittedRequest: O,
    eligibilityLoading: y,
    eligibilityError: C,
    refreshEligibility: N,
    eligibility: I,
    eligibleForMonetization: R,
    isApplicationPending: w,
    hasPreviousApplicationRejection: E,
    requestRejectedNoticeText: t,
    reapplyNoticeText: L,
    showAcceptTermsFlow: A,
    wasRejectedInV1: A && (T || E),
    requirementsFinePrintText: Z,
    acceptTermsCheckboxText: k
  }
}