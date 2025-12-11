/** Chunk was on 9536 **/
/** chunk id: 346163, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk473749 = require("./473749.js"),
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

function b(e) {
  let t, n = (0, c.Ob)(e),
    b = null == e ? true : e.features.has(f.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
    h = null == e ? true : e.features.has(f.GuildFeatures.CREATOR_MONETIZABLE),
    x = (0, i.e7)([s.default], () => {
      let t = s.default.getCurrentUser();
      return null != e && (0, a.eM)(e, t)
    }),
    {
      error: j,
      loading: v,
      createEnableRequest: O,
      submittedRequest: C
    } = (0, d.Z)(null == e ? true : e.id),
    {
      loading: y,
      error: N,
      refresh: E,
      eligibility: I
    } = (0, u.Z)(null == e ? true : e.id),
    {
      isApplicationRejected: S,
      requestCooldownDuration: _
    } = (0, g.Z)(I),
    T = (null == e ? true : e.features.has(f.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === true || (null == e ? true : e.features.has(f.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === true,
    {
      isMonetizationReapplicationDisabled: P
    } = (0, l.eC)(null == e ? true : e.id),
    w = C || (null == I ? true : I.isApplicationPending) === true,
    Z = (null == I ? true : I.canApply) === true,
    R = p.intl.format(p.t.aJUdOi, {
      faqUrl: o.Z.getArticleURL(f.BhN.CREATOR_FAQ)
    });
  S && P ? t = true === b ? p.intl.format(p.t["0o1Q+t"], {
    communityGuidelineUrl: f.EYA.GUIDELINES
  }) : p.intl.format(p.t.b6h59n, {
    communityGuidelineUrl: f.EYA.GUIDELINES
  }) : S && null != _ && (t = p.intl.format(p.t.TvX207, {
    requestCooldownDuration: _,
    creatorRevenuePolicyUrl: o.Z.getArticleURL(f.BhN.CREATOR_POLICY)
  }));
  let D = n && x && false === h,
    A = n && false === b,
    L = (0, m.f)(),
    k = S && Z && x ? p.intl.format(p.t.wbVIUB, {}) : true;
  return r.useEffect(() => {
    D && E()
  }, [E, D]), {
    resubmittingEnableRequest: v,
    resubmissionError: j,
    isGuildOwner: x,
    createEnableRequest: O,
    resubmittedRequest: C,
    eligibilityLoading: y,
    eligibilityError: N,
    refreshEligibility: E,
    eligibility: I,
    eligibleForMonetization: Z,
    isApplicationPending: w,
    hasPreviousApplicationRejection: S,
    requestRejectedNoticeText: t,
    reapplyNoticeText: k,
    showAcceptTermsFlow: A,
    wasRejectedInV1: A && (T || S),
    requirementsFinePrintText: R,
    acceptTermsCheckboxText: L
  }
}