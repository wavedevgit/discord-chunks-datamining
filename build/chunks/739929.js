/** Chunk was on 47841 **/
/** chunk id: 739929, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk465932 = require("./465932.js"),
  Chunk260509 = require("./260509.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk469993 = require("./469993.js"),
  Chunk586243 = require("./586243.js"),
  Chunk963320 = require("./963320.js"),
  Chunk897290 = require("./897290.js"),
  Chunk980406 = require("./980406.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let t, n = (0, o.ME)(e),
    p = null == e ? true : e.features.has(b.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
    x = null == e ? true : e.features.has(b.GuildFeatures.CREATOR_MONETIZABLE),
    h = (0, i.bG)([a.default], () => {
      let t = a.default.getCurrentUser();
      return null != e && (0, s.bM)(e, t)
    }),
    {
      error: j,
      loading: O,
      createEnableRequest: y,
      submittedRequest: v
    } = (0, d.A)(null == e ? true : e.id),
    {
      loading: A,
      error: E,
      refresh: N,
      eligibility: _
    } = (0, u.A)(null == e ? true : e.id),
    {
      isApplicationRejected: S,
      requestCooldownDuration: T
    } = (0, f.A)(_),
    I = (null == e ? true : e.features.has(b.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === true || (null == e ? true : e.features.has(b.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === true,
    {
      isMonetizationReapplicationDisabled: C
    } = (0, l.YG)(null == e ? true : e.id),
    P = v || (null == _ ? true : _.isApplicationPending) === true,
    w = (null == _ ? true : _.canApply) === true,
    R = m.intl.format(m.t.aJUdOi, {
      faqUrl: c.A.getArticleURL(b.MVz.CREATOR_FAQ)
    });
  S && C ? t = true === p ? m.intl.format(m.t["0o1Q+t"], {
    communityGuidelineUrl: b.X7G.GUIDELINES
  }) : m.intl.format(m.t.b6h59n, {
    communityGuidelineUrl: b.X7G.GUIDELINES
  }) : S && null != T && (t = m.intl.format(m.t.TvX207, {
    requestCooldownDuration: T,
    creatorRevenuePolicyUrl: c.A.getArticleURL(b.MVz.CREATOR_POLICY)
  }));
  let D = n && h && false === x,
    G = n && false === p,
    L = (0, g.r)(),
    k = S && w && h ? m.intl.format(m.t.wbVIUB, {}) : true;
  return r.useEffect(() => {
    D && N()
  }, [N, D]), {
    resubmittingEnableRequest: O,
    resubmissionError: j,
    isGuildOwner: h,
    createEnableRequest: y,
    resubmittedRequest: v,
    eligibilityLoading: A,
    eligibilityError: E,
    refreshEligibility: N,
    eligibility: _,
    eligibleForMonetization: w,
    isApplicationPending: P,
    hasPreviousApplicationRejection: S,
    requestRejectedNoticeText: t,
    reapplyNoticeText: k,
    showAcceptTermsFlow: G,
    wasRejectedInV1: G && (I || S),
    requirementsFinePrintText: R,
    acceptTermsCheckboxText: L
  }
}