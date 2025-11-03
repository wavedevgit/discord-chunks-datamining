/** Chunk was on 64982 **/
/** chunk id: 346163, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk647438 = require("./647438.js"),
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

function h(e) {
  let t, n = (0, c.Ob)(e),
    h = null == e ? true : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
    b = null == e ? true : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE),
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
      loading: C,
      error: y,
      refresh: N,
      eligibility: E
    } = (0, u.Z)(null == e ? true : e.id),
    {
      isApplicationRejected: I,
      requestCooldownDuration: S
    } = (0, g.Z)(E),
    T = (null == e ? true : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === true || (null == e ? true : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === true,
    {
      isMonetizationReapplicationDisabled: P
    } = (0, l.eC)(null == e ? true : e.id),
    w = O || (null == E ? true : E.isApplicationPending) === true,
    Z = (null == E ? true : E.canApply) === true,
    R = f.intl.format(f.t.aJUdOi, {
      faqUrl: o.Z.getArticleURL(p.BhN.CREATOR_FAQ)
    });
  I && P ? t = true === h ? f.intl.format(f.t["0o1Q+t"], {
    communityGuidelineUrl: p.EYA.GUIDELINES
  }) : f.intl.format(f.t.b6h59n, {
    communityGuidelineUrl: p.EYA.GUIDELINES
  }) : I && null != S && (t = f.intl.format(f.t.TvX207, {
    requestCooldownDuration: S,
    creatorRevenuePolicyUrl: o.Z.getArticleURL(p.BhN.CREATOR_POLICY)
  }));
  let D = n && x && false === b,
    A = n && false === h,
    L = (0, m.f)(),
    k = I && Z && x ? f.intl.format(f.t.wbVIUB, {}) : true;
  return r.useEffect(() => {
    D && N()
  }, [N, D]), {
    resubmittingEnableRequest: v,
    resubmissionError: j,
    isGuildOwner: x,
    createEnableRequest: _,
    resubmittedRequest: O,
    eligibilityLoading: C,
    eligibilityError: y,
    refreshEligibility: N,
    eligibility: E,
    eligibleForMonetization: Z,
    isApplicationPending: w,
    hasPreviousApplicationRejection: I,
    requestRejectedNoticeText: t,
    reapplyNoticeText: k,
    showAcceptTermsFlow: A,
    wasRejectedInV1: A && (T || I),
    requirementsFinePrintText: R,
    acceptTermsCheckboxText: L
  }
}