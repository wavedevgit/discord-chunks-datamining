/** Chunk was on 39048 **/
/** chunk id: 739929, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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

function h(e) {
  let t, n = (0, c.ME)(e),
    h = null == e ? true : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
    b = null == e ? true : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE),
    x = (0, i.bG)([a.default], () => {
      let t = a.default.getCurrentUser();
      return null != e && (0, s.bM)(e, t)
    }),
    {
      error: j,
      loading: _,
      createEnableRequest: O,
      submittedRequest: v
    } = (0, d.A)(null == e ? true : e.id),
    {
      loading: y,
      error: A,
      refresh: E,
      eligibility: N
    } = (0, u.A)(null == e ? true : e.id),
    {
      isApplicationRejected: S,
      requestCooldownDuration: I
    } = (0, g.A)(N),
    T = (null == e ? true : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === true || (null == e ? true : e.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === true,
    {
      isMonetizationReapplicationDisabled: C
    } = (0, l.YG)(null == e ? true : e.id),
    P = v || (null == N ? true : N.isApplicationPending) === true,
    w = (null == N ? true : N.canApply) === true,
    R = f.intl.format(f.t.aJUdOi, {
      faqUrl: o.A.getArticleURL(p.MVz.CREATOR_FAQ)
    });
  S && C ? t = true === h ? f.intl.format(f.t["0o1Q+t"], {
    communityGuidelineUrl: p.X7G.GUIDELINES
  }) : f.intl.format(f.t.b6h59n, {
    communityGuidelineUrl: p.X7G.GUIDELINES
  }) : S && null != I && (t = f.intl.format(f.t.TvX207, {
    requestCooldownDuration: I,
    creatorRevenuePolicyUrl: o.A.getArticleURL(p.MVz.CREATOR_POLICY)
  }));
  let D = n && x && false === b,
    G = n && false === h,
    L = (0, m.r)(),
    k = S && w && x ? f.intl.format(f.t.wbVIUB, {}) : true;
  return r.useEffect(() => {
    D && E()
  }, [E, D]), {
    resubmittingEnableRequest: _,
    resubmissionError: j,
    isGuildOwner: x,
    createEnableRequest: O,
    resubmittedRequest: v,
    eligibilityLoading: y,
    eligibilityError: A,
    refreshEligibility: E,
    eligibility: N,
    eligibleForMonetization: w,
    isApplicationPending: P,
    hasPreviousApplicationRejection: S,
    requestRejectedNoticeText: t,
    reapplyNoticeText: k,
    showAcceptTermsFlow: G,
    wasRejectedInV1: G && (T || S),
    requirementsFinePrintText: R,
    acceptTermsCheckboxText: L
  }
}